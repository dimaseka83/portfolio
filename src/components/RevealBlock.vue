<script setup>
import { onMounted, ref } from "vue";
import { observeReveal } from "@/composables/useReveal.js";

const props = defineProps({
  delay: { type: Number, default: 0 },
  tag:   { type: String, default: "div" },
});

const el = ref(null);
onMounted(() => observeReveal(el.value, props.delay));
</script>

<template>
  <component :is="tag" ref="el" class="reveal">
    <slot />
  </component>
</template>
