import { SET_STARS } from "../actions/filter/stars";
import { SET_PRICE } from "../actions/filter/price";
import { SET_COLOR } from "../actions/filter/color";

const initialFilter = {
  star: null,
  price: [],
  color: ['lol'],
};

export default function filter(filter = initialFilter, action) {
  switch (action.type) {
    case SET_STARS:
      return {
        ...filter,
        stars: action.stars,
      };
    case SET_PRICE:
      return {
        ...filter,
        price: action.price,
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
