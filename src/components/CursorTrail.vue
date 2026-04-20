<script setup>
/**
 * Renderless component. The cursor trail canvas is appended directly to <body>
 * by the composable, so no template is needed.
 */
import { useCursorTrail } from "@/composables/useCursorTrail.js";
import { useRoute } from "vue-router";

const route = useRoute();
function color() {
  const v = (route.meta && route.meta.variant) || "editorial";
  if (v === "terminal") return "#3FB950";
  if (v === "sticker")  return "#FF5C2B";
  return "#1F4BFF";
}
useCursorTrail(color);
</script>

<template><!-- renderless --></template>
