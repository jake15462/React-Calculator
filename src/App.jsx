import { useState } from 'react';
import NumButton from './components/NumButton/numButton';
import OpButton from './components/opButton/opButton';
import ScreenInput from './components/ScreenInput/screenInput';
import HistoryButton from './components/HistoryButton/historyButton';
import Icon from './components/icon';
import HistoryComponent from './components/HistoryComponent/historyComponent';
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
    const formattedResult = String(result);
    setCurrentValue(formattedResult);
    setCalculated(true);
    const newEntry = currentValue + " = " + formattedResult;
    setHistory(prev => [...prev, newEntry]); // Just add the string to the array
  } catch {
    setCurrentValue("Error");
  }
};

  return (
  <div className="calculator">
    <div className="calculator-inner">
      <ScreenInput value={currentValue} />
      <div className="btn-container">
        <HistoryButton icon="history" toggleHistory={() => setHistoryActive(prev => !prev)} isActive={historyActive} />
        <OpButton icon="delete" onClick={handleOperatorClick} />
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
      {historyActive && <HistoryComponent id="historyComponent" history={history} />}
    </div>
  </div>
  );
}

export default App;
