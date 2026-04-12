import { layout } from "../layout.js";
import type { Post } from "../posts.js";

export function renderBlogIndex(posts: Post[]): string {
  const grouped = new Map<number, Post[]>();
  for (const post of posts) {
    const year = new Date(post.date).getUTCFullYear();
    if (!grouped.has(year)) grouped.set(year, []);
    grouped.get(year)!.push(post);
  }

  const years = [...grouped.entries()].sort(([a], [b]) => b - a);

  const list = years
    .map(
      ([year, posts]) => `
      <li>
        <div class="year">${year}</div>
        <ul>
          ${posts
            .map(
              (post) => `
              <li>
                <a href="/blog/${post.slug}">
                  <h3>${post.title}</h3>
                  <p class="subtitle">${post.subtitle}</p>
                  <p class="date">${post.date}</p>
                </a>
              </li>`
            )
            .join("\n")}
        </ul>
      </li>`
    )
    .join("\n");

  return layout(
    "David Richey - Blog",
    `<div>
      <p>
        From time to time, I like to write about things that I'm learning - or
        worse, my <em>opinions</em>. Keep in mind that I am by no means an
        authoritative source on anything I write about. I write these posts in
        order to aid my own learning and in the hope that others can learn from them.
      </p>
    </div>
    <ul class="blog-list">
      ${list}
    </ul>`
  );
}
