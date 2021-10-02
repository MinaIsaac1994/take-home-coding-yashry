import React from "react";
import ColorSearch from "./ColorSearch";
import RangeSlider from "./RangeSlider";
import StarRating from "./StarRating";

export default function FilterPrice() {
  return (
    <form>
      <div className="form-group border border-primary  rounded p-2 mt-2">
        <label>Price range</label>
        <RangeSlider />
      </div>
      <div className="form-group border border-primary rounded p-2 mt-2">
        <ColorSearch />
      </div>
      <div className="form-group border border-primary rounded p-2 mt-2">
        <StarRating />
      </div>
    </form>
  );
}
