const mhs = ["Andrian", "Cimen", "Ali", "Hadi", "Nadine"];

console.log(mhs);
//menambah array elemen paling akhir
mhs.push("Liana");
console.log(mhs);

//menghapus array elemen paling akhir
mhs.pop();
console.log(mhs);

//menambah array elemen paling awal
mhs.unshift("naya");
console.log(mhs);

//menghapus array elemem paling awal
mhs.shift();
console.log(mhs);

//menghapus array berdasarkan index berapa sampai keberapa
console.log("splice------------");
mhs.splice(1, 3);
console.log(mhs);
