const gambar = document.querySelector("#gambar");
gambar.setAttribute("width", "300px");
gambar.setAttribute("height", "300px");

const tombol = document.querySelectorAll(".button");

let button = tombol[3].childNodes[0];

button.setAttribute("disabled", "disabled");

tombol[1].childNodes[0].style.borderRadius = "6px";
tombol[2].childNodes[0].style.borderRadius = "6px";
tombol[0].childNodes[0].style.borderRadius = "6px";
