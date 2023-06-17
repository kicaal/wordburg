import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

export const useGame = () => {
  const [words, setWords] = useState<string[][]>([]);
  const [currentPosition, setCurrentPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [inputValue, setInputValue] = useState<string>("");
  const [ended, setEnded] = useState<boolean>(false);
  const [intervalTimer, setIntervalTimer] = useState<NodeJS.Timer | null>(null);
  const [time, setTime] = useState<number>(0);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const typedWord = e.target.value;

    setInputValue(typedWord);

    const currentWord = words[currentPosition.x][currentPosition.y];

    const endedWords = words.length - 1 === currentPosition.x;

    const endedCurrentAxis =
      words[currentPosition.x].length - 1 === currentPosition.y;

    if (typedWord === currentWord) {
      if (endedCurrentAxis) {
        endedWords
          ? endGame()
          : setCurrentPosition({
              x: currentPosition.x + 1,
              y: 0,
            });
      } else {
        setCurrentPosition({
          x: currentPosition.x,
          y: currentPosition.y + 1,
        });
      }
      setInputValue("");
    }
  };

  const endGame = () => {
    setEnded(true);
    clearInterval(intervalTimer!);
  };

  const resetGame = () => {
    clearInterval(intervalTimer!);
    setEnded(false);
    setCurrentPosition({
      x: 0,
      y: 0,
    });
  };

  const startGame = () => {
    document.getElementById("Input")?.focus();
    resetGame();
    let words: string[][] = [];

    for (let i = 0; i < 5; i++) {
      words[i] = [];

      for (let j = 0; j < 5; j++) {
        words[i].push(faker.word.noun());
      }
    }

    setWords(words);

    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      setTime(elapsedTime);
    }, 10);

    setIntervalTimer(interval);
  };

  const formatTime = () => {
    return new Date(time).toISOString().slice(17, -1);
  };

  return {
    words,
    currentPosition,
    onChangeInput,
    startGame,
    ended,
    inputValue,
    time,
    formatTime,
  };
};
