<script setup>
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { lang, t } = useI18n();
</script>

<template>
  <section id="credentials" class="sb-section">
    <RevealBlock>
      <span class="kicker">05 / {{ lang === "en" ? "Credentials" : "Kredensial" }}</span>
    </RevealBlock>
    <RevealBlock :delay="80">
      <h2 class="sb-title">
        <template v-if="lang === 'en'">Proof I know <span class="highlight">stuff.</span></template>
        <template v-else>Bukti saya <span class="highlight">kompeten.</span></template>
      </h2>
    </RevealBlock>
    <div class="sb-creds">
      <RevealBlock :delay="120">
        <div class="sb-creds-card">
          <h4><span class="highlight">{{ lang === "en" ? "Certifications" : "Sertifikasi" }}</span></h4>
          <ul><li v-for="c in d.certifications" :key="c">{{ c }}</li></ul>
        </div>
      </RevealBlock>
      <RevealBlock :delay="200">
        <div class="sb-creds-card">
          <h4><span class="blue">{{ lang === "en" ? "Awards" : "Penghargaan" }}</span></h4>
          <ul><li v-for="(a, i) in d.awards" :key="i">{{ t(a) }}</li></ul>
        </div>
      </RevealBlock>
      <RevealBlock :delay="280">
        <div class="sb-creds-card">
          <h4><span class="green">{{ lang === "en" ? "Publications" : "Publikasi" }}</span></h4>
          <ul><li v-for="(p, i) in d.publications" :key="i">{{ p.title }}</li></ul>
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

.sb-creds {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
@media (min-width: 900px) { .sb-creds { grid-template-columns: 1.2fr 1fr 1fr; } }
.sb-creds-card {
  background: var(--color-paper);
  border: 2px solid var(--color-ink);
  border-radius: 18px;
  padding: 20px;
  box-shadow: 4px 4px 0 var(--color-ink);
  transition: transform 0.3s;
}
@media (min-width: 640px) { .sb-creds-card { padding: 28px; border-radius: 22px; box-shadow: 5px 5px 0 var(--color-ink); } }
.sb-creds-card:hover { transform: translate(-3px, -3px); box-shadow: 8px 8px 0 var(--color-ink); }
.sb-creds-card h4 {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 400;
  margin: 0 0 18px;
}
.sb-creds-card h4 .highlight { background: var(--color-yellow); padding: 0 6px; color: #111; }
.sb-creds-card h4 .blue      { background: var(--color-blue);   color: #fff; padding: 0 6px; }
.sb-creds-card h4 .green     { background: var(--color-green);  color: #fff; padding: 0 6px; }
.sb-creds-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.sb-creds-card li {
  padding-left: 26px;
  position: relative;
  text-wrap: pretty;
  font-size: 14px;
}
@media (min-width: 640px) { .sb-creds-card li { font-size: inherit; } }
.sb-creds-card li::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--color-ink);
  color: var(--color-cream);
  display: grid;
  place-items: center;
  font-size: 11px;
  font-weight: 700;
}
</style>
