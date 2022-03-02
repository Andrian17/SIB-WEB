class SearchBar extends HTMLElement {
  connectedCallback() {
    console.log("proses render search bar");
    this.render();
  }

  //cara2 optimasi search bar
  set clickEvent(event) {
    //console.log(event);
    this._clickEvent = event;
    console.log("event click");
    this.render();
  }

  get value() {
    console.log("ini adalah value");
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `<div id="search-container" class="search-container">
                        <input
                        placeholder="Search football club"
                        id="searchElement"
                        type="search"
                        />
                        <button id="searchButtonElement" type="submit">Search</button>
                    </div>`;
    this.querySelector("#searchButtonElement").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
