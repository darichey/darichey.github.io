import Link from "next/link";
import Image from "./Image";

const Links = () => {
  return (
    <section className="flex gap-x-5">
      <Link href="https://github.com/darichey">

        <Image
          src="/img/github_mark.svg"
          alt="Github Icon"
          height={32}
          width={32}
        />

      </Link>
      <Link href="https://www.linkedin.com/in/darichey/">

        <Image
          src="/img/linkedin_mark.svg"
          alt="LinkedIn Icon"
          height={32}
          width={32}
        />

      </Link>
      <Link href="mailto:darichey1@gmail.com">

        <Image src="/img/mail.svg" alt="Mail Icon" height={32} width={32} />

      </Link>
    </section>
  );
};

export default Links;
