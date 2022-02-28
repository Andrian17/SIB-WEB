//const kopi1 = require("./object");
import kopi1 from "./object.js";

//console.log("ini :" + kopi1);

function rendeEl(obj) {
  console.log(obj);
  let containerKopi = document.getElementById("coffee-stock-list");
  let li = document.createElement("li");
  li.innerHTML = "";
  for (const el in obj) {
    li.innerHTML += `Stok Kopi ${el}, ${obj[el]}`;
  }
  containerKopi.append(li);
}

rendeEl(kopi1);
