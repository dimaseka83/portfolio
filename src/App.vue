<script setup>
import { provide } from "vue";
import { SECTIONS } from "@/data/portfolio.js";
import { useSectionTracker } from "@/composables/useSectionTracker.js";
import { useKonami } from "@/composables/useKonami.js";
import FloatingNav from "@/components/FloatingNav.vue";
import SectionDotRail from "@/components/SectionDotRail.vue";
import CursorTrail from "@/components/CursorTrail.vue";

// Track which section is currently in view
const { active } = useSectionTracker(SECTIONS.map((s) => s.id));
provide("activeSection", active);

// Global konami easter egg
useKonami();

// Smooth scroll to a section on #id
function goto(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
}
</script>

<template>
  <a href="#main-content" class="skip-link">Skip to content</a>
  <FloatingNav :active="active" @goto="goto" />
  <SectionDotRail :active="active" @goto="goto" />
  <CursorTrail />

  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>

  <!-- Friendly console greeting (mirrors prototype) -->
  <div aria-hidden="true" style="display: none" ref="__console_marker" />
</template>

<style scoped>
.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 999;
  padding: 10px 16px;
  background: var(--color-ink, #0f1114);
  color: var(--color-cream, #fff);
  border-radius: 0 0 8px 0;
}
.skip-link:focus {
  left: 0;
}
</style>
