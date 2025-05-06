import { motion } from "motion/react";
import { GAME_STATUS } from "@/constants";
import { GameStatus } from "@/types";

type GameModalProps = {
  gameStatus: GameStatus;
  word: string;
  onNewWord: () => void;
};

const GameModal = ({ gameStatus, word, onNewWord }: GameModalProps) => {
  if (gameStatus === GAME_STATUS.PLAYING) return null;

  const isWinner = gameStatus === GAME_STATUS.WON;
  const title = isWinner ? "Você venceu!" : "Você perdeu!";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 flex items-center justify-center p-4 backdrop-blur-sm"
    >
      <div className="max-w-sm rounded-xl bg-white p-6 text-center">
        <h2 className="mb-4 text-center text-2xl font-bold">{title}</h2>

        {!isWinner && (
          <p className="mb-4 text-xl">
            A palavra correta era: {word.toUpperCase()}
          </p>
        )}

        <button
          onClick={onNewWord}
          className="rounded-lg bg-pink px-4 py-2 text-white outline-none hover:bg-pink/80 focus:ring-2 focus:ring-pink focus:ring-offset-2"
          autoFocus
        >
          Nova palavra
        </button>
      </div>
    </motion.div>
  );
};

export default GameModal;
