import gsap from "gsap";

export const getCenter = (element) => {
  const { width, height } = element.getBoundingClientRect();
  const center = {
    x: element.offsetLeft + width / 2,
    y: element.offsetTop + height / 2,
  };

  return center;
};

export const addElementTo = (elementClass, containerClass, { x, y }) => {
  const element = document.createElement("div");
  element.className = elementClass;

  const container = document.getElementsByClassName(containerClass)[0];

  container.appendChild(element);
  const { width, height } = element.getBoundingClientRect();
  
  element.style.left = `${x - width / 2}px`;
  element.style.top = `${y - height / 2}px`;

  return element;
};

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
