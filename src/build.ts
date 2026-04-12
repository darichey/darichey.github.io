import fs from "node:fs";
import path from "node:path";

const OUT_DIR = "out";

fs.rmSync(OUT_DIR, { recursive: true, force: true });
fs.mkdirSync(OUT_DIR, { recursive: true });

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>David Richey</title>
</head>
<body>
  <h1>Hello, world!</h1>
</body>
</html>`;

fs.writeFileSync(path.join(OUT_DIR, "index.html"), html);
console.log("Build complete → out/index.html");
