class ClubItems extends HTMLElement {
  set renderClubItems(objClub) {
    this._renderClubItems = objClub;
    //console.log(this._renderClubItems);
    this.render();
  }

  render() {
    this.innerHTML = `
        <img src="${this._renderClubItems.strTeamBadge}" alt="Fan Art" class="fan-art-club">
        <div class="club-info">
            <h2>${this._renderClubItems.strTeam}</h2>
            <p>${this._renderClubItems.strDescriptionEN}</p>
        </div>
    `;
  }
}

customElements.define("club-item", ClubItems);
