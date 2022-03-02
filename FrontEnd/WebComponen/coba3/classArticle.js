class ArticleItem extends HTMLElement {
  set renderArticle(article) {
    this._article = article;
    console.log("proses render");
    this.render();
  }

  render() {
    this.innerHTML = `
        <img class="featured-image" src="${this._article.featuredImage}" alt="">
        <div class="article-info">
            <h2><a href="${this._article.id}">${this._article.title}</a></h2>
            <p>${this._article.description}</p>
        </div>
    `;
  }
}

customElements.define("article-item", ArticleItem);
