export async function fetchGategoryList() {
  let url = "http://test-api.edfa3ly.io/category";
  return await fetch(url).then((res) => res.json());
}


export async function fetchProducts(categoryId) {
  if (categoryId) {
    let productByCategoryUrl = `https://test-api.edfa3ly.io/product?categoryId=${categoryId}`;
    return await fetch(productByCategoryUrl).then((res) => res.json());
  } 
  else {
    let allProductsUrl = "https://test-api.edfa3ly.io/product"
    return await fetch(allProductsUrl).then((res) => res.json());}
}
