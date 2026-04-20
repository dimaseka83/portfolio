/**
 * Global i18n store (module-singleton ref).
 * All components import useI18n() and share the same `lang` ref.
 */
import { ref, readonly } from "vue";

const STORAGE_KEY = "dep_lang";

function storagGet() {
  try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
}
function storagSet(v) {
  try { localStorage.setItem(STORAGE_KEY, v); } catch { /* ssr */ }
}

const lang = ref(storagGet() || "en");

function setLang(next) {
  lang.value = next;
  storagSet(next);
}
function toggleLang() {
  setLang(lang.value === "en" ? "id" : "en");
}

/**
 * Translate a bilingual shape.
 *   t("hello") -> "hello"
 *   t({ en: "Hi", id: "Halo" }) -> "Hi" or "Halo"
 *   t(["a","b"]) -> ["a","b"] (passthrough)
 *   t({ en: ["a","b"], id: ["x","y"] }) -> ["a","b"] or ["x","y"]
 */
function t(obj) {
  if (obj == null) return "";
  if (typeof obj === "string") return obj;
  if (Array.isArray(obj)) return obj;
  return obj[lang.value] != null ? obj[lang.value] : obj.en != null ? obj.en : "";
}

export function useI18n() {
  return { lang: readonly(lang), setLang, toggleLang, t };
}
