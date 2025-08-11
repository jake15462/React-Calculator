import { useState } from 'react';
import NumButton from './components/NumButton/numButton';
import OpButton from './components/opButton/opButton';
import ScreenInput from './components/ScreenInput/screenInput';
import HistoryButton from './components/HistoryButton/historyButton';
import Icon from './components/icon';
import HistoryComponent from './components/HistoryComponent/historyComponent';
import { useEffect } from "react";

import './App.css';

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [historyActive, setHistoryActive] = useState(false);
  const [history, setHistory] = useState([]);
  const [calculated, setCalculated] = useState(false);
  const operator = ["+", "-", "*", "/"];

  const handleButtonClick = (value) => {
    if (calculated) {
      setCurrentValue(value);
      setCalculated(false);
    } else {
      setCurrentValue(prev => (prev === "0" ? value : prev + value));
    }
  };

  const handleOperatorClick = (value) => {
    if (value === "C") {
      setCurrentValue("0");
    } else if (value === "del") {
      setCurrentValue(prev => prev.length > 1 ? prev.slice(0, -1) : "0");
    } else {
      const lastchar = currentValue[currentValue.length - 1];
      if (operator.includes(lastchar) || currentValue === "0") {
        return;
      } else {
        setCurrentValue(prev => (prev === "0" ? value : prev + value));
        setCalculated(false);
      }
    }
  };

const calculate = (value = currentValue) => {
  try {
    const result = new Function('return ' + value)();
    const formattedResult = String(result);
    setCurrentValue(formattedResult);
    setCalculated(true);
    const newEntry = value + " = " + formattedResult;
    setHistory(prev => [...prev, newEntry]);
  } catch {
    setCurrentValue("Error");
  }
};

const keyFunction = ({ key }) => {
  const keys = "0123456789.";
  const operators = "+-*/()";

  if (key === "Enter") {
    calculate(currentValue);
  return;
}

  if (key === "Backspace") {
    setCurrentValue(prev => prev.length > 1 ? prev.slice(0, -1) : "0");
    return;
  }

  if (key === "c") {
    setCurrentValue("0");
    return;
  }

  if (key === "h" && !historyActive) {
    setHistoryActive(true)
    return;
  } else if (key === "h" && historyActive) {
    setHistoryActive(false)
    return;
  }

  if (keys.includes(key)) {
    setCurrentValue(prev => (prev === "0" || calculated ? key : prev + key));
    setCalculated(false);
    return;
  }

  if (operators.includes(key)) {
    const lastChar = currentValue[currentValue.length - 1];
    if (currentValue !== "0" && !operators.includes(lastChar)) {
      setCurrentValue(prev => prev + key);
      setCalculated(false);
    }
    return;
  }
};

useEffect(() => {
  window.addEventListener("keydown", keyFunction);
  return () => {
    window.removeEventListener("keydown", keyFunction);
  };
}, [currentValue, calculated, historyActive]);



  return (
  <div className="calculator">
    <div className="calculator-inner">
      <ScreenInput value={currentValue} />
      <div className="btn-container">
        <HistoryButton icon="history" toggleHistory={() => setHistoryActive(prev => !prev)} isActive={historyActive} aria-label="History" />
        <OpButton type="del" icon="delete" onClick={handleOperatorClick} aria-label="Backspace" />
        <OpButton value="C" onClick={handleOperatorClick} aria-label="Clear" />
        <OpButton value="/" onClick={handleOperatorClick} aria-label="Divide" />
        <NumButton value="1" onClick={handleButtonClick} aria-label="number 1" />
        <NumButton value="2" onClick={handleButtonClick} aria-label="number 2" />
        <NumButton value="3" onClick={handleButtonClick} aria-label="number 3" />
        <OpButton value="+" onClick={handleOperatorClick} aria-label="Add" />
        <NumButton value="4" onClick={handleButtonClick} aria-label="number 4" />
        <NumButton value="5" onClick={handleButtonClick} aria-label="number 5" />
        <NumButton value="6" onClick={handleButtonClick} aria-label="number 6" />
        <OpButton value="-" onClick={handleOperatorClick} aria-label="Subtract" />
        <NumButton value="7" onClick={handleButtonClick} aria-label="number 7" />
        <NumButton value="8" onClick={handleButtonClick} aria-label="number 8" />
        <NumButton value="9" onClick={handleButtonClick} aria-label="number 9" />
        <OpButton value="*" onClick={handleOperatorClick} aria-label="Multiply" />
        <NumButton value="." onClick={handleButtonClick} aria-label="Decimal point" />
        <NumButton value="0" onClick={handleButtonClick} aria-label="number 0" />
        <OpButton id="calculate" value="=" onClick={() => calculate()} aria-label="Calculate" />
      </div>
      {historyActive && <HistoryComponent id="historyComponent" history={history} />}
    </div>
  </div>
  );
}

export default App;
