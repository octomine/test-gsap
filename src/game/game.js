import gsap from "gsap";
import { Timeline } from "gsap/gsap-core";
import {
  bacteriaAppear,
  bacteriaDisappear,
  bacteriaLoop,
  fadeOut,
  handleClick,
  addElementTo,
  getCenter,
  showFoam,
  starShine,
} from "../utils";
import "./style.css";

const FULL_TIME = 10;
const TO_CLEAN = 7;
let cleaned = 0;

const timeline = new Timeline();

export const startGame = () =>
  new Promise((resolve) => {
    const arrowLoop = gsap
      .to(".game__message-arrow", {
        x: -10,
        duration: 0.8,
        ease: "sine.inOut",
      })
      .yoyo(true)
      .repeat(-1);

    handleClick(bacteriaLoop(".game__bacteria_1").targets()[0], (bacteria) => {
      showFoam(addElementTo("foam", "game-container", getCenter(bacteria)));
      bacteriaDisappear(bacteria);
      fadeOut(".dirt-1", 0.5);
      cleaned++;
      arrowLoop.kill();
      timeline.play();
    });

    timeline
      .add(bacteriaAppear(".game__bacteria_1"))
      .to(
        ".game__message",
        {
          height: 204,
          borderRadius: 30,
          ease: "sine.out",
          duration: 0.5,
        },
        "<0.3"
      )
      .to(".game__message-text", { height: 92, duration: 0.3 }, "<0.1")
      .to(".game__message-arrow", { scale: 1, duration: 0.3 }, "<0.1")
      .addPause()
      .to(".game__message", { opacity: 0, duration: 0.3 })
      .to(".game__time-bar", { y: -75, duration: 0.5, ease: "sine.out" })
      .to(".spray", { x: 0, y: 0, rotate: 0, duration: 0.3, ease: "sine.out" })
      .add([
        gsap.to(".game-container", {
          x: -1000,
          duration: FULL_TIME,
          ease: "none",
        }),
        gsap.to(".game__time-progress", {
          width: 0,
          duration: FULL_TIME,
          ease: "none",
        }),
      ]);
    for (let i = 2; i <= TO_CLEAN; i++) {
      const target = `.game__bacteria_${i}`;
      const position = `<${i === 2 ? "" : 1.5}`;
      timeline.add(bacteriaAppear(target), position);
      handleClick(bacteriaLoop(target).targets()[0], (bacteria) => {
        showFoam(addElementTo("foam", "game-container", getCenter(bacteria)));
        starShine(addElementTo("star", "game-container", getCenter(bacteria)), .8);

        const dirt = target.replace("game__bacteria_", "dirt-");
        fadeOut(dirt, 0.3);
        bacteriaDisappear(bacteria);
        cleaned++;
        if (cleaned >= TO_CLEAN) {
          timeline.kill();

          gsap.set(".game__time-bar", { opacity: 0 });
          gsap
            .to(".game__time-bar", { opacity: 1, duration: 0.15, ease: "none" })
            .repeat(3)
            .then(() => {
              resolve(true);
            });
        }
      });
    }
    timeline
      .add(
        gsap.to(".game__time-progress", {
          backgroundColor: "red",
          duration: 0.1,
        }),
        "-=0.75"
      )
      .then(() => {
        timeline.kill();
        resolve(false);
      });
  });
