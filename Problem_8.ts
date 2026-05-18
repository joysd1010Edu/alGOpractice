type Problem8_Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const Problem8_calculateTotalPrice = (products: Problem8_Product[]): number => {
  return products.reduce((total, product) => {
    const itemTotal = product.price * product.quantity;
    const discountAmount = product.discount
      ? (itemTotal * product.discount) / 100
      : 0;
    return total + itemTotal - discountAmount;
  }, 0);
};

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(Problem8_calculateTotalPrice(products));