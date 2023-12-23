import Head from "next/head";
import { allPosts } from "./posts";

export async function generateStaticParams() {
  return allPosts;
}

export const dynamicParams = false;

export default function BlogPost({ params: { slug } }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === slug)!;

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <div className="text-center border-y-2 py-5">
        <h1 className="text-4xl font-bold text-sky-600">{post.title}</h1>
        <h2>{post.subtitle}</h2>
        <h3>{post.date}</h3>
      </div>

      <div className="prose prose-lg">{post.component}</div>
    </>
  );
}
