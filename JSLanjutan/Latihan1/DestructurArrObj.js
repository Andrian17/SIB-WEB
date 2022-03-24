const mahasiswa = {
  nama: "Andrian",
  nim: 1901050024,
  prodi: "D3 Sistem Informasi",
};

// const { nama, nim, prodi } = mahasiswa;
// console.log(nama, nim, prodi);

let nama = "Cimen";
let nim = 1901059999;

({ nama, nim, prodi } = mahasiswa);

console.log(nama);

const buah = ["nanas", "mangga", "apel", "anggur"];
const [nanas, mangga, apel] = buah;
console.log(buah);
console.log(nanas);
console.log(apel);

const keluarga = ["Ali", "Hadi", "Liana", "Andrian"];
const [, , Liana, Saya] = keluarga;
console.log(Liana, Saya);
