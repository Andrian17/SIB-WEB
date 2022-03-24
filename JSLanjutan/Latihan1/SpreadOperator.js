const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];

// console.log(allFavorites);

console.log(...allFavorites);

const k1 = {
  nama: "ANdrian",
  nim: 1901050024,
  alamat: "Bima",
};

const k2 = {
  jurusan: "D3 Sistem Informasi",
  semester: 6,
};

const k3 = { ...k1, ...k2 };
console.log(k3);
