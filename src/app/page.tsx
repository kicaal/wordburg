"use client";

import { Game } from "./components/Game";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef?.current?.showModal();
  }, [dialogRef]);

  return (
    <>
      <main className="flex flex-col gap-20 w-full h-full items-center justify-center">
        <div className="mx-auto w-full max-w-xl">
          <h1 className="text-5xl text-center">WordBurg</h1>
          <dialog ref={dialogRef}>
            <div className="flex flex-col gap-4 w-96">
              <button
                onClick={() => {
                  dialogRef?.current?.close();
                }}
                className="self-end"
              >
                X
              </button>
              <p>Welcome to WordBurg!</p>
              <p>
                We need your help in the kitchen to assemble 5 hamburgers in the
                shortest possible time! to do this, you have to do it by typing
                a few words
              </p>
              <p>FYI! You cannot copy and paste! 😉</p>
              <p>
                Good Luck! <span className="italic"> - Kilian</span>
              </p>
            </div>
          </dialog>
        </div>
        <Game />
      </main>
      <footer className="text-center">
        Made by{" "}
        <a
          href="https://twitter.com/kilianbboy"
          className="underline"
          target="_blank"
        >
          @kilianbboy
        </a>{" "}
        with 🖤. Check out the{" "}
        <a
          href="https://github.com/kicaal"
          className="underline"
          target="_blank"
        >
          Github
        </a>{" "}
        .
      </footer>
    </>
  );
}
