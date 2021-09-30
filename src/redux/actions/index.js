import { getProducts } from "./products";
import { getCategoryList } from "./categoryList";
import { fetchProducts, fetchGategoryList } from "../../utils/api";

export function handleData() {
  return (dispatch) => {
    fetchProducts().then((products) => dispatch(getProducts(products)));
    fetchGategoryList().then((categories) =>dispatch(getCategoryList(categories)));

  };
}


