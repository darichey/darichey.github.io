import Image from "./Image";

interface Props {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: Props) => {
  return (
    <section className="flex flex-col md:flex-row-reverse justify-around items-center">
      <div className="w-52">
        <Image
          src="/img/david.png"
          alt="Picture of me"
          layout="responsive"
          width={1}
          height={1}
        />
      </div>

      <div>
        <h1 className="text-5xl font-bold text-sky-600 mb-4">{title}</h1>
        <h2 className="text-3xl font-bold">{subtitle}</h2>
      </div>
    </section>
  );
};

export default Header;
