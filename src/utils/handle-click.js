import gsap from "gsap";

export const handleClick = (target, callBack, killTweens = true) => {
  function clickHandler() {
    target.removeEventListener("click", clickHandler);
    if (killTweens) {
      gsap.killTweensOf(target);
    }

    if (callBack) {
      callBack(target);
    }
  }

  target.addEventListener("click", clickHandler);
};
