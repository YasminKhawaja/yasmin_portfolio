<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

import gsap from "gsap";

import CtaButton from "./ui/CtaButton.vue";
import WaterSurface from "./WaterSurface.vue";

const hero = ref(null);
const lotusElements = ref([]);

const floatTweens = [];

const lotuses = [
  {
    id: 1,
    src: "/images/lotus.png",
    x: 0.76,
    y: 0.67,
    width: 180,
    opacity: 1,
  },

  {
    id: 2,
    src: "/images/lotus.png",
    x: 0.12,
    y: 0.78,
    width: 110,
    opacity: 1,
  },

  {
    id: 3,
    src: "/images/lotus.png",
    x: 0.85,
    y: 0.28,
    width: 105,
    opacity: 1,
  },

  {
    id: 4,
    src: "/images/lotus.png",
    x: 0.12,
    y: 0.3,
    width: 90,
    opacity: 1,
  },

  {
    id: 5,
    src: "/images/lotus.png",
    x: 0.63,
    y: 0.18,
    width: 72,
    opacity: 0.78,
  },

  {
    id: 6,
    src: "/images/lotus.png",
    x: 0.9,
    y: 0.82,
    width: 82,
    opacity: 0.82,
  },

  {
    id: 7,
    src: "/images/lotus.png",
    x: 0.33,
    y: 0.16,
    width: 62,
    opacity: 0.7,
  },
];

const positions = [];

function setLotusRef(el, index) {
  if (el) {
    lotusElements.value[index] = el;
  }
}

function initializePositions() {
  if (!hero.value) return;

  const rect = hero.value.getBoundingClientRect();

  lotuses.forEach((lotus, index) => {
    positions[index] = {
      x: rect.width * lotus.x,
      y: rect.height * lotus.y,
    };

    gsap.set(lotusElements.value[index], {
      left: positions[index].x,
      top: positions[index].y,
    });
  });
}

function startFloating() {
  lotusElements.value.forEach((wrapper) => {
    if (!wrapper) return;

    const image = wrapper.querySelector(".lotus__image");

    const drift = gsap.to(wrapper, {
      x: () => gsap.utils.random(-35, 35),

      y: () => gsap.utils.random(-20, 20),

      duration: () => gsap.utils.random(6, 10),

      ease: "sine.inOut",

      repeat: -1,

      yoyo: true,

      repeatRefresh: true,
    });

    floatTweens.push(drift);

    const bob = gsap.to(image, {
      y: () => gsap.utils.random(-6, 6),

      rotation: () => gsap.utils.random(-3, 3),

      duration: () => gsap.utils.random(4, 7),

      ease: "sine.inOut",

      repeat: -1,

      yoyo: true,

      repeatRefresh: true,
    });

    floatTweens.push(bob);
  });
}

function pushLotus(event, index) {
  const wrapper = lotusElements.value[index];

  const pos = positions[index];

  if (!wrapper || !pos || !hero.value) {
    return;
  }

  const flowerRect = wrapper.getBoundingClientRect();

  const heroRect = hero.value.getBoundingClientRect();

  const centerX = flowerRect.left + flowerRect.width / 2;

  const centerY = flowerRect.top + flowerRect.height / 2;

  const dx = centerX - event.clientX;

  const dy = centerY - event.clientY;

  const distance = Math.sqrt(dx * dx + dy * dy) || 1;

  const dirX = dx / distance;

  const dirY = dy / distance;

  const pushStrength = 10;

  pos.x += dirX * pushStrength;

  pos.y += dirY * pushStrength;

  const padding = 70;

  pos.x = Math.max(padding, Math.min(heroRect.width - padding, pos.x));

  pos.y = Math.max(padding, Math.min(heroRect.height - padding, pos.y));

  gsap.to(wrapper, {
    left: pos.x,
    top: pos.y,

    duration: 0.9,

    ease: "power3.out",
  });

  const image = wrapper.querySelector(".lotus__image");

  gsap.to(image, {
    rotation: dirX * 10,

    duration: 0.35,

    ease: "power2.out",
  });

  gsap.to(image, {
    rotation: 0,

    duration: 1.4,

    delay: 0.25,

    ease: "sine.out",
  });
}

function handleResize() {
  initializePositions();
}

onMounted(() => {
  initializePositions();
  startFloating();

  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);

  floatTweens.forEach((tween) => {
    tween.kill();
  });
});
</script>

<template>
  <section ref="hero" class="hero">
    <WaterSurface />

    <div class="hero__shade"></div>

    <div
      v-for="(lotus, index) in lotuses"
      :key="lotus.id"
      :ref="(el) => setLotusRef(el, index)"
      class="lotus-wrapper"
      :style="{
        width: lotus.width + 'px',

        opacity: lotus.opacity,
      }"
    >
      <img
        class="lotus__image"
        :src="lotus.src"
        alt=""
        @mouseenter="pushLotus($event, index)"
        @mousemove="pushLotus($event, index)"
      />
    </div>

    <div class="hero__content">
      <p class="hero__label">DIGITAL EXPERIENCE DESIGNER</p>

      <h1>Hey, I’m Yasmin.</h1>

      <p class="hero__description">
        I design clear, thoughtful digital experiences with a soft visual touch,
        from branding and UI to interactive prototypes.
      </p>

      <div class="hero__actions">
        <CtaButton to="/about" variant="light"> Get to know me </CtaButton>

        <CtaButton to="/projects" variant="glass"> Check my work </CtaButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;

  min-height: 100vh;

  overflow: hidden;

  background: #111;

  color: white;
}

.hero__shade {
  position: absolute;

  inset: 0;

  z-index: 1;

  pointer-events: none;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.03),
    rgba(0, 0, 0, 0.18)
  );
}

.lotus-wrapper {
  position: absolute;

  z-index: 2;

  transform: translate(-50%, -50%);

  will-change: transform, left, top;
}

.lotus__image {
  display: block;

  width: 100%;
  height: auto;

  cursor: pointer;

  user-select: none;

  transform-origin: center;

  will-change: transform;

  filter: drop-shadow(0 10px 14px rgba(0, 0, 0, 0.12));
}

.hero__content {
  position: relative;

  z-index: 5;

  width: min(1100px, calc(100% - 64px));

  margin: 0 auto;

  padding-top: 24vh;

  pointer-events: none;
}

.hero__label {
  margin-bottom: 20px;

  font-size: 14px;

  font-weight: 700;

  letter-spacing: 0.09em;

  text-transform: uppercase;
}

.hero h1 {
  font-size: clamp(64px, 11vw, 150px);

  line-height: 0.88;

  letter-spacing: -0.065em;

  font-weight: 600;
}

.hero__description {
  max-width: 560px;

  margin-top: 32px;

  font-size: clamp(16px, 1.8vw, 21px);

  line-height: 1.5;
}

.hero__actions {
  display: flex;

  flex-wrap: wrap;

  gap: 12px;

  margin-top: 34px;

  pointer-events: auto;
}

@media (max-width: 900px) {
  .hero__content {
    padding-top: 25vh;
  }

  .hero__label {
    font-size: 12px;
  }
}

@media (max-width: 700px) {
  .hero {
    min-height: 100svh;
  }

  .hero__content {
    width: calc(100% - 40px);

    padding-top: 26vh;
  }

  .hero h1 {
    font-size: clamp(58px, 17vw, 92px);
  }

  .hero__description {
    max-width: 460px;

    margin-top: 24px;

    font-size: 16px;
  }

  .hero__actions {
    margin-top: 28px;
  }

  .lotus-wrapper {
    transform: translate(-50%, -50%) scale(0.7);
  }
}

@media (max-width: 430px) {
  .hero__actions {
    flex-direction: column;

    align-items: flex-start;
  }
}
</style>
