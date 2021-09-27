import React from "react";
import RangeSlider from "./RangeSlider";

export default function Filter() {
  return (
    <form>
      <div className="form-group border border-  rounded p-2 mt-2">
        <label>Price range</label>
        <RangeSlider />
      </div>
      <div className="form-group border border-primary rounded p-2 mt-2">
        <label for="color">Colors</label>
        <input
          type="email"
          class="form-control"
          id="color"
          aria-describedby="color"
          placeholder="Enter color"
        />
      </div>
    </form>
  );
}
