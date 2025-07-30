import React from "react";
import './opButton.scss';

function opButton({ value, onClick, id }) {
  return (
    <button id={id} className="op-button" onClick={() => onClick(value)}>
      {value}
    </button>
  );
}

export default opButton;