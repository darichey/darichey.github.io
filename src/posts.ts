import fs from "node:fs";
import path from "node:path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import haskell from "highlight.js/lib/languages/haskell";
import ocaml from "highlight.js/lib/languages/ocaml";
import typescript from "highlight.js/lib/languages/typescript";
import rust from "highlight.js/lib/languages/rust";
import diff from "highlight.js/lib/languages/diff";

export interface Post {
  title: string;
  subtitle: string;
  date: string;
  slug: string;
  publish: boolean;
  content: string;
  html: string;
}

const POSTS_DIR = "posts";

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkMath)
  .use(remarkRehype)
  .use(rehypeKatex)
  .use(rehypeHighlight, { languages: { haskell, ocaml, typescript, rust, diff } })
  .use(rehypeStringify);

function parseFrontmatter(raw: string): { meta: Record<string, string>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error("Missing frontmatter");

  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx !== -1) {
      meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
    }
  }

  return { meta, content: match[2] };
}

export async function getAllPosts(): Promise<Post[]> {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  return Promise.all(
    files.map(async (file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
      const { meta, content } = parseFrontmatter(raw);
      const result = await processor.process(content);

      return {
        title: meta.title,
        subtitle: meta.subtitle,
        date: meta.date,
        slug: path.basename(file, ".mdx"),
        publish: meta.publish === "true",
        content,
        html: String(result),
      };
    })
  );
}

export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts
    .filter((p) => p.publish)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
