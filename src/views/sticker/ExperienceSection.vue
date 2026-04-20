<script setup>
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { lang, t } = useI18n();
</script>

<template>
  <section id="experience" class="sb-section">
    <RevealBlock>
      <span class="kicker">03 / {{ lang === "en" ? "Experience" : "Pengalaman" }}</span>
    </RevealBlock>
    <RevealBlock :delay="80">
      <h2 class="sb-title">
        <template v-if="lang === 'en'">Where I've <span class="highlight">worked.</span></template>
        <template v-else>Tempat saya <span class="highlight">kerja.</span></template>
      </h2>
    </RevealBlock>
    <div class="sb-xp">
      <RevealBlock v-for="(x, i) in d.experience" :key="i" :delay="i * 80">
        <div class="sb-xp-card">
          <div v-if="x.current" class="sb-xp-current">● NOW</div>
          <div class="sb-xp-meta">{{ t(x.period) }} · {{ x.location }}</div>
          <div class="sb-xp-company">{{ x.company }}</div>
          <h3 class="sb-xp-role">{{ t(x.role) }}</h3>
          <ul>
            <li v-for="(b, j) in t(x.bullets)" :key="j">{{ b }}</li>
          </ul>
          <div class="sb-project-stack">
            <span v-for="tag in x.tags" :key="tag" class="sb-stack-tag">{{ tag }}</span>
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

.sb-xp {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 900px) { .sb-xp { grid-template-columns: 1fr 1fr; } }

.sb-xp-card {
  background: var(--color-paper);
  border: 2px solid var(--color-ink);
  border-radius: 18px;
  padding: 20px;
  box-shadow: 4px 4px 0 var(--color-ink);
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
}
@media (min-width: 640px) { .sb-xp-card { padding: 24px; border-radius: 22px; box-shadow: 5px 5px 0 var(--color-ink); } }
@media (min-width: 900px) { .sb-xp-card { padding: 28px; } }
.sb-xp-card:nth-child(odd)  { transform: rotate(0); }
.sb-xp-card:nth-child(even) { transform: rotate(0); }
@media (min-width: 900px) {
  .sb-xp-card:nth-child(odd)  { transform: rotate(-1deg); }
  .sb-xp-card:nth-child(even) { transform: rotate(1deg); }
}
.sb-xp-card:hover {
  transform: rotate(0) translate(-3px, -3px);
  box-shadow: 8px 8px 0 var(--color-ink);
}
.sb-xp-role {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(26px, 3.5vw, 32px);
  line-height: 1.05;
  margin: 8px 0 4px;
}
.sb-xp-company { font-weight: 700; color: var(--color-blue); margin-bottom: 4px; }
.sb-xp-meta {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-ink-mute);
  margin-bottom: 16px;
}
.sb-xp-card ul { list-style: none; padding: 0; margin: 0 0 16px; }
.sb-xp-card ul li {
  padding-left: 24px;
  position: relative;
  margin: 6px 0;
  color: var(--color-ink-soft);
  text-wrap: pretty;
  font-size: 14px;
}
@media (min-width: 640px) { .sb-xp-card ul li { font-size: inherit; } }
.sb-xp-card ul li::before {
  content: "✦";
  position: absolute;
  left: 0;
  color: var(--color-orange);
}
.sb-xp-current {
  position: absolute;
  top: -14px;
  right: 20px;
  background: var(--color-green);
  color: #fff;
  padding: 6px 12px;
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  font-weight: 700;
  box-shadow: 3px 3px 0 var(--color-ink);
  transform: rotate(6deg);
}
.sb-project-stack { display: flex; gap: 6px; flex-wrap: wrap; }
.sb-stack-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--color-cream-2);
  border: 1px solid var(--color-ink);
}
</style>
