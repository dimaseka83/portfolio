<script setup>
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { lang, t } = useI18n();

const kicker = { en: "03 / Experience", id: "03 / Pengalaman" };
</script>

<template>
  <section id="experience" class="ed-section">
    <RevealBlock><span class="kicker">{{ t(kicker) }}</span></RevealBlock>
    <RevealBlock :delay="80">
      <h2 class="ed-title">
        <template v-if="lang === 'en'">A <span class="italic">working</span> history.</template>
        <template v-else>Riwayat <span class="italic">kerja.</span></template>
      </h2>
    </RevealBlock>
    <div class="ed-xp">
      <RevealBlock v-for="(x, i) in d.experience" :key="i" :delay="i * 60">
        <div class="ed-xp-item">
          <div class="ed-xp-period">
            {{ t(x.period) }}
            <div v-if="x.current"><span class="ed-xp-current-badge">NOW</span></div>
          </div>
          <div>
            <div class="ed-xp-company">{{ x.company }}</div>
            <h3 class="ed-xp-role">{{ t(x.role) }}</h3>
            <div class="ed-xp-location">{{ x.location }}</div>
            <ul>
              <li v-for="(b, j) in t(x.bullets)" :key="j">{{ b }}</li>
            </ul>
            <div class="ed-xp-tags">
              <span v-for="tag in x.tags" :key="tag" class="ed-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
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
.ed-xp { max-width: 980px; margin: 0 auto; }
.ed-xp-item {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  padding: 32px 0;
  border-top: 1px solid rgba(15, 17, 20, 0.12);
  position: relative;
}
@media (min-width: 768px) {
  .ed-xp-item {
    grid-template-columns: 180px 1fr;
    gap: 40px;
    padding: 40px 0;
  }
}
:where([data-theme="dark"]) .ed-xp-item { border-top-color: rgba(242, 239, 232, 0.14); }
.ed-xp-item:last-child { border-bottom: 1px solid rgba(15, 17, 20, 0.12); }
:where([data-theme="dark"]) .ed-xp-item:last-child { border-bottom-color: rgba(242, 239, 232, 0.14); }

.ed-xp-period {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-ink-mute);
  padding-top: 6px;
}
.ed-xp-current-badge {
  display: inline-block;
  margin-top: 6px;
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--color-green);
  color: #fff;
  letter-spacing: 0.08em;
}
.ed-xp-role {
  font-family: var(--font-display);
  font-size: clamp(24px, 3.2vw, 40px);
  line-height: 1.1;
  letter-spacing: -0.015em;
  margin: 0 0 4px;
  font-weight: 400;
}
.ed-xp-company { font-size: 16px; font-weight: 600; color: var(--color-blue); margin-bottom: 2px; }
.ed-xp-location {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-ink-mute);
  margin-bottom: 18px;
}
.ed-xp ul { list-style: none; padding: 0; margin: 0 0 18px; }
.ed-xp ul li {
  padding-left: 22px;
  position: relative;
  margin: 6px 0;
  color: var(--color-ink-soft);
  text-wrap: pretty;
}
.ed-xp ul li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--color-blue);
}
.ed-xp-tags { display: flex; gap: 8px; flex-wrap: wrap; }
.ed-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--color-cream-2);
  color: var(--color-ink-soft);
}
</style>
