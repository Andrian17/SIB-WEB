//membuat object

const mhs1 = {
  nama: "Andrian",
  nim: 1901050024,
  jurusan: "D3 Sistem Informasi",
};

console.log("===========================================");

console.log(mhs1.nama);
console.log(mhs1.nim);

console.log("===========================================");

//menambahkan object
mhs1.email = "andriancimen@gmail.com";

console.log(mhs1.email);

mhs1.jurusan = "S1 Ilkom";

console.log(mhs1.jurusan);

const restaurant = {
  name: "Andrian",
  city: "Bima City",
  "favorite drink": "Avocado Juice",
  "favorite food": "Sate",
  isVegan: false,
};

const name = restaurant.name;
const favoriteDrink = restaurant["favorite drink"];

console.log(favoriteDrink);

let cobaArray = ["Nama", "Saya", "Andrian", 19, 30, true];
//menambahkan array
cobaArray.push(false);
cobaArray.push("KOKOKODiwbfuwbfuwfbwu");
console.log(cobaArray);

//mengeluarkan data atau elemen terakhir dari array
cobaArray.pop();
console.log(cobaArray);
console.log("-----------------------------------------");

//shift() digunakan untuk mengeluarkan elemen pertama dari array
cobaArray.shift();
console.log(cobaArray);
console.log("-----------------------------------------");

//unshift() digunakan untuk menambahkan elemen di awal array
cobaArray.unshift("Elemen Pertama");
console.log(cobaArray);
console.log("-----------------------------------------");

//menghapus data dari array
delete cobaArray[0];
console.log(cobaArray);
console.log("-----------------------------------------");

//Untuk menghapus elemen, gunakan metode splice()
cobaArray.splice(2, 2);
console.log(cobaArray);
console.log("-----------------------------------------");

// for (const iterator of cobaArray) {
//   console.log(iterator);
// }

// let evenNumber = [];

// for (let index = 0; index <= 100; index++) {
//   if (index % 2 == 0) {
//     evenNumber.push(index);
//   }
// }

// for (const iterator of evenNumber) {
//   console.log(iterator);
// }
