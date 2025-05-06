import { useEffect } from "react";

const KEY_ROWS = [
  "qwertyuiop".split(""),
  "asdfghjkl".split(""),
  "zxcvbnm".split(""),
];

const KEY_CLASSES = {
  guessed: "bg-gray-100 text-gray-200 cursor-not-allowed",
  unguessed: "bg-blue-100 text-gray-100 hover:text-white hover:bg-pink/80",
};

type KeyboardProps = {
  guessedLetters: Set<string>;
  onGuessLetter: (letter: string) => void;
};

const Keyboard = ({ guessedLetters, onGuessLetter }: KeyboardProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const letter = event.key.toLowerCase();

      if (KEY_ROWS.flat().includes(letter)) {
        onGuessLetter(letter);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onGuessLetter]);

  return (
    <div className="flex flex-col items-center gap-2">
      {KEY_ROWS.map((row, i) => (
        <div key={i} className="flex gap-1" role="row">
          {row.map((letter) => {
            const isGuessed = guessedLetters.has(letter);

            return (
              <button
                onClick={() => onGuessLetter(letter)}
                key={letter}
                disabled={isGuessed}
                className={`size-8 rounded uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-pink sm:size-10 ${isGuessed ? KEY_CLASSES.guessed : KEY_CLASSES.unguessed}`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
