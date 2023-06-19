import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Word } from "@/app/components/Word";

describe("Word", () => {
  it("found word in document", () => {
    render(<Word word="my word text" />);

    const heading = screen.getByText("my word text");

    expect(heading).toBeInTheDocument();
  });
});
