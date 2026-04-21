<script setup>
import { computed } from "vue";
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";

const d = PORTFOLIO;
const { lang, t } = useI18n();

const mailHref = "mailto:" + d.email;
const telHref = computed(() => "tel:" + d.phone.replace(/\s/g, ""));
const waHref = computed(() => {
  const msg = encodeURIComponent(t(d.waMessage));
  return `https://wa.me/62895360426592?text=${msg}`;
});
</script>

<template>
  <section id="contact" class="sb-contact">
    <div class="sb-contact-card">
      <div class="sb-sticker orange sb-contact-sticker-1">HIRE ME ✦</div>
      <div class="sb-sticker green sb-contact-sticker-2">Let's chat</div>
      <span class="kicker muted">07 / {{ lang === "en" ? "Contact" : "Kontak" }}</span>
      <h2>
        <template v-if="lang === 'en'">Let's build<br />something <span class="italic">fun.</span></template>
        <template v-else>Ayo bikin<br />sesuatu yang <span class="italic">seru.</span></template>
      </h2>
      <a :href="mailHref" class="sb-contact-email">{{ d.email }} →</a>
      <div class="sb-contact-links">
        <a :href="d.linkedin" target="_blank" rel="noopener" class="sb-contact-link">LinkedIn ↗</a>
        <a :href="telHref" class="sb-contact-link">{{ d.phone }}</a>
        <a :href="waHref" target="_blank" rel="noopener" class="sb-contact-link">WhatsApp ↗</a>
      </div>
    </div>
    <div class="sb-footer">© 2026 {{ d.name }} · Made with caffeine &amp; curiosity</div>
  </section>
</template>

<style scoped>
.sb-contact { margin: 60px 20px; }
@media (min-width: 640px) { .sb-contact { margin: 60px 24px; } }
@media (min-width: 768px) { .sb-contact { margin: 100px 48px; } }

.sb-contact-card {
  background: var(--color-ink);
  color: var(--color-cream);
  border: 2px solid var(--color-ink);
  border-radius: 24px;
  padding: 40px 20px;
  max-width: 1220px;
  margin: 0 auto;
  position: relative;
  box-shadow: 6px 6px 0 var(--color-orange);
  text-align: center;
  overflow: hidden;
}
@media (min-width: 640px) { .sb-contact-card { padding: 60px 32px; border-radius: 28px; box-shadow: 10px 10px 0 var(--color-orange); } }
@media (min-width: 1024px) { .sb-contact-card { padding: 80px 50px; border-radius: 32px; } }
.sb-contact-card h2 {
  font-family: var(--font-display);
  font-size: clamp(40px, 8vw, 100px);
  line-height: 0.95;
  letter-spacing: -0.025em;
  font-weight: 400;
  margin: 20px 0 30px;
}
.sb-contact-card h2 .italic { color: var(--color-orange); font-style: italic; }

.sb-sticker {
  position: absolute;
  padding: 10px 18px;
  background: var(--color-yellow);
  color: #111;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 999px;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.15);
  transform: rotate(-6deg);
  z-index: 2;
}
.sb-sticker.orange { background: var(--color-orange); color: #fff; }
.sb-sticker.green  { background: var(--color-green);  color: #fff; }
.sb-contact-sticker-1 { top: 14px; left: 14px; font-size: 10px; padding: 7px 12px; }
.sb-contact-sticker-2 { top: 24px; right: 14px; transform: rotate(8deg); font-size: 10px; padding: 7px 12px; }
@media (min-width: 640px) {
  .sb-contact-sticker-1 { top: 30px; left: 40px; font-size: 12px; padding: 10px 18px; }
  .sb-contact-sticker-2 { top: 50px; right: 50px; font-size: 12px; padding: 10px 18px; }
}

.kicker.muted { color: rgba(255, 255, 255, 0.6); }
:deep(.kicker.muted::before) { background: rgba(255, 255, 255, 0.6); }

.sb-contact-email {
  display: inline-block;
  padding: 12px 18px;
  background: var(--color-cream);
  color: var(--color-ink);
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: clamp(13px, 2vw, 22px);
  font-weight: 600;
  box-shadow: 4px 4px 0 var(--color-orange);
  transition: transform 0.2s, box-shadow 0.2s;
  word-break: break-all;
}
@media (min-width: 640px) {
  .sb-contact-email { padding: 14px 22px; box-shadow: 6px 6px 0 var(--color-orange); }
}
.sb-contact-email:hover { transform: translate(-3px, -3px); box-shadow: 9px 9px 0 var(--color-orange); }
.sb-contact-links {
  display: flex;
  gap: 14px;
  justify-content: center;
  margin-top: 28px;
  flex-wrap: wrap;
}
.sb-contact-link {
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 14px;
  transition: background 0.2s;
  color: #fff;
}
.sb-contact-link:hover { background: rgba(255, 255, 255, 0.2); }

.sb-footer {
  padding: 30px 24px 80px;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-ink-mute);
}
</style>
