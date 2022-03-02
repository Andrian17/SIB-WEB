import "./classArticle.js";

class ArticleList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  set renderBanyakArticle(objArticles) {
    this._articles = objArticles;
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `<style>    
    article-item {
      display: block;
      margin-bottom: 18px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      overflow: hidden;
    }

    article-item > .featured-image {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
      object-position: center;
    }

    article-item > .article-info {
      padding: 24px;
    }

    article-item > .article-info > p {
      margin-top: 10px;
    }
    </style>`;
    this._articles.forEach((e) => {
      const articleItemElement = document.createElement("article-item");
      // memanggil fungsi setter article() pada article-item.
      articleItemElement.renderArticle = e;

      this._shadowRoot.append(articleItemElement);
    });
  }
}

customElements.define("article-list", ArticleList);
