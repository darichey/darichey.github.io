import Card from "./Card";

interface CardsProps {
  cards: string[];
  highlighted?: string[];
}

const Cards = ({ cards, highlighted }: CardsProps) => {
  return (
    <div className="grid grid-cols-3 grid-rows-[repeat(6,_3em)_auto] place-items-start justify-items-center">
      {cards.map((card, idx) => (
        <div
          key={card}
          style={{
            zIndex: Math.floor(idx / 3),
            boxShadow: highlighted?.includes(card) ? "0 0 20px blue" : undefined,
          }}
        >
          <Card name={card} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
