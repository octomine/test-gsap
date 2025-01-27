import { Timeline } from "gsap/gsap-core";
import { textAppear, textDisappear } from "./tweens";

export const showText = (data, timeline) => {
  const tl = timeline ?? new Timeline();

  var l = data.length;
  for (let i = 0; i < l; i++) {
    tl.add(textAppear(data[i]), i * 0.3);
  }

  return tl;
};

export const hideText = (data, timeline, label) => {
  const tl = timeline ?? new Timeline();

  var l = data.length;
  for (let i = 0; i < l; i++) {
    const position = label ? `${label}+=${i * 0.1}` : i * 0.1;
    tl.add(textDisappear(data[i]), position);
  }

  return tl;
};

export const showFoam = (target, callBack) =>
  new Timeline()
    .set(target, { scale: 0 })
    .to(target, { scale: 1, duration: 0.1, ease: "exp.in" })
    .to(target, { y: 300, opacity: 0, duration: 1, ease: "sine.out" })
    .then((timeline) => {
      timeline.kill();
      target.offsetParent.removeChild(target);
      callBack();
    });

export const starShine = (target, offset = 0) =>
  new Timeline()
    .to(target, { rotate: 380, duration: 0.8 }, offset)
    .to(target, { scale: 1, duration: 0.4, ease: "exp.out" }, offset)
    .to(target, { scale: 0, duration: 0.4, ease: "sine.in" }, ">")
    .then((timeline) => {
      timeline.kill();
      target.offsetParent.removeChild(target);
    });
