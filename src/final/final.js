import gsap from "gsap";

import "./style.css";
import { addElementTo, buttonAppear, showText, starShine } from "../utils";

const SUCCESS = [
  ".final__success-text-1",
  ".final__success-text-2_line-1",
  ".final__success-text-2_line-2",
  ".final__success-text-3",
];

const FAIL = [
  ".final__fail-text-1_line-1",
  ".final__fail-text-1_line-2",
  ".final__fail-text-2_line-1",
  ".final__fail-text-2_line-2",
  ".final__fail-text-3",
];

export const showFinal = (success) => {
  gsap.set("#final", { display: "flex" });
  gsap.set(`.final__${success ? "success" : "fail"}`, { display: "block" });
  showText(success ? SUCCESS : FAIL)
    .to("#final", { opacity: 1, duration: 0.5 }, 0)
    .to(".spray", { scale: 1, duration: 0.3, ease: "sine.out" }, 0.3)
    .add(buttonAppear(".final__button"))
    .to(".final__foam", { y: 0, duration: 1.5, ease: "sine.out" }, 0.6);

  starShine(
    addElementTo("star", "final__animation-holder", { x: 480, y: 260 }),
    1.2
  );
};
