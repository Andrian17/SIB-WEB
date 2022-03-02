import "./classArticleList.js";
import "./classArticle.js";
import article from "./objArticle.js";
console.log(article);

const containerElement = document.querySelector(".container");
const satuArticle = document.createElement("article-item");
const articlesElement = document.createElement("article-list");

//menjalankan fungsi renderArticle dari class ArticleItem pada file classArticle.js
satuArticle.renderArticle = article[0];
console.log(satuArticle);
articlesElement.renderBanyakArticle = article;

containerElement.appendChild(satuArticle);
document.body.append(articlesElement);
