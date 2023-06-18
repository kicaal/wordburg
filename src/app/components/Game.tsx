"use client";

import { useEffect, useMemo } from "react";
import { useGame } from "../hooks/useGame";
import { Hamburguer } from "./Hamburguer";
import { Input } from "./Input";
import { Word } from "./Word";
import { HamburguerList } from "./HamburguerList";

export const Game = () => {
  const {
    words,
    currentPosition,
    onChangeInput,
    startGame,
    inputValue,
    formatTime,
    ended,
    started,
  } = useGame();

  const text: string = useMemo(() => {
    return `He conseguido ${formatTime} segundos en WordBurg! ¿Serías capaz de superarme?`;
  }, [formatTime]);

  const url: string = useMemo(() => {
    return `http://twitter.com/share?text=${text}&url=https://wordburg.vercel.app/`;
  }, [text]);

  const word: string = useMemo(() => {
    return words.length ? words[currentPosition.x][currentPosition.y] : "";
  }, [words, currentPosition]);

  useEffect(() => {
    if (started) {
      document.getElementById("Input")?.focus();
    }
  }, [started]);

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col gap-8 w-full max-w-xl mx-auto">
        <div
          className="grid"
          style={{
            gridTemplateRows: `repeat(${ended ? "2" : "3"}, 80px)`,
          }}
        >
          <div className={`${ended ? "text-5xl" : "text-xl"} text-center`}>
            {formatTime}
          </div>
          {ended ? (
            <div className="flex flex-col gap-2 text-xl justify-center items-center">
              <p>Wow! you are so quickly! 🚀</p>
              <a className="text-blue-600 underline" href={url} target="_blank">
                Share on twitter!
              </a>
            </div>
          ) : (
            <>
              <Word word={word} />
              <Input
                onChange={onChangeInput}
                inputValue={inputValue}
                disabled={!started || ended}
              />
            </>
          )}
        </div>
        <button
          className="border border-black w-fit mx-auto px-8 py-1 mb-4 hover:shadow-lg transition"
          onClick={startGame}
        >
          {ended ? "Reset" : "Start"}
        </button>
      </div>
      <HamburguerList currentPosition={currentPosition} ended={ended} />
    </div>
  );
};
