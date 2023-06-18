import { ChangeEvent, useEffect } from "react";

export const Input = ({
  onChange,
  inputValue,
  disabled,
}: {
  inputValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}) => {
  useEffect(() => {
    document
      .getElementById("Input")!
      .addEventListener("paste", (e) => e.preventDefault());
  }, []);

  return (
    <input
      id="Input"
      className="w-full h-20 px-4 text-4xl"
      value={inputValue}
      onChange={onChange}
      onPaste={() => {
        return;
      }}
      onDrop={() => {
        return;
      }}
      autoComplete="off"
      disabled={disabled}
      type="text"
    />
  );
};
