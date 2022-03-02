class AppBar extends HTMLElement {
  connectedCallback() {
    console.log("proses render app-bar");
    this.render();
  }

  render() {
    this.innerHTML = ` <h2>Club Finder</h2>`;
  }
}

customElements.define("app-bar", AppBar);
