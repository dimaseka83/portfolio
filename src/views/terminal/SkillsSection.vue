<script setup>
import { PORTFOLIO } from "@/data/portfolio.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const groups = [
  { k: "languages", arr: d.skills.languages },
  { k: "frontend",  arr: d.skills.frontend },
  { k: "backend",   arr: d.skills.backend },
  { k: "tools",     arr: d.skills.tools },
];
</script>

<template>
  <section id="skills" class="tm-section">
    <RevealBlock><div class="tm-section-head">02 · stack.json</div></RevealBlock>
    <RevealBlock :delay="60">
      <h2 class="tm-section-title">
        <span class="fn">const</span> stack <span class="op">=</span> <span class="br">{</span>
      </h2>
    </RevealBlock>
    <RevealBlock :delay="140">
      <div class="tm-code">
        <div v-for="(g, idx) in groups" :key="g.k" class="tm-block">
          <div>&nbsp;&nbsp;<span class="tm-c-key">"{{ g.k }}"</span>: [</div>
          <div v-for="(s, i) in g.arr" :key="s" class="indent-2">
            <span class="tm-c-str">"{{ s }}"</span><template v-if="i < g.arr.length - 1">,</template>
          </div>
          <div>&nbsp;&nbsp;]<template v-if="idx &lt; 3">,</template></div>
        </div>
      </div>
    </RevealBlock>
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
.tm-section-title .op { color: #ff7b72; }
.tm-section-title .br { color: #7d8590; }
.tm-close { margin-top: 30px; margin-bottom: 0; }

.tm-code {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 10px;
  padding: 20px;
  font-size: 13px;
  line-height: 1.8;
  overflow-x: auto;
}
.tm-block { margin-bottom: 8px; }
.tm-code .indent-2 { padding-left: 48px; }
.tm-c-key { color: #ff7b72; }
.tm-c-str { color: #a5d6ff; }
</style>
