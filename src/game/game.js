import { Timeline } from "gsap/gsap-core";
import { bacteriaAppear, bacteriaLoop } from "../utils";
import "./style.css";
import gsap from "gsap";

export const startGame = () => {
  const timeline = new Timeline();
  timeline
    .add(bacteriaAppear(".game__bacteria_1"))
    .add(bacteriaLoop(".game__bacteria_1"), 0)
    .to(
      ".game__message",
      {
        height: 204,
        borderRadius: 30,
        ease: "sine.out",
        duration: 0.5,
      },
      0.3
    )
    .to(".game__message-text", { height: 92, duration: 0.3 }, 0.5)
    .to(".game__message-arrow", { scale: 1, duration: 0.3 }, 0.8)
    .add(
      gsap
        .to(".game__message-arrow", {
          x: -10,
          duration: 0.8,
          ease: "sine.inOut",
        })
        .yoyo(true)
        .repeat(-1)
    );
};
