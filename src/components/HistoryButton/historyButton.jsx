import React from "react";
import './historyButton.scss';
import Icon from '../icon';

function historyButton({ icon, id }) {
  return (
    <button id={id} className="history-button">
      <Icon type={icon} width="24" height="24" />
    </button>
  );
}

export default historyButton;