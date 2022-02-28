function buatKopi() {
  return new Promise((resolve, reject) => {
    const seeds = 100;
    setTimeout(() => {
      if (seeds >= 10) {
        resolve("Coffee didapatkan!");
      } else {
        reject("Biji kopi habis!");
      }
    }, 2000);
  });
}

function sajikanKopi() {
  buatKopi().then((e) => console.log(e));
  console.log("OK");
}

//sajikanKopi();

async function kopi2() {
  const kopi = await buatKopi();
  console.log(kopi);
}

//kopi2();

async function kopi3() {
  console.log("kopi 3.1");

  try {
    const kopi = await buatKopi();
    console.log(kopi);
  } catch (e) {
    console.log(e);
  }
}
kopi3();
console.log("kopi 3.2");
