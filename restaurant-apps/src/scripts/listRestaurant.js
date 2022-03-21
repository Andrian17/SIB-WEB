class ListRestaurant extends HTMLElement {
  set renderData(data) {
    this._obj = data;
    this.innerHTML = "";
    this.render();
  }

  render() {
    this._obj.forEach(({ city, description, id, name, pictureId, rating }) => {
      this.innerHTML += `
      <article id="${id}" class="card" tabindex="0">
      <div  class="head-card">
        <h3>Kota : ${city}</h3>
        <h4>${name}</h4>
      </div>
      <img src="${pictureId}" alt="gambar-restaurant-${name}" class="img-restaurant">
      <div class="footer-card">
        <p class="description">${description}</p>
        <p class="rating">Rating : ${rating}</p>
      </div>
      </article>
      `;
    });
  }
}
customElements.define("list-restaurant", ListRestaurant);
