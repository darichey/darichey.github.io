import fs from "node:fs";
import path from "node:path";

export interface Post {
  title: string;
  subtitle: string;
  date: string;
  slug: string;
  publish: boolean;
  content: string;
}

const POSTS_DIR = "posts";

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

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const { meta, content } = parseFrontmatter(raw);

    return {
      title: meta.title,
      subtitle: meta.subtitle,
      date: meta.date,
      slug: path.basename(file, ".mdx"),
      publish: meta.publish === "true",
      content,
    };
  });
}

export function getPublishedPosts(): Post[] {
  return getAllPosts()
    .filter((p) => p.publish)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
