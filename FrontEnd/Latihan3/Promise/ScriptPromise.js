//Promise
let kondisi = true;
const kopi1 = (resolve, reject) => {
  if (kondisi) {
    resolve(`Kopi telah dibuat`);
  } else {
    reject(`Kopi tidak dibuat`);
  }
};

const cobaKopi1 = new Promise(kopi1);
cobaKopi1
  .then((e) => {
    console.log(`Exekusi Ok. ${e}`);
  })
  .catch((e) => {
    console.log(`Exekusi NOt OK. ${e}`);
  });
