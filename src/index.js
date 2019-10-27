import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./calculator";
import useTheme from "./useTheme";

import "./styles.css";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <button type="button" onClick={toggleTheme}>
        Switch theme
      </button>
      <Calculator />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
