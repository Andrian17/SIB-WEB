import "./itemProduk.js";

class GadgetList extends HTMLElement {
  set gadgetList(dataGadget) {
    this._GadgetList = dataGadget;
    console.log(this._GadgetList);
    this.render();
  }

  render() {
    this._GadgetList.forEach((e) => {
      const gadgetElement = document.createElement("produk-item");
      gadgetElement.classList.add("flex-grow-1");
      gadgetElement.renderItemProduk = e;
      this.append(gadgetElement);
    });
  }

  set renderError(msg) {
    this.innerHTML = ``;
    this.innerHTML = `<h2 class="placeholder"> ${msg} </h2>`;
  }
}

customElements.define("gadget-list", GadgetList);
