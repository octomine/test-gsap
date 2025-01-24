import "./style.css";

import "./intro/intro";
import "./game/game";
import { showIntro } from "./intro/intro";

document.addEventListener("DOMContentLoaded", () => {
  showIntro();
});
