import { useMDXComponent } from 'next-contentlayer/hooks'
import { allPosts, type Post } from '.contentlayer/generated'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
// import BlogLayout from '../../../components/Blog'

type BlogPageProps = {
  post: Post
}

const BlogPage: NextPage<BlogPageProps> = ({ post }) => {
  // const Component = useMDXComponent(post.body.code)

  // return (
  //   <BlogLayout {...blog}>
  //     <Component />
  //   </BlogLayout>
  // )

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div>
        <h1>{post.title}</h1>
        {post.body.raw}
      </div>
    </>
  )
}

export default BlogPage;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug)
  return { props: { post } }
}