import React from "react";
import ColorSearch from "./ColorSearch";
import RangeSlider from "./RangeSlider";

export default function Filter() {
  return (
    <form>
      <div className="form-group border border-primary  rounded p-2 mt-2">
        <label>Price range</label>
        <RangeSlider />
      </div>
      <div className="form-group border border-primary rounded p-2 mt-2">
        <ColorSearch />
      </div>
    </form>
  );
}
