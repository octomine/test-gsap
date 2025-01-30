import "./fonts.css";
import "./style.css";

import { resizables } from "./resizables";

import { showIntro } from "./intro";
import { startGame } from "./game";
import { showFinal } from "./final/final";

const onResize = () => {
  const content = document.getElementById('content');
  const ratio = content.offsetHeight / 810;

  for (let cn in resizables) {
    const elements = document.getElementsByClassName(cn);
    const values = resizables[cn];
    for (let element of elements) {
      for(let prop in values)
      element.style[prop] = `${values[prop] * ratio}px`;
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.visibility = "visible";

  window.onresize = onResize;
  onResize();

  showIntro()
    .then(() => startGame())
    .then((success) => showFinal(success));
});
