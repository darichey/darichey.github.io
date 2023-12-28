import { getPost, publishedPosts } from "./posts";
import type { Metadata, ResolvingMetadata } from "next";

interface Params {
  slug: string;
}

interface Props {
  params: Params;
}

export async function generateStaticParams(): Promise<Params[]> {
  return publishedPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const post = getPost(params.slug);
  return {
    title: post.title,
    description: post.subtitle,
    authors: { name: "David Richey" },
  };
}

export default function BlogPost({ params: { slug } }: Props) {
  const post = getPost(slug);

  return (
    <div className="prose dark:prose-invert lg:prose-xl max-w-none">
      <h1>
        <div className="mb-4">{post.title}</div>
        <p className="not-prose text-xl font-normal">{post.subtitle}</p>
        <p className="not-prose text-lg font-normal text-slate-400">{post.date}</p>
      </h1>
      {post.component}
    </div>
  );
}
