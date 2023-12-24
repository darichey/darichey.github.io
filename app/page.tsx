import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "David Richey",
};

export default function Home() {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex-1 prose lg:prose-xl">
        <p>
          <span className="font-bold text-sky-600">Hey, I&apos;m David!</span> I&apos;m a software
          engineer interested in programming languages and functional programming.
        </p>
        <p>
          I recently graduated from UT Dallas where I earned a degree in Computer Science with a
          minor in Mathematics. I have a passion for teaching, and sometimes I like to{" "}
          <Link href="/blog">write a bit about what I&apos;m learning</Link>.
        </p>
        <p>Online, I often go by Panda.</p>
      </div>
      <div>
        <Image src="/img/david.jpeg" alt="Picture of me" width={1} height={1} className="w-40" />
      </div>
    </div>
  );
}
