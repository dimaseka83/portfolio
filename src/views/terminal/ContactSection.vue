<script setup>
import { computed } from "vue";
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";

const d = PORTFOLIO;
const { lang } = useI18n();

const mailHref = "mailto:" + d.email;
const telHref = computed(() => "tel:" + d.phone.replace(/\s/g, ""));
</script>

<template>
  <section id="contact" class="tm-contact">
    <div class="tm-contact-card">
      <div class="tm-section-head centered">07 · contact.sh</div>
      <h2>
        <span class="green">$</span> echo
        <span class="blue">"{{ lang === "en" ? "Let's build together." : "Mari kita bangun bersama." }}"</span>
      </h2>
      <p>
        {{ lang === "en"
          ? "Open to full-time, freelance, and side-quest collaborations. Reply time: within 24h."
          : "Terbuka untuk full-time, freelance, dan kolaborasi. Waktu balas: dalam 24 jam." }}
      </p>
      <a :href="mailHref" class="tm-contact-email">$ mail {{ d.email }} →</a>
      <div class="tm-contact-links">
        <a :href="d.linkedin" target="_blank" rel="noopener" class="tm-contact-link">
          linkedin.com/in/dhimas-prasetya ↗
        </a>
        <a :href="telHref" class="tm-contact-link">{{ d.phone }}</a>
      </div>
    </div>
    <div class="tm-footer">
      <span class="prompt">dhimas@malang</span>:~$
      <span class="echo">echo "© 2026 · Built with Rails, Vue &amp; coffee"</span>
    </div>
  </section>
</template>

<style scoped>
.tm-contact {
  padding: 60px 20px;
  max-width: 1280px;
  margin: 0 auto;
}
@media (min-width: 768px) { .tm-contact { padding: 80px 48px; } }

.tm-section-head {
  font-size: 12px;
  color: #7d8590;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.tm-section-head::before { content: "──"; color: #3fb950; }
.tm-section-head.centered { justify-content: center; }

.tm-contact-card {
  background: linear-gradient(135deg, #0d1117, #161b22);
  border: 1px solid #30363d;
  border-radius: 14px;
  padding: 50px 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
@media (min-width: 768px) { .tm-contact-card { padding: 60px 48px; } }
.tm-contact-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(63, 185, 80, 0.15), transparent 40%);
}
.tm-contact-card h2 {
  font-size: clamp(26px, 5vw, 56px);
  font-weight: 700;
  margin: 14px 0 8px;
  color: #e6edf3;
  letter-spacing: -0.02em;
  position: relative;
  word-break: break-word;
}
.tm-contact-card h2 .green { color: #3fb950; }
.tm-contact-card h2 .blue  { color: #7ca3ff; }
.tm-contact-card p {
  font-size: 14px;
  color: #7d8590;
  max-width: 520px;
  margin: 0 auto 30px;
  text-wrap: pretty;
  position: relative;
}
.tm-contact-email {
  display: inline-block;
  padding: 14px 22px;
  background: #238636;
  border: 1px solid #3fb950;
  color: #fff;
  border-radius: 8px;
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 600;
  transition: background 0.2s, transform 0.2s;
  position: relative;
  word-break: break-all;
}
@media (min-width: 640px) { .tm-contact-email { font-size: 15px; padding: 14px 28px; } }
.tm-contact-email:hover { background: #2ea043; transform: translateY(-2px); }
.tm-contact-links {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  position: relative;
}
.tm-contact-link {
  padding: 8px 16px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid #30363d;
  font-size: 12px;
  color: #c9d1d9;
  transition: background 0.2s;
}
.tm-contact-link:hover { background: rgba(124, 163, 255, 0.1); border-color: #7ca3ff; }

.tm-footer {
  padding-top: 30px;
  text-align: center;
  font-size: 12px;
  color: #7d8590;
}
.tm-footer .prompt { color: #3fb950; }
.tm-footer .echo { color: #e6edf3; }
</style>
