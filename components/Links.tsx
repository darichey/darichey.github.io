import Link from "next/link";
import Image from "./Image";

const Links = () => {
  return (
    <section className="flex gap-x-5">
      <Link href="https://github.com/darichey">
        <a>
          <Image
            src="/img/github_mark.svg"
            alt="Github Icon"
            height={32}
            width={32}
          />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/darichey/">
        <a>
          <Image
            src="/img/linkedin_mark.svg"
            alt="LinkedIn Icon"
            height={32}
            width={32}
          />
        </a>
      </Link>
      <Link href="mailto:darichey1@gmail.com">
        <a>
          <Image src="/img/mail.svg" alt="Mail Icon" height={32} width={32} />
        </a>
      </Link>
    </section>
  );
};

export default Links;
