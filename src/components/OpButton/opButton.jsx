import React from "react";
import './opButton.scss';
import Icon from "../icon";

function opButton({ value, onClick, id, icon }) {
  return (
    <button id={id} className="op-button" onClick={() => onClick(value)}>
      {value}
      <Icon type={icon} width="24" height="24" />
    </button>
  );
}

export default opButton;