import React from "react";
import { setColor } from "../redux/actions/filter/color";
import { connect } from "react-redux";

function ColorSearch({ dispatchColor }) {
  // dispatchColor  (color)
  let colors = [];
  const handleChange = (e) => {
    const [name, checked] = e.target;
    if (checked === true) {
      colors.push(name)
    }
    console.log(colors)
  };
  return (
    <>
      <label htmlFor="color">Colors</label>
      <input
        type="search"
        className="form-control mr-sm-2"
        id="color"
        placeholder="Enter color"
      />
      {colors.map((color) => {
        return (
          <div key={color}>
            <input type="checkbox" id={color} name={color} value={color} />
            <label htmlFor={color}>{color}</label>
          </div>
        );
      })}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchColor: (color) => dispatch(setColor(color)),
  };
};

export default connect(null, mapDispatchToProps)(ColorSearch);
