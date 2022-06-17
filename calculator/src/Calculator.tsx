import React, { useState } from "react";
import "./App.css";
import { Button } from '@material-ui/core';

function App() {
  const [result, setResult] = useState("");
  const handleClick = () => {
    setResult("");
    setResult(result.concat());
  };
  console.log(typeof result);
  //clear
  const clear = () => {
    setResult("");
  };

  const symbol = ["+", "-", "/"];

  //backSpace
  const backSpace = () => {
    setResult(result.slice(0, -1));
  };

  //calculate
  const calc = () => {
    try {
      setResult(Number(eval(result).toString()).toFixed(2));
    } catch (error) {
      setResult("invalid format");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Calculator</h1>
      <div className="calculator">
        <input type="text" className="calc-numbers" value={result} />
        <div className="calculator-buttons">
          <Button onClick={clear} className="btn clear span-2">
            C
          </Button>
          <Button onClick={backSpace} className="btn orange ">
            &larr;
          </Button>
          <Button onClick={handleClick} name="/" className="btn orange ">
            &divide;
          </Button>
          <Button onClick={handleClick} name="7" className="btn">
            7
          </Button>
          <Button onClick={handleClick} name="8" className="btn">
            8
          </Button>
          <Button onClick={handleClick} name="6" className="btn">
            9
          </Button>
          <Button onClick={handleClick} name="*" className="btn orange">
            x
          </Button>
          <Button onClick={handleClick} name="4" className="btn">
            4
          </Button>
          <Button onClick={handleClick} name="5" className="btn">
            5
          </Button>
          <Button onClick={handleClick} name="6" className="btn">
            6
          </Button>
          <Button onClick={handleClick} name="-" className="btn">
            -
          </Button>
          <Button onClick={handleClick} name="1" className="btn">
            1
          </Button>
          <Button onClick={handleClick} name="2" className="btn">
            2
          </Button>
          <Button onClick={handleClick} name="3" className="btn">
            3
          </Button>
          <Button onClick={handleClick} name="+" className="btn orange">
            +
          </Button>
          <Button onClick={handleClick} name="0" className="btn span-3">
            0
          </Button>
          <Button onClick={calc} name="=" className="btn orange  equal">
            =
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App; 