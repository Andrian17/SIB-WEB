import DataSource from "../data/data-source.js";

import "../components/clubList.js";

//import file search-bar.js from "../../../../../../
import "../components/searcBar.js";

const main = () => {
  //const searchElement = document.querySelector("#searchElement");

  //mengambil custom elemen tag search-bar
  const searchElement = document.querySelector("search-bar");

  //event dimatikan karena akan dijalankan di file search-bar.js
  //const buttonSearchElement = document.querySelector("#searchButtonElement");

  const clubListElement = document.querySelector("club-list");

  //Promise biasa
  // const onButtonSearchClicked = () => {
  //   DataSource.searchClub(searchElement.value)
  //     .then(renderResult)
  //     .catch(fallbackResult);
  // };

  //Asynch Await
  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);
    } catch (error) {
      fallbackResult(error);
    }
  };

  const renderResult = (results) => {
    clubListElement.innerHTML = "";

    clubListElement.clubList = results;

    // results.forEach((club) => {
    //   // const name = club.name;
    //   // const fanArt = club.fanArt;
    //   // const description = club.description;
    //   const { name, fanArt, description } = club;

    //   const clubElement = document.createElement("div");
    //   clubElement.setAttribute("class", "club");

    //   clubElement.innerHTML =
    //     '<img class="fan-art-club" src="' +
    //     fanArt +
    //     '" alt="Fan Art">\n' +
    //     '<div class="club-info">\n' +
    //     "<h2>" +
    //     name +
    //     "</h2>\n" +
    //     "<p>" +
    //     description +
    //     "</p>" +
    //     "</div>";
    //   clubListElement.appendChild(clubElement);
    // });
  };

  const fallbackResult = (message) => {
    clubListElement.innerHTML = "";
    clubListElement.innerHTML += '<h2 class="placeholder">' + message + "</h2>";
  };

  //event akan dipanggil pada file searchBar.js
  //buttonSearchElement.addEventListener("click", onButtonSearchClicked);

  //memanggil funngsi clickEvent pada file searchBar.js
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
