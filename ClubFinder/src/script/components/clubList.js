import "./clubItems.js";

class ClubList extends HTMLElement {
  set clubList(objClub) {
    this._clubList = objClub;
    console.log("ini adala _list");
    console.log(this._clubList);
    this.render();
  }

  render() {
    this.innerHTML = ``;
    this._clubList.forEach((e) => {
      const clubItemElement = document.createElement("club-item");
      clubItemElement.renderClubItems = e;
      this.append(clubItemElement);
    });
  }

  renderError(m) {
    this.innerHTML = "";
    this.innerHTML = `<h2 class="placeholder"> ${m} </h2>`;
  }
}

customElements.define("club-list", ClubList);
