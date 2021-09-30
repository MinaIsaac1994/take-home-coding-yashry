import { combineReducers } from "redux";
import products from "./products";
import categoriesList from "./categories";
import chooseCategory from "./chooseCategory";

export default combineReducers({
    products,
    categoriesList,
    chooseCategory,
})