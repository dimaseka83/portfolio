/**
 * Tracks which `<section id>` is in view so nav can highlight the current one.
 * Uses a scroll listener that finds which section is closest to 40% viewport.
 */
import { ref, onMounted, onBeforeUnmount } from "vue";

export function useSectionTracker(sectionIds) {
  const active = ref(sectionIds[0] || "");
  let raf = 0;

  function update() {
    const viewportMid = window.scrollY + window.innerHeight * 0.4;
    let closest = sectionIds[0];
    let closestDist = Infinity;

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;

      const top = el.offsetTop;
      const dist = Math.abs(top - viewportMid);
      if (dist < closestDist) {
        closestDist = dist;
        closest = id;
      }
    }

    if (closest && active.value !== closest) {
      active.value = closest;
    }
  }

  function onScroll() {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(update);
  }

  onMounted(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial check after DOM settles (router-view may load async)
    setTimeout(update, 100);
    setTimeout(update, 500);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll);
    if (raf) cancelAnimationFrame(raf);
  });

  return { active };
}
