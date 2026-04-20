<script setup>
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { lang, t } = useI18n();

const kicker = { en: "04 / Selected Work", id: "04 / Karya Pilihan" };
</script>

<template>
  <section id="projects" class="ed-section">
    <RevealBlock><span class="kicker">{{ t(kicker) }}</span></RevealBlock>
    <RevealBlock :delay="80">
      <h2 class="ed-title">
        <template v-if="lang === 'en'">Selected <span class="italic">projects.</span></template>
        <template v-else>Proyek <span class="italic">pilihan.</span></template>
      </h2>
    </RevealBlock>
    <div class="ed-projects">
      <RevealBlock v-for="(p, i) in d.projects" :key="i" :delay="i * 80">
        <article class="ed-project">
          <div class="ed-project-no">Project — {{ String(i + 1).padStart(2, "0") }}</div>
          <div class="ed-project-vis" :class="`a-${p.accent}`">
            <div class="ed-project-vis-label">{{ p.name }}</div>
          </div>
          <h3 class="ed-project-title">{{ p.name }}</h3>
          <div class="ed-project-kind">{{ t(p.kind) }}</div>
          <p class="ed-project-blurb">{{ t(p.blurb) }}</p>
          <div class="ed-project-stack">
            <span v-for="s in p.stack" :key="s" class="ed-tag">{{ s }}</span>
          </div>
        </article>
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
.ed-projects {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
@media (min-width: 800px) { .ed-projects { grid-template-columns: 1fr 1fr; } }
.ed-project {
  background: var(--color-paper);
  border: 1px solid rgba(15, 17, 20, 0.12);
  border-radius: var(--radius-card);
  padding: 24px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
@media (min-width: 640px) { .ed-project { padding: 32px; } }
:where([data-theme="dark"]) .ed-project { border-color: rgba(242, 239, 232, 0.14); }
.ed-project:hover {
  transform: translateY(-8px);
  box-shadow: 0 1px 2px rgba(15, 17, 20, 0.04), 0 10px 30px rgba(15, 17, 20, 0.06);
}
.ed-project-no {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-ink-mute);
  margin-bottom: 16px;
}
.ed-project-vis {
  aspect-ratio: 16/9;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
}
.ed-project-vis.a-blue   { background: linear-gradient(135deg, #1f4bff, #7ca3ff); }
.ed-project-vis.a-orange { background: linear-gradient(135deg, #ff5c2b, #ffb199); }
.ed-project-vis.a-green  { background: linear-gradient(135deg, #14ae5c, #6fdca3); }
.ed-project-vis.a-yellow { background: linear-gradient(135deg, #eab308, #ffe58f); }
.ed-project-vis::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.12) 0 2px, transparent 2px 14px);
}
.ed-project-vis-label {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-family: var(--font-display);
  font-size: clamp(24px, 4vw, 44px);
  font-style: italic;
  color: rgba(255, 255, 255, 0.95);
  text-align: center;
  padding: 20px;
}
.ed-project-title {
  font-family: var(--font-display);
  font-size: clamp(26px, 3vw, 34px);
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0 0 6px;
  font-weight: 400;
}
.ed-project-kind {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-ink-mute);
  margin-bottom: 14px;
}
.ed-project-blurb { color: var(--color-ink-soft); margin-bottom: 18px; text-wrap: pretty; }
.ed-project-stack { display: flex; gap: 6px; flex-wrap: wrap; }
.ed-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--color-cream-2);
  color: var(--color-ink-soft);
}
</style>
