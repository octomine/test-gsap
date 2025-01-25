import "./style.css";

import { showIntro } from "./intro";
import { startGame } from "./game";
import { showFinal } from "./final/final";

document.addEventListener("DOMContentLoaded", () => {
  showIntro()
    .then(() => startGame())
    .then((success) => showFinal(success));
});
