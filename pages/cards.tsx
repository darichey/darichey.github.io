import Image from "components/Image";
import { NextPage } from "next";
import { useState } from "react";

const ALL_CARDS = [
  "2C.svg",
  "2D.svg",
  "2H.svg",
  "2S.svg",
  "3C.svg",
  "3D.svg",
  "3H.svg",
  "3S.svg",
  "4C.svg",
  "4D.svg",
  "4H.svg",
  "4S.svg",
  "5C.svg",
  "5D.svg",
  "5H.svg",
  "5S.svg",
  "6C.svg",
  "6D.svg",
  "6H.svg",
  "6S.svg",
  "7C.svg",
  "7D.svg",
  "7H.svg",
  "7S.svg",
  "8C.svg",
  "8D.svg",
  "8H.svg",
  "8S.svg",
  "9C.svg",
  "9D.svg",
  "9H.svg",
  "9S.svg",
  "AC.svg",
  "AD.svg",
  "AH.svg",
  "JC.svg",
  "JD.svg",
  "JH.svg",
  "JS.svg",
  "KC.svg",
  "KD.svg",
  "KH.svg",
  "KS.svg",
  "QC.svg",
  "QD.svg",
  "QH.svg",
  "QS.svg",
  "TC.svg",
  "TD.svg",
  "TH.svg",
  "TS.svg",
];

type Column = 0 | 1 | 2;
type Round = 0 | 1 | 2;
type GameState =
  | { state: "playing"; round: Round; cards: string[] }
  | { state: "done"; guess: string };
const ROUNDS: Record<Round, string> = {
  0: "First",
  1: "Second",
  2: "Third",
};

function getInitialGameState(): GameState {
  return {
    state: "playing",
    round: 0,
    cards: ALL_CARDS.sort(() => 0.5 - Math.random()).slice(0, 21),
  };
}

function getNextGameState(curState: GameState, selectedCol: Column): GameState {
  if (curState.state === "playing") {
    if (curState.round === 2) {
      return {
        state: "done",
        guess: rearrange(curState.cards, selectedCol)[10],
      };
    } else {
      return {
        state: "playing",
        round: (curState.round + 1) as Round, // I promise 0 + 1 = 1 and 1 + 1 = 2 :)
        cards: rearrange(curState.cards, selectedCol),
      };
    }
  } else {
    return getInitialGameState();
  }
}

function rearrange(cards: string[], col: Column): string[] {
  function getNthColumn(n: Column): string[] {
    const ret: string[] = [];
    for (let i = 0; i < 7; i++) {
      ret.push(cards[i * 3 + n]);
    }
    return ret;
  }

  if (col == 0) {
    return [...getNthColumn(1), ...getNthColumn(0), ...getNthColumn(2)];
  } else if (col == 1) {
    return [...getNthColumn(0), ...getNthColumn(1), ...getNthColumn(2)];
  } else {
    return [...getNthColumn(0), ...getNthColumn(2), ...getNthColumn(1)];
  }
}

const Card = ({ name }: { name: string }) => {
  const width = 100;
  const height = width * 1.4;

  return (
    <Image
      src={`/img/cards/${name}`}
      width={width}
      height={height}
      alt={name}
    />
  );
};

const Cards: NextPage = () => {
  const [gameState, setGameState] = useState<GameState>(getInitialGameState);

  function onColumnClick(col: Column) {
    return () => {
      setGameState(getNextGameState(gameState, col));
    };
  }

  function playAgain() {
    setGameState(getInitialGameState());
  }

  if (gameState.state === "playing") {
    return (
      <div>
        <div className="grid grid-cols-3 grid-rows-[repeat(6,_3em)_auto] place-items-start justify-items-center">
          {gameState.cards.map((card, idx) => (
            <div key={card} style={{ zIndex: Math.floor(idx / 3) }}>
              <Card name={card} />
            </div>
          ))}
        </div>

        <div>
          <p>{ROUNDS[gameState.round]} Round: Which column is your card in?</p>
          <button className="btn mr-1" onClick={onColumnClick(0)}>
            0
          </button>
          <button className="btn mr-1" onClick={onColumnClick(1)}>
            1
          </button>
          <button className="btn mr-1" onClick={onColumnClick(2)}>
            2
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>This is your card!</p>
        <Card name={gameState.guess} />

        <div>
          <button className="btn" onClick={playAgain}>
            Play again
          </button>
        </div>
      </div>
    );
  }
};

export default Cards;
