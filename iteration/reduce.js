const nums = [1, 2, 3];

// const total = nums.reduce((acc, currVal) => {
//   console.log(`accummlator:${acc} and current value: ${currVal}`);
//   return acc + currVal;
// }, 0);

// console.log(total);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "python",
    price: 999,
  },
  {
    itemName: "mobile dev",
    price: 5999,
  },
  {
    itemName: "data science",
    price: 12999,
  },
];

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(total);
