export async function getCategories() {
  return ['Gabriel', 'Lucas', 'Soares'];
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return [categoryId, query];
}
