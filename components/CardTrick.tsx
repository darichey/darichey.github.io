"use client";

import Card from "./Card";
import Cards from "./Cards";
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
const ROUND_STRINGS: Record<Round, string> = {
  0: "First round: which column is your card in?",
  1: "Second round: which column is your card in now?",
  2: "Third and final round: which column is your card in now?",
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
        guess: rearrange(curState.cards, selectedCol)[10]!,
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
      ret.push(cards[i * 3 + n]!);
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

const CardTrick = () => {
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
        <Cards cards={gameState.cards} highlighted={["5C.svg"]} />

        <div>
          <div>{ROUND_STRINGS[gameState.round]}</div>
          {[0, 1, 2].map((n) => (
            <button key={n} className="btn mr-1" onClick={onColumnClick(n as Column)}>
              {n + 1}
            </button>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>This is your card!</div>
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

export default CardTrick;
