<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import $ from "jquery";

import "jquery.ripples";

const water = ref(null);

let rainTimer = null;
let nextDropTimer = null;

function createRandomDrop() {
  if (!water.value) return;

  const element = water.value;

  const width = element.clientWidth;
  const height = element.clientHeight;

  const x = Math.random() * width;
  const y = Math.random() * height;

  const radius = 12 + Math.random() * 15;
  const strength = 0.015 + Math.random() * 0.025;

  try {
    $(element).ripples("drop", x, y, radius, strength);
  } catch (error) {
    console.warn("Ripple drop failed:", error);
  }
}

function scheduleNextDrop() {
  /*
    Niet met een vast interval.
    Anders voelt regen onmiddellijk artificieel.

    Volgende druppel komt ergens tussen
    1.4 en 4 seconden.
  */
  const delay = 1400 + Math.random() * 2600;

  nextDropTimer = window.setTimeout(() => {
    createRandomDrop();
    scheduleNextDrop();
  }, delay);
}

onMounted(() => {
  if (!water.value) return;

  $(water.value).ripples({
    resolution: 256,
    dropRadius: 18,
    perturbance: 0.015,
    interactive: true,
  });

  /*
    Eerste druppel even uitstellen zodat
    het water rustig begint.
  */
  rainTimer = window.setTimeout(() => {
    createRandomDrop();
    scheduleNextDrop();
  }, 1800);
});

onBeforeUnmount(() => {
  if (rainTimer) {
    clearTimeout(rainTimer);
  }

  if (nextDropTimer) {
    clearTimeout(nextDropTimer);
  }

  if (water.value) {
    try {
      $(water.value).ripples("destroy");
    } catch (error) {
      // Component kan al vernietigd zijn.
    }
  }
});
</script>

<template>
  <div ref="water" class="water-surface" />
</template>

<style scoped>
.water-surface {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  background-image: url("/images/hero-water.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
