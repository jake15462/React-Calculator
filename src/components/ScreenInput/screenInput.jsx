import React from "react";
import './screenInput.scss';

function ScreenInput({ value }) {
  return (
    <input className="input-screen" value={value} />
  );
}

export default ScreenInput;