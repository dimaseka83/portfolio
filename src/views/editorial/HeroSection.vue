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

const topline = { en: "Portfolio — 2026 Edition", id: "Portofolio — Edisi 2026" };
const openLbl = { en: "Open to work", id: "Terbuka untuk peluang" };
const writeMe = { en: "Write me", id: "Kirim email" };
const viewCv  = { en: "View LinkedIn", id: "Lihat LinkedIn" };
const dlCv    = { en: "Download CV", id: "Unduh CV" };
const cvHref  = "https://drive.google.com/file/d/1IFBdqHlOVOLpupnS0gqH-l3hdtixkMDO/view";
</script>

<template>
  <header id="home" class="ed-hero">
    <div class="ed-topline">
      <span><strong>{{ d.name }}</strong> · {{ d.role.en }}</span>
      <span class="ed-status">
        <span class="ed-status-dot" />
        {{ t(openLbl) }} — {{ t(d.location) }}
      </span>
    </div>

    <h1 class="ed-hero-title">
      <template v-if="lang === 'en'">
        Building <span class="italic">scalable</span><br />
        web <span class="underline">apps</span> with<br />
        <span class="typing">{{ typed }}</span>
      </template>
      <template v-else>
        Membangun web<br />
        <span class="italic">scalable</span> pakai<br />
        <span class="typing">{{ typed }}</span>
      </template>
    </h1>

    <div class="ed-hero-grid">
      <RevealBlock :delay="200">
        <p class="ed-hero-summary">{{ t(d.summary) }}</p>
        <div class="ed-cta-row">
          <a :href="mailHref" class="ed-btn ed-btn-primary">
            {{ t(writeMe) }} <span class="ed-btn-arrow">→</span>
          </a>
          <a :href="d.linkedin" target="_blank" rel="noopener" class="ed-btn ed-btn-ghost">
            {{ t(viewCv) }} <span class="ed-btn-arrow">↗</span>
          </a>
          <a :href="cvHref" target="_blank" rel="noopener" class="ed-btn ed-btn-ghost">
            {{ t(dlCv) }} <span class="ed-btn-arrow">↓</span>
          </a>
        </div>
      </RevealBlock>

      <RevealBlock :delay="350">
        <div class="ed-hero-card">
          <div class="ed-hero-avatar">
            <img src="/assets/dhimas.jpg" :alt="d.name" />
          </div>
          <div class="ed-hero-card-meta">
            <div class="row"><span>Name</span><span>{{ d.shortName }}</span></div>
            <div class="row"><span>Role</span><span>Full Stack</span></div>
            <div class="row"><span>Based</span><span>Malang, ID</span></div>
            <div class="row"><span>XP</span><span>4+ years</span></div>
          </div>
        </div>
      </RevealBlock>
    </div>

    <div class="ed-marquee" aria-hidden="true">
      <div class="ed-marquee-track">
        <span>
          <template v-for="(s, i) in [...d.topSkills, ...d.topSkills, ...d.topSkills]" :key="i">
            {{ s }}<i class="dot" />
          </template>
        </span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.ed-hero {
  min-height: 92vh;
  padding: 120px 24px 60px;
  max-width: 1380px;
  margin: 0 auto;
  position: relative;
}
@media (min-width: 768px) {
  .ed-hero { padding: 160px 48px 80px; }
}

.ed-topline {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-ink-mute);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(15, 17, 20, 0.12);
  margin-bottom: 30px;
  gap: 12px;
  flex-direction: column;
}
@media (min-width: 640px) {
  .ed-topline {
    flex-direction: row;
    font-size: 12px;
    margin-bottom: 40px;
  }
}
:where([data-theme="dark"]) .ed-topline {
  border-bottom-color: rgba(242, 239, 232, 0.14);
}
.ed-topline strong {
  color: var(--color-ink);
  font-weight: 600;
}
.ed-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.ed-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-green);
  box-shadow: 0 0 0 3px rgba(20, 174, 92, 0.2);
  animation: pulse-dot 2s infinite;
}

.ed-hero-title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(48px, 11vw, 170px);
  line-height: 0.92;
  letter-spacing: -0.03em;
  margin: 0;
}
.ed-hero-title .italic { font-style: italic; color: var(--color-blue); }
.ed-hero-title .underline {
  text-decoration: underline;
  text-decoration-thickness: 6px;
  text-underline-offset: 12px;
  text-decoration-color: var(--color-orange);
}
.ed-hero-title .typing {
  color: var(--color-blue);
  font-style: italic;
  position: relative;
}
.ed-hero-title .typing::after {
  content: "";
  display: inline-block;
  width: 4px;
  height: 0.8em;
  background: var(--color-blue);
  margin-left: 6px;
  transform: translateY(4px);
  animation: caret-blink 1s infinite;
}

.ed-hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-top: 40px;
  align-items: end;
}
@media (min-width: 900px) {
  .ed-hero-grid {
    grid-template-columns: 1.4fr 1fr;
    gap: 60px;
    margin-top: 60px;
  }
}

.ed-hero-summary {
  font-size: clamp(16px, 1.4vw, 20px);
  line-height: 1.6;
  color: var(--color-ink-soft);
  max-width: 580px;
  text-wrap: pretty;
}

.ed-hero-card {
  background: var(--color-paper);
  border: 1px solid rgba(15, 17, 20, 0.12);
  border-radius: var(--radius-card);
  padding: 20px;
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 16px;
  align-items: center;
  box-shadow: 0 1px 2px rgba(15, 17, 20, 0.04), 0 10px 30px rgba(15, 17, 20, 0.06);
}
@media (min-width: 640px) {
  .ed-hero-card {
    grid-template-columns: 120px 1fr;
    padding: 24px;
    gap: 20px;
  }
}
:where([data-theme="dark"]) .ed-hero-card {
  border-color: rgba(242, 239, 232, 0.14);
}
.ed-hero-avatar {
  width: 100px;
  height: 100px;
  border-radius: 16px;
  overflow: hidden;
  background: var(--color-blue-soft);
  position: relative;
}
@media (min-width: 640px) {
  .ed-hero-avatar { width: 120px; height: 120px; }
}
.ed-hero-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.05);
}
.ed-hero-avatar::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 60%, rgba(31, 75, 255, 0.18));
  pointer-events: none;
}
.ed-hero-card-meta { font-size: 14px; line-height: 1.5; }
.ed-hero-card-meta .row {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  border-bottom: 1px dashed rgba(15, 17, 20, 0.12);
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
:where([data-theme="dark"]) .ed-hero-card-meta .row {
  border-bottom-color: rgba(242, 239, 232, 0.14);
}
.ed-hero-card-meta .row:last-child { border-bottom: 0; }
.ed-hero-card-meta .row span:first-child { color: var(--color-ink-mute); }
.ed-hero-card-meta .row span:last-child { color: var(--color-ink); font-weight: 600; }

.ed-cta-row {
  display: flex;
  gap: 12px;
  margin-top: 24px;
  flex-wrap: wrap;
}
.ed-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 14px;
  transition: transform 0.2s, background 0.2s;
  cursor: none;
  text-decoration: none;
}
@media (pointer: coarse) { .ed-btn { cursor: pointer; } }
.ed-btn-primary { background: var(--color-ink); color: var(--color-cream); }
.ed-btn-primary:hover {
  background: var(--color-blue);
  transform: translateY(-2px);
}
.ed-btn-ghost {
  background: transparent;
  border: 1px solid rgba(15, 17, 20, 0.12);
  color: inherit;
}
:where([data-theme="dark"]) .ed-btn-ghost { border-color: rgba(242, 239, 232, 0.14); }
.ed-btn-ghost:hover {
  background: var(--color-cream-2);
  transform: translateY(-2px);
}
.ed-btn-arrow { transition: transform 0.2s; }
.ed-btn:hover .ed-btn-arrow { transform: translateX(4px); }

.ed-marquee {
  overflow: hidden;
  border-top: 1px solid rgba(15, 17, 20, 0.12);
  border-bottom: 1px solid rgba(15, 17, 20, 0.12);
  padding: 20px 0;
  margin-top: 40px;
}
@media (min-width: 768px) {
  .ed-marquee { padding: 24px 0; margin-top: 60px; }
}
:where([data-theme="dark"]) .ed-marquee {
  border-top-color: rgba(242, 239, 232, 0.14);
  border-bottom-color: rgba(242, 239, 232, 0.14);
}
.ed-marquee-track {
  display: flex;
  gap: 48px;
  white-space: nowrap;
  animation: marquee 30s linear infinite;
  font-family: var(--font-display);
  font-size: clamp(24px, 4vw, 52px);
  font-style: italic;
  color: var(--color-ink-mute);
}
.ed-marquee-track span {
  display: inline-flex;
  align-items: center;
  gap: 48px;
}
.ed-marquee-track .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-orange);
  display: inline-block;
}
</style>
