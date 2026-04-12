import fs from "node:fs";
import path from "node:path";
import { renderHome } from "./pages/home.js";
import { renderBlogIndex } from "./pages/blog.js";
import { renderPost } from "./pages/post.js";
import { getPublishedPosts } from "./posts.js";
import { renderFeed } from "./feed.js";
import { render404 } from "./pages/404.js";

const OUT_DIR = "out";

async function build() {
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(path.join(OUT_DIR, "blog"), { recursive: true });

  // Copy public assets
  fs.cpSync("public", OUT_DIR, { recursive: true });

  // Copy CSS
  fs.copyFileSync("src/style.css", path.join(OUT_DIR, "style.css"));
  fs.copyFileSync("node_modules/highlight.js/styles/github.css", path.join(OUT_DIR, "hljs-light.css"));
  fs.copyFileSync("node_modules/highlight.js/styles/github-dark.css", path.join(OUT_DIR, "hljs-dark.css"));
  fs.copyFileSync("node_modules/katex/dist/katex.min.css", path.join(OUT_DIR, "katex.css"));
  fs.cpSync("node_modules/katex/dist/fonts", path.join(OUT_DIR, "fonts"), { recursive: true });

  // Render pages
  const posts = await getPublishedPosts();

  fs.writeFileSync(path.join(OUT_DIR, "index.html"), renderHome());
  fs.writeFileSync(path.join(OUT_DIR, "blog", "index.html"), renderBlogIndex(posts));

  for (const post of posts) {
    const postDir = path.join(OUT_DIR, "blog", post.slug);
    fs.mkdirSync(postDir, { recursive: true });
    fs.writeFileSync(path.join(postDir, "index.html"), renderPost(post));
  }

  // RSS feed
  fs.writeFileSync(path.join(OUT_DIR, "rss.xml"), renderFeed(posts));

  // 404 page
  fs.writeFileSync(path.join(OUT_DIR, "404.html"), render404());

  console.log(`Build complete — ${posts.length} posts`);
}

build();
