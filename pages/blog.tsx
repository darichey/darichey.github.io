import type { NextPage } from "next";
import Nav from "../components/Nav";
import Header from "../components/Header";

const Blog: NextPage = () => {
  return (
    <div className="main">
      <Nav />

      <Header title="David's Blog" subtitle="Sometimes I write stuff." />

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
