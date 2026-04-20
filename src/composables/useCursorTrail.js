/**
 * Canvas-based cursor trail. Desktop-only (skips touch devices).
 * Color parameter is a function so the trail can re-read the current variant
 * color on every frame.
 */
import { onMounted, onBeforeUnmount } from "vue";

export function useCursorTrail(getColor) {
  let canvas, ctx, raf;
  let w = 0, h = 0;
  let mouse = { x: 0, y: 0 };
  const dots = [];

  function resize() {
    if (!canvas) return;
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  function onMove(e) {
    mouse = { x: e.clientX, y: e.clientY };
  }
  function tick() {
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);
    let prev = mouse;
    const color = (typeof getColor === "function" ? getColor() : getColor) || "#1F4BFF";
    for (let i = 0; i < dots.length; i++) {
      const d = dots[i];
      d.x += (prev.x - d.x) * 0.35;
      d.y += (prev.y - d.y) * 0.35;
      const size = Math.max(0, 8 - i * 0.4);
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.globalAlpha = (1 - i / dots.length) * 0.75;
      ctx.arc(d.x, d.y, size, 0, Math.PI * 2);
      ctx.fill();
      prev = d;
    }
    raf = requestAnimationFrame(tick);
  }

  onMounted(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    canvas = document.createElement("canvas");
    canvas.className = "cursor-canvas";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    resize();
    mouse = { x: w / 2, y: h / 2 };
    for (let i = 0; i < 18; i++) dots.push({ x: mouse.x, y: mouse.y });
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
  });

  onBeforeUnmount(() => {
    if (raf) cancelAnimationFrame(raf);
    window.removeEventListener("resize", resize);
    window.removeEventListener("mousemove", onMove);
    if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
  });
}
