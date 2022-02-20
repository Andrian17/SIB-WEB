if (typeof Storage) {
  console.log("OK");
} else {
  console.log("gagal");
}

/* sessions Storage */
// const cacheKey = "NUMBER";
// if (typeof Storage !== "undefined") {
//   // pengecekkan apakah data sessionStorage dengan key NUMBER tersedia atau belum
//   if (sessionStorage.getItem(cacheKey) === "undefined") {
//     // Jika belum maka akan atur dengan nilai awal yakni 0
//     sessionStorage.setItem(cacheKey, 0);
//   }

//   const button = document.querySelector("#ok");
//   const count = document.querySelector("#caption");
//   button.addEventListener("click", function (event) {
//     let number = sessionStorage.getItem(cacheKey);
//     number++;
//     sessionStorage.setItem(cacheKey, number);
//     count.innerText = sessionStorage.getItem(cacheKey);
//   });
// } else {
//   alert("Browser tidak mendukung Web Storage");
// }

/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus aut dolorum quo laboriosam alias deleniti repellendus quidem. Tempora, molestiae alias? Deserunt asperiores quam optio veniam quidem veritatis aperiam nihil. */

// Local Storage
const cacheKey = "NUMBER";
if (typeof Storage !== "undefined") {
  // pengecekkan apakah data sessionStorage dengan key NUMBER tersedia atau belum
  if (localStorage.getItem(cacheKey) === "undefined") {
    // Jika belum maka akan atur dengan nilai awal yakni 0
    localStorage.setItem(cacheKey, 0);
  }

  const button = document.querySelector("#ok");
  const clearButton = document.querySelector("#hapus");
  const count = document.querySelector("#caption");
  button.addEventListener("click", function (event) {
    let number = localStorage.getItem(cacheKey);
    number++;
    localStorage.setItem(cacheKey, number);
    count.innerText = localStorage.getItem(cacheKey);
  });

  clearButton.addEventListener("click", function (event) {
    localStorage.removeItem(cacheKey);
  });
} else {
  alert("Browser tidak mendukung Web Storage");
}
