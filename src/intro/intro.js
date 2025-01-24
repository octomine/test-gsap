import gsap from "gsap";
import { startGame } from "../game/game";
import {
  buttonAppear,
  buttonDisappear,
  hideText,
  showText,
  fadeOut,
} from "../utils";
import "./style.css";

const TEXTS = [
  { target: ".intro__text-1-line-1", width: 500 },
  { target: ".intro__text-1-line-2", width: 660 },
  { target: ".intro__text-1-line-3", width: 520 },
  { target: ".intro__text-2-highlight", width: 426 },
  { target: ".intro__text-2", width: 390 },
  { target: ".intro__text-3-line-1", width: 360 },
  { target: ".intro__text-3-line-2", width: 480 },
];

export const showIntro = () => {
  showText(TEXTS)
    .add(buttonAppear(".intro__button"), TEXTS.length * 0.3)
    .then((timeline) => {
      timeline.kill();

      const button = timeline.getTweensOf(".intro__button")[0].targets()[0];
      function clickHandler() {
        button.removeEventListener("click", clickHandler);
        hideText(TEXTS.reverse(), 0.3)
          .to(
            ".game-container",
            { scale: 1, x: 0, duration: 0.7, ease: "sine.out" },
            0.8
          )
          .add(fadeOut("#intro", 1), 0.3)
          .add(buttonDisappear(".intro__button"), 0)
          .then((timeline) => {
            timeline.kill();
            gsap.set("#intro", { display: "none" });

            startGame();
          });
      }

      button.addEventListener("click", clickHandler);
    });
};
