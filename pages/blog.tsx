import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Blog: NextPage = () => {
  return (
    <div className="main">
      <section className="nav">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="https://github.com/darichey">
          <a>GitHub</a>
        </Link>
      </section>

      <section className="header">
        <div className="pic">
          <Image
            src="/img/david.png"
            alt="Picture of me"
            layout="responsive"
            width={1}
            height={1}
          />
        </div>
        <div className="titles">
          <h1 className="title">David&apos;s Blog</h1>
          <h3 className="subtitle">Sometimes I write stuff.</h3>
        </div>
      </section>

      <section className="content">
        <p>
          From time to time, like to write about things that I&apos;m learning -
          or worse, my <i>opinions</i>.
        </p>
        <p>
          Keep in mind that I am by no means an authoritative source on anything
          I write about. I write these posts in order to aid my own learning and
          in the hope that others can learn from them.
        </p>

        <p>
          I&apos;m currently working on getting asciidoctor working so these
          posts can look nice. Here&apos;s a preview of what I plan on posting
          first &#128522;
        </p>
        <ul>
          <li>Arity of Types</li>
          <li>Trampolines in Java</li>
          <li>String Concatenation in Java</li>
          <li>Subtyping Variance</li>
        </ul>
      </section>
    </div>
  );
};

export default Blog;
