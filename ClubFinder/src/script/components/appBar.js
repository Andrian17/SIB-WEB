class AppBar extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log("proses render app-bar");
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = ` <h2>Club Finder</h2>`;
  }
}

customElements.define("app-bar", AppBar);
