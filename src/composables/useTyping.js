/**
 * Typewriter effect. Reactive to the `words` source ref — restarts cleanly when
 * the word list changes (e.g. on language toggle).
 */
import { ref, watch, onBeforeUnmount } from "vue";

export function useTyping(wordsRef, opts = {}) {
  const speed = opts.speed || 85;
  const pause = opts.pause || 1200;
  const text = ref("");

  let idx = 0, sub = 0, deleting = false;
  let timer = null;
  let cancelled = false;

  function tick() {
    if (cancelled) return;
    const words = wordsRef.value;
    if (!words || !words.length) return;
    const word = words[idx % words.length];
    let delay = deleting ? speed / 2 : speed;
    if (!deleting && sub === word.length) delay = pause;
    if (deleting && sub === 0) delay = 300;
    timer = setTimeout(() => {
      if (cancelled) return;
      if (!deleting && sub < word.length) sub++;
      else if (!deleting && sub === word.length) deleting = true;
      else if (deleting && sub > 0) sub--;
      else { deleting = false; idx = (idx + 1) % words.length; }
      text.value = words[idx % words.length].slice(0, sub);
      tick();
    }, delay);
  }

  function start() {
    cancelled = false;
    idx = 0; sub = 0; deleting = false;
    text.value = "";
    if (timer) clearTimeout(timer);
    tick();
  }
  function stop() {
    cancelled = true;
    if (timer) clearTimeout(timer);
  }

  watch(
    wordsRef,
    () => start(),
    { immediate: true, deep: true }
  );
  onBeforeUnmount(stop);

  return { text };
}
