import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares: any[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6], // diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((square) => square !== null);

  const handleClick = (i: number) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-accent/20 bg-background/50 p-6 shadow-md dark:bg-zinc-800/50">
      <h3 className="mb-4 text-2xl font-bold text-accent">Tic Tac Toe</h3>
      <div className="mb-4 text-lg font-semibold text-foreground">
        {winner ? `Winner: ${winner}` : isDraw ? "It's a Draw!" : `Next Player: ${xIsNext ? "X" : "O"}`}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {board.map((value, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="flex h-20 w-20 items-center justify-center rounded-md bg-accent/10 text-4xl font-bold text-foreground transition-colors hover:bg-accent/20 dark:bg-accent/20 dark:hover:bg-accent/30 sm:h-24 sm:w-24"
          >
            {value && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={value === "X" ? "text-blue-500" : "text-emerald-500"}
              >
                {value}
              </motion.span>
            )}
          </button>
        ))}
      </div>
      <button
        onClick={resetGame}
        className="mt-6 rounded-full bg-accent px-6 py-2 font-semibold text-background transition-transform hover:scale-105"
      >
        Restart Game
      </button>
    </div>
  );
}

import { useRouter } from "next/router";
import { Locale, translations } from "@/utility/translations";

export default function MiniArcade() {
  const router = useRouter();
  const locale = (router.locale || "en") as Locale;
  const t = translations[locale].events;

  return (
    <div className="mx-auto mt-20 max-w-7xl pt-10 border-t border-accent/20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t.miniArcadeTitle}</h2>
        <p className="mt-4 text-muted-foreground">{t.miniArcadeDesc}</p>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <TicTacToe />
        </div>
      </div>
    </div>
  );
}
