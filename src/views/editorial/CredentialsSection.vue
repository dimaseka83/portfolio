<script setup>
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { lang, t } = useI18n();

const kicker  = { en: "05 / Credentials",  id: "05 / Kredensial" };
const certsH  = { en: "Certifications",    id: "Sertifikasi" };
const awardsH = { en: "Honors & Awards",   id: "Penghargaan" };
const pubsH   = { en: "Publications",      id: "Publikasi" };
</script>

<template>
  <section id="credentials" class="ed-section">
    <RevealBlock><span class="kicker">{{ t(kicker) }}</span></RevealBlock>
    <RevealBlock :delay="80">
      <h2 class="ed-title">
        <template v-if="lang === 'en'">Certificates &amp; <span class="italic">accolades.</span></template>
        <template v-else>Sertifikat &amp; <span class="italic">penghargaan.</span></template>
      </h2>
    </RevealBlock>
    <div class="ed-creds-grid">
      <RevealBlock :delay="120">
        <div class="ed-creds-col">
          <h4>{{ t(certsH) }}</h4>
          <ul>
            <li v-for="c in d.certifications" :key="c">{{ c }}</li>
          </ul>
        </div>
      </RevealBlock>
      <RevealBlock :delay="200">
        <div class="ed-creds-col">
          <h4>{{ t(awardsH) }}</h4>
          <ul>
            <li v-for="(a, i) in d.awards" :key="i">{{ t(a) }}</li>
          </ul>
        </div>
      </RevealBlock>
      <RevealBlock :delay="280">
        <div class="ed-creds-col">
          <h4>{{ t(pubsH) }}</h4>
          <ul>
            <li v-for="(p, i) in d.publications" :key="i">
              {{ p.title }}<br />
              <em class="pub-kind">{{ t(p.kind) }}</em>
            </li>
          </ul>
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
.ed-creds-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
@media (min-width: 900px) { .ed-creds-grid { grid-template-columns: 1.2fr 1fr 1fr; } }
.ed-creds-col {
  background: var(--color-paper);
  border: 1px solid rgba(15, 17, 20, 0.12);
  border-radius: var(--radius-card);
  padding: 24px;
}
@media (min-width: 640px) { .ed-creds-col { padding: 28px; } }
:where([data-theme="dark"]) .ed-creds-col { border-color: rgba(242, 239, 232, 0.14); }
.ed-creds-col h4 {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-ink-mute);
  margin: 0 0 18px;
}
.ed-creds-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.ed-creds-col li {
  padding-left: 24px;
  position: relative;
  text-wrap: pretty;
  font-size: 15px;
}
.ed-creds-col li::before {
  content: "✦";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--color-orange);
}
.pub-kind {
  color: var(--color-ink-mute);
  font-size: 13px;
  font-style: italic;
}
</style>
