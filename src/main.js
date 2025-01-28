import "./style.css";

import { showIntro } from "./intro";
import { startGame } from "./game";
import { showFinal } from "./final/final";

// document.addEventListener("load ", () => {
window.onload = () => {
  document.body.style.visibility = "visible";

  showIntro()
    .then(() => startGame())
    .then((success) => showFinal(success));
};
