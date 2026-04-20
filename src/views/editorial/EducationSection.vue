<script setup>
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { lang, t } = useI18n();

const kicker = { en: "06 / Education", id: "06 / Pendidikan" };
</script>

<template>
  <section id="education" class="ed-section">
    <RevealBlock><span class="kicker">{{ t(kicker) }}</span></RevealBlock>
    <RevealBlock :delay="80">
      <h2 class="ed-title">
        <template v-if="lang === 'en'">School <span class="italic">days.</span></template>
        <template v-else>Masa <span class="italic">sekolah.</span></template>
      </h2>
    </RevealBlock>
    <div class="ed-edu">
      <RevealBlock v-for="(e, i) in d.education" :key="i" :delay="120 + i * 80">
        <div class="ed-edu-item">
          <div class="ed-edu-period">{{ e.period }}</div>
          <h3>{{ e.school }}</h3>
          <p>{{ t(e.degree) }}</p>
        </div>
      </RevealBlock>
    </div>
  </section>
</template>

<style scoped>
.ed-section { padding: 80px 24px; max-width: 1280px; margin: 0 auto; }
@media (min-width: 768px) { .ed-section { padding: 120px 48px; } }
.ed-title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(40px, 7vw, 96px);
  line-height: 1.02;
  letter-spacing: -0.02em;
  margin: 20px 0 48px;
}
.ed-title .italic { font-style: italic; color: var(--color-blue); }
.ed-edu {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
@media (min-width: 700px) { .ed-edu { grid-template-columns: 1fr 1fr; } }
.ed-edu-item {
  background: var(--color-paper);
  border: 1px solid rgba(15, 17, 20, 0.12);
  border-radius: var(--radius-card);
  padding: 24px;
}
@media (min-width: 640px) { .ed-edu-item { padding: 28px; } }
:where([data-theme="dark"]) .ed-edu-item { border-color: rgba(242, 239, 232, 0.14); }
.ed-edu-period {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-blue);
  margin-bottom: 10px;
}
.ed-edu-item h3 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 26px;
  line-height: 1.1;
  margin: 0 0 6px;
}
.ed-edu-item p { color: var(--color-ink-mute); margin: 0; }
</style>
