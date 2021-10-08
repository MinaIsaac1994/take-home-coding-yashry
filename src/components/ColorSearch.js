import React from "react";
import { setColor } from "../redux/actions/filter/color";
import { connect } from "react-redux";

function ColorSearch({ dispatchColor }) {
  
  let colors = ["Yellow", "Red", "blue", "black"];
  let checkedColors = [];
  const handleChange = (e) => {
    let { name, checked } = e.target;
    if (checked) {
      checkedColors.push(name);
    } else if (!checked) {
      checkedColors = checkedColors.filter((color) => color !== name);
    }
    dispatchColor(checkedColors)
  };

  const handleSearchInput = (e) => {
    if(e.key=== 'Enter'){
      let SearchColor = e.target.value
      dispatchColor(SearchColor)
    }

  }
  return (
    <>
      <label htmlFor="color">Colors</label>
      <input
        type="search"
        className="form-control mr-sm-2"
        id="color"
        placeholder="Enter color"
        onKeyPress={handleSearchInput}
      />
      {colors.map((color) => {
        return (
          <div key={color}>
            <input
              type="checkbox"
              id={color}
              name={color}
              onChange={handleChange}
            />
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
