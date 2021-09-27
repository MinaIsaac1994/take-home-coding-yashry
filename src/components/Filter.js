import React from "react";
import RangeSlider from "./RangeSlider";

export default function Filter() {
  return (
    <form>
      <div className="form-group border border-primary  rounded p-2 mt-2">
        <label>Price range</label>
        <RangeSlider />
      </div>
      <div className="form-group border border-primary rounded p-2 mt-2">
        <label for="color">Colors</label>
        <input
          type="search"
          class="form-control mr-sm-2"
          id="color"
          placeholder="Enter color"
        />
        <input type="checkbox" id="Yellow" name="Yellow" value="Yellow  " />
        <label for="Yellow"> Yellow</label>
      </div>
    </form>
  );
}
