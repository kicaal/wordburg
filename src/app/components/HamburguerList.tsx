import { ICurrentPosition } from "../types";
import { Hamburguer } from "./Hamburguer";

export const HamburguerList = ({
  currentPosition,
  ended,
}: {
  currentPosition: ICurrentPosition;
  ended: boolean;
}) => {
  return (
    <div
      style={{
        gridTemplateColumns: "repeat(5, 200px)",
      }}
      className="grid justify-center"
    >
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
  );
};
