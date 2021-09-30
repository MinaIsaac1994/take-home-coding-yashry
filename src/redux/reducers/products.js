import { GET_PRODUCTS } from "../actions/products";

export default function products(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        ...action.products,
      };
    default:
      return state;
  }
}
