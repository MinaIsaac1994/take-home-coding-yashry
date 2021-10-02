import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./starRating.scss";

export default function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

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
              onClick={() => setRating(ratingVal)}
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
