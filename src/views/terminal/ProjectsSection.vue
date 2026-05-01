<script setup>
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { t } = useI18n();

function slug(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}
</script>

<template>
  <section id="projects" class="tm-section">
    <RevealBlock><div class="tm-section-head">04 · ls projects/</div></RevealBlock>
    <RevealBlock :delay="60">
      <h2 class="tm-section-title">
        <span class="fn">projects</span><span class="br">.map(</span><span class="op2">ship</span><span class="br">)</span>
      </h2>
    </RevealBlock>
    <div class="tm-grid-2">
      <RevealBlock v-for="(p, i) in d.projects" :key="i" :delay="i * 70">
        <article class="tm-project">
          <div class="tm-project-vis" :class="`a-${p.accent}`">
            <div class="tm-project-vis-tag">./{{ slug(p.name) }}</div>
            <div class="tm-project-vis-name">&lt;{{ p.name }}/&gt;</div>
          </div>
          <div class="tm-project-body">
            <div class="tm-project-kind">{{ t(p.kind) }}</div>
            <h3>{{ p.name }}</h3>
            <p>{{ t(p.blurb) }}</p>
            <div class="tm-project-stack">
              <span v-for="s in p.stack" :key="s" class="tm-tag">{{ s }}</span>
            </div>
          </div>
        </article>
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
.tm-section-title .op2 { color: #ffa657; }

.tm-grid-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
@media (min-width: 800px) { .tm-grid-2 { grid-template-columns: 1fr 1fr; } }

.tm-project {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.25s, transform 0.25s;
}
.tm-project:hover { border-color: #7ca3ff; transform: translateY(-4px); }

.tm-project-vis {
  aspect-ratio: 16/9;
  position: relative;
  display: grid;
  place-items: center;
  border-bottom: 1px solid #30363d;
  overflow: hidden;
}
.tm-project-vis.a-blue   { background: linear-gradient(135deg, #1f4bff22, #7ca3ff22); }
.tm-project-vis.a-orange { background: linear-gradient(135deg, #ff5c2b22, #ffa65722); }
.tm-project-vis.a-green  { background: linear-gradient(135deg, #3fb95022, #14ae5c22); }
.tm-project-vis.a-yellow { background: linear-gradient(135deg, #eab30822, #ffe58f22); }
.tm-project-vis.a-pink   { background: linear-gradient(135deg, #e91e8c22, #f9a8d422); }
.tm-project-vis.a-purple { background: linear-gradient(135deg, #7c3aed22, #c4b5fd22); }
.tm-project-vis::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(90deg, rgba(125, 133, 144, 0.08) 1px, transparent 1px),
    linear-gradient(rgba(125, 133, 144, 0.08) 1px, transparent 1px);
  background-size: 30px 30px;
}
.tm-project-vis-name {
  font-size: clamp(18px, 2.4vw, 32px);
  font-weight: 700;
  color: #e6edf3;
  position: relative;
  z-index: 1;
  padding: 0 20px;
  text-align: center;
  word-break: break-word;
}
.tm-project-vis-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 11px;
  color: #7d8590;
}
.tm-project-body { padding: 22px; }
.tm-project-kind {
  font-size: 11px;
  color: #7d8590;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 6px;
}
.tm-project-body h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 10px;
  color: #e6edf3;
}
.tm-project-body p {
  font-size: 13px;
  color: #c9d1d9;
  line-height: 1.6;
  margin-bottom: 14px;
  text-wrap: pretty;
}
.tm-project-stack { display: flex; gap: 6px; flex-wrap: wrap; }
.tm-tag {
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(124, 163, 255, 0.12);
  color: #7ca3ff;
  border: 1px solid rgba(124, 163, 255, 0.25);
}
</style>
