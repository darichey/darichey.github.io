import { layout } from "../layout.js";
import type { Post } from "../posts.js";

export function renderPost(post: Post): string {
  return layout(
    `${post.title} - David Richey`,
    `<article>
      <header>
        <h1>${post.title}</h1>
        <p class="subtitle">${post.subtitle}</p>
        <p class="date">${post.date}</p>
      </header>
      ${post.html}
    </article>`
  );
}
