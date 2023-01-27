import React from "react";
import { useState } from "react";

function Temperature() {
  const [temp, setTemp] = useState(0);
  const [tempColor, setTempColor] = useState("cold");

  const increaseTemp = () => {
    const updatedTemp = temp + 1;
    if (updatedTemp < 15) {
      setTempColor("cold");
    } else if (updatedTemp >= 15 && updatedTemp < 23) {
      setTempColor("neutral");
    } else {
      setTempColor("hot");
    }
    setTemp(updatedTemp);
  };

  const decreaseTemp = () => {
    const updatedDecreaseTemp = temp - 1;

    if (updatedDecreaseTemp < 15) {
      setTempColor("cold");
    } else if (updatedDecreaseTemp >= 15 && updatedDecreaseTemp < 23) {
      setTempColor("neutral");
    } else {
      setTempColor("hot");
    }
    setTemp(updatedDecreaseTemp);
    if (updatedDecreaseTemp < 0) {
      setTemp(0);
    }
  };

  return (
    <div className="container">
      <div className={`tempContainer ${tempColor}`}>
        <p className="temp">{temp} ℃</p>
      </div>
      <div className="operator">
        <button className="operation" onClick={increaseTemp}>
          +
        </button>
        <button className="operation" onClick={decreaseTemp}>
          -
        </button>
      </div>
    </div>
  );
}

export default Temperature;
