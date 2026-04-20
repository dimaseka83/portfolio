<script setup>
/**
 * Floating hamburger nav with:
 *  - Language toggle chip (EN/ID)
 *  - Theme toggle chip (☼/☾)
 *  - Dropdown menu with all sections
 *
 * Positioning fix from prototype:
 *  - Desktop (md+): chips sit to the LEFT of the hamburger on the same row,
 *    NOT above it. Prevents clipping by browser bookmarks bar.
 *  - Mobile (<md): chips move INTO the dropdown menu panel (always on screen
 *    when the menu is open).
 */
import { ref, onMounted, onBeforeUnmount } from "vue";
import { SECTIONS } from "@/data/portfolio.js";
import { useI18n } from "@/composables/useI18n.js";
import { useTheme } from "@/composables/useTheme.js";

const { lang, toggleLang, t } = useI18n();
const { theme, toggleTheme } = useTheme();

defineProps({
  active: { type: String, default: "home" },
});
const emit = defineEmits(["goto"]);

const open = ref(false);
const rootRef = ref(null);

function onGoto(id) {
  emit("goto", id);
  open.value = false;
}

function onDocClick(e) {
  if (!open.value) return;
  if (rootRef.value && rootRef.value.contains(e.target)) return;
  open.value = false;
}
onMounted(() => document.addEventListener("click", onDocClick));
onBeforeUnmount(() => document.removeEventListener("click", onDocClick));
</script>

<template>
  <div
    ref="rootRef"
    class="fixed top-5 right-5 z-[200] flex flex-col items-end gap-2.5"
    :class="{ 'is-open': open }"
  >
    <!-- Top row: chips (desktop only, left of hamburger) + hamburger toggle -->
    <div class="flex items-center gap-2">
      <!-- Chips: only on md+ viewports -->
      <div class="hidden md:flex items-center gap-2">
        <button class="fn-chip" :title="lang === 'en' ? 'Toggle language' : 'Ubah bahasa'" @click="toggleLang">
          <strong>{{ lang.toUpperCase() }}</strong>
          <span class="fn-chip-other">/ {{ lang === "en" ? "ID" : "EN" }}</span>
        </button>
        <button class="fn-chip" :title="theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'" @click="toggleTheme">
          {{ theme === "light" ? "☼" : "☾" }}
        </button>
      </div>

      <!-- Hamburger toggle -->
      <button class="fn-toggle" :aria-expanded="open" aria-label="Menu" @click="open = !open">
        <span /><span /><span />
      </button>
    </div>

    <!-- Dropdown menu -->
    <div class="fn-menu" role="menu">
      <!-- Section links -->
      <button
        v-for="s in SECTIONS"
        :key="s.id"
        class="fn-menu-item"
        :class="{ 'is-active': active === s.id }"
        role="menuitem"
        @click="onGoto(s.id)"
      >
        <span class="fn-menu-num">{{ String(s.n).padStart(2, "0") }}</span>
        <span>{{ t(s.label) }}</span>
      </button>

      <!-- Mobile-only chips appended inside the menu -->
      <div class="fn-menu-chips md:hidden">
        <button class="fn-chip flex-1" @click="toggleLang">
          <strong>{{ lang.toUpperCase() }}</strong>
          <span class="fn-chip-other">/ {{ lang === "en" ? "ID" : "EN" }}</span>
        </button>
        <button class="fn-chip" @click="toggleTheme">
          {{ theme === "light" ? "☼" : "☾" }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fn-toggle {
  width: 54px;
  height: 54px;
  border-radius: 999px;
  background: var(--color-ink);
  color: var(--color-cream);
  display: grid;
  place-items: center;
  box-shadow: 0 1px 2px rgba(15, 17, 20, 0.04), 0 10px 30px rgba(15, 17, 20, 0.06);
  position: relative;
  transition: transform 0.2s;
  border: 0;
  cursor: none;
}
@media (pointer: coarse) {
  .fn-toggle { cursor: pointer; }
}
.fn-toggle:hover {
  transform: scale(1.06);
}
.fn-toggle :deep(span),
.fn-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: currentColor;
  margin: 3px 0;
  transition: transform 0.3s, opacity 0.2s;
}
.is-open .fn-toggle span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.is-open .fn-toggle span:nth-child(2) { opacity: 0; }
.is-open .fn-toggle span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

.fn-chip {
  background: var(--color-paper);
  color: var(--color-ink);
  height: 44px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid rgba(15, 17, 20, 0.12);
  font-weight: 600;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  box-shadow: 0 1px 2px rgba(15, 17, 20, 0.04), 0 10px 30px rgba(15, 17, 20, 0.06);
  transition: transform 0.2s, background 0.2s, color 0.2s, border-color 0.2s;
  white-space: nowrap;
  cursor: none;
}
@media (pointer: coarse) {
  .fn-chip { cursor: pointer; }
}
:where([data-theme="dark"]) .fn-chip {
  border-color: rgba(242, 239, 232, 0.14);
}
.fn-chip:hover {
  transform: translateY(-2px);
  background: var(--color-blue);
  color: #fff;
  border-color: var(--color-blue);
}
.fn-chip-other {
  opacity: 0.45;
  font-weight: 500;
}

.fn-menu {
  background: var(--color-paper);
  border: 1px solid rgba(15, 17, 20, 0.12);
  border-radius: 18px;
  padding: 10px;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  box-shadow: 0 1px 2px rgba(15, 17, 20, 0.04), 0 10px 30px rgba(15, 17, 20, 0.06);
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
  pointer-events: none;
  transition: opacity 0.2s, transform 0.2s;
}
:where([data-theme="dark"]) .fn-menu {
  border-color: rgba(242, 239, 232, 0.14);
}
.is-open .fn-menu {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.fn-menu-item {
  text-align: left;
  padding: 10px 12px;
  display: flex;
  align-items: baseline;
  gap: 12px;
  border-radius: 10px;
  font-weight: 500;
  transition: background 0.15s, color 0.15s;
  border: 0;
  background: transparent;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  cursor: none;
}
@media (pointer: coarse) {
  .fn-menu-item { cursor: pointer; }
}
.fn-menu-item:hover {
  background: var(--color-cream-2);
}
.fn-menu-item.is-active {
  color: var(--color-blue);
}
.fn-menu-num {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-ink-mute);
  width: 20px;
}

/* Mobile-only chip row inside the menu */
.fn-menu-chips {
  display: flex;
  gap: 6px;
  padding-top: 8px;
  margin-top: 4px;
  border-top: 1px dashed rgba(15, 17, 20, 0.12);
}
:where([data-theme="dark"]) .fn-menu-chips {
  border-top-color: rgba(242, 239, 232, 0.14);
}
.fn-menu-chips .fn-chip {
  height: 40px;
  box-shadow: none;
}
</style>
