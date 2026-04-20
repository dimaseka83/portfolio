/**
 * IntersectionObserver-based "reveal on scroll" directive-like composable.
 * Components attach .reveal class, then call observe(el) to fade in when visible.
 * Uses a single shared observer for efficiency.
 */
let observer = null;

function getObserver() {
  if (typeof window === "undefined") return null;
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          observer.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12 }
  );
  return observer;
}

export function observeReveal(el, delayMs = 0) {
  if (!el) return;
  el.classList.add("reveal");
  if (delayMs) el.style.transitionDelay = delayMs + "ms";
  const obs = getObserver();
  if (obs) obs.observe(el);
}

export function useReveal() {
  return { observeReveal };
}
