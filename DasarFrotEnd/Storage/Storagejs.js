// localStorage.setItem("nama", "Andrian");
// localStorage.setItem("nim", "1901050024");

// localStorage.removeItem("nim");
// const h1 = document.createElement("h1");
// h1.innerText = `Nama Saya ${localStorage.getItem(
//   "nama"
// )} Nim: ${localStorage.getItem("nim")}`;

// document.body.append(h1);

// const btnIncrement = document.getElementById("incrementButton");
// const h2Count = document.getElementById("count");

// let i = 0;
// btnIncrement.addEventListener("click", () => {
//   h2Count.innerText = i;
//   i++;
// });

const localStorageKey = "PRESS_FREQUENCY";

// pengecekan apakah data localStorage dengan key count tersedia atau belum
// if (typeof Storage !== "undefined") {
//   if (localStorage.getItem(localStorageKey) === null) {
//     // Jika item pada local storage belum ada
//     // maka akan diberi nilai awal yakni 0
//     localStorage.setItem(localStorageKey, 0);
//   }
//   const Incrementbutton = document.querySelector("#incrementButton");
//   const clearButton = document.querySelector("#clear");
//   const countDisplay = document.querySelector("#count");

//   // memberikan nilai item dari local storage
//   countDisplay.innerText = localStorage.getItem(localStorageKey);

//   // mengupdate nilai dari item local storage jika tombol ditekan
//   Incrementbutton.addEventListener("click", function () {
//     let count = localStorage.getItem(localStorageKey);
//     count++;
//     localStorage.setItem(localStorageKey, count);
//     countDisplay.innerText = localStorage.getItem(localStorageKey);
//   });

//   // memberikan nilai 0 ke tampilan karena di-reset dan menghapus item
//   clearButton.addEventListener("click", function () {
//     localStorage.removeItem(localStorageKey);
//     countDisplay.innerText = 0;
//   });
// } else {
//   alert("Browser yang Anda gunakan tidak mendukung Web Storage");
// }

if (typeof Storage != "undefined") {
  if (localStorage.getItem(localStorageKey) === null) {
    localStorage.setItem(localStorageKey, 0);
  }
  const Incrementbutton = document.querySelector("#incrementButton");
  const clearButton = document.querySelector("#clear");
  const countDisplay = document.querySelector("#count");
  //menampilkan nilai ke browser
  countDisplay.innerText = localStorage.getItem(localStorageKey);

  Incrementbutton.addEventListener("click", () => {
    let count = localStorage.getItem(localStorageKey);
    count++;
    localStorage.setItem(localStorageKey, count);
    countDisplay.innerText = localStorage.getItem(localStorageKey);
  });

  clearButton.addEventListener("click", () => {
    localStorage.removeItem(localStorageKey);
    countDisplay.innerText = localStorage.getItem(localStorageKey);
  });
}
