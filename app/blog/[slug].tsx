import Head from "next/head";

export default function BlogPage() {
  const post = {
    title: "temp title",
    subtitle: "temp subtitle",
    date: "temp date",
  };

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <div className="text-center border-y-2 py-5">
        <h1 className="text-4xl font-bold text-sky-600">{post.title}</h1>
        <h2>{post.subtitle}</h2>
        <h3>{post.date}</h3>
      </div>

      <div className="prose prose-lg">{/* <Component components={mdxComponents} /> */}</div>
    </>
  );
}
