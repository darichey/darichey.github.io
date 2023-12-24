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
  return {
    title: getPost(params.slug).title,
  };
}

export default function BlogPost({ params: { slug } }: Props) {
  const post = getPost(slug);

  return (
    <>
      <div className="prose lg:prose-xl">
        <h1>
          <div className="mb-4">{post.title}</div>
          <p className="not-prose text-xl font-normal">{post.subtitle}</p>
          <p className="not-prose text-lg font-normal text-slate-400">{post.date}</p>
        </h1>
        {post.component}
      </div>
    </>
  );
}
