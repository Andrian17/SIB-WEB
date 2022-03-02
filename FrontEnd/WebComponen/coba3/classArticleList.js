import "./classArticle.js";

class ArticleList extends HTMLElement {
  set renderBanyakArticle(objArticles) {
    this._articles = objArticles;
    this.render();
  }

  render() {
    this._articles.forEach((e) => {
      const articleItemElement = document.createElement("article-item");
      // memanggil fungsi setter article() pada article-item.
      articleItemElement.renderArticle = e;
      this.append(articleItemElement);
    });
  }
}

customElements.define("article-list", ArticleList);
