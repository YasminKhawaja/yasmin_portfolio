<template>
  <section id="hero" ref="root" class="hero">
    <canvas ref="canvas" class="hero__canvas"></canvas>

    <div class="hero__petal hero__petal--1" :style="petalStyle(1)"></div>
    <div class="hero__petal hero__petal--2" :style="petalStyle(-1)"></div>
    <div class="hero__petal hero__petal--3" :style="petalStyle(0.6)"></div>

    <div class="hero__content reveal">
      <h1 class="hero__title">Hi, I'm Yasmin</h1>
      <p class="hero__subtitle">Digital Experience Designer</p>
      <p class="hero__intro">
        I design clear, thoughtful digital experiences with a soft visual touch —
        from branding and UI to interactive prototypes.
      </p>
      <div class="hero__actions">
        <a href="#about" class="pill">About</a>
        <a href="#work" class="pill">My work</a>
      </div>
    </div>

    <div class="hero__scroll-hint reveal">
      <span></span>
      scroll
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { createHeroScene } from '../three/heroScene'
import { useScrollReveal } from '../composables/useScrollReveal'

const root = ref(null)
const canvas = ref(null)
let scene = null

useScrollReveal(root, '.reveal', { stagger: 0.12 })

function petalStyle(strength) {
  // base placement handled in CSS; this just exposes a custom property
  // that the mousemove handler animates via GSAP for parallax drift
  return { '--drift': strength }
}

function onPointerMove(e) {
  const nx = (e.clientX / window.innerWidth) * 2 - 1
  const ny = (e.clientY / window.innerHeight) * 2 - 1

  scene?.setPointerTarget(nx, ny)

  gsap.utils.toArray('.hero__petal').forEach((el) => {
    const strength = parseFloat(el.style.getPropertyValue('--drift')) || 1
    gsap.to(el, {
      x: nx * 24 * strength,
      y: ny * 24 * strength,
      duration: 1.2,
      ease: 'power3.out',
      overwrite: 'auto',
    })
  })
}

function onResize() {
  scene?.resize()
}

onMounted(() => {
  scene = createHeroScene(canvas.value)
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('resize', onResize)
  scene?.dispose()
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 24px;
}

.hero__canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;
}

.hero__petal {
  position: absolute;
  border-radius: 50% 50% 46% 54% / 60% 55% 45% 40%;
  background: radial-gradient(circle at 30% 30%, rgba(211, 217, 189, 0.9), rgba(211, 217, 189, 0.1));
  filter: blur(1px);
  pointer-events: none;
}

.hero__petal--1 {
  width: 260px;
  height: 320px;
  top: 8%;
  left: 8%;
}

.hero__petal--2 {
  width: 220px;
  height: 260px;
  bottom: 10%;
  right: 10%;
}

.hero__petal--3 {
  width: 160px;
  height: 190px;
  bottom: 18%;
  left: 18%;
  opacity: 0.6;
}

.hero__content {
  position: relative;
  z-index: 2;
  max-width: 660px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
}

.hero__title {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(40px, 7vw, 64px);
  text-transform: uppercase;
}

.hero__subtitle {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: clamp(20px, 3vw, 32px);
}

.hero__intro {
  font-size: clamp(16px, 2vw, 24px);
  line-height: 1.35;
  opacity: 0.85;
}

.hero__actions {
  display: flex;
  gap: 20px;
  margin-top: 12px;
}

.hero__scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 0.6;
}

.hero__scroll-hint span {
  width: 1px;
  height: 28px;
  background: currentColor;
  animation: scrollHint 1.8s ease-in-out infinite;
}

@keyframes scrollHint {
  0% { transform: scaleY(0.3); opacity: 0.2; }
  50% { transform: scaleY(1); opacity: 1; }
  100% { transform: scaleY(0.3); opacity: 0.2; }
}
</style>
