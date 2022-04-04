// const makeCoffee = (resolve, reject) => {
//   let coffee = false;
//   if (coffee) {
//     resolve("Coffee is ready");
//   } else {
//     reject("Coffee is not ready");
//   }
//   console.log("promise");
// };

// const orderCoffe = () => {
//   return new Promise(makeCoffee)
//     .then((e) => {
//       console.log(e);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };

// orderCoffe();

const stockCoffe = {
  coffeeBeans: 80,
  milk: 100,
};

// const checkStock = () => {
//   return new Promise((resolve, reject) => {
//     if (stockCoffe.coffeeBeans > 20 && stockCoffe.milk > 30) {
//       resolve("Coffee is ready");
//     } else {
//       reject("Coffee is not ready");
//     }
//   });
// };

// checkStock()
//   .then((e) => console.log(e))
//   .catch((e) => console.log(e));

//Chaining Promise
const state = {
  stock: {
    coffeeBeans: 90,
    milk: 100,
  },
  isMachineBusy: false,
};

const checkAvailability = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!state.isMachineBusy) {
        resolve("Machine Coffee is ready");
      } else {
        reject("Machine Coffee is not ready");
      }
    }, 3000);
  });
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state.stock.coffeeBeans > 20 && state.stock.milk > 30) {
        resolve("Stock Coffee is ready");
      } else {
        reject("Stock Coffee is not ready");
      }
    }, 2000);
  });
};

const brewCoffee = () => {
  console.log("Membuatkan Copi");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Kopi sudah siap");
    }, 1000);
  });
};

function makeExpresso() {
  checkAvailability()
    .then((e) => {
      console.log(e);
      return checkStock();
    })
    .then((e) => {
      console.log(e);
      return brewCoffee();
    })
    .then((value) => {
      console.log(value);
      state.isCoffeeMachineBusy = false;
    })
    .catch((rejectedReason) => {
      console.log(rejectedReason);
      state.isCoffeeMachineBusy = false;
    });
}
makeExpresso();

//All Promise
const makeExpressoWithAllPromise = [
  checkAvailability(),
  checkStock(),
  brewCoffee(),
];
const runPromises = Promise.all(makeExpressoWithAllPromise).then((e) => {
  console.log(e);
});
