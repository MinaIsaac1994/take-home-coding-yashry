export const SET_CATEGORY_LIST = "SET_CATEGORY_LIST";
export function getCategoryList(categoryList) {
  return {
    type: SET_CATEGORY_LIST,
    categoryList,
  };
}
