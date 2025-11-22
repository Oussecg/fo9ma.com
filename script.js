// import $ from "jquery";
class Operators {
  constructor() {
    this.randomColor.bind(this);
    this.randomColor.bind(this);
    this.readArticles.bind(this);
    this.renderArticles.bind(this);
    this.articles = [];
  }

  randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  randomColor() {
    const r = this.randomInt(0, 255);
    const g = this.randomInt(0, 255);
    const b = this.randomInt(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
  }

  changeVariables() {
    setInterval(() => {
      $("html").css("--font-color", this.randomColor());
    }, 1000);
  }

  readArticles() {
    $.ajax({
      type: "GET",
      url: "./articles.json",
      dataType: "json",
      cache: false,
      success: (data) => {
        console.log(data);
        this.articles = data;
        // render after articles are loaded
        this.renderArticles();
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.error("Can't import articles.json:", textStatus, errorThrown);
      },
    });
  }

  renderArticles() {
    let articlesContainer = "";
    this.articles.forEach((article) => {
      articlesContainer += `
      <div class="article-container">
        <img class="article-image" src="${article.image}" />
        <div class="article-data-container">
          <label class="article-name">${article.name}</label>
          <label class="article-price">${article.price}$</label>
          <button class="add-cart" id="add-cart" >add to chart</button>
        </div>
      </div>`;
    });
    $(".articles-container").html(articlesContainer);
  }
}

const operators = new Operators();
operators.changeVariables();
operators.readArticles();
operators.renderArticles();



