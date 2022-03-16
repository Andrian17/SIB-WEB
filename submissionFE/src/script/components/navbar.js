import data from "../data/hp.js";
import "./listProduk.js";
class NavBar extends HTMLElement {
  connectedCallback() {
    console.log("proses render nav-bar");
    this.render();
    this.renderItem();
  }
  render() {
    this.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-info text-uppercase fs-5">
                        <div class="container-fluid text-light">
                          <a class="navbar-brand text-light" href="#">HOME</a>
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon text-light"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                              <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </nav>`;
  }
  renderItem() {
    let item = document.querySelector(".navbar-nav");
    item.innerHTML = "";
    for (const obj of data) {
      item.innerHTML += `<li><a href="#" class="nav-link text-light item-nav" id="${obj.kode}">${obj.brand}</a></li>`;
    }
    let afetch = item.querySelectorAll("a");
    afetch.forEach((el) => {
      el.addEventListener("click", function () {
        return fetch(
          `https://api-mobilespecs.azharimm.site/v2/brands/${this.id}`
        )
          .then((data) => {
            return data.json();
          })
          .then((res) => {
            let dataRes = res.data.phones;
            const listProduk = document.querySelector("gadget-list");
            listProduk.innerHTML = "";
            listProduk.gadgetList = dataRes;
          })
          .catch((e) => {
            const listProduk = document.querySelector("gadget-list");
            listProduk.innerHTML = `<h4 class="text-danger fw-bolder">Gagal mengirim request</h4>`;
          });
      });
    });
  }
}

customElements.define("nav-bar", NavBar);
