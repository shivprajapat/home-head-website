import gsap, { GSAPTweenVars } from 'gsap';
import { ScrollTrigger, ScrollTriggerVars } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Target = string | Element;

interface AnimationProps extends GSAPTweenVars {}

interface ScrollProps extends ScrollTriggerVars {}

export const animateWithGsap = (
  target: Target,
  animationProps: AnimationProps,
  scrollProps: ScrollProps
) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps
    }
  });
};
