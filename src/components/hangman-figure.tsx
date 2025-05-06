import { GUESSES } from "@/constants";
import { motion } from "motion/react";

type HangmanFigureProps = {
  remainingGuesses: number;
};

const HangmanFigure = ({ remainingGuesses }: HangmanFigureProps) => {
  const gallowLines = [
    { x1: 40, y1: 180, x2: 160, y2: 180 },
    { x1: 60, y1: 20, x2: 60, y2: 180 },
    { x1: 60, y1: 20, x2: 140, y2: 20 },
    { x1: 140, y1: 20, x2: 140, y2: 40 },
  ];

  const parts = [
    { x1: 140, y1: 60, x2: 140, y2: 120 },
    { x1: 140, y1: 75, x2: 120, y2: 90 },
    { x1: 140, y1: 75, x2: 160, y2: 90 },
    { x1: 140, y1: 120, x2: 120, y2: 140 },
    { x1: 140, y1: 120, x2: 160, y2: 140 },
  ];

  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      {gallowLines.map((line) => (
        <line
          key={`${line.x1}-${line.y1}-${line.x2}-${line.y2}`}
          {...line}
          className="stroke-gray-200 stroke-[3px]"
        />
      ))}

      <motion.circle
        cx={140}
        cy={50}
        r={10}
        className="stroke-pink stroke-[3px]"
        initial={{ scale: 0 }}
        animate={{ scale: GUESSES - remainingGuesses > 0 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {parts.map((part, i) => (
        <motion.line
          key={`${part.x1}-${part.y1}-${part.x2}-${part.y2}`}
          {...part}
          className="stroke-pink stroke-[3px]"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: GUESSES - remainingGuesses > i + 1 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </svg>
  );
};

export default HangmanFigure;
