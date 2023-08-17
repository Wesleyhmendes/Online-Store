export async function getCategories() {
  const api = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await api.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId: string, query: string) {
  const api = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  const data = await api.json();
  return data;
}

export async function getProductById(PRODUCT_ID: string) {
  const api = await fetch(`https://api.mercadolibre.com/items/${PRODUCT_ID}`);
  const data = await api.json();
  return data;
}
