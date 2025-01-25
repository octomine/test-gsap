import {
  buttonAppear,
  buttonDisappear,
  hideText,
  showText,
  fadeOut,
  handleClick,
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
  const timeline = showText(TEXTS)
    .add(
      buttonAppear(".intro__button").then((tween) => {
        handleClick(
          tween.targets()[0],
          () => {
            timeline.play();
          },
          false
        );
      }),
      "<0.3"
    )
    .addPause()
    .addLabel("wait")
    .add(buttonDisappear(".intro__button"))
    .add(fadeOut("#intro", 1), "wait+=0.3")
    .to(
      ".game-container",
      { scale: 1, x: 0, duration: 0.7, ease: "sine.out" },
      "wait+=0.8"
    );
  hideText(TEXTS.reverse(), timeline, "wait").set("#intro", {
    display: "none",
  });

  return timeline;
};
