import NextLink from "next/link";

function Link({ href, text }: { href: string; text: string }) {
  return (
    <NextLink href={href} className="font-semibold text-2xl">
      {text}
    </NextLink>
  );
}

export default function Nav() {
  return (
    <section className="flex flex-row justify-around">
      <Link href="/" text="Home" />
      <Link href="/blog" text="Blog" />
      <Link href="https://github.com/darichey" text="GitHub" />
    </section>
  );
}
