import Image from "next/image";

const Card = ({ name }: { name: string }) => {
  const width = 100;
  const height = width * 1.4;

  return <Image src={`/img/cards/${name}`} width={width} height={height} alt={name} />;
};

export default Card;
