import Grid from "./components/grid/Grid";
import GridOther from "./components/grid/GridOther";
import "./App.css";
import { createContext, useState } from "react";
//prepare
//ready
//end
export const STATUS_VARIABLES = {
  PREPARE: "prepare",
  READY: "ready",
  END: "end",
};
export const PLANE_COLOR = {
  BLUE: "#C6DEF1",
  ORANGE: "#F7D9C4",
  PINK: "#F2C6DE",
};
export const RootContext = createContext();
function App() {
  const [status, setStatus] = useState(STATUS_VARIABLES.PREPARE);
  const [color, setColor] = useState(PLANE_COLOR.BLUE);
  const startOnClick = (e) => {
    setStatus(STATUS_VARIABLES.READY);
  };
  const endOnClick = (e) => {
    setStatus(STATUS_VARIABLES.END);
  };
  const resetIOnClick = (e) => {
    window.location.reload();
  };
  const changeColorOnClick = (e) => {
    if (color === PLANE_COLOR.BLUE) {
      setColor(PLANE_COLOR.ORANGE);
    } else if (color === PLANE_COLOR.ORANGE) {
      setColor(PLANE_COLOR.PINK);
    } else {
      setColor(PLANE_COLOR.BLUE);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "100%", float: "left" }}>
          <button
            onClick={startOnClick}
            disabled={status === STATUS_VARIABLES.READY}
          >
            Start
          </button>
          <button
            onClick={endOnClick}
            disabled={status !== STATUS_VARIABLES.READY}
          >
            End
          </button>
          <button
            onClick={resetIOnClick}
            disabled={status !== STATUS_VARIABLES.END}
          >
            Reset
          </button>
          <button onClick={changeColorOnClick}>Change Color</button>
        </div>

        <div style={{ width: "50%", float: "left" }}>
          <div style={{ float: "left" }}>Status:</div>
          <div
            style={{
              margin: "0 6px",
              float: "left",
              width: 15,
              height: 15,
              background: status === "prepare" ? "yellow" : "green",
              borderRadius: "50%",
            }}
          ></div>
          {status[0].toUpperCase() + status.slice(1, status.length)}
        </div>
        <div style={{ width: "50%", float: "left" }}>
          <div style={{ float: "left" }}>Color:</div>
          <div
            style={{
              margin: "0 6px",
              float: "left",
              width: 15,
              height: 15,
              background: color,
            }}
          ></div>
        </div>
        <RootContext.Provider value={{ color, status }}>
          <Grid />
          <GridOther />
        </RootContext.Provider>
      </header>
    </div>
  );
}

export default App;
