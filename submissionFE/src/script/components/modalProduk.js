class ModalProduk extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="clear-body btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <h4>Mohon tunggu data sedang dimuat.....</h4>
          </div>
          <div class="modal-footer">
            <button type="button" class="clear-body btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`;
    this.querySelectorAll(".clear-body").forEach((el) => {
      el.addEventListener("click", () => {
        document.querySelector(
          ".modal-body"
        ).innerHTML = `<h4>Mohon tunggu data sedang dimuat.....</h4>`;
      });
    });
  }
}
customElements.define("modal-produk", ModalProduk);
