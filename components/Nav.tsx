import NextLink from "next/link";
import Links from "./Links";

function Link({ href, text }: { href: string; text: string }) {
  return (
    <NextLink href={href} className="font-semibold text-2xl text-gray-900">
      {text}
    </NextLink>
  );
}

export default function Nav() {
  return (
    <section className="flex flex-row gap-12">
      <Link href="/" text="Home" />
      <Link href="/blog" text="Blog" />
      <div className="ml-auto">
        <Links />
      </div>
    </section>
  );
}
