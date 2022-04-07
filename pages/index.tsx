import type { NextPage } from "next";
import Header from "../components/Header";
import Links from "../components/Links";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <div className="main">
      <Nav />

      <Header title="Hey, I'm David." subtitle="Sometimes I code stuff." />

      <section className="content">
        <p>
          I&apos;m a senior at UT Dallas pursuing a degree in Computer Science
          and minoring in Mathematics.
        </p>

        <p>
          I mostly program on the JVM with Java, Scala, and Kotlin. Recently,
          I&apos;ve been learning some Haskell, Rust, and TypeScript. I&apos;m
          interested in functional programming, programming language design,
          type theory, and category theory.
        </p>

        <p>
          I have a passion for teaching, and sometimes I like to write a bit
          about what I&apos;m learning.
        </p>

        <p>Online, I often go by Panda.</p>
      </section>

      <Links />
    </div>
  );
};

export default Home;
