import fs from "node:fs";
import path from "node:path";
import { renderHome } from "./pages/home.js";
import { renderBlogIndex } from "./pages/blog.js";
import { renderPost } from "./pages/post.js";
import { getPublishedPosts } from "./posts.js";

const OUT_DIR = "out";

async function build() {
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(path.join(OUT_DIR, "blog"), { recursive: true });

  // Copy public assets
  fs.cpSync("public", OUT_DIR, { recursive: true });

  // Copy CSS
  fs.copyFileSync("src/style.css", path.join(OUT_DIR, "style.css"));

  // Render pages
  const posts = await getPublishedPosts();

  fs.writeFileSync(path.join(OUT_DIR, "index.html"), renderHome());
  fs.writeFileSync(path.join(OUT_DIR, "blog", "index.html"), renderBlogIndex(posts));

  for (const post of posts) {
    const postDir = path.join(OUT_DIR, "blog", post.slug);
    fs.mkdirSync(postDir, { recursive: true });
    fs.writeFileSync(path.join(postDir, "index.html"), renderPost(post));
  }

  console.log(`Build complete — ${posts.length} posts`);
}

build();
