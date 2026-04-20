<script setup>
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { t } = useI18n();
</script>

<template>
  <section id="education" class="tm-section">
    <RevealBlock><div class="tm-section-head">06 · education.log</div></RevealBlock>
    <RevealBlock :delay="60">
      <h2 class="tm-section-title">
        <span class="fn">schools</span><span class="br">[]</span>
      </h2>
    </RevealBlock>
    <div class="tm-edu">
      <RevealBlock v-for="(e, i) in d.education" :key="i" :delay="i * 80">
        <div class="tm-edu-card">
          <div class="period">📅 {{ e.period }}</div>
          <h3>{{ e.school }}</h3>
          <p>{{ t(e.degree) }}</p>
        </div>
      </RevealBlock>
    </div>
  </section>
</template>

<style scoped>
.tm-section { padding: 60px 20px; max-width: 1280px; margin: 0 auto; }
@media (min-width: 768px) { .tm-section { padding: 80px 48px; } }
.tm-section-head {
  font-size: 12px;
  color: #7d8590;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.tm-section-head::before { content: "──"; color: #3fb950; }
.tm-section-title {
  font-size: clamp(24px, 4vw, 44px);
  font-weight: 700;
  color: #e6edf3;
  margin: 0 0 32px;
  letter-spacing: -0.015em;
}
.tm-section-title .fn { color: #d2a8ff; }
.tm-section-title .br { color: #7d8590; }

.tm-edu {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 700px) { .tm-edu { grid-template-columns: 1fr 1fr; } }
.tm-edu-card {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 10px;
  padding: 22px;
  transition: border-color 0.2s;
}
.tm-edu-card:hover { border-color: #7ca3ff; }
.tm-edu-card .period { font-size: 11px; color: #d2a8ff; margin-bottom: 8px; }
.tm-edu-card h3 {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 4px;
  color: #e6edf3;
}
.tm-edu-card p { font-size: 13px; color: #7d8590; margin: 0; }
</style>
