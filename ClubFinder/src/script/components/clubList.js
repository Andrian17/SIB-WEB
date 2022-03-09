import "./clubItems.js";

class ClubList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  set clubList(objClub) {
    this._clubList = objClub;
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = ``;
    this._clubList.forEach((e) => {
      const clubItemElement = document.createElement("club-item");
      clubItemElement.renderClubItems = e;
      this._shadowRoot.append(clubItemElement);
    });
    this.renderStyle();
  }

  renderStyle() {
    const styleClubList = document.createElement("style");
    styleClubList.innerHTML = `club-list {
      margin-top: 32px;
      width: 100%;
      padding: 16px;
      display: block;
    }
    
    club-list > .placeholder {
      font-weight: lighter;
      color: rgba(0, 0, 0, 0.5);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    
    club-item {
      margin-bottom: 18px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      overflow: hidden;
      display: block;
    }
    
    club-item .fan-art-club {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
      object-position: center;
      background-size: cover;
    }
    
    .club-info {
      padding: 24px;
    }
    
    .club-info > h2 {
      font-weight: lighter;
    }
    
    .club-info > p {
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 10; /* number of lines to show */
    }
    `;
    this._shadowRoot.append(styleClubList);
  }

  set renderError(msg) {
    this.innerHTML = ``;
    this.innerHTML = `<h2 class="placeholder"> ${msg} </h2>`;
  }
}

customElements.define("club-list", ClubList);
