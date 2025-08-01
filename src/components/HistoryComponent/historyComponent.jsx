import React from "react";
import './historyComponent.scss';

function HistoryComponent({ id, history }) {
  return (
    <div id={id} className="history-component">
      <h1>History</h1>
      <pre>{history.join('\n')}</pre>
    </div>
  );
}

export default HistoryComponent;
