"use client";

import { useGame } from "../hooks/useGame";
import { Hamburguer } from "./Hamburguer";
import { Input } from "./Input";
import { Word } from "./Word";

export const Game = () => {
  const {
    words,
    currentPosition,
    onChangeInput,
    startGame,
    inputValue,
    formatTime,
    ended,
  } = useGame();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8 w-full max-w-xl mx-auto">
        {ended ? (
          <div className="text-5xl text-center">{formatTime()}</div>
        ) : (
          <>
            <div className="text-xl text-center">{formatTime()}</div>
            {words.length ? (
              <Word word={words[currentPosition.x][currentPosition.y]} />
            ) : null}
            <Input onChange={onChangeInput} inputValue={inputValue} />
          </>
        )}
        <button onClick={startGame}>Start</button>
      </div>
      <div className="grid grid-cols-5">
        {currentPosition.x >= 0 && (
          <Hamburguer
            positions={currentPosition.y}
            completed={currentPosition.x > 0}
          />
        )}
        {currentPosition.x >= 1 && (
          <Hamburguer
            positions={currentPosition.y}
            completed={currentPosition.x > 1}
          />
        )}
        {currentPosition.x >= 2 && (
          <Hamburguer
            positions={currentPosition.y}
            completed={currentPosition.x > 2}
          />
        )}
        {currentPosition.x >= 3 && (
          <Hamburguer
            positions={currentPosition.y}
            completed={currentPosition.x > 3}
          />
        )}
        {currentPosition.x >= 4 && (
          <Hamburguer positions={currentPosition.y} completed={ended} />
        )}
      </div>
    </div>
  );
};
