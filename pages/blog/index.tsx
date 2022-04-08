import type { NextPage } from "next";
import Header from "../../components/Header";
import Content from "../../components/Content";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

const Blog: NextPage = () => {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div>
      <Header title="David's Blog" subtitle="Sometimes I write stuff." />

      <Content>
        <p>
          From time to time, like to write about things that I&apos;m learning -
          or worse, my <i>opinions</i>.
        </p>
        <p>
          Keep in mind that I am by no means an authoritative source on anything
          I write about. I write these posts in order to aid my own learning and
          in the hope that others can learn from them.
        </p>

        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>{" "}
              ({post.date})
            </li>
          ))}
        </ul>
      </Content>
    </div>
  );
};

export default Blog;
