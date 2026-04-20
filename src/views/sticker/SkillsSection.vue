<script setup>
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { lang } = useI18n();

const allSkills = [
  ...d.skills.languages.map((s) => ({ s, c: "blue" })),
  ...d.skills.frontend.map((s)  => ({ s, c: "orange" })),
  ...d.skills.backend.map((s)   => ({ s, c: "green" })),
  ...d.skills.tools.map((s)     => ({ s, c: "pink" })),
];
</script>

<template>
  <section id="skills" class="sb-section">
    <RevealBlock>
      <span class="kicker">02 / {{ lang === "en" ? "Stack" : "Tech Stack" }}</span>
    </RevealBlock>
    <RevealBlock :delay="80">
      <h2 class="sb-title">
        <template v-if="lang === 'en'">My <span class="scribble">toolkit.</span></template>
        <template v-else>Toolkit <span class="scribble">saya.</span></template>
      </h2>
    </RevealBlock>
    <RevealBlock :delay="160">
      <div class="sb-skills-wrap">
        <span v-for="(x, i) in allSkills" :key="i" class="sb-skill-tag" :class="x.c">
          {{ x.s }}
        </span>
      </div>
    </RevealBlock>
  </section>
</template>

<style scoped>
.sb-section {
  padding: 60px 20px;
  max-width: 1320px;
  margin: 0 auto;
  position: relative;
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
.sb-title .scribble { color: var(--color-orange); font-style: italic; }

.sb-skills-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 980px;
}
@media (min-width: 640px) { .sb-skills-wrap { gap: 12px; } }
.sb-skill-tag {
  padding: 8px 14px;
  border-radius: 999px;
  background: var(--color-paper);
  border: 2px solid var(--color-ink);
  font-weight: 600;
  font-size: 13px;
  box-shadow: 2px 2px 0 var(--color-ink);
  transition: transform 0.2s, background 0.2s, color 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
@media (min-width: 640px) {
  .sb-skill-tag { padding: 12px 20px; font-size: 15px; box-shadow: 3px 3px 0 var(--color-ink); gap: 8px; }
}
.sb-skill-tag::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-blue);
}
.sb-skill-tag:hover {
  transform: translate(-2px, -2px);
  background: var(--color-blue);
  color: #fff;
}
.sb-skill-tag:hover::before { background: #fff; }
.sb-skill-tag.orange::before { background: var(--color-orange); }
.sb-skill-tag.green::before  { background: var(--color-green); }
.sb-skill-tag.pink::before   { background: var(--color-pink); }
</style>
