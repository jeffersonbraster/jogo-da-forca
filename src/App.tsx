import GameModal from "./components/game-modal";
import HangmanFigure from "./components/hangman-figure";
import Keyboard from "./components/keyboard";
import WordDisplay from "./components/word-display";
import { useHangman } from "./hooks/use-hangman";

function App() {
  const {
    word,
    dica,
    remainingGuesses,
    guessedLetters,
    onGuessLetter,
    gameStatus,
    selectWord,
  } = useHangman();

  return (
    <div className="flex min-h-screen flex-col items-center gap-8 bg-blue-200 p-8">
      <h1 className="text-4xl font-bold text-pink">Jogo da forca do JEJE</h1>

      <HangmanFigure remainingGuesses={remainingGuesses} />

      <div className="text-center text-gray-100">
        <p className="mb-2 text-xl sm:text-2xl">
          Vidas restantes: <span className="font-bold">{remainingGuesses}</span>
        </p>

        <p className="text-lg">Dica: {dica}</p>
      </div>

      <WordDisplay word={word} guessedLetters={guessedLetters} />

      <Keyboard guessedLetters={guessedLetters} onGuessLetter={onGuessLetter} />

      <GameModal gameStatus={gameStatus} word={word} onNewWord={selectWord} />
    </div>
  );
}

export default App;
