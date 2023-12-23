import { publishedPosts } from "app/blog/[slug]/posts";
import { Feed } from "feed";

function getFeed(): Feed {
  const feed = new Feed({
    title: "David Richey's Blog",
    description: "My personal blog, mostly about programming",
    id: "https://darichey.com",
    link: "https://darichey.com",
    copyright: "All rights reserved",
  });

  for (const post of publishedPosts) {
    feed.addItem({
      title: post.title,
      description: post.subtitle,
      date: new Date(post.date),
      link: `https://darichey.com/blog/${post.slug}`,
    });
  }

  return feed;
}

export async function GET() {
  return new Response(getFeed().rss2());
}
