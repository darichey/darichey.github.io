import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts, type Post } from ".contentlayer/generated";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import CardTrick from "components/CardTrick";

type Props = {
  post: Post;
};

const mdxComponents = {
  CardTrick
}

const BlogPage: NextPage<Props> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

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

      <div className="prose prose-lg">
        <Component components={mdxComponents}/>
      </div>
    </>
  );
};

export default BlogPage;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.["slug"]);
  return { props: { post } };
};
