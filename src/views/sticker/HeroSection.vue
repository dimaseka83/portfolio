<script setup>
import { computed } from "vue";
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import { useTyping } from "@/composables/useTyping.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { lang, t } = useI18n();
const words = computed(() => d.rotatingWords[lang.value]);
const { text: typed } = useTyping(words, { speed: 85, pause: 1200 });

const mailHref = "mailto:" + d.email;
const waHref = computed(() => {
  const msg = encodeURIComponent(t(d.waMessage));
  return `https://wa.me/62895360426592?text=${msg}`;
});
const writeMe = { en: "Write me", id: "Kirim email" };
const cvHref  = "https://drive.google.com/file/d/1l5GVnvmzT27gLRQSAicwqfX6h3Rt7e3I/view?usp=sharing";
</script>

<template>
  <header id="home" class="sb-hero">
    <div class="sb-stickers">
      <div class="sb-sticker sticker-1">★ {{ lang === "en" ? "Open to work" : "Terbuka" }}</div>
      <div class="sb-sticker blue sticker-2">Malang, ID</div>
    </div>

    <h1 class="sb-hero-title">
      <template v-if="lang === 'en'">
        Hi, I'm <span class="highlight">Dhimas.</span><br />
        I build <span class="scribble">scalable</span> web apps<br />
        with <span class="typed">{{ typed }}</span><span class="typed">|</span>
      </template>
      <template v-else>
        Hai, saya <span class="highlight">Dhimas.</span><br />
        Saya buat web <span class="scribble">scalable</span><br />
        pakai <span class="typed">{{ typed }}</span><span class="typed">|</span>
      </template>
    </h1>

    <div class="sb-hero-body">
      <RevealBlock :delay="100">
        <p class="sb-hero-p">{{ t(d.summary) }}</p>
        <div class="sb-chips">
          <a :href="mailHref" class="sb-chip primary">✉ {{ t(writeMe) }} →</a>
          <a :href="d.linkedin" target="_blank" rel="noopener" class="sb-chip">in LinkedIn ↗</a>
          <a :href="cvHref" target="_blank" rel="noopener" class="sb-chip green">↓ CV</a>
          <a :href="waHref" target="_blank" rel="noopener" class="sb-chip orange">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.121 1.523 5.855L.057 23.882l6.22-1.432A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.886 9.886 0 01-5.031-1.371l-.361-.214-3.741.981.999-3.648-.235-.374A9.861 9.861 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </RevealBlock>

      <RevealBlock :delay="260">
        <div class="sb-polaroid">
          <div class="sb-tape" />
          <img src="/assets/dhimas.jpg" :alt="d.name" />
          <div class="sb-polaroid-caption">— Dhimas ✨</div>
        </div>
      </RevealBlock>
    </div>
  </header>
</template>

<style scoped>
.sb-hero {
  min-height: 100dvh;
  padding: 80px 20px 60px;
  max-width: 1320px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media (min-width: 480px) { .sb-hero { padding: 90px 24px 60px; } }
@media (min-width: 640px) { .sb-hero { padding: 120px 32px 60px; } }
@media (min-width: 768px) { .sb-hero { padding: 140px 48px 80px; } }

/* Mobile: stickers flow in a row above the title */
.sb-stickers {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.sb-sticker {
  position: static;
  padding: 7px 14px;
  background: var(--color-yellow);
  color: #111;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 999px;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.15);
  z-index: 2;
  white-space: nowrap;
}
.sticker-1 { transform: rotate(-4deg); }
.sticker-2 { transform: rotate(4deg); }

.sb-sticker.blue   { background: var(--color-blue); color: #fff; }
.sb-sticker.orange { background: var(--color-orange); color: #fff; }
.sb-sticker.green  { background: var(--color-green); color: #fff; }

/* Tablet and up: stickers float absolutely */
@media (min-width: 640px) {
  .sb-stickers {
    position: absolute;
    inset: 0;
    pointer-events: none;
    display: block;
    margin: 0;
  }
  .sb-sticker {
    position: absolute;
    pointer-events: all;
  }
  .sticker-1 { top: 110px; right: 40px;  font-size: 12px; padding: 10px 18px; transform: rotate(-6deg); }
  .sticker-2 { top: 170px; right: 220px; font-size: 12px; padding: 10px 18px; transform: rotate(8deg);  }
}
@media (min-width: 1024px) {
  .sticker-1 { top: 120px; right: 60px; }
  .sticker-2 { top: 180px; right: 230px; }
}

.sb-tape {
  position: absolute;
  width: 120px;
  height: 28px;
  background: rgba(234, 179, 8, 0.55);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
  transform: rotate(-8deg);
  z-index: 3;
  top: -14px;
  left: 50%;
  margin-left: -60px;
  background-image: repeating-linear-gradient(90deg, transparent 0 6px, rgba(0, 0, 0, 0.04) 6px 7px);
}

.sb-hero-title {
  font-family: var(--font-display);
  font-size: clamp(36px, 9vw, 150px);
  line-height: 0.95;
  letter-spacing: -0.025em;
  font-weight: 400;
  margin: 30px 0 24px;
}
@media (min-width: 640px) { .sb-hero-title { margin: 40px 0 30px; } }
.sb-hero-title .highlight {
  background: var(--color-yellow);
  padding: 0 12px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  color: #111;
}
.sb-hero-title .scribble {
  position: relative;
  color: var(--color-orange);
  font-style: italic;
}
.sb-hero-title .scribble::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 14px;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 14'><path d='M2 8 Q 15 2, 30 7 T 60 7 T 98 6' stroke='%23FF5C2B' stroke-width='2.5' fill='none' stroke-linecap='round'/></svg>") no-repeat;
  background-size: 100% 100%;
}
.sb-hero-title .typed { color: var(--color-blue); }

.sb-hero-body {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  align-items: center;
}
@media (min-width: 640px) { .sb-hero-body { gap: 40px; } }
@media (min-width: 900px) { .sb-hero-body { grid-template-columns: 1.3fr 1fr; gap: 50px; } }

.sb-hero-p {
  font-size: 18px;
  line-height: 1.55;
  max-width: 540px;
  text-wrap: pretty;
}
@media (min-width: 640px) { .sb-hero-p { font-size: 20px; } }

.sb-chips { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 20px; }
@media (min-width: 640px) { .sb-chips { gap: 10px; margin-top: 24px; } }
.sb-chip {
  padding: 7px 12px;
  border-radius: 999px;
  background: var(--color-paper);
  border: 2px solid var(--color-ink);
  font-weight: 600;
  font-size: 12px;
  box-shadow: 3px 3px 0 var(--color-ink);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: none;
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  line-height: 1;
}
@media (min-width: 480px)  { .sb-chip { padding: 8px 14px; font-size: 13px; } }
@media (min-width: 640px)  { .sb-chip { padding: 10px 16px; font-size: 14px; } }
@media (pointer: coarse) { .sb-chip { cursor: pointer; } }
.sb-chip:hover { transform: translate(-2px, -2px); box-shadow: 5px 5px 0 var(--color-ink); }
.sb-chip.primary { background: var(--color-ink); color: var(--color-cream); }
.sb-chip.primary:hover { background: var(--color-blue); border-color: var(--color-ink); }
.sb-chip.orange { background: var(--color-orange); color: #fff; }
.sb-chip.green  { background: var(--color-green);  color: #fff; }

.sb-polaroid {
  background: #fff;
  padding: 10px 10px 40px;
  position: relative;
  box-shadow: 4px 6px 0 var(--color-ink);
  transform: rotate(-3deg);
  max-width: 260px;
  margin: 0 auto;
  transition: transform 0.4s;
}
@media (min-width: 640px) {
  .sb-polaroid { padding: 14px 14px 50px; max-width: 320px; box-shadow: 6px 8px 0 var(--color-ink); }
}
.sb-polaroid:hover { transform: rotate(0) scale(1.03); }
.sb-polaroid img {
  width: 100%;
  display: block;
  border-radius: 2px;
  filter: contrast(1.05);
}
.sb-polaroid-caption {
  position: absolute;
  bottom: 10px;
  left: 14px;
  right: 14px;
  text-align: center;
  font-family: "Caveat", "Kalam", cursive;
  font-size: 22px;
  color: #111;
}
</style>
