<template>
  <div class="cursor-layer" aria-hidden="true">
    <div ref="dot" class="cursor-dot"></div>
    <div ref="ring" class="cursor-ring" :class="{ 'cursor-ring--active': hovering }"></div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import gsap from 'gsap'

const dot = ref(null)
const ring = ref(null)
const hovering = ref(false)

let mouseX = 0
let mouseY = 0
let ringX = 0
let ringY = 0
let rafId = null

function onMouseMove(e) {
  mouseX = e.clientX
  mouseY = e.clientY
  gsap.set(dot.value, { x: mouseX, y: mouseY })
}

function tick() {
  // ring trails the dot with easing for a soft, floaty feel
  ringX += (mouseX - ringX) * 0.15
  ringY += (mouseY - ringY) * 0.15
  gsap.set(ring.value, { x: ringX, y: ringY })
  rafId = requestAnimationFrame(tick)
}

function onOver(e) {
  hovering.value = !!e.target.closest('a, button, .pill, .card')
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseover', onOver)
  rafId = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseover', onOver)
  cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.cursor-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
}

@media (hover: none), (max-width: 900px) {
  .cursor-layer {
    display: none;
  }
}

.cursor-dot,
.cursor-ring {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.cursor-dot {
  width: 6px;
  height: 6px;
  background: var(--color-text);
}

.cursor-ring {
  width: 32px;
  height: 32px;
  border: 1px solid rgba(17, 17, 17, 0.4);
  transition: width 0.3s var(--ease-soft), height 0.3s var(--ease-soft), opacity 0.3s;
}

.cursor-ring--active {
  width: 56px;
  height: 56px;
  background: var(--color-accent);
  border-color: transparent;
}
</style>
