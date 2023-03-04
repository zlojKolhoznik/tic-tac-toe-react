import { useState } from "react";
import Field from "./Field";
import "./styles.css";

export let currentPlayer = Math.random() > 0.5 ? "x" : "o";
export const changeCurrentPlayer = () => {
  currentPlayer = currentPlayer === "x" ? "o" : "x";
  reload();
};
export const setWinner = (c) => {
  winner = c;
};
export let winner;
let reload;

export default function App() {
  reload = useReload();
  return (
    <div className="App">
      <header>
        <div className="info">
          {winner
            ? `Winner: ${winner.toUpperCase()}`
            : `Current move: ${currentPlayer.toUpperCase()}`}
        </div>
      </header>
      <Field />
      {winner && (
        <a className="restart" href="/">
          Restart
        </a>
      )}
    </div>
  );
}

const useReload = () => {
  let [value, setValue] = useState(0);
  return () => setValue(value + 1);
};
