// console.log("test1.js");
// setTimeout(() => {
//   console.log("Setelah 3 detik");
// }, 3000);
// console.log("Tunggu 3 detik");

//CallBack
const orderCoffe = (callback) => {
  let coffee = null;
  console.log("Sedang membuat kopi, silakan tunggu...");
  setTimeout(() => {
    coffee = "Coffee is ready";
    callback(coffee);
  }, 3000);
};

orderCoffe((coffee) => {
  console.log(coffee);
});

const orderFood = (callback) => {
  let food = null;
  console.log("Sedang membuat makanan, silakan tunggu...");
  setTimeout(() => {
    food = "Food is ready";
    callback(food);
  }, 3000);
};

orderFood((food) => {
  console.log(food);
});

//Promise
const orderCoffePromise = (resolve, reject) => {
  let coffee = false;
  if (coffee) {
    resolve("Coffee is ready");
  } else {
    reject("Coffee is not ready");
  }
};

const testPromiseOrderCoffe = new Promise(orderCoffePromise);

console.log(testPromiseOrderCoffe);
