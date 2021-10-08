import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./starRating.scss";
import { setStar } from "../redux/actions/filter/stars";
import {connect} from 'react-redux'


 function StarRating({dispatchRating}) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleRating = (e) => {
    setRating(e.target.value)
    dispatchRating(e.target.value)

  }

  return (
    <div className="star-container">
      {[...Array(5)].map((star, index) => {
        const ratingVal = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingVal}
              onClick={(e) => handleRating(e)}
              />
            <FaStar
              className="star"
              size={20}
              color={ratingVal <= (hover||rating) ? "yellow" : "grey"}
              onMouseEnter={()=> setHover(ratingVal)}
              onMouseLeave={()=> setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchRating: (rating) => dispatch(setStar(rating)),
  };
};
export default connect(null,mapDispatchToProps)(StarRating)