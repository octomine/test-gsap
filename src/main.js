import "./style.css";

import { showIntro } from "./intro";
import { startGame } from "./game";

document.addEventListener("DOMContentLoaded", () => {
  showIntro().then(() => startGame());
});
