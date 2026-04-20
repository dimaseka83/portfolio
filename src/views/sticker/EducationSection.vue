<script setup>
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { lang, t } = useI18n();
</script>

<template>
  <section id="education" class="sb-section">
    <RevealBlock>
      <span class="kicker">06 / {{ lang === "en" ? "Education" : "Pendidikan" }}</span>
    </RevealBlock>
    <RevealBlock :delay="80">
      <h2 class="sb-title">
        <template v-if="lang === 'en'">Where I <span class="highlight">studied.</span></template>
        <template v-else>Tempat saya <span class="highlight">belajar.</span></template>
      </h2>
    </RevealBlock>
    <div class="sb-edu">
      <RevealBlock v-for="(e, i) in d.education" :key="i" :delay="120 + i * 80">
        <div class="sb-edu-card">
          <span class="period">{{ e.period }}</span>
          <h3>{{ e.school }}</h3>
          <p>{{ t(e.degree) }}</p>
        </div>
      </RevealBlock>
    </div>
  </section>
</template>

<style scoped>
.sb-section { padding: 60px 20px; max-width: 1320px; margin: 0 auto; }
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

.sb-edu {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 700px) { .sb-edu { grid-template-columns: 1fr 1fr; } }
.sb-edu-card {
  background: var(--color-paper);
  border: 2px solid var(--color-ink);
  border-radius: 18px;
  padding: 20px;
  box-shadow: 4px 4px 0 var(--color-ink);
  transform: rotate(0);
  transition: transform 0.3s;
}
@media (min-width: 640px) { .sb-edu-card { padding: 28px; border-radius: 22px; box-shadow: 5px 5px 0 var(--color-ink); } }
@media (min-width: 700px) {
  .sb-edu-card { transform: rotate(-1deg); }
  .sb-edu-card:nth-child(2) { transform: rotate(1.5deg); }
}
.sb-edu-card:hover { transform: rotate(0); }
.sb-edu-card h3 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 26px;
  line-height: 1.1;
  margin: 8px 0 6px;
}
.sb-edu-card p { color: var(--color-ink-mute); margin: 0; }
.sb-edu-card .period {
  display: inline-block;
  background: var(--color-blue);
  color: #fff;
  padding: 4px 10px;
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
}
</style>
