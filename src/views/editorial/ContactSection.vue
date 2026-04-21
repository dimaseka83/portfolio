<script setup>
import { computed } from "vue";
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";

const d = PORTFOLIO;
const { lang, t } = useI18n();

const mailHref = "mailto:" + d.email;
const telHref  = computed(() => "tel:" + d.phone.replace(/\s/g, ""));

const kicker = { en: "07 / Contact", id: "07 / Kontak" };
const sub = {
  en: "Available for full-time roles, freelance, and fun collaborations.",
  id: "Tersedia untuk peran full-time, freelance, dan kolaborasi seru.",
};
const waHref = computed(() => {
  const msg = encodeURIComponent(t(d.waMessage));
  return `https://wa.me/62895360426592?text=${msg}`;
});
</script>

<template>
  <section id="contact" class="ed-contact">
    <div class="ed-contact-inner">
      <span class="kicker">{{ t(kicker) }}</span>
      <h2>
        <template v-if="lang === 'en'">Let's build something <em>together.</em></template>
        <template v-else>Mari bangun sesuatu <em>bersama.</em></template>
      </h2>
      <p class="ed-contact-sub">{{ t(sub) }}</p>
      <a :href="mailHref" class="ed-contact-email">{{ d.email }}</a>
      <div class="ed-contact-links">
        <a :href="d.linkedin" target="_blank" rel="noopener" class="ed-contact-link">LinkedIn ↗</a>
        <a :href="telHref" class="ed-contact-link">{{ d.phone }}</a>
        <a :href="waHref" target="_blank" rel="noopener" class="ed-contact-link">WhatsApp ↗</a>
      </div>
    </div>
    <div class="ed-footer">
      <div>© 2026 {{ d.name }}</div>
      <div>Designed &amp; built with ♥</div>
    </div>
  </section>
</template>

<style scoped>
.ed-contact {
  padding: 0 24px;
  max-width: 1380px;
  margin: 0 auto 40px;
}
@media (min-width: 768px) { .ed-contact { padding: 0 48px; } }
.ed-contact-inner {
  background: var(--color-blue);
  color: #fff;
  border-radius: 20px;
  padding: 60px 24px;
  position: relative;
  overflow: hidden;
  text-align: center;
}
@media (min-width: 640px) { .ed-contact-inner { padding: 80px 40px; border-radius: 24px; } }
@media (min-width: 1024px) { .ed-contact-inner { padding: 100px 60px; border-radius: 28px; } }
.ed-contact-inner::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(255, 92, 43, 0.4), transparent 40%),
    radial-gradient(circle at 85% 80%, rgba(255, 255, 255, 0.25), transparent 40%);
  pointer-events: none;
}
.ed-contact :deep(.kicker) { color: rgba(255, 255, 255, 0.7); }
.ed-contact :deep(.kicker)::before { background: rgba(255, 255, 255, 0.7); }
.ed-contact h2 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(40px, 8vw, 110px);
  line-height: 0.95;
  letter-spacing: -0.03em;
  margin: 20px 0 20px;
  position: relative;
}
.ed-contact h2 em { font-style: italic; color: var(--color-yellow); }
.ed-contact-sub {
  opacity: 0.85;
  max-width: 580px;
  margin: 0 auto 30px;
  text-wrap: pretty;
  position: relative;
}
.ed-contact-email {
  font-family: var(--font-mono);
  font-size: clamp(16px, 2vw, 26px);
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 14px 22px;
  border-radius: 999px;
  display: inline-block;
  position: relative;
  transition: background 0.2s;
  color: #fff;
  word-break: break-all;
}
.ed-contact-email:hover { background: rgba(255, 255, 255, 0.25); }
.ed-contact-links {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  position: relative;
}
.ed-contact-link {
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.18);
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s, transform 0.2s;
  color: #fff;
}
.ed-contact-link:hover {
  background: #0f1114;
  transform: translateY(-2px);
}
.ed-footer {
  padding: 40px 24px 80px;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-ink-mute);
  flex-wrap: wrap;
  gap: 20px;
}
@media (min-width: 768px) { .ed-footer { padding: 50px 48px 120px; } }
</style>
