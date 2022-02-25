//setTimeout
// setTimeout(() => console.log("Ada yang bisa saya bantu"), 1000);
// console.log(`Terimakasi telah datang`);

// console.log(`---------------------------------`);
// //callback
// const getCake = (callback) => {
//   let cake = null;
//   console.log("Sedang membuat kue, silakan tunggu ....");
//   setTimeout(() => {
//     cake = "Kue Selesai!";
//     callback(cake);
//   }, 3000);
// };

// getCake((cake) => {
//   console.log(cake);
// });

//callback2
// const buatKopi = () => {
//   let kopi = null;
//   console.log("Sedang membuat kopi, tunggu");
//   setTimeout(() => {
//     kopi = "Kopi selsai";
//     console.log(kopi);
//     //return kopi;
//   }, 2000);
//   //return kopi;
// };

// const kopi = buatKopi();
// console.log(kopi);

//callback 3
// const buatTeh = (callback) => {
//   let teh = null;
//   console.log("Sedang membuat teh, tunggu");
//   setTimeout(() => {
//     teh = "Teh telah dibuat";
//     callback(teh);
//   }, 2000);
// };

// buatTeh((teh) => {
//   console.log(teh);
// });

const executorFunctions = (resolve, reject) => {
  let kondisi = true;
  if (kondisi) {
    resolve(`Masalah Sudah diselesainkan`);
  } else {
    reject(`biarkan saja`);
  }
};

const handlerSuccess = (resolveValue) => {
  console.log(resolveValue);
};

const handlerReject = (reasonReject) => {
  console.log(reasonReject);
};

const excute = new Promise(executorFunctions);
excute.then(handlerSuccess, handlerReject);
console.log(excute);
