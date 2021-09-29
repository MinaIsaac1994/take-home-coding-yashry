export const SET_CATEGORY = "SET_CATEGORY";
export function setCategory(categoryId) {
  return {
    type: SET_CATEGORY,
    categoryId,
  };
}
