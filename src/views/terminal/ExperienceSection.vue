<script setup>
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { t } = useI18n();
const hashes = ["a1f3e2c", "7b2d5f9", "c4e8a1b", "e9d2f7c"];
</script>

<template>
  <section id="experience" class="tm-section">
    <RevealBlock><div class="tm-section-head">03 · git log --experience</div></RevealBlock>
    <RevealBlock :delay="60">
      <h2 class="tm-section-title">
        <span class="fn">history</span><span class="br">()</span>
      </h2>
    </RevealBlock>
    <div class="tm-xp">
      <RevealBlock v-for="(x, i) in d.experience" :key="i" :delay="i * 70">
        <div class="tm-xp-item">
          <div class="tm-xp-commit" />
          <div>
            <div class="tm-xp-hash">
              commit {{ hashes[i] || "0000000" }}
              <span v-if="x.current" class="head">(HEAD → main)</span>
            </div>
            <h3 class="tm-xp-role">{{ t(x.role) }}</h3>
            <div class="tm-xp-company">@ {{ x.company }}</div>
            <div class="tm-xp-meta">Date: {{ t(x.period) }} · {{ x.location }}</div>
            <ul>
              <li v-for="(b, j) in t(x.bullets)" :key="j">{{ b }}</li>
            </ul>
            <div class="tm-xp-tags">
              <span v-for="tag in x.tags" :key="tag" class="tm-tag">{{ tag }}</span>
            </div>
          </div>
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

.tm-xp { display: flex; flex-direction: column; gap: 0; }
.tm-xp-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  padding: 24px 0;
  position: relative;
}
.tm-xp-item::before {
  content: "";
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #21262d;
}
.tm-xp-item:first-child::before { top: 20px; }
.tm-xp-item:last-child::before { bottom: calc(100% - 20px); }
.tm-xp-commit {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #0a0d12;
  border: 3px solid #3fb950;
  margin-top: 6px;
  z-index: 1;
  position: relative;
}
.tm-xp-item:not(:first-child) .tm-xp-commit { border-color: #7d8590; }
.tm-xp-hash { font-size: 11px; color: #d2a8ff; margin-bottom: 4px; }
.tm-xp-hash .head { color: #3fb950; }
.tm-xp-role { font-size: 20px; font-weight: 700; color: #e6edf3; margin: 0 0 4px; }
.tm-xp-company { font-size: 13px; color: #7ca3ff; margin-bottom: 2px; }
.tm-xp-meta { font-size: 12px; color: #7d8590; margin-bottom: 14px; }
.tm-xp-item ul { list-style: none; padding: 0; margin: 0 0 12px; }
.tm-xp-item ul li {
  font-size: 13px;
  color: #c9d1d9;
  padding-left: 22px;
  position: relative;
  margin: 4px 0;
  text-wrap: pretty;
}
.tm-xp-item ul li::before {
  content: "+";
  position: absolute;
  left: 4px;
  color: #3fb950;
  font-weight: 700;
}
.tm-xp-tags { display: flex; gap: 6px; flex-wrap: wrap; }
.tm-tag {
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(124, 163, 255, 0.12);
  color: #7ca3ff;
  border: 1px solid rgba(124, 163, 255, 0.25);
}
</style>
