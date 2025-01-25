import gsap from "gsap";

import "./style.css";
import { buttonAppear, showText } from "../utils";

const SUCCESS = [
  { target: ".final__success-text-1", width: 550 },
  { target: ".final__success-text-2_line-1", width: 550 },
  { target: ".final__success-text-2_line-2", width: 550 },
  { target: ".final__success-text-3", width: 550 },
];

const FAIL = [
  { target: ".final__fail-text-1_line-1", width: 550 },
  { target: ".final__fail-text-1_line-2", width: 550 },
  { target: ".final__fail-text-2_line-1", width: 550 },
  { target: ".final__fail-text-2_line-2", width: 712 },
  { target: ".final__fail-text-3", width: 550 },
];

export const showFinal = (success) => {
  gsap.set("#final", { display: "flex" });
  gsap.set(`.final__${success ? "success" : "fail"}`, { display: "block" });
  showText(success ? SUCCESS : FAIL)
    .to("#final", { opacity: 1, duration: 0.5 }, 0)
    .add(buttonAppear(".final__button"));
};
