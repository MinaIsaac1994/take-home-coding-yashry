import { SET_STARS } from "../actions/filter/stars";
import { SET_LOWER_PRICE,SET_UPPER_PRICE } from "../actions/filter/price";
import { SET_COLOR } from "../actions/filter/color";

const initialFilter = {
  stars: null,
  price:{
    upper:null,
    lower:null
  },
  color: [],
};

export default function filter(filter = initialFilter, action) {
  switch (action.type) {
    case SET_STARS:
      return {
        ...filter,
        stars: action.stars,
      };
    case SET_UPPER_PRICE:
      return {
        ...filter,
        price:{
          upper:action.price,
          lower:filter.price.lower
        }
      };
    case SET_LOWER_PRICE:
      return {
        ...filter,
        price:{
          upper:filter.price.upper,
          lower:action.price,
        }
      };

    case SET_COLOR:
      return {
        ...filter,
        color: action.color,
      };

    default:
      return filter;
  }
}
