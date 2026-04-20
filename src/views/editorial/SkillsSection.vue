<script setup>
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { lang, t } = useI18n();

const kicker = { en: "02 / Stack", id: "02 / Tech Stack" };
const groups = [
  { key: "languages", label: { en: "Languages", id: "Bahasa" }, items: d.skills.languages },
  { key: "frontend",  label: { en: "Frontend",  id: "Frontend" }, items: d.skills.frontend },
  { key: "backend",   label: { en: "Backend",   id: "Backend" },  items: d.skills.backend },
  { key: "tools",     label: { en: "Tools",     id: "Tools" },    items: d.skills.tools },
];
</script>

<template>
  <section id="skills" class="ed-section">
    <RevealBlock><span class="kicker">{{ t(kicker) }}</span></RevealBlock>
    <RevealBlock :delay="80">
      <h2 class="ed-title">
        <template v-if="lang === 'en'">Tools I reach for.</template>
        <template v-else>Tools yang saya pakai.</template>
      </h2>
    </RevealBlock>
    <div class="ed-skills-grid">
      <RevealBlock v-for="(g, i) in groups" :key="g.key" :delay="120 + i * 80">
        <div class="ed-skills-col">
          <h4>{{ t(g.label) }}</h4>
          <ul>
            <li v-for="s in g.items" :key="s">{{ s }}</li>
          </ul>
        </div>
      </RevealBlock>
    </div>
  </section>
</template>

<style scoped>
.ed-section {
  padding: 80px 24px;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
}
@media (min-width: 768px) { .ed-section { padding: 120px 48px; } }

.ed-title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(40px, 7vw, 96px);
  line-height: 1.02;
  letter-spacing: -0.02em;
  margin: 20px 0 48px;
}

.ed-skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 32px;
}
@media (min-width: 640px) { .ed-skills-grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 900px) { .ed-skills-grid { grid-template-columns: repeat(4, 1fr); } }

.ed-skills-col {
  background: var(--color-paper);
  border: 1px solid rgba(15, 17, 20, 0.12);
  border-radius: var(--radius-card);
  padding: 24px;
  transition: transform 0.25s, box-shadow 0.25s;
}
:where([data-theme="dark"]) .ed-skills-col { border-color: rgba(242, 239, 232, 0.14); }
.ed-skills-col:hover {
  transform: translateY(-6px);
  box-shadow: 0 1px 2px rgba(15, 17, 20, 0.04), 0 10px 30px rgba(15, 17, 20, 0.06);
}
.ed-skills-col h4 {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-ink-mute);
  margin: 0 0 18px;
}
.ed-skills-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.ed-skills-col li {
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
}
.ed-skills-col li::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-blue);
}
.ed-skills-col:nth-child(1) li::before { background: var(--color-blue); }
.ed-skills-col:nth-child(2) li::before { background: var(--color-orange); }
.ed-skills-col:nth-child(3) li::before { background: var(--color-green); }
.ed-skills-col:nth-child(4) li::before { background: var(--color-yellow); }
</style>
