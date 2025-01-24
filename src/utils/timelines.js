import { Timeline } from "gsap/gsap-core";
import { textAppear, textDisappear } from "./tweens";

export const showText = (data) => {
  const tl = new Timeline();

  var l = data.length;
  for (let i = 0; i < l; i++) {
    tl.add(textAppear(data[i]), i * 0.3);
  }

  return tl;
};

export const hideText = (data, offset = 0) => {
  const tl = new Timeline();

  var l = data.length;
  for (let i = 0; i < l; i++) {
    tl.add(textDisappear(data[i]), offset + i * 0.1);
  }

  return tl;
};
