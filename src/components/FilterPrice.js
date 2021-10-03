import React from "react";
import ColorSearch from "./ColorSearch";
import RangeSlider from "./RangeSlider";
import StarRating from "./StarRating";
import { connect } from "react-redux";
import {setPrice} from '../redux/actions/filter/price'

function FilterPrice({dispatchPrice}) {
  dispatchPrice(500)
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


const mapDispatchToProps = (dispatch) => {
  return {
    dispatchPrice: (price) => dispatch(setPrice(price)),
  };
};

export default connect(null,mapDispatchToProps)(FilterPrice);
