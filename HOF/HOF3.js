const items =[
  {Name : "Phone", USDPrice: 160, Brand : "Redmi"},
  {Name : "Laptop", USDPrice : 1500, Brand : "Lenovo" },
  {Name : "Watch", USDPrice : 80, Brand : "Fastrack" }
];
function convertToINR(priceInUSD) {
  return priceInUSD * 80;
}
let valueInINR = items.map((item) => ({
  ...item,
  INRPrice : convertToINR(item.USDPrice),
}));
console.log(valueInINR);