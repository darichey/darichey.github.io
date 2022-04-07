import "../styles/style.css";
import "highlight.js/styles/vs2015.css";
import "katex/dist/katex.min.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Nav from "../components/Nav";
import styled from "styled-components";

const Main = styled.div`
  margin: 5vh 15vw 5vh 15vw;

  @media (min-width: 1200px) {
    margin: 3vh 30vw 5vh 30vw;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>David Richey</title>
      </Head>
      <Main>
        <Nav />
        <Component {...pageProps} />
      </Main>
    </div>
  );
}

export default MyApp;
