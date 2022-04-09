import Image from "./Image";

interface Props {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: Props) {
  return (
    <section className="flex flex-col md:flex-row-reverse justify-around items-center">
      <div className="w-52">
        <Image src="/img/david.png" alt="Picture of me" sizes="100vw" width={1} height={1} />
      </div>

      <div className="text-center md:text-left">
        <h1 className="text-5xl font-bold text-sky-600 mb-4">{title}</h1>
        <h2 className="text-3xl font-bold">{subtitle}</h2>
      </div>
    </section>
  );
}