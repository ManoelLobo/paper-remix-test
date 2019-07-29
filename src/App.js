import React, { useState } from "react";
import Lorem from "./content/Lorem";

const App = () => {
  const [foldAngle, setFoldAngle] = useState(0);

  const isFrontFaceUp = foldAngle <= 90;

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr",
          gridColumnGap: "1px",
          gridRowGap: "0px",
          height: "90vh"
        }}
      >
        <div
          id="page-1"
          style={{ background: "turquoise", gridArea: "1 / 1 / 2 / 2" }}
        >
          <Lorem name="Lorem 1" />
        </div>
        <div
          id="page-2"
          style={{
            background: isFrontFaceUp ? "yellow" : "tomato",
            gridArea: isFrontFaceUp ? "1 / 2 / 2 / 3" : "1 / 1 / 2 / 2",

            // Apply the folding rotation:
            transform: `rotateY(${
              isFrontFaceUp ? foldAngle : 180 - foldAngle
            }deg)`,
            transformOrigin: isFrontFaceUp ? "left top" : "right top",

            // This optional prop can improve
            // performance, by letting the
            // browser optimize it:
            willChange: "transform"
          }}
        >
          {foldAngle <= 90 ? (
            <Lorem name="Lorem 2" />
          ) : (
            <Lorem name="Lorem 3" />
          )}
        </div>
        <div
          id="page-3"
          style={{ background: "rebeccapurple", gridArea: "1 / 2 / 2 / 3" }}
        >
          <Lorem name="Lorem 4" />
        </div>
      </div>
      <label htmlFor="slider">change page:</label>
      <input
        id="slider"
        type="range"
        min={0}
        max={180}
        value={foldAngle}
        onChange={event => setFoldAngle(event.target.value)}
        style={{ transform: "rotate(180deg)" }}
      />
    </>
  );
};

export default App;
