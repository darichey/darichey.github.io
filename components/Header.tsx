import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: Props) => {
  return (
    <section className="header">
      <div className="pic">
        <Image
          src="/img/david.png"
          alt="Picture of me"
          layout="responsive"
          width={1}
          height={1}
        />
      </div>
      <div className="titles">
        <h1 className="title">{title}</h1>
        <h3 className="subtitle">{subtitle}</h3>
      </div>
    </section>
  );
};

export default Header;
