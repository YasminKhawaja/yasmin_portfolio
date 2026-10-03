<script setup>
import { ref } from "vue";
import gsap from "gsap";

const props = defineProps({
  strength: {
    type: Number,
    default: 6,
  },

  scale: {
    type: Number,
    default: 1.015,
  },

  perspective: {
    type: Number,
    default: 1000,
  },
});

const surface = ref(null);

function canTilt() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function onMove(event) {
  if (!surface.value || !canTilt()) return;

  const rect = surface.value.getBoundingClientRect();

  const x = (event.clientX - rect.left) / rect.width - 0.5;

  const y = (event.clientY - rect.top) / rect.height - 0.5;

  gsap.to(surface.value, {
    rotateY: x * props.strength,

    rotateX: -y * props.strength,

    scale: props.scale,

    transformPerspective: props.perspective,

    duration: 0.4,

    ease: "power3.out",

    overwrite: "auto",
  });
}

function onLeave() {
  if (!surface.value) return;

  gsap.to(surface.value, {
    rotateY: 0,

    rotateX: 0,

    scale: 1,

    duration: 0.65,

    ease: "power3.out",

    overwrite: "auto",
  });
}
</script>

<template>
  <div
    ref="surface"
    class="tilt-surface"
    @mousemove="onMove"
    @mouseleave="onLeave"
  >
    <slot />
  </div>
</template>

<style scoped>
.tilt-surface {
  position: relative;

  transform-style: preserve-3d;

  will-change: transform;
}
</style>
