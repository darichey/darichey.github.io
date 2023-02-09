import "highlight.js/styles/vs2015.css";
import "katex/dist/katex.min.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Nav from "../components/Nav";
import "../styles/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>David Richey</title>
      </Head>

      <div className="flex justify-center my-10">
        <div className="flex flex-col w-4/5 md:w-2/5 gap-4">
          <Nav />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
