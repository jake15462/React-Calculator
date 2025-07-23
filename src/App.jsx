import { useState } from 'react';
import NumButton from './numButton/numButton';
import OpButton from './opButton/opButton';
import ScreenInput from './ScreenInput/screenInput';
import './App.css';

function App() {
  const [currentValue, setCurrentValue] = useState("0");

  const handleButtonClick = (value) => {
    setCurrentValue(prev => (prev === "0" ? value : prev + value));
  };

  const handleOperatorClick = (value) => {
    if (value === "C") {
      setCurrentValue("0");
    } else {
      setCurrentValue(prev => (prev === "0" ? value : prev + value));
    }
  };

const calculate = () => {
  try {
    const result = new Function('return ' + currentValue)();
    setCurrentValue(String(result));
  } catch {
    setCurrentValue("Error");
  }
};

  return (
    <div className="calculator">
      <ScreenInput value={currentValue} />
      <div className="calculator-inner">
        <OpButton value="" onClick={handleOperatorClick} />
        <OpButton value="" onClick={handleOperatorClick} />
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
