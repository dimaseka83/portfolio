<script setup>
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { t } = useI18n();
</script>

<template>
  <section id="credentials" class="tm-section">
    <RevealBlock><div class="tm-section-head">05 · credentials/</div></RevealBlock>
    <RevealBlock :delay="60">
      <h2 class="tm-section-title">
        <span class="fn">certs</span><span class="br">[]</span>
      </h2>
    </RevealBlock>
    <div class="tm-creds">
      <RevealBlock :delay="100">
        <div class="tm-creds-col">
          <h4>certifications</h4>
          <ul><li v-for="c in d.certifications" :key="c">{{ c }}</li></ul>
        </div>
      </RevealBlock>
      <RevealBlock :delay="180">
        <div class="tm-creds-col">
          <h4>awards</h4>
          <ul><li v-for="(a, i) in d.awards" :key="i">{{ t(a) }}</li></ul>
        </div>
      </RevealBlock>
      <RevealBlock :delay="260">
        <div class="tm-creds-col">
          <h4>publications</h4>
          <ul><li v-for="(p, i) in d.publications" :key="i">{{ p.title }}</li></ul>
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

.tm-creds {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 900px) { .tm-creds { grid-template-columns: 1.2fr 1fr 1fr; } }
.tm-creds-col {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 10px;
  padding: 22px;
}
.tm-creds-col h4 {
  font-size: 13px;
  color: #3fb950;
  margin: 0 0 16px;
}
.tm-creds-col h4::before { content: "// "; color: #7d8590; }
.tm-creds-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.tm-creds-col li {
  font-size: 13px;
  color: #c9d1d9;
  padding-left: 20px;
  position: relative;
  text-wrap: pretty;
}
.tm-creds-col li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #ffa657;
}
</style>
