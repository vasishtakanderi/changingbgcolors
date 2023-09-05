import { useState } from "react";
const App = () => {
  const [color, setColor] = useState("green");
  return (
    <>
      <div style={{ align: "center" }}>
        <div
          style={{
            height: "100px",
            width: "100px",
            border: "1px solid grey",
            backgroundColor: color
          }}
        ></div>
        <br />
        <input
          type="text"
          onChange={(e) => {
            setColor(e.target.value);
          }}
          placeholder="type color name"
        />
      </div>
    </>
  );
};
export default App;
