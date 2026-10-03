<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

import gsap from "gsap";

const loader = ref(null);

const progress = ref(0);

const leaves = ref([]);

const showLoader = ref(sessionStorage.getItem("yasmin-intro-seen") !== "true");

let timeline = null;

let previousLeafCount = 0;

const leafTweens = [];

const COLUMNS = 9;
const ROWS = 7;

const MAX_LEAVES = COLUMNS * ROWS;

const leafPool = [];

/* =========================
   CREATE LEAF GRID
========================= */

function createLeafPool() {
  leafPool.length = 0;

  let id = 0;

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLUMNS; col++) {
      const baseX = ((col + 0.5) / COLUMNS) * 100;

      const baseY = ((row + 0.5) / ROWS) * 100;

      leafPool.push({
        id: id++,

        left: baseX + gsap.utils.random(-5, 5),

        top: baseY + gsap.utils.random(-6, 6),

        width: gsap.utils.random(130, 250),

        rotation: gsap.utils.random(-180, 180),

        opacity: gsap.utils.random(0.86, 1),

        floatX: gsap.utils.random(-15, 15),

        floatY: gsap.utils.random(-10, 10),

        duration: gsap.utils.random(5, 8),
      });
    }
  }

  gsap.utils.shuffle(leafPool);
}

/* =========================
   PROGRESS → LEAVES
========================= */

async function syncLeaves() {
  const wanted = Math.floor((progress.value / 100) * MAX_LEAVES);

  if (wanted <= previousLeafCount) {
    return;
  }

  leaves.value.push(...leafPool.slice(previousLeafCount, wanted));

  previousLeafCount = wanted;

  await nextTick();

  animateNewLeaves();
}

/* =========================
   LEAF ENTER + FLOAT
========================= */

function animateNewLeaves() {
  const elements = document.querySelectorAll(
    ".loader-leaf:not([data-ready='true'])",
  );

  elements.forEach((wrapper) => {
    wrapper.dataset.ready = "true";

    const image = wrapper.querySelector(".loader-leaf__image");

    if (!image) return;

    const rotation = Number(wrapper.dataset.rotation);

    const floatX = Number(wrapper.dataset.floatX);

    const floatY = Number(wrapper.dataset.floatY);

    const duration = Number(wrapper.dataset.duration);

    gsap.set(wrapper, {
      xPercent: -50,
      yPercent: -50,
    });

    gsap.fromTo(
      image,
      {
        opacity: 0,
        scale: 0.6,

        rotation: rotation + gsap.utils.random(-15, 15),
      },
      {
        opacity: 1,
        scale: 1,

        rotation,

        duration: gsap.utils.random(0.55, 0.85),

        ease: "power2.out",
      },
    );

    const floatTween = gsap.to(wrapper, {
      x: floatX,
      y: floatY,

      duration,

      repeat: -1,
      yoyo: true,

      ease: "sine.inOut",
    });

    leafTweens.push(floatTween);
  });
}

/* =========================
   WIND
========================= */

function blowLeavesAway() {
  leafTweens.forEach((tween) => {
    tween.kill();
  });

  const elements = document.querySelectorAll(".loader-leaf");

  elements.forEach((leaf) => {
    const rect = leaf.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;

    const middle = window.innerWidth / 2;

    const direction = centerX < middle ? -1 : 1;

    gsap.to(leaf, {
      x: direction * gsap.utils.random(550, 1100),

      y: gsap.utils.random(-260, 260),

      rotation: "+=" + gsap.utils.random(-120, 120),

      opacity: 0,

      duration: gsap.utils.random(1.1, 1.8),

      delay: gsap.utils.random(0, 0.25),

      ease: "power3.in",
    });
  });
}

/* =========================
   START
========================= */

onMounted(() => {
  /*
    Als gebruiker intro al gezien heeft:
    helemaal niets doen.
  */
  if (!showLoader.value) {
    return;
  }

  /*
    Meteen registreren.
    Daardoor speelt hij bij terugkeren
    naar Home niet opnieuw.
  */
  sessionStorage.setItem("yasmin-intro-seen", "true");

  createLeafPool();

  const state = {
    value: 0,
  };

  timeline = gsap.timeline();

  timeline.to(state, {
    value: 100,

    duration: 5.2,

    ease: "power1.inOut",

    onUpdate() {
      progress.value = Math.round(state.value);

      syncLeaves();
    },
  });

  timeline.to(
    {},
    {
      duration: 0.55,
    },
  );

  timeline.call(blowLeavesAway);

  timeline.to(
    {},
    {
      duration: 1.35,
    },
  );

  timeline.to(loader.value, {
    opacity: 0,

    duration: 0.7,

    ease: "power2.out",
  });

  timeline.call(() => {
    showLoader.value = false;
  });
});

/* =========================
   CLEANUP
========================= */

onBeforeUnmount(() => {
  timeline?.kill();

  leafTweens.forEach((tween) => {
    tween.kill();
  });

  gsap.killTweensOf(".loader-leaf");

  gsap.killTweensOf(".loader-leaf__image");
});
</script>

<template>
  <div v-if="showLoader" ref="loader" class="loader">
    <div class="loader__leaves">
      <div
        v-for="leaf in leaves"
        :key="leaf.id"
        class="loader-leaf"
        :data-rotation="leaf.rotation"
        :data-float-x="leaf.floatX"
        :data-float-y="leaf.floatY"
        :data-duration="leaf.duration"
        :style="{
          left: leaf.left + '%',

          top: leaf.top + '%',

          width: leaf.width + 'px',
        }"
      >
        <img class="loader-leaf__image" src="/images/leaf.png" alt="" />
      </div>
    </div>

    <div class="loader__top">
      <span>YK</span>

      <span> Portfolio </span>
    </div>

    <div class="loader__number">
      {{ progress.toString().padStart(3, "0") }}%
    </div>
  </div>
</template>

<style scoped>
.loader {
  position: fixed;
  inset: 0;

  z-index: 9999;

  width: 100vw;
  height: 100vh;

  overflow: hidden;

  background: #f1f1f1;

  color: #111;

  font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
}

.loader__leaves {
  position: absolute;
  inset: 0;

  z-index: 1;

  overflow: hidden;

  pointer-events: none;
}

.loader-leaf {
  position: absolute;

  pointer-events: none;

  will-change: transform, opacity;
}

.loader-leaf__image {
  display: block;

  width: 100%;
  height: auto;

  pointer-events: none;
  user-select: none;

  transform-origin: center;

  will-change: transform, opacity;

  backface-visibility: hidden;

  filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.07));
}

.loader__top {
  position: absolute;

  top: 28px;
  left: 32px;
  right: 32px;

  z-index: 5;

  display: flex;

  justify-content: space-between;

  font-size: 12px;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.loader__number {
  position: absolute;

  left: 50%;
  top: 50%;

  z-index: 10;

  transform: translate(-50%, -50%);

  font-size: clamp(72px, 14vw, 180px);

  font-weight: 600;

  line-height: 1;

  letter-spacing: -0.06em;

  white-space: nowrap;

  text-shadow:
    0 0 30px #f5f4ee,
    0 0 60px #f5f4ee;
}

@media (max-width: 700px) {
  .loader__top {
    top: 20px;
    left: 20px;
    right: 20px;
  }

  .loader-leaf {
    max-width: 165px;
  }
}
</style>
