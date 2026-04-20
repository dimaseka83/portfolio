<script setup>
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { t } = useI18n();
</script>

<template>
  <section id="about" class="tm-section">
    <RevealBlock><div class="tm-section-head">01 · about.md</div></RevealBlock>
    <RevealBlock :delay="60">
      <h2 class="tm-section-title">
        <span class="fn">function</span> about<span class="br">()</span> <span class="br">{</span>
      </h2>
    </RevealBlock>
    <div class="tm-about-grid">
      <RevealBlock :delay="140">
        <div class="tm-about-text">
          <p v-for="(p, i) in t(d.about)" :key="i">{{ p }}</p>
        </div>
      </RevealBlock>
      <RevealBlock :delay="220">
        <div class="tm-stats">
          <div v-for="(s, i) in d.stats" :key="i" class="tm-stat">
            <div class="n">{{ s.n }}</div>
            <div class="label">{{ t(s.label) }}</div>
          </div>
        </div>
      </RevealBlock>
    </div>
    <h2 class="tm-section-title tm-close"><span class="br">}</span></h2>
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
.tm-close { margin-top: 40px; margin-bottom: 0; }

.tm-about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 900px) { .tm-about-grid { grid-template-columns: 2fr 1fr; } }

.tm-about-text p {
  font-size: 14px;
  line-height: 1.75;
  color: #c9d1d9;
  text-wrap: pretty;
  margin-bottom: 14px;
}

.tm-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.tm-stat {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 18px;
  transition: border-color 0.2s;
}
.tm-stat:hover { border-color: #7ca3ff; }
.tm-stat .n { font-size: 32px; font-weight: 700; color: #7ca3ff; }
.tm-stat:nth-child(2) .n { color: #ff7b72; }
.tm-stat:nth-child(3) .n { color: #3fb950; }
.tm-stat:nth-child(4) .n { color: #ffa657; }
.tm-stat .label {
  font-size: 11px;
  color: #7d8590;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
</style>
