import "./components/navbar.js";
import "./components/searchProduk.js";
import DataAPI from "./data/dataAPI.js";
import "./components/listProduk.js";
import "./components/modalProduk.js";
import "./components/footerSaya.js";

const main = () => {
  //mengambil custom elemen tag search-bar
  const searchElement = document.querySelector("search-produk");
  const geadgetListElement = document.querySelector("gadget-list");
  //Asynch Await
  const onButtonSearchClicked = async () => {
    try {
      const result = await DataAPI.searchGadget(searchElement.valueInput);
      renderResult(result);
    } catch (error) {
      fallbackResult(error);
    }
  };
  const renderResult = (results) => {
    geadgetListElement.innerHTML = "";
    geadgetListElement.gadgetList = results;
  };
  const fallbackResult = (error) => {
    geadgetListElement.innerHTML = "";
    geadgetListElement.renderError = error;
  };
  searchElement.clickEvent = onButtonSearchClicked;

  //footer
  const footer = document.querySelector("footer");
  const footerSaya = document.createElement("footer-saya");
  footer.append(footerSaya);
};

document.addEventListener("DOMContentLoaded", main);
