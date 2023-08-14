const products = [
  { name: "Laptop", price: 120000 },
  { name: "Mobile", price: 70000 },
  { name: "Laptop Bag", price: 20000 },
  { name: "Watch", price: 20000 },
  { name: "Mobile Charger", price: 1500 },
];

function check(products) {
  let maxProduct = products[0];
  let minProduct = products[0];

  for (let index = 1; index < products.length; index++) {
    const currentProduct = products[index];

    if (currentProduct.price > maxProduct.price) {
      maxProduct = currentProduct;
    }

    if (currentProduct.price < minProduct.price) {
      minProduct = currentProduct;
    }
  }
  return {
    maxProduct,
    minProduct,
  };
}
const result = check(products);
console.log(`The product with maximum amount is ${result.maxProduct.name} which is priced at Rs.${result.maxProduct.price}`);
console.log(`The product with minimum amount is ${result.minProduct.name} which is priced at Rs.${result.minProduct.price}`);
