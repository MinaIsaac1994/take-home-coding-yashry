import { getProducts } from "./products";
import { getCategoryList } from "./categoryList";
import { fetchProducts, fetchGategoryList } from "../../utils/api";

export function handleData() {
  return (dispatch) => {
    fetchGategoryList().then((categories) =>dispatch(getCategoryList(categories)));

    fetchProducts().then((products) => dispatch(getProducts(products)));
  };
}

export function handleCategory(id) {
  return (dispatch) => {
    fetchProducts(id).then((products) => dispatch(getProducts(products)));
  };
}
