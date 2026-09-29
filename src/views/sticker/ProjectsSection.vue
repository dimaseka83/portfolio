<script setup>
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { lang, t } = useI18n();
</script>

<template>
  <section id="projects" class="sb-section">
    <RevealBlock>
      <span class="kicker">04 / {{ lang === "en" ? "Selected Work" : "Karya Pilihan" }}</span>
    </RevealBlock>
    <RevealBlock :delay="80">
      <h2 class="sb-title">
        <template v-if="lang === 'en'">Things I've <span class="scribble">made.</span></template>
        <template v-else>Karya <span class="scribble">saya.</span></template>
      </h2>
    </RevealBlock>
    <div class="sb-projects-grid">
      <RevealBlock v-for="(p, i) in d.projects" :key="i" :delay="i * 80">
        <article class="sb-project">
          <div class="sb-project-vis" :class="`a-${p.accent}`">
            <img v-if="p.image" :src="p.image" :alt="p.name" class="sb-project-img" />
            <div v-else class="sb-project-name">{{ p.name }}</div>
          </div>
          <div class="kind">{{ t(p.kind) }}</div>
          <h3>{{ p.name }}</h3>
          <p>{{ t(p.blurb) }}</p>
          <p v-if="p.note" class="sb-project-note">
            {{ t(p.note) }}
            <a v-if="p.noteUrl" :href="p.noteUrl" target="_blank" rel="noopener noreferrer" class="sb-note-link">{{ lang === "en" ? "View demo" : "Lihat demo" }} ↗</a>
          </p>
          <div class="sb-project-stack">
            <span v-for="s in p.stack" :key="s" class="sb-stack-tag">{{ s }}</span>
          </div>
          <div v-if="p.url || p.github" class="sb-project-links">
            <a v-if="p.url" :href="p.url" target="_blank" rel="noopener noreferrer" class="sb-link">{{ lang === "en" ? "Live site" : "Situs live" }} ↗</a>
            <a v-if="p.github" :href="p.github" target="_blank" rel="noopener noreferrer" class="sb-link">GitHub ↗</a>
          </div>
        </article>
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
.sb-title .scribble { color: var(--color-orange); font-style: italic; }

.sb-projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 900px) { .sb-projects-grid { grid-template-columns: 1fr 1fr; gap: 28px; } }
.sb-project {
  background: var(--color-paper);
  border: 2px solid var(--color-ink);
  border-radius: 18px;
  padding: 18px;
  box-shadow: 4px 4px 0 var(--color-ink);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
}
@media (min-width: 640px) { .sb-project { padding: 22px; border-radius: 22px; box-shadow: 6px 6px 0 var(--color-ink); } }
.sb-project:nth-child(odd)  { transform: rotate(0); }
.sb-project:nth-child(even) { transform: rotate(0); }
@media (min-width: 900px) {
  .sb-project:nth-child(odd)  { transform: rotate(-1.5deg); }
  .sb-project:nth-child(even) { transform: rotate(1.5deg); }
}
.sb-project:hover {
  transform: rotate(0) translate(-4px, -4px);
  box-shadow: 10px 10px 0 var(--color-ink);
}
.sb-project-vis {
  aspect-ratio: 16/9;
  border-radius: 12px;
  border: 2px solid var(--color-ink);
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  padding: 16px;
  text-align: center;
}
@media (min-width: 640px) { .sb-project-vis { aspect-ratio: 4/3; border-radius: 14px; margin-bottom: 20px; padding: 20px; } }
.sb-project-vis.a-blue   { background: var(--color-blue); color: #fff; }
.sb-project-vis.a-orange { background: var(--color-orange); color: #fff; }
.sb-project-vis.a-green  { background: var(--color-green); color: #fff; }
.sb-project-vis.a-yellow { background: var(--color-yellow); color: #111; }
.sb-project-vis.a-pink   { background: #e91e8c; color: #fff; }
.sb-project-vis.a-purple { background: #7c3aed; color: #fff; }
.sb-project-vis::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1.5px);
  background-size: 14px 14px;
}
.sb-project-name {
  font-family: var(--font-display);
  font-size: clamp(32px, 5vw, 44px);
  line-height: 1;
  letter-spacing: -0.02em;
  font-weight: 400;
  position: relative;
}
.sb-project h3 {
  font-family: var(--font-display);
  font-size: 22px;
  line-height: 1.1;
  margin: 0 0 4px;
  font-weight: 400;
}
@media (min-width: 640px) { .sb-project h3 { font-size: 26px; } }
.sb-project .kind {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-ink-mute);
  margin-bottom: 8px;
}
@media (min-width: 640px) { .sb-project .kind { margin-bottom: 10px; } }
.sb-project p { color: var(--color-ink-soft); text-wrap: pretty; margin-bottom: 12px; font-size: 14px; }
@media (min-width: 640px) { .sb-project p { margin-bottom: 14px; font-size: inherit; } }
.sb-project-note {
  font-family: var(--font-mono);
  font-size: 11.5px;
  line-height: 1.5;
  color: var(--color-ink-soft);
  background: var(--color-cream-2);
  border: 1.5px dashed var(--color-ink);
  border-radius: 10px;
  padding: 9px 12px;
  margin: -2px 0 14px;
}
.sb-note-link {
  display: inline-block;
  margin-left: 4px;
  color: var(--color-orange);
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: 600;
  white-space: nowrap;
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
.sb-project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
}
.sb-project-links { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px; }
.sb-link {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-ink);
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1.5px solid var(--color-ink);
  transition: background 0.2s, color 0.2s;
}
.sb-link:hover { background: var(--color-orange); color: #fff; border-color: var(--color-orange); }
</style>
