import Image from "./Image";
import styled from "styled-components";

interface Props {
  title: string;
  subtitle: string;
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const Pic = styled.div`
  width: 40vw;
  height: auto;

  @media (min-width: 1200px) {
    width: 15vw;
  }
`;

const Title = styled.h1`
  font-size: 5em;
  font-weight: bold;
  color: #1190d4;
  text-align: center;
  margin: 0 0 0 0;

  @media (min-width: 1200px) {
    font-size: 3em;
  }
`;

const Subtitle = styled.h3`
  font-size: 2.7em;
  font-weight: bold;
  text-align: center;
  margin: 0 0 0 0;

  @media (min-width: 1200px) {
    font-size: 1.75em;
  }
`;

const Header = ({ title, subtitle }: Props) => {
  return (
    <Section>
      <Pic>
        <Image
          src="/img/david.png"
          alt="Picture of me"
          layout="responsive"
          width={1}
          height={1}
        />
      </Pic>

      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
    </Section>
  );
};

export default Header;
