import fs from "node:fs";
import path from "node:path";
import { renderHome } from "./pages/home.js";
import { renderBlogIndex } from "./pages/blog.js";

const OUT_DIR = "out";

fs.rmSync(OUT_DIR, { recursive: true, force: true });
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.mkdirSync(path.join(OUT_DIR, "blog"), { recursive: true });

// Copy public assets
fs.cpSync("public", OUT_DIR, { recursive: true });

// Copy CSS
fs.copyFileSync("src/style.css", path.join(OUT_DIR, "style.css"));

// Render pages
fs.writeFileSync(path.join(OUT_DIR, "index.html"), renderHome());
fs.writeFileSync(path.join(OUT_DIR, "blog", "index.html"), renderBlogIndex());

console.log("Build complete");
