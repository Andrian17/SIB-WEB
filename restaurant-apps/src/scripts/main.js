import data from "../DATA.json";
import "./listRestaurant.js";

const listRestaurant = document.createElement("list-restaurant");
listRestaurant.renderData = data.restaurants;

const btnRate = document.querySelector(".top-ratings");
btnRate.addEventListener("click", function (e) {
  data.restaurants.sort((a, b) => {
    return b.rating - a.rating;
  });
  listRestaurant.renderData = data.restaurants;
  btnRate.style.transition = "transform 4s ease";
  btnRate.style.transform = "translate(-3000px, 0)";
});

const section2 = document.querySelector(".recommended-restaurant");
section2.append(listRestaurant);

const menuCanv = document.querySelector("#menu-canvas");
menuCanv.addEventListener("click", function (e) {
  menuCanv.classList.toggle("click-menu");
  nav.classList.toggle("open");
  e.stopPropagation();
});

const nav = document.querySelector("nav");

document.querySelector("body").addEventListener("click", function (e) {
  nav.classList.remove("open");
});
