import Image from "next/image";
import { Game } from "./components/Game";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-8 p-20 w-screen">
      <div className="mx-auto w-full max-w-xl">
        <h1 className="text-5xl">Word App</h1>
        <p className="text-lg">improve your typing</p>
        <p>FYI! You cannot copy and paste!</p>
      </div>
      <Game />
    </main>
  );
}
