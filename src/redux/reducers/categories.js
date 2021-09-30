import {SET_CATEGORY_LIST } from "../actions/categoryList";

export default function categoriesList(state = {}, action) {
  switch (action.type) {
    case SET_CATEGORY_LIST:
      return {
        ...state,
        ...action.categoryList,
      };
    default:
      return state;
  }
}
