const restaurant = {
  name: "Krusty Crab",
  city: "Bikini Bottom",
  "favorite drink": "Soda Api",
  "favorite food": "Krabby Patty",
  isVegan: false,
};
const { name } = restaurant;
console.log(name);
const favoriteDrink = restaurant["favorite drink"];
console.log(favoriteDrink);

let evenNumber = [];
for (i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    evenNumber.push(i);
  }
}

//console.log(evenNumber);

let currency = new Map([
  ["USD", 14000],
  ["JPY", 131],
  ["SGD", 11000],
  ["MYR", 3500],
]);
const priceInJPY = 5000;
console.log("JPY", currency.get("JPY"));
const priceIDR = priceInJPY * currency.get("JPY");

console.log(priceIDR);

// const artistsAndSongs = {
//   Keyakizaka46: ["Silent Majority"],
//   Blackpink: ["How You Like That", "Ice Cream"],
//   JKT48: ["Rapsodi", "Heavy Rotation"],
//   Twice: ["What is Love?"],
// };

// artistsAndSongs["Babymetal"] = ["Gimme chocolate"];
// delete artistsAndSongs["Keyakizaka46"];
// artistsAndSongs["Blackpink"].push("Rose - Gone");

// console.log(artistsAndSongs);

// const artistsAndSongs = {
//   Keyakizaka46: ["Silent Majority"],
//   Blackpink: ["How You Like That", "Ice Cream"],
//   JKT48: ["Rapsodi", "Heavy Rotation"],
//   Twice: ["What is Love?"],
// };

// artistsAndSongs["Babymetal"] = ["Gimme chocolate"];

// delete artistsAndSongs["Keyakizaka46"];

// console.log(artistsAndSongs);

const capital = {
  Jakarta: "Indonesia",
  London: "England",
  Tokyo: "Japan",
};
capital["New Delhi"] = "Indonesia";

console.log(capital["Indonesia"]);
