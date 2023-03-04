import { useState } from "react";
import { currentPlayer, changeCurrentPlayer, winner, setWinner } from "./App";
import { tiles } from "./Field";

export default function Tile(props) {
  let [owner, setOwner] = useState(null);
  let index = props.index;
  const clickHandle = () => {
    if (owner || winner) {
      return false;
    }
    setOwner(currentPlayer);
    tiles[Math.floor(index / 3)][index % 3] = currentPlayer;
    calculateWinner();
    changeCurrentPlayer();
  };
  return (
    <div
      className={`tile ${owner ? owner : ""} ${props.className}`}
      onClick={clickHandle}
    />
  );
}

const calculateWinner = () => {
  const center = tiles[1][1];
  if (center === tiles[0][0] && center === tiles[2][2]) {
    setWinner(currentPlayer);
    return;
  }
  if (center === tiles[2][0] && center === tiles[0][2]) {
    setWinner(currentPlayer);
    return;
  }
  for (let i = 0; i < 2; i++) {
    const hor = tiles[i][1];
    const vert = tiles[1][i];
    if (hor !== "" && tiles[i][0] === hor && tiles[i][2] === hor) {
      setWinner(currentPlayer);
      return;
    }
    if (vert !== "" && tiles[0][i] === vert && tiles[2][i] === vert) {
      setWinner(currentPlayer);
      return;
    }
  }
};
