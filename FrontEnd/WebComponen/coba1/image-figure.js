class ImageFigure extends HTMLElement {
  constructor() {
    super();
    console.log("constructed");
  }

  connectedCallback() {
    this.src = this.getAttribute("src") || null;
    this.alt = this.getAttribute("alt") || null;
    this.captions = this.getAttribute("captions") || null;
    //console.log("oko" + this.src);
    this.innerHTML = `<figure>
                        <img src="${this.src}" alt="${this.alt}">
                        <figcaption>${this.captions}</figcaption>
                     </figure>`;
  }
  disconnectedCallback() {
    console.log("disconnected!");
  }

  attributesChangedCallback() {
    console.log(`Attribute: ${name} changed!`);
  }

  // digunakan untuk mengamati perubahan nilai attribute caption
  /* kita bisa menetapkan lebih dari satu atribut yang diamati.
    dengan memisahkan nama atribut menggunakan koma. Contoh: */
  // return ["caption", "title", "src", ...]
  static get observedAttributes() {
    return ["caption"];
  }
}

customElements.define("image-figure", ImageFigure);
