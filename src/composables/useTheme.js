/**
 * Global theme store. Writes html[data-theme] and persists to localStorage.
 */
import { ref, watchEffect, readonly } from "vue";

const STORAGE_KEY = "dep_theme";

function storagGet() {
  try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
}

const theme = ref(storagGet() || "light");

watchEffect(() => {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = theme.value;
  try { localStorage.setItem(STORAGE_KEY, theme.value); } catch { /* ssr */ }
});

function setTheme(next) {
  theme.value = next;
}
function toggleTheme() {
  setTheme(theme.value === "light" ? "dark" : "light");
}

export function useTheme() {
  return { theme: readonly(theme), setTheme, toggleTheme };
}
