import Header from "../components/Header";
import Links from "../components/Links";

export default function Home() {
  return (
    <>
      <Header title="Hey, I'm David." subtitle="Sometimes I code stuff." />

      <div className="flex flex-col gap-y-4 text-xl leading-relaxed content">
        <p>
          I&apos;m a software engineer interested in programming languages and functional
          programming. I recently graduated from UT Dallas where I earned a degree in Computer
          Science with a minor in Mathematics.
        </p>

        <p>
          I have a passion for teaching, and sometimes I like to write a bit about what I&apos;m
          learning.
        </p>

        <p>Online, I often go by Panda.</p>
      </div>

      <Links />
    </>
  );
}
