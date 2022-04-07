import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts, type Post } from ".contentlayer/generated";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Title = styled.h1`
  margin-bottom: 0;
`;

const Subtitle = styled.h2`
  margin-top: 0;
  font-weight: lighter;
  font-size: 1.3em;
`;

type Props = {
  post: Post;
};

const BlogPage: NextPage<Props> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div>
        <Title>{post.title}</Title>
        <Subtitle>{post.subtitle}</Subtitle>
        <Component />
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
  const post = allPosts.find((post) => post.slug === params?.slug);
  return { props: { post } };
};
