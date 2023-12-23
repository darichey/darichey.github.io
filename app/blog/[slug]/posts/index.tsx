import EliminatingRepetition from "./eliminating-repetition.mdx";
import MathMagic from "./math-magic.mdx";
import Test from "./test.mdx";
import RssWithNextjs from "./rss-with-nextjs.mdx";

interface Post {
  title: string;
  subtitle: string;
  date: string;
  slug: string;
  publish: boolean;
  component: JSX.Element;
}

const allPosts: Array<Post> = [
  {
    title: "Eliminating repetition",
    subtitle: "over-engineering a homework assignment for fun",
    date: "2022-01-28",
    slug: "eliminating-repetition",
    publish: true,
    component: <EliminatingRepetition />,
  },
  {
    title: "test post please ignore",
    subtitle: "hello world",
    date: "2022-04-07",
    slug: "test",
    publish: true,
    component: <Test />,
  },
  {
    title: "Math magic",
    subtitle: "Explaining a card trick with math",
    date: "2022-08-04",
    slug: "math-magic",
    publish: false,
    component: <MathMagic />,
  },
  {
    title: "Adding an RSS feed to your static Next.js site",
    subtitle: "A quick explanation of how I added an RSS feed to my blog",
    date: "2023-12-23",
    slug: "rss-with-nextjs",
    publish: true,
    component: <RssWithNextjs />,
  },
];

export const publishedPosts = allPosts.filter((p) => p.publish);

export function getPost(slug: string): Post {
  return publishedPosts.find((p) => p.slug === slug)!;
}
