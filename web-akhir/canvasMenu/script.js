const hamburger = document.getElementById("hamburger");
const drawerElement = document.querySelector("#drawer");
hamburger.addEventListener("click", function (e) {
  drawerElement.classList.toggle("open");
  e.stopPropagation();
});

const mainEl = document.querySelector("main");
mainEl.addEventListener("click", function (e) {
  drawerElement.classList.remove("open");
  e.stopPropagation();
});
