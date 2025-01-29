import "./fonts.css";
import "./style.css";

import { showIntro } from "./intro";
import { startGame } from "./game";
import { showFinal } from "./final/final";

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.visibility = "visible";

  showIntro()
    .then(() => startGame())
    .then((success) => showFinal(success));
});
