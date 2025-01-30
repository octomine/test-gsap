import gsap from "gsap";
import {
  buttonAppear,
  buttonDisappear,
  hideText,
  showText,
  fadeOut,
  handleClick,
  bacteriaAppear,
  bacteriaLoopIntro,
  bacteriaDisappear,
} from "../utils";
import "./style.css";

const TEXTS = [
  ".intro__text-1",
  ".intro__text-2",
  ".intro__text-3",
  ".intro__text-4",
  ".intro__text-5",
  ".intro__text-6",
];

export const showIntro = () => {
  bacteriaLoopIntro(".intro__bacteria_1");
  bacteriaLoopIntro(".intro__bacteria_2");
  bacteriaLoopIntro(".intro__bacteria_3");

  const timeline = showText(TEXTS)
    .add(bacteriaAppear(".intro__bacteria_1"), 0)
    .add(bacteriaAppear(".intro__bacteria_2"), 0.3)
    .add(bacteriaAppear(".intro__bacteria_3"), 0.5)
    .to(
      ".intro__text-highlight",
      {
        backgroundSize: 407,
        backgroundPositionX: 0,
        duration: 0.5,
        ease: "sine.out",
      },
      "-=1"
    )
    .add(buttonAppear(".intro__button"), "-=0.3")
    .addPause()
    .addLabel("wait")
    .add(buttonDisappear(".intro__button"))
    .add(
      bacteriaDisappear(".intro__bacteria_1", () => {
        gsap.killTweensOf(".intro__bacteria_1");
      }),
      "wait"
    )
    .add(
      bacteriaDisappear(".intro__bacteria_2", () => {
        gsap.killTweensOf(".intro__bacteria_2");
      }),
      "wait+=0.3"
    )
    .add(
      bacteriaDisappear(".intro__bacteria_3", () => {
        gsap.killTweensOf(".intro__bacteria_3");
      }),
      "wait+=0.5"
    )
    .add(fadeOut("#intro", 1), "wait+=0.3")
    .to(
      ".game-container",
      { scale: 1, x: 0, y: 0, duration: 0.7, ease: "sine.out" },
      "wait+=0.8"
    );
  hideText(TEXTS.reverse(), timeline, "wait")
    .to(
      ".intro__text-highlight",
      {
        backgroundSize: 0,
        backgroundPositionX: '100%',
        duration: 0.5,
        ease: "sine.out",
      },
      "-=1.2"
    )
    .set("#intro", {
      display: "none",
    });

  handleClick(
    timeline.getTweensOf(".intro__button")[0].targets()[0],
    () => {
      timeline.play();
    },
    false
  );

  return timeline;
};
