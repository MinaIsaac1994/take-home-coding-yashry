import React, { useState } from "react";
import "./RangeSlider.scss";

export default function RangeSlider() {
  const [lowerVal, setLowerVal] = useState("0");
  const [upperVal, setUpperVal] = useState("750");
  console.log(lowerVal, upperVal);
  return (
    <>
      <div className="multi-range">
        
        <input
          type="range"
          min="0"
          max="1000"
          value={lowerVal}
          id="lower"
          onChange={(e) => {
            let result = Math.min(e.target.value, upperVal - 100);
            setLowerVal(result);
          }}
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={upperVal}
          id="upper"
          onChange={(e) => {
            let result = Math.max(e.target.value, lowerVal + 100);
            setUpperVal(result);
          }}
        />
      </div>
      <span>
        From
        <input
          type="text"
          className="left-number"
          value={`$${lowerVal}`}
          readOnly
        />{" "}
        to
        <input
          type="text"
          className="right-number"
          value={`$${upperVal}`}
          readOnly
        />
      </span>
    </>
  );
}
