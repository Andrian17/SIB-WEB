const state = {
  isCoffeeMakerReady: true,
  seedStocks: {
    arabica: 250,
    robusta: 60,
    liberica: 90,
  },
};

const getSeeds = (type, miligrams) => {
  return new Promise((resolve, reject) => {
    if (state.seedStocks[type] >= miligrams) {
      // console.log(state.seedStocks[type]);
      state.seedStocks[type] -= miligrams;
      resolve("Biji kopi didapatkan!");
    } else {
      reject("Maaf stock kopi habis!");
    }
  });
};

const makeCoffee = () => {
  return new Promise((resolve, reject) => {
    if (state.isCoffeeMakerReady) {
      resolve("Kopi berhasil dibuat!");
    } else {
      reject("Maaf mesin tidak dapat digunakan!");
    }
  });
};

const servingToTable = () => {
  return new Promise((resolve) => {
    resolve("Pesanan kopi sudah selesai!");
  });
};

//Promise
function reserveACoffee(type, miligrams) {
  getSeeds(type, miligrams)
    .then(makeCoffee)
    .then(servingToTable)
    .then((resolvedValue) => {
      console.log(resolvedValue);
    })
    .catch((rejectedReason) => {
      console.log(rejectedReason);
    });
}

//Promise All
async function pesanKopi(type, miligrams) {
  try {
    const seeds = await getSeeds(type, miligrams);
    console.log(seeds);
    const coffee = await makeCoffee(seeds);
    console.log(coffee);
    const result = await servingToTable(coffee);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

/* Silakan ubah tipe kopi dan kuantitasnya, untuk mendapatkan promise rejection*/
//reserveACoffee("liberica", 80);
console.log("----------------------------");
pesanKopi("arabica", 80);
