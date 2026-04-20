/**
 * Konami-code listener that flashes a full-screen gradient when triggered.
 * Attach once at the app root.
 */
import { onMounted, onBeforeUnmount } from "vue";

const SEQUENCE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

function flashKonami() {
  const existing = document.querySelector(".konami-flash");
  if (existing) existing.remove();
  const el = document.createElement("div");
  el.className = "konami-flash";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1900);
}

export function useKonami() {
  let buf = [];
  function onKey(e) {
    buf.push(e.key);
    if (buf.length > SEQUENCE.length) buf = buf.slice(-SEQUENCE.length);
    if (
      buf.length === SEQUENCE.length &&
      buf.every((k, i) => k.toLowerCase() === SEQUENCE[i].toLowerCase())
    ) {
      flashKonami();
      buf = [];
    }
  }
  onMounted(() => window.addEventListener("keydown", onKey));
  onBeforeUnmount(() => window.removeEventListener("keydown", onKey));
}
