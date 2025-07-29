import React from "react";
import './historyButton.scss';

function historyButton({ img, id }) {
  return (
    <button id={id} className="history-button">
      <img src={img} alt="" />
    </button>
  );
}

export default historyButton;