import "./stylesHam.css";

export const Hamburguer = ({
  positions,
  completed,
}: {
  positions: number;
  completed: boolean;
}) => {
  return completed ? (
    <div className="box-canvas">
      <div className="bun bottom"></div>
      <div className="burger"></div>
      <div className="ketchup"></div>
      <div className="cheese"></div>
      <div className="lettuce"></div>
      <div className="bun top">
        <div className="seed left"></div>
        <div className="seed center"></div>
        <div className="seed right"></div>
      </div>
    </div>
  ) : (
    <div className="box-canvas">
      <div className="bun bottom"></div>
      {positions > 0 && <div className="burger"></div>}
      {positions > 1 && <div className="ketchup"></div>}
      {positions > 2 && <div className="cheese"></div>}
      {positions > 3 && <div className="lettuce"></div>}
      {positions > 4 && (
        <div className="bun top">
          <div className="seed left"></div>
          <div className="seed center"></div>
          <div className="seed right"></div>
        </div>
      )}
    </div>
  );
};
