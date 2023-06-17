import { ChangeEvent, useEffect } from "react";

export const Input = ({
  onChange,
  inputValue,
}: {
  inputValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  useEffect(() => {
    document
      .getElementById("Input")!
      .addEventListener("paste", (e) => e.preventDefault());
  }, []);

  return (
    <input
      id="Input"
      value={inputValue}
      className="w-full h-20 px-4 text-2xl"
      type="text"
      onPaste={() => {
        return;
      }}
      onDrop={() => {
        return;
      }}
      autoComplete="off"
      onChange={onChange}
    />
  );
};
