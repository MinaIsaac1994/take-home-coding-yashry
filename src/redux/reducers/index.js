import { combineReducers } from "redux";
import products from "./products";
import categoriesList from "./categories";

export default combineReducers({
    products,
    categoriesList,
})