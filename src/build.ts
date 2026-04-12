import fs from "node:fs";
import path from "node:path";
import { renderHome } from "./pages/home.js";
import { renderBlogIndex } from "./pages/blog.js";

const OUT_DIR = "out";

fs.rmSync(OUT_DIR, { recursive: true, force: true });
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.mkdirSync(path.join(OUT_DIR, "blog"), { recursive: true });

fs.writeFileSync(path.join(OUT_DIR, "index.html"), renderHome());
fs.writeFileSync(path.join(OUT_DIR, "blog", "index.html"), renderBlogIndex());

console.log("Build complete");
