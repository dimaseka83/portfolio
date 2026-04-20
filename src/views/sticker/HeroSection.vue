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
const telHref = computed(() => "tel:" + d.phone.replace(/\s/g, ""));
const writeMe = { en: "Write me", id: "Kirim email" };
const cvHref  = "https://drive.google.com/file/d/1IFBdqHlOVOLpupnS0gqH-l3hdtixkMDO/view";
</script>

<template>
  <header id="home" class="sb-hero">
    <div class="sb-sticker sticker-1">★ {{ lang === "en" ? "Open to work" : "Terbuka" }}</div>
    <div class="sb-sticker blue sticker-2">Malang, ID</div>

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
          <a :href="telHref" class="sb-chip orange">{{ d.phone }}</a>
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
  padding: 100px 20px 60px;
  max-width: 1320px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media (min-width: 640px) { .sb-hero { padding: 120px 24px 60px; } }
@media (min-width: 768px) { .sb-hero { padding: 140px 48px 80px; } }

.sb-sticker {
  position: absolute;
  padding: 10px 18px;
  background: var(--color-yellow);
  color: #111;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 999px;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.15);
  transform: rotate(-6deg);
  z-index: 2;
}
.sb-sticker.blue   { background: var(--color-blue); color: #fff; }
.sb-sticker.orange { background: var(--color-orange); color: #fff; }
.sb-sticker.green  { background: var(--color-green); color: #fff; }

.sticker-1 { top: 90px; right: 12px; font-size: 10px; padding: 7px 12px; }
.sticker-2 { top: 130px; right: 110px; transform: rotate(8deg); font-size: 10px; padding: 7px 12px; }
@media (min-width: 640px) {
  .sticker-1 { top: 110px; right: 40px; font-size: 12px; padding: 10px 18px; }
  .sticker-2 { top: 170px; right: 220px; font-size: 12px; padding: 10px 18px; }
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
  padding: 8px 14px;
  border-radius: 999px;
  background: var(--color-paper);
  border: 2px solid var(--color-ink);
  font-weight: 600;
  font-size: 13px;
  box-shadow: 3px 3px 0 var(--color-ink);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: none;
  color: inherit;
  text-decoration: none;
}
@media (min-width: 640px) { .sb-chip { padding: 10px 16px; font-size: 14px; } }
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
