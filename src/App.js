import React, { useState } from "react";

const Page = ({ style }) => (
  <div style={style}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante odio,
    consequat ac consectetur sed, rhoncus ut ex. Ut quis sem et tortor lobortis
    fringilla a ac metus. In varius, eros a varius feugiat, felis lacus dictum
    turpis, at imperdiet est justo molestie augue. Ut venenatis porttitor
    commodo. Aenean suscipit ut elit at hendrerit.
  </div>
);

// .parent {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: 1fr;
//   grid-column-gap: 0px;
//   grid-row-gap: 0px;
//   .div1 { grid-area: 1 / 1 / 2 / 2; }
//   .div2 { grid-area: 1 / 2 / 2 / 3; }
//   }

const App = () => {
  const [foldAngle, setFoldAngle] = useState(0);

  return (
    <React.Fragment>
      <div
        style={{
          // display: "flex", width: "1fr"
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr",
          gridColumnGap: "0px",
          gridRowGap: "0px"
        }}
      >
        <Page style={{ background: "turquoise", gridArea: "1 / 1 / 2 / 2" }} />
        <Page
          style={{
            background: "purple",
            gridArea: "1 / 2 / 2 / 3",
            zIndex: foldAngle < 90 ? 101 : 100,

            // Apply the folding rotation:
            transform: `rotateY(${foldAngle}deg)`,
            transformOrigin: "left top",

            // This optional prop can improve
            // performance, by letting the
            // browser optimize it:
            willChange: "transform"
          }}
        />
        <Page
          style={{
            background: "tomato",
            zIndex: 100,
            gridArea: "1 / 1 / 2 / 2",

            // Apply the folding rotation:
            transform: `rotateY(${180 - foldAngle}deg)`,
            transformOrigin: "right top",

            // This optional prop can improve
            // performance, by letting the
            // browser optimize it:
            willChange: "transform"
          }}
        />
        <Page
          style={{ background: "rebeccapurple", gridArea: "1 / 2 / 2 / 3" }}
        />
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
    </React.Fragment>
  );
};

export default App;
