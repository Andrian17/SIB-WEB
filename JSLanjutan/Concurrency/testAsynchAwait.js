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

async function makeExpresso() {
  try {
    let prom1 = await checkAvailability();
    console.log(prom1);
    let prom2 = await checkStock();
    console.log(prom2);
    let prom3 = await brewCoffee();
    console.log(prom3);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}
makeExpresso();
