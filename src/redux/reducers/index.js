import { combineReducers } from "redux";
import products from "./products";
import categoriesList from "./categories";
import chooseCategory from "./chooseCategory";
import filter from "./filter";

export default combineReducers({
    products,
    chooseCategory,
    categoriesList,
    filter,
})