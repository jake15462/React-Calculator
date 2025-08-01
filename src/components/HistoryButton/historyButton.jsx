import React from "react";
import './historyButton.scss';
import Icon from '../icon';

function HistoryButton({ icon, toggleHistory, isActive }) {
  return (
    <button
      className={`history-button ${isActive ? "active" : ""}`}
      onClick={toggleHistory}
    >
      <Icon type={icon} width="24" height="24" />
    </button>
  );
}

export default HistoryButton;
