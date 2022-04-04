const fs = require("fs");
const path = require("path");

//Cara ringkas
// fs.readFile("./todo1.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

//Cara 2
fs.readFile(path.resolve(__dirname, "todo1.txt"), "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
