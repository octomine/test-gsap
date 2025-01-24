import gsap from "gsap";

export const fadeOut = (target, duration) =>
  gsap.to(target, { opacity: 0, duration });

export const textAppear = ({ target, width }) =>
  gsap.to(target, { width, duration: 0.5, ease: "sine.out" });

export const textDisappear = ({ target }) =>
  gsap.to(target, { opacity: 0, duration: 0.3 });

export const buttonAppear = (target) =>
  gsap.to(target, { scale: 1, duration: 0.8, ease: "elastic.out" });

export const buttonDisappear = (target) =>
  gsap.to(target, { scale: 0, duration: 0.3, ease: "elastic.out" });

export const bacteriaLoop = (target) =>
  gsap
    .to(target, { y: -40, duration: 3, ease: "sine.inOut" })
    .yoyo(true)
    .repeat(-1);

export const bacteriaDisappear = (target, onComplete) =>
  gsap.to(target, {
    opacity: 0,
    scale: 0,
    duration: 0.3,
    ease: "sine.out",
    onComplete,
  });
