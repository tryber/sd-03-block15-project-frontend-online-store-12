export async function getCategories() {
  const categories = fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return (await categories).json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  return products.json();
}

console.log(getProductsFromCategoryAndQuery('computador', 'computador'));
