class SearchProduk extends HTMLElement {
  connectedCallback() {
    console.log("proses render search bar");
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get valueInput() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `<div class="mx-auto input-group my-4" style="max-width: 800px">
                        <input type="search" class="form-control" placeholder="Cari gadget" id="searchElement" aria-describedby="basic-addon2">
                        <button id="btnElement" class="input-group-text" id="basic-addon2">Cari Gadget</button>
                    </div>
    
    `;
    this.querySelector("#btnElement").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-produk", SearchProduk);
