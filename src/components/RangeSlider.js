import React, { useState } from "react";
import "./RangeSlider.scss";
import {setUpperPrice,setLowerPrice} from '../redux/actions/filter/price'
import {connect} from 'react-redux'


function RangeSlider({dispatchUpperPrice,dispatchLowerPrice}) {
  const [lowerVal, setLowerVal] = useState("0");
  const [upperVal, setUpperVal] = useState("1000");
  

  const setPrices= ()=> {
    
  dispatchUpperPrice(upperVal)
  dispatchLowerPrice(lowerVal)
  }
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
      <button  type="button" onClick={setPrices}>Check</button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchUpperPrice: (price) => dispatch(setUpperPrice(price)),
    dispatchLowerPrice: (price) => dispatch(setLowerPrice(price)),
  };
};
export default connect(null,mapDispatchToProps)(RangeSlider);
