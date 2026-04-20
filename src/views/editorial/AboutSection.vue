<script setup>
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { lang, t } = useI18n();

const kicker = { en: "01 / About", id: "01 / Tentang" };
</script>

<template>
  <section id="about" class="ed-about">
    <div class="ed-about-inner">
      <RevealBlock><span class="kicker">{{ t(kicker) }}</span></RevealBlock>
      <RevealBlock :delay="80">
        <h2 class="ed-about-title">
          <template v-if="lang === 'en'">About <em class="orange">me.</em></template>
          <template v-else>Tentang <em class="orange">saya.</em></template>
        </h2>
      </RevealBlock>
      <div class="ed-about-grid">
        <RevealBlock :delay="160">
          <div class="ed-about-text">
            <p v-for="(p, i) in t(d.about)" :key="i">{{ p }}</p>
          </div>
        </RevealBlock>
        <RevealBlock :delay="260">
          <div class="ed-stats">
            <div v-for="(s, i) in d.stats" :key="i" class="ed-stat">
              <div class="n">{{ s.n }}</div>
              <div class="label">{{ t(s.label) }}</div>
            </div>
          </div>
        </RevealBlock>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ed-about {
  background: var(--color-ink);
  color: var(--color-cream);
  padding: 80px 24px;
  position: relative;
  overflow: hidden;
}
@media (min-width: 768px) { .ed-about { padding: 120px 48px; } }
.ed-about-inner { max-width: 1280px; margin: 0 auto; position: relative; z-index: 1; }

.ed-about :deep(.kicker) { color: rgba(245, 241, 234, 0.5); }
.ed-about :deep(.kicker)::before { background: rgba(245, 241, 234, 0.5); }

.ed-about-title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(40px, 7vw, 96px);
  line-height: 1.02;
  letter-spacing: -0.02em;
  margin: 20px 0 48px;
}
.ed-about-title .orange { color: var(--color-orange); }

.ed-about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: start;
}
@media (min-width: 900px) {
  .ed-about-grid {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }
}

.ed-about-text p {
  font-size: 17px;
  line-height: 1.65;
  color: rgba(245, 241, 234, 0.78);
  max-width: 540px;
  text-wrap: pretty;
  margin-bottom: 18px;
}
@media (min-width: 768px) { .ed-about-text p { font-size: 18px; } }

.ed-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  background: rgba(245, 241, 234, 0.14);
  border: 1px solid rgba(245, 241, 234, 0.14);
}
.ed-stat {
  background: var(--color-ink);
  padding: 20px;
}
@media (min-width: 640px) { .ed-stat { padding: 28px; } }
.ed-stat .n {
  font-family: var(--font-display);
  font-size: clamp(44px, 6vw, 64px);
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--color-cream);
}
.ed-stat:nth-child(1) .n { color: var(--color-orange); }
.ed-stat:nth-child(2) .n { color: var(--color-blue); }
.ed-stat:nth-child(3) .n { color: var(--color-green); }
.ed-stat:nth-child(4) .n { color: var(--color-yellow); }
.ed-stat .label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(245, 241, 234, 0.55);
  margin-top: 12px;
}
</style>
