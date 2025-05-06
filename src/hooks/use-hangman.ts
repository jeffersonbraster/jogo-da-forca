import { GAME_STATUS, GUESSES } from "@/constants";
import { WORDS } from "@/words";
import { useState } from "react";

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * WORDS.length);

  return {
    word: WORDS[randomIndex].word.toLowerCase(),
    dica: WORDS[randomIndex].dica,
  }
}

export function useHangman() {
  const [currentWord, setCurrentWord] = useState(getRandomWord);
  const [remainingGuesses, setRemainingGuesses] = useState(GUESSES);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());

  const isWinner = currentWord.word.split("").every((letter) => guessedLetters.has(letter));

  const gameStatus = () => {
    if (isWinner) return GAME_STATUS.WON
    if (remainingGuesses === 0) return GAME_STATUS.LOST
    return GAME_STATUS.PLAYING
  }

  const onGuessLetter = (letter: string) => {
    if (gameStatus() !== GAME_STATUS.PLAYING || guessedLetters.has(letter)) return;

    setGuessedLetters((prev) => new Set([...prev, letter]));

    if (!currentWord.word.includes(letter)) {
      setRemainingGuesses((prev) => prev - 1);
    }
  }

  const selectWord = () => {
    setCurrentWord(getRandomWord());
    setGuessedLetters(new Set());
    setRemainingGuesses(GUESSES);
  };

  return {
    word: currentWord.word,
    dica: currentWord.dica,
    onGuessLetter,
    remainingGuesses,
    guessedLetters,
    gameStatus: gameStatus(),
    selectWord
  }
}