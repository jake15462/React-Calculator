import React from "react";
import './numButton.scss';


function NumButton({ value, onClick }) {
  return (
    <button className="num-button" onClick={() => onClick(value)}>
      {value}
    </button>
  );
}

export default NumButton;