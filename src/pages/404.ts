import { layout } from "../layout.js";

export function render404(): string {
  return layout(
    { title: "Not Found - David Richey" },
    `<div>
      <h1>404</h1>
      <p>Page not found. <a href="/">Go home</a>.</p>
    </div>`
  );
}
