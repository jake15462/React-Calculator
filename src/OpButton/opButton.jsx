import React from "react";
import './opButton.scss';

function opButton({ value, onClick }) {
  return (
    <button className="op-button" onClick={() => onClick(value)}>
      {value}
    </button>
  );
}

export default opButton;