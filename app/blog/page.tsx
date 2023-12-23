import type { Metadata } from "next";
import Link from "next/link";
import { publishedPosts } from "./[slug]/posts";

export const metadata: Metadata = {
  title: "David Richey - Blog",
};

export default function Blog() {
  const posts = publishedPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      <div className="flex flex-col gap-y-4 text-xl leading-relaxed content">
        <p>
          From time to time, like to write about things that I&apos;m learning - or worse, my{" "}
          <i>opinions</i>.
        </p>
        <p>
          Keep in mind that I am by no means an authoritative source on anything I write about. I
          write these posts in order to aid my own learning and in the hope that others can learn
          from them.
        </p>

        <ul className="list-disc list-inside">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>{" "}
              <span className="font-thin text-slate-400 text-sm">({post.date})</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
