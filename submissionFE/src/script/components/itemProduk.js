class ItemProduk extends HTMLElement {
  set renderItemProduk(objParam) {
    this._obj = objParam;
    this.render();
  }

  render() {
    this.innerHTML = `
                    <div class="card mt-3 border-primary text-center text-success fs-5 mx-auto" style="width: 19rem;">
                        <div class="card-header">
                            Data Gadget
                        </div>
                        <img src="${this._obj.image}" class="card-img-top p-3" alt="">
                        <div class="card-body">
                            <h5 class="card-title">Nama Brand: ${this._obj.brand}</h5>
                            <p class="card-text">Nama Gadget: ${this._obj.phone_name}</p>
                            <button type="button" id="${this._obj.detail}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</button>
                        </div>
                    </div>
      `;
    this.querySelector("button").addEventListener("click", function () {
      fetch(this.id)
        .then((data) => data.json())
        .then((e) => {
          const modal = document.querySelector(".modal-body");
          let detailHp = e.data;
          modal.innerHTML = "";
          modal.innerHTML = `<img src="${detailHp.phone_images[0]}" class="card-img-top p-3" alt="">
                            <h5>Nama: ${detailHp.phone_name}</h5>
                            <p>${detailHp.release_date}</p>
                            <p>Storage: ${detailHp.storage}</p>
                            <p>Dimensi: ${detailHp.dimension}</p>
                            <p>Os: ${detailHp.os}</p>

          `;
        })
        .catch((e) => console.log(e));
    });
  }
}

customElements.define("produk-item", ItemProduk);
