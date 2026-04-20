<script setup>
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { lang, t } = useI18n();
</script>

<template>
  <section id="about" class="sb-section">
    <RevealBlock>
      <span class="kicker">01 / {{ lang === "en" ? "About" : "Tentang" }}</span>
    </RevealBlock>
    <RevealBlock :delay="80">
      <h2 class="sb-title">
        <template v-if="lang === 'en'">A little <span class="highlight">about</span> me.</template>
        <template v-else>Sedikit <span class="highlight">tentang</span> saya.</template>
      </h2>
    </RevealBlock>
    <div class="sb-about-grid">
      <RevealBlock :delay="160">
        <div class="sb-about-text">
          <p v-for="(p, i) in t(d.about)" :key="i">{{ p }}</p>
        </div>
      </RevealBlock>
      <RevealBlock :delay="240">
        <div class="sb-stat-grid">
          <div v-for="(s, i) in d.stats" :key="i" class="sb-stat">
            <div class="n">{{ s.n }}</div>
            <div class="label">{{ t(s.label) }}</div>
          </div>
        </div>
      </RevealBlock>
    </div>
  </section>
</template>

<style scoped>
.sb-section {
  padding: 60px 20px;
  max-width: 1320px;
  margin: 0 auto;
  position: relative;
}
@media (min-width: 640px) { .sb-section { padding: 60px 24px; } }
@media (min-width: 768px) { .sb-section { padding: 100px 48px; } }

.sb-title {
  font-family: var(--font-display);
  font-size: clamp(36px, 7vw, 88px);
  line-height: 1;
  letter-spacing: -0.02em;
  font-weight: 400;
  margin: 20px 0 40px;
}
.sb-title .highlight { background: var(--color-yellow); padding: 0 10px; color: #111; }

.sb-about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  align-items: start;
}
@media (min-width: 640px) { .sb-about-grid { gap: 32px; } }
@media (min-width: 900px) { .sb-about-grid { grid-template-columns: 1fr 1fr; gap: 40px; } }

.sb-about-text p {
  font-size: 15px;
  line-height: 1.65;
  text-wrap: pretty;
  margin-bottom: 16px;
  color: var(--color-ink-soft);
}
@media (min-width: 640px) { .sb-about-text p { font-size: 17px; } }
@media (min-width: 768px) { .sb-about-text p { font-size: 18px; } }

.sb-stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
@media (min-width: 640px) { .sb-stat-grid { gap: 14px; } }
.sb-stat {
  background: var(--color-paper);
  border: 2px solid var(--color-ink);
  border-radius: 14px;
  padding: 16px;
  box-shadow: 3px 3px 0 var(--color-ink);
  transform: rotate(-1deg);
  transition: transform 0.3s;
}
@media (min-width: 640px) { .sb-stat { padding: 24px; border-radius: 18px; box-shadow: 4px 4px 0 var(--color-ink); } }
.sb-stat:nth-child(2) { transform: rotate(2deg); background: var(--color-blue); color: #fff; }
.sb-stat:nth-child(3) { transform: rotate(1deg); background: var(--color-orange); color: #fff; }
.sb-stat:nth-child(4) { transform: rotate(-2deg); background: var(--color-green); color: #fff; }
.sb-stat:hover { transform: rotate(0) scale(1.05); }
.sb-stat .n {
  font-family: var(--font-display);
  font-size: clamp(32px, 5vw, 56px);
  line-height: 1;
  letter-spacing: -0.03em;
}
.sb-stat .label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 8px;
  opacity: 0.75;
}
</style>
