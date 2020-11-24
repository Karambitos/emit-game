import { bar } from "./refs.js";

const progressBarObject = {
  barMargin: 0,
  changeProgressBar(params) {
    this.barMargin += 50;
    bar.style.marginLeft = this.barMargin + "px";
  },
};

export { progressBarObject };
