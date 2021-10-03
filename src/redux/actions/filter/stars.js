export const SET_STARS = "SET_STARS";

export function setStar(stars) {
  return {
    type: SET_STARS,
    stars,
  };
}
