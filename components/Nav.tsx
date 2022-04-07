import Link from "next/link";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1vh 1vw 1vh 1vw;

  a {
    color: #444;
    text-decoration: none;
    font-size: 2.2em;
    font-weight: bold;
  }

  @media (min-width: 1200px) {
    a {
      font-size: 1.4em;
    }
  }
`;

const Nav = () => {
  return (
    <Section>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="https://github.com/darichey">
        <a>GitHub</a>
      </Link>
    </Section>
  );
};

export default Nav;
