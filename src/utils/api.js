export async function fetchGategories() {
  let url = "http://test-api.edfa3ly.io/category";
  return await fetch(url).then((res) => res.json());
}

export async function fetchItems() {
  let url = "https://test-api.edfa3ly.io/product";
  return await fetch(url).then((res) => res.json())
}

export async function chooseCategory(categoryId) {
    let url = `https://test-api.edfa3ly.io/product/categoryId=${categoryId}`
  return await fetch(url).then((res)=>res.json())
}