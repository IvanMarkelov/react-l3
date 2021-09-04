import App from "./App";
import React, { useState } from "react";

export default function RootComponent(props) {
  const [toggle, setToggle] = useState(true);

  const toggleApp = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      {toggle && <App />}
      <button onClick={toggleApp}>Toggle App</button>
    </div>
  );
}
