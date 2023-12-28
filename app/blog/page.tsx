import type { Metadata } from "next";
import Link from "next/link";
import { publishedPosts, type Post } from "./[slug]/posts";

export const metadata: Metadata = {
  title: "David Richey - Blog",
  description: "My personal blog, mostly about programming",
};

function groupBy<T, K>(xs: Array<T>, keyExtractor: (x: T) => K): Map<K, Array<T>> {
  const map = new Map<K, Array<T>>();
  for (const x of xs) {
    const k = keyExtractor(x);
    if (map.has(k)) {
      map.get(k)?.push(x);
    } else {
      map.set(k, [x]);
    }
  }
  return map;
}

function groupPostsByYear(posts: Array<Post>): Array<[number, Array<Post>]> {
  const map = groupBy(posts, (post) => new Date(post.date).getUTCFullYear());
  for (const group of map.values()) {
    group.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  const groups = Array.from(map.entries());
  groups.sort(([yearA, _postsA], [yearB, _postsB]) => yearB - yearA);
  return groups;
}

export default function Blog() {
  const posts = groupPostsByYear(publishedPosts);

  return (
    <div>
      <div className="prose dark:prose-invert lg:prose-xl mb-5">
        <p>
          From time to time, like to write about things that I&apos;m learning - or worse, my{" "}
          <i>opinions</i>. Keep in mind that I am by no means an authoritative source on anything I
          write about. I write these posts in order to aid my own learning and in the hope that
          others can learn from them.
        </p>
      </div>
      <ul>
        {posts.map(([year, posts]) => (
          <li key={year}>
            <div className="text-3xl my-5 dark:text-white">{year}</div>
            <ul>
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                    <div className="border-2 p-4 m-2 prose dark:prose-invert">
                      <h3>
                        <div>{post.title}</div>
                        <p className="not-prose font-normal text-base">{post.subtitle}</p>
                        <p className="not-prose font-thin text-slate-400 text-sm">{post.date}</p>
                      </h3>
                    </div>
                  </Link>{" "}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
