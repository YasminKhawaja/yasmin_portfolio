import { onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fades + slides in every element matching `selector` inside `rootRef`
 * as it scrolls into view. Call this once per section component.
 *
 * @param {import('vue').Ref<HTMLElement | null>} rootRef
 * @param {string} selector - defaults to '.reveal'
 * @param {object} options - stagger/delay overrides
 */
export function useScrollReveal(rootRef, selector = ".reveal", options = {}) {
  let triggers = [];

  onMounted(() => {
    const root = rootRef.value;
    if (!root) return;
    const targets = root.querySelectorAll(selector);

    targets.forEach((el, i) => {
      const tween = gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: options.stagger ? i * options.stagger : 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      triggers.push(tween.scrollTrigger);
    });
  });

  onBeforeUnmount(() => {
    triggers.forEach((t) => t && t.kill());
  });
}
