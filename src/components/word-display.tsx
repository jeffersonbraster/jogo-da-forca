type WordDisplayProps = {
  word: string;
  guessedLetters: Set<string>;
};

const WordDisplay = ({ word, guessedLetters }: WordDisplayProps) => {
  return (
    <div className="flex flex-wrap space-x-1 sm:space-x-2">
      {word.split("").map((letter, i) => (
        <div
          key={i}
          className="flex h-10 w-6 justify-center border-b-2 border-gray-100 pb-1 pb-2 text-2xl font-bold uppercase text-white sm:h-12 sm:w-8"
        >
          {guessedLetters.has(letter) ? letter : ""}
        </div>
      ))}
    </div>
  );
};

export default WordDisplay;
