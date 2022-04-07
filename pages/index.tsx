import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
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
          <h1 className="title">Hey, I&apos;m David.</h1>
          <h3 className="subtitle">Sometimes I code stuff.</h3>
        </div>
      </section>

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

      <section className="links">
        <Link href="https://github.com/darichey">
          <a>
            <Image
              src="/img/github_mark.svg"
              alt="Github Icon"
              height={32}
              width={32}
            />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/darichey/">
          <a>
            <Image
              src="/img/linkedin_mark.svg"
              alt="LinkedIn Icon"
              height={32}
              width={32}
            />
          </a>
        </Link>
        <Link href="mailto:darichey1@gmail.com">
          <a>
            <Image
              src="/img/mail.svg"
              alt="Mail Icon"
              height={32}
              width={32}
            />
          </a>
        </Link>
      </section>
    </div>
  );
};

export default Home;
