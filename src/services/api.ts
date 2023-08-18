const URL = 'https://api.mercadolibre.com/';

export async function getCategories() {
  const api = await fetch(`${URL}/sites/MLB/categories`);
  const data = await api.json();
  return data;
}

export async function getProductsByCategory(categoryId: string) {
  const api = await fetch(`${URL}/sites/MLB/search?category=${categoryId}`);
  const data = await api.json();
  return data;
}

export async function getProductsByQuery(query: string) {
  const api = await fetch(`${URL}/sites/MLB/search?q=${query}`);
  const data = await api.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId: string, query: string) {
  const api = await fetch(`${URL}/sites/MLB/search?category=${categoryId}&q=${query}`);
  const data = await api.json();
  return data;
}

export async function getProductById(PRODUCT_ID: string) {
  const api = await fetch(`${URL}/items/${PRODUCT_ID}`);
  const data = await api.json();
  return data;
}
