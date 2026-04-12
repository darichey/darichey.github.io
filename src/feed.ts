import { Feed } from "feed";
import type { Post } from "./posts.js";

export function renderFeed(posts: Post[]): string {
  const feed = new Feed({
    title: "David Richey's Blog",
    description: "My personal blog, mostly about programming",
    id: "https://darichey.com",
    link: "https://darichey.com",
    copyright: "All rights reserved",
  });

  for (const post of posts) {
    feed.addItem({
      title: post.title,
      description: post.subtitle,
      date: new Date(post.date),
      link: `https://darichey.com/blog/${post.slug}`,
    });
  }

  return feed.rss2();
}
