"use strict";

// let fName = prompt("Nama Depan");
// let lName = prompt("Nama Belakang");
// let bahasa = prompt("Bahasa");

// let user = {
//   name: {
//     first: fName,
//     last: lName,
//   },
//   language: bahasa,
// };

// if (user.language === "English") {
//   alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
// } else if (user.language === "French") {
//   alert(
//     "Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!"
//   );
// } else if (user.language === "Japanese") {
//   alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
// } else {
//   alert(
//     "Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!"
//   );
// }

let img = document.querySelector("#gambar");
img.setAttribute("src", "https://i.ibb.co/55VG7vL/three-cat.jpg");

let cap = document.querySelector(".captions");

cap.innerHTML = "<h1>Nama Saya ANdrian</h1>";

let cap2 = document.querySelector(".captions2");

cap2.innerText = "<h1>ini dalah text</h1>";

let h1Baru = document.createElement("h1");

h1Baru.innerHTML = "OKOKOKOKOKOKOKOKOKO";

document.body.appendChild(h1Baru);
