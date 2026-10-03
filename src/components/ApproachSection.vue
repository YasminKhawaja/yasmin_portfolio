<template>
  <section id="approach" ref="root" class="section approach">
    <SectionHeading
      title="My approach"
      intro="I design in layers: first understanding the people and context behind a project, then shaping the structure, visual direction and building something people can use."
    />

    <div class="approach__grid">
      <TiltSurface
        v-for="step in steps"
        :key="step.title"
        class="approach__card reveal"
        :strength="5"
        :scale="1.018"
      >
        <span class="approach__number">
          {{ step.number }}
        </span>

        <div class="approach__card-content">
          <h3>
            {{ step.title }}
          </h3>

          <p>
            {{ step.text }}
          </p>
        </div>

        <span class="approach__decoration" aria-hidden="true"></span>
      </TiltSurface>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import TiltSurface from "./ui/TiltSurface.vue";
import SectionHeading from "./ui/SectionHeading.vue";

import { useScrollReveal } from "../composables/useScrollReveal";

const root = ref(null);

useScrollReveal(root, ".reveal", {
  stagger: 0.1,
});

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "I start by understanding the context, the people involved and the problem behind the brief.",
  },

  {
    number: "02",
    title: "Structure",
    text: "I turn insights into clear flows, wireframes and content priorities so the experience has a strong foundation.",
  },

  {
    number: "03",
    title: "Design",
    text: "I shape the visual language, interface and interaction details so the project feels clear, thoughtful and intentional.",
  },

  {
    number: "04",
    title: "Build",
    text: "I create working prototypes or websites and refine them through testing, feedback and iteration.",
  },
];
</script>

<style scoped>
.approach__grid {
  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 18px;

  margin-top: 56px;
}

/* =========================================
   CARD
========================================= */

.approach__card {
  position: relative;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  min-height: 300px;

  padding: 28px;

  overflow: hidden;

  border: 1px solid rgba(17, 17, 17, 0.055);

  border-radius: 30px;

  background: rgba(217, 217, 217, 0.17);

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.035);

  transition:
    border-radius 0.5s var(--ease-soft),
    background 0.5s var(--ease-soft),
    box-shadow 0.5s var(--ease-soft);
}

.approach__card:hover {
  border-radius: 36px;

  background: rgba(211, 217, 189, 0.32);

  box-shadow: 0 20px 42px rgba(0, 0, 0, 0.065);
}

/* =========================================
   NUMBER
========================================= */

.approach__number {
  position: relative;

  z-index: 2;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 0.1em;

  opacity: 0.42;

  transform: translateZ(24px);
}

/* =========================================
   CONTENT
========================================= */

.approach__card-content {
  position: relative;

  z-index: 2;

  transform: translateZ(30px);
}

.approach__card h3 {
  margin-bottom: 12px;

  font-family: var(--font-heading);

  font-size: 24px;

  font-weight: 700;

  line-height: 1;

  letter-spacing: -0.035em;
}

.approach__card p {
  font-size: 14px;

  line-height: 1.55;

  opacity: 0.72;
}

/* =========================================
   DECORATION
========================================= */

.approach__decoration {
  position: absolute;

  top: -70px;
  right: -80px;

  width: 190px;
  height: 190px;

  border: 1px solid rgba(255, 255, 255, 0.5);

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.13);

  transition: transform 0.6s var(--ease-soft);
}

.approach__card:hover .approach__decoration {
  transform: translate(-14px, 16px) scale(1.08);
}

/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 900px) {
  .approach__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 540px) {
  .approach__grid {
    grid-template-columns: 1fr;
  }

  .approach__card {
    min-height: 260px;
  }
}
</style>
