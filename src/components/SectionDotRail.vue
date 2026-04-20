<script setup>
import { SECTIONS } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";

const { t } = useI18n();

defineProps({
  active: { type: String, default: "home" },
});
const emit = defineEmits(["goto"]);
</script>

<template>
  <div
    class="fixed left-5 top-1/2 z-[150] hidden -translate-y-1/2 flex-col gap-3.5 lg:flex"
    aria-label="section navigation"
  >
    <button
      v-for="s in SECTIONS"
      :key="s.id"
      class="nav-dot"
      :class="{ 'is-active': active === s.id }"
      :aria-label="t(s.label)"
      @click="emit('goto', s.id)"
    >
      <span class="nav-dot-label">{{ t(s.label) }}</span>
    </button>
  </div>
</template>

<style scoped>
.nav-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-ink);
  opacity: 0.2;
  position: relative;
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  border: 0;
  padding: 0;
}
.nav-dot:hover {
  opacity: 0.6;
  transform: scale(1.2);
}
.nav-dot.is-active {
  opacity: 1;
  background: var(--color-blue);
  transform: scale(1.4);
}
.nav-dot-label {
  position: absolute;
  left: 22px;
  top: 50%;
  transform: translateY(-50%) translateX(-8px);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: var(--color-ink);
  color: var(--color-cream);
  padding: 4px 8px;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s, transform 0.2s;
}
.nav-dot:hover .nav-dot-label {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}
</style>
