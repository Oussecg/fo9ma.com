// import $ from "jquery";

class Operators {
  constructor() {
    this.randomColor.bind(this);
    this.randomColor.bind(this);
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
      $('html').css("--font-color", this.randomColor());
    }, 1000);
  }
}

const operators = new Operators;
operators.changeVariables();
