import Link from "next/link";

const Nav = () => {
  return (
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
  );
};

export default Nav;
