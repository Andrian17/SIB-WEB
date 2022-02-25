const mhs = {
  nama: "Andrian",
  nim: "1901050024",
  prodi: "D3 Sistem Informasi",
};

console.log(`Nama Saya ${mhs.nama}, Nim: ${mhs.nim}, Prodi: ${mhs.prodi}`);

const el = document.createElement("div");

el.innerHTML = `<h1>Nama: ${mhs.nama}</h1>
                <h4>Mhs: ${mhs.nim}</h4>
                <p>Nim: ${mhs.nim}</p>`;
document.body.append(el);

//Destructur Array dan Object

// const namaMhs = mhs.nama;
// const nimMhs = mhs.nim;

// console.log(namaMhs);
// console.log(nimMhs);

const { nama, nim, prodi } = mhs; // ==> nama = mhs.nama, nim = mhs.nim

console.log("Nama : " + nama);
console.log("Nim : " + nim);

const manusia = {
  kaki: 2,
  tangan: 2,
  mata: 2,
  jenis: "mamalia",
};

const { kaki, tangan, mata, jenis } = manusia;

console.log(jenis);
console.log(mata);

const kucing = ["4 Kaki", "Suara Meongggg", "Mata bulat", "Punya Bulu"];
const [cari1, cari2, cari3, cari4] = kucing;

console.log(cari1, cari2, cari3, cari4);

const [, suara, , bulu] = kucing;
console.log(suara, bulu);

//swap nilai menggunakan array
let a = 5,
  b = 10;

console.log(`Nilai a: ${a}, b: ${b}`);
[a, b] = [b, a];
console.log(`Nilai a: ${a}, b: ${b}`);

//spread Operator

const nilai = [70, 80, 90, 84];
console.log(Math.max(...nilai));

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const semuaFavorites = { favorites, others };
console.log(semuaFavorites);

//menggabungkan array menggunakan spread operator

const gabungArr = [...favorites, ...others];

console.log(gabungArr);

//Rest parameter

function jumlahkan(...object) {
  let res = 0;
  for (const item of object) {
    res += item;
  }
  return res;
}

console.log(jumlahkan(10, 20, 30, 40));

//Rest parameter pada array Destructing
const valueAcak = [
  "Acer",
  "Andrian",
  "Coding",
  "Salome",
  "Sate",
  "Nasi Goreng",
];

console.log("-------------------------------------------------");

const [laptop, namaSaya, hoby, ...makananFav] = valueAcak;

console.log(laptop);
console.log(namaSaya);
console.log(hoby);
console.log(makananFav);

//arrow Function

const daftarMhs = ["Andrian", "Cimen", "Ali", "Hadi", "Liana"].map((arr) =>
  arr.toUpperCase()
);

console.log(...daftarMhs);

const sayHello = (waktu, nama) => console.log(`Selamat ${waktu}, ${nama}`);

console.log(sayHello("Malam", "AndrianCimen"));

const ucapSelamat = (bahasa) => {
  if (bahasa === "Indonesia") {
    return `Ini bahasa ${bahasa}`;
  }
  return `Bukan bahasa Indonesia. ${bahasa}`;
};

console.log(ucapSelamat("Indonesia"));
console.log(ucapSelamat("Jepang"));
