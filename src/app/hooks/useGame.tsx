import {
  ChangeEvent,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { faker } from "@faker-js/faker";
import { ICurrentPosition } from "../types";

export const useGame = () => {
  const [words, setWords] = useState<string[][]>([]);
  const [currentPosition, setCurrentPosition] = useState<ICurrentPosition>({
    x: 0,
    y: 0,
  });
  const [inputValue, setInputValue] = useState<string>("");
  const [ended, setEnded] = useState<boolean>(false);
  const [started, setStarted] = useState<boolean>(false);
  const [intervalTimer, setIntervalTimer] = useState<NodeJS.Timer | null>(null);
  const [time, setTime] = useState<number>(0);

  const startGame = () => {
    setStarted(true);
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

  const resetGame = () => {
    clearInterval(intervalTimer!);
    setEnded(false);
    setCurrentPosition({
      x: 0,
      y: 0,
    });
  };

  const endGame = () => {
    setEnded(true);
    clearInterval(intervalTimer!);
  };

  const formatTime: string = useMemo(() => {
    return new Date(time).toISOString().slice(14, -1);
  }, [time]);

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

  return {
    words,
    currentPosition,
    onChangeInput,
    startGame,
    ended,
    inputValue,
    time,
    formatTime,
    started,
  };
};
