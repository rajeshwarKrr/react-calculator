import React, { useState } from "react";

import useTheme from "./useTheme";

function ResultComponent({ result }) {
  return (
    <React.Fragment>
      <table>
        <tr>
          <td>
            <p className="result">{result}</p>
          </td>
        </tr>
      </table>
    </React.Fragment>
  );
}
let Button = ({name}) => <button name={name}>{name}</button>

function KeypadComponent({ onClick }) {
  let handleButtonClick = e => onClick(e.target.name);
  return (
    <React.Fragment>
      <table>
        <tr>
          <td>
            <button name="1" onClick={handleButtonClick}>
              1
            </button>
          </td>
          <td>
            <button name="2" onClick={handleButtonClick}>
              2
            </button>
          </td>
          <td>
            <button name="3" onClick={handleButtonClick}>
              3
            </button>
          </td>
          <td>
            <button name="+" onClick={handleButtonClick}>
              Add(+)
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button name="4" onClick={handleButtonClick}>
              4
            </button>
          </td>
          <td>
            <button name="5" onClick={handleButtonClick}>
              5
            </button>
          </td>
          <td>
            <button name="6" onClick={handleButtonClick}>
              6
            </button>
          </td>
          <td>
            <button name="-" onClick={handleButtonClick}>
              Sub(-)
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button name="7" onClick={handleButtonClick}>
              7
            </button>
          </td>
          <td>
            <button name="8" onClick={handleButtonClick}>
              8
            </button>
          </td>
          <td>
            <button name="9" onClick={handleButtonClick}>
              9
            </button>
          </td>
          <td>
            <button name="*" onClick={handleButtonClick}>
              Mul(*)
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button name="clear" onClick={handleButtonClick}>
              clear
            </button>
          </td>
          <td>
            <button name="0" onClick={handleButtonClick}>
              0
            </button>
          </td>
          <td>
            <button name="=" onClick={handleButtonClick}>
              =
            </button>
          </td>
          <td>
            <button name="/" onClick={handleButtonClick}>
              Div(/)
            </button>
          </td>
        </tr>
      </table>
    </React.Fragment>
  );
}

function ScientificCalculator({ onClick }) {
  let handleButtonClick = e => onClick(e.target.name);
  return (
    <React.Fragment>
      <table>
        <tr>
          <td>
            <button name="sign" onClick={handleButtonClick}>
              sign
            </button>
          </td>
          <td>
            <button name="square" onClick={handleButtonClick}>
              square
            </button>
          </td>
          <td>
            <button name="squareRoot" onClick={handleButtonClick}>
              squareRoot
            </button>
          </td>
        </tr>
      </table>
    </React.Fragment>
  );
}

function Box() {
  const [result, setResult] = useState("");

  let onClick = key => {
    switch (key) {
      case "=":
        calculate();
        break;
      case "clear":
        clear();
        break;
      case "sign":
        sign();
        break;
      case "square":
        square();
        break;
      case "squareRoot":
        squareRoot();
        break;
      default:
        setResult(result + key);
        break;
    }
  };

  let calculate = () => {
    try {
      setResult((eval(result) || "") + "");
    } catch (e) {
      setResult("error");
    }
  };

  let sign = () => {
    // convert from positive to negative and viceversa
    setResult(Math.abs(result));
  };
  let square = () => {
    setResult(Math.pow(result, 2));
  };
  let squareRoot = () => {
    setResult(Math.sqrt(result));
  };

  let clear = () => setResult("");

  return (
    <React.Fragment>
      <ResultComponent result={result} />
      {}
      <ScientificCalculator onClick={onClick} />
      <KeypadComponent onClick={onClick} />
    </React.Fragment>
  );
}

// Calcularot Main Component
function Calculator() {
  const { theme, toggleTheme } = useTheme();
  const { calculator, toggleCalculator } = useState("normal");

  return (
    <div className={`calculator ${theme}`}>
      <button type="button" onClick={toggleTheme}>
        Switch theme
      </button>
      {/* <button type="button" onClick={toggleCalculator('')}>
        Switch Calculator
      </button> */}
      <Box />
    </div>
  );
}

export default Calculator;
