import EliminatingRepetition from "./eliminating-repetition.mdx";
import MathMagic from "./math-magic.mdx";
import Test from "./test.mdx";

interface Post {
  title: string;
  subtitle: string;
  date: string;
  slug: string;
  component: JSX.Element;
}

export const allPosts: Array<Post> = [
  {
    title: "Eliminating repetition",
    subtitle: "over-engineering a homework assignment for fun",
    date: "2022-01-28",
    slug: "eliminating-repetition",
    component: <EliminatingRepetition />,
  },
  {
    title: "test post please ignore",
    subtitle: "hello world",
    date: "2022-04-07",
    slug: "test",
    component: <Test />,
  },
  {
    title: "Math magic",
    subtitle: "Explaining a card trick with math",
    date: "2022-08-04",
    slug: "math-magic",
    component: <MathMagic />,
  },
];
