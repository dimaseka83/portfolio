<script setup>
import { computed } from "vue";
import { PORTFOLIO } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import { useTyping } from "@/composables/useTyping.js";
import RevealBlock from "@/components/RevealBlock.vue";

const d = PORTFOLIO;
const { lang, t } = useI18n();
const words = computed(() => d.rotatingWords[lang.value]);
const { text: typed } = useTyping(words, { speed: 75, pause: 1200 });
const mailHref = "mailto:" + d.email;
const cvHref  = "https://drive.google.com/file/d/1IFBdqHlOVOLpupnS0gqH-l3hdtixkMDO/view";
</script>

<template>
  <header id="home" class="tm-hero">
    <!-- IDE window with Ruby code -->
    <div class="tm-window">
      <div class="tm-window-bar">
        <div class="tm-dot r" /><div class="tm-dot y" /><div class="tm-dot g" />
        <div class="tm-window-title">~/dhimas/portfolio</div>
        <div class="tm-window-tabs">
          <span class="tm-tab active">developer.rb</span>
          <span class="tm-tab">README.md</span>
        </div>
      </div>
      <div class="tm-window-body">
        <div class="tm-line"><span class="ln">1</span><span><span class="tm-c-cmt"># {{ lang === "en" ? "Hello, world!" : "Halo, dunia!" }}</span></span></div>
        <div class="tm-line"><span class="ln">2</span><span><span class="tm-c-key">class</span> <span class="tm-c-fn">Developer</span></span></div>
        <div class="tm-line"><span class="ln">3</span><span>&nbsp;&nbsp;<span class="tm-c-key">attr_reader</span> <span class="tm-c-str">:name</span>, <span class="tm-c-str">:role</span>, <span class="tm-c-str">:stack</span></span></div>
        <div class="tm-line"><span class="ln">4</span><span /></div>
        <div class="tm-line"><span class="ln">5</span><span>&nbsp;&nbsp;<span class="tm-c-key">def</span> <span class="tm-c-fn">initialize</span></span></div>
        <div class="tm-line"><span class="ln">6</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tm-c-var">@name</span>     <span class="tm-c-op">=</span> <span class="tm-c-str">"Dhimas Eka Prasetya"</span></span></div>
        <div class="tm-line"><span class="ln">7</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tm-c-var">@role</span>     <span class="tm-c-op">=</span> <span class="tm-c-str">"Full Stack Developer"</span></span></div>
        <div class="tm-line"><span class="ln">8</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tm-c-var">@stack</span>    <span class="tm-c-op">=</span> [<span class="tm-c-str">"Rails"</span>, <span class="tm-c-str">"Vue"</span>, <span class="tm-c-str">"Laravel"</span>]</span></div>
        <div class="tm-line"><span class="ln">9</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tm-c-var">@location</span> <span class="tm-c-op">=</span> <span class="tm-c-str">"Malang, ID"</span></span></div>
        <div class="tm-line"><span class="ln">10</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tm-c-var">@available</span><span class="tm-c-op">=</span> <span class="tm-c-bool">true</span> <span class="tm-c-cmt"># 🟢</span></span></div>
        <div class="tm-line"><span class="ln">11</span><span>&nbsp;&nbsp;<span class="tm-c-key">end</span></span></div>
        <div class="tm-line"><span class="ln">12</span><span><span class="tm-c-key">end</span></span></div>
      </div>
    </div>

    <h1 class="tm-hero-title">
      <span class="prompt">$ </span><span>whoami<br /></span>
      <span class="prompt">&gt; </span><span class="typed cursor-blink">{{ typed }}</span>
    </h1>

    <div class="tm-hero-grid">
      <RevealBlock :delay="120">
        <div class="tm-card">
          <div class="tm-summary">{{ t(d.summary) }}</div>
          <div class="tm-ctas">
            <a :href="mailHref" class="tm-btn primary">$ ./contact.sh →</a>
            <a :href="d.linkedin" target="_blank" rel="noopener" class="tm-btn">linkedin ↗</a>
            <a :href="cvHref" target="_blank" rel="noopener" class="tm-btn">$ curl cv.pdf ↓</a>
          </div>
        </div>
      </RevealBlock>
      <RevealBlock :delay="220">
        <div class="tm-card">
          <div class="tm-card-avatar">
            <img src="/assets/dhimas.jpg" :alt="d.name" />
            <div>
              <div class="tm-card-name">{{ d.name }}</div>
              <div class="tm-card-handle">@dhimas-prasetya</div>
            </div>
          </div>
          <div class="row"><span>status</span><span class="ok">● online</span></div>
          <div class="row"><span>location</span><span>Malang, ID</span></div>
          <div class="row"><span>uptime</span><span>4+ years</span></div>
          <div class="row"><span>current</span><span class="hl-blue">@turboly</span></div>
          <div class="row"><span>stack</span><span class="hl-orange">rails · vue</span></div>
        </div>
      </RevealBlock>
    </div>
  </header>
</template>

<style scoped>
.tm-hero {
  min-height: 100vh;
  padding: 100px 20px 50px;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
}
@media (min-width: 768px) { .tm-hero { padding: 120px 48px 60px; } }

.tm-window {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 12px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  margin-bottom: 30px;
}
.tm-window-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: #161b22;
  border-bottom: 1px solid #30363d;
}
.tm-dot { width: 12px; height: 12px; border-radius: 50%; background: #30363d; }
.tm-dot.r { background: #ff5f57; }
.tm-dot.y { background: #febc2e; }
.tm-dot.g { background: #28c840; }
.tm-window-title {
  margin-left: 12px;
  font-size: 12px;
  color: #7d8590;
}
.tm-window-tabs {
  display: none;
  margin-left: auto;
  gap: 2px;
}
@media (min-width: 640px) { .tm-window-tabs { display: flex; } }
.tm-tab {
  padding: 4px 12px;
  font-size: 11px;
  border-radius: 4px;
  background: #0d1117;
  color: #7d8590;
}
.tm-tab.active {
  background: #1f2937;
  color: #7ca3ff;
}
.tm-window-body {
  padding: 22px 18px;
  line-height: 1.7;
  font-size: 12px;
  overflow-x: auto;
}
@media (min-width: 640px) { .tm-window-body { padding: 28px 32px; font-size: 14px; } }
.tm-line {
  display: flex;
  gap: 10px;
  white-space: nowrap;
}
.tm-line .ln {
  color: #484f58;
  width: 26px;
  text-align: right;
  user-select: none;
  flex-shrink: 0;
}
.tm-c-key  { color: #ff7b72; }
.tm-c-str  { color: #a5d6ff; }
.tm-c-cmt  { color: #8b949e; font-style: italic; }
.tm-c-fn   { color: #d2a8ff; }
.tm-c-var  { color: #ffa657; }
.tm-c-op   { color: #ff7b72; }
.tm-c-bool { color: #79c0ff; }

.tm-hero-title {
  font-family: var(--font-mono);
  font-size: clamp(32px, 6vw, 72px);
  font-weight: 700;
  line-height: 1.1;
  margin: 40px 0 20px;
  letter-spacing: -0.02em;
  color: #e6edf3;
}
.tm-hero-title .prompt { color: #3fb950; }
.tm-hero-title .typed { color: #7ca3ff; }
.tm-hero-title .cursor-blink::after {
  content: "▋";
  color: #7ca3ff;
  animation: caret-blink 1s steps(1) infinite;
}

.tm-hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 30px;
}
@media (min-width: 900px) { .tm-hero-grid { grid-template-columns: 1fr 320px; gap: 30px; } }

.tm-card {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 10px;
  padding: 22px;
}
.tm-summary {
  font-size: 13px;
  line-height: 1.75;
  color: #c9d1d9;
}
.tm-card-avatar {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 16px;
  border-bottom: 1px solid #21262d;
  margin-bottom: 14px;
}
.tm-card-avatar img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px solid #3fb950;
  object-fit: cover;
}
.tm-card-name { font-size: 15px; font-weight: 700; color: #e6edf3; }
.tm-card-handle { font-size: 12px; color: #7d8590; }
.tm-card .row {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  font-size: 12px;
}
.tm-card .row span:first-child { color: #7d8590; }
.tm-card .row .ok { color: #3fb950; }
.hl-blue   { color: #7ca3ff; }
.hl-orange { color: #ffa657; }

.tm-ctas {
  display: flex;
  gap: 10px;
  margin-top: 24px;
  flex-wrap: wrap;
}
.tm-btn {
  padding: 10px 18px;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 13px;
  border: 1px solid #30363d;
  background: #21262d;
  color: #e6edf3;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.tm-btn:hover { background: #30363d; border-color: #7ca3ff; transform: translateY(-1px); }
.tm-btn.primary { background: #238636; border-color: #3fb950; }
.tm-btn.primary:hover { background: #2ea043; }
</style>
