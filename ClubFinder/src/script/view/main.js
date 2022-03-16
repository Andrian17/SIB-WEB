import DataSource from "../data/data-source.js";
import "../components/clubList.js";
import "../components/searcBar.js";

const main = () => {
  //mengambil custom elemen tag search-bar
  const searchElement = document.querySelector("search-bar");

  //event dimatikan karena akan dijalankan di file search-bar.js
  //const buttonSearchElement = document.querySelector("#searchButtonElement");
  const clubListElement = document.querySelector("club-list");
  //Asynch Await
  const onButtonSearchClicked = async () => {
    try {
      //memanggil fungsi get valueBtn pada file search-bar.js
      const result = await DataSource.searchClub(searchElement.valueBtn);
      console.log(result);
      renderResult(result);
    } catch (error) {
      fallbackResult(error);
    }
  };
  const renderResult = (results) => {
    clubListElement.innerHTML = "";
    clubListElement.clubList = results;
  };
  const fallbackResult = (error) => {
    clubListElement.innerHTML = "";
    clubListElement.renderError = error;
  };
  //event akan dipanggil pada file searchBar.js
  //buttonSearchElement.addEventListener("click", onButtonSearchClicked);
  //memanggil funngsi clickEvent pada file searchBar.js
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
