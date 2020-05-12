export async function getCategories() {
  return ['Gabriel, Lucas'];
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return [categoryId, query];
}
