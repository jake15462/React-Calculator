import { useState } from 'react';
import NumButton from './numButton/numButton';
import OpButton from './opButton/opButton';
import ScreenInput from './ScreenInput/screenInput';
import HistoryButton from './HistoryButton/historyButton';
import './App.css';

function App() {
  const [currentValue, setCurrentValue] = useState("0");
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
    } else if (value === "DEL") {
      setCurrentValue(prev => prev.length > 1 ? prev.slice(0, -1) : "0");
    } else {
      const lastchar = currentValue[currentValue.length - 1];
      if (operator.includes(lastchar)) {
        return;
      } else {
        setCurrentValue(prev => (prev === "0" ? value : prev + value));
        setCalculated(false);
      }
    }
  };

const calculate = () => {
  try {
    const result = new Function('return ' + currentValue)();
    setCurrentValue(String(result));
    setCalculated(true);
  } catch {
    setCurrentValue("Error");
  }
};

  return (
    <div className="calculator">
      <ScreenInput value={currentValue} />
      <div className="calculator-inner">
        <HistoryButton onClick={handleOperatorClick} />
        <OpButton value="DEL" onClick={handleOperatorClick} />
        <OpButton value="C" onClick={handleOperatorClick} />
        <OpButton value="/" onClick={handleOperatorClick} />
        <NumButton value="1" onClick={handleButtonClick} />
        <NumButton value="2" onClick={handleButtonClick} />
        <NumButton value="3" onClick={handleButtonClick} />
        <OpButton value="+" onClick={handleOperatorClick} />
        <NumButton value="4" onClick={handleButtonClick} />
        <NumButton value="5" onClick={handleButtonClick} />
        <NumButton value="6" onClick={handleButtonClick} />
        <OpButton value="-" onClick={handleOperatorClick} />
        <NumButton value="7" onClick={handleButtonClick} />
        <NumButton value="8" onClick={handleButtonClick} />
        <NumButton value="9" onClick={handleButtonClick} />
        <OpButton value="*" onClick={handleOperatorClick} />
        <NumButton value="." onClick={handleButtonClick} />
        <NumButton value="0" onClick={handleButtonClick} />
        <OpButton id="calculate" value="=" onClick={calculate} />
      </div>
    </div>
  );
}

export default App;
