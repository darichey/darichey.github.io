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
      <div className="text-center border-y-2 py-5">
        <h1 className="text-4xl font-bold text-sky-600">{post.title}</h1>
        <h2>{post.subtitle}</h2>
        <h3>{post.date}</h3>
      </div>
      <div className="prose prose-lg">{post.component}</div>
    </>
  );
}
