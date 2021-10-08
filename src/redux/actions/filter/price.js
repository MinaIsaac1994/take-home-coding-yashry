export const SET_UPPER_PRICE = "SET_UPPER_PRICE";
export const SET_LOWER_PRICE = "SET_LOWER_PRICE";

export function setUpperPrice(price) {
  return {
    type: SET_UPPER_PRICE,
    price,
  };
}
export function setLowerPrice(price) {
  return {
    type: SET_LOWER_PRICE,
    price,
  };
}
