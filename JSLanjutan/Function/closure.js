// function init(nama) {
//   //   let namaLengkap = nama;
//   //   function tampilNama() {
//   //     console.log(namaLengkap);
//   //   }
//   //   tampilNama();
//   return (waktu) => {
//     console.log(`Halo ${nama}, Selamat ${waktu}`);
//   };
// }

// let cetakNama = init("Andrian");

// cetakNama("Sore");

let tambah = (function () {
  let counter = 0;
  return () => {
    return ++counter;
  };
})();

// console.log(tambah());
// console.log(tambah());
// console.log(tambah());
// console.log(tambah());

// let runTambah = tambah();
// console.log(runTambah());
// console.log(runTambah());
// console.log(runTambah());

console.log(tambah());
console.log(tambah());
console.log(tambah());
console.log(tambah());
console.log(tambah());
