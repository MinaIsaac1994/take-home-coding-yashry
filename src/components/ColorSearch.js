import React from "react";

export default function ColorSearch() {
  let colors = ["Yellow", "Blue", "Red", " Greem", "Black"];
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
          return(
        <div key={color}>
          <input type="checkbox" id={color} name={color} value={color} />
          <label htmlFor={color}>{color}</label>
       </div>

          )
      })}
    </>
  );
}
