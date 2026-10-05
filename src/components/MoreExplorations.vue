<template>
  <section
    ref="root"
    class="section explorations"
    aria-labelledby="explorations-title"
  >
    <SectionHeading
      title="More explorations"
      intro="A selection of smaller branding, UX/UI and interaction design explorations. Full case studies are coming soon."
    />

    <div class="explorations__grid">
      <div
        v-for="project in projects"
        :key="project.title"
        class="explorations__item"
      >
        <TiltCard v-bind="project" />

        <span class="explorations__status"> Coming soon </span>
      </div>
    </div>

    <div class="explorations__actions reveal">
      <CtaButton to="/projects" variant="dark"> View all projects </CtaButton>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import TiltCard from "./TiltCard.vue";

import CtaButton from "./ui/CtaButton.vue";

import SectionHeading from "./ui/SectionHeading.vue";

import { useScrollReveal } from "../composables/useScrollReveal";

const root = ref(null);

useScrollReveal(root, ".reveal", {
  stagger: 0.1,
});

const projects = [
  {
    title: "Matcha stand",

    description:
      "A playful branding and web design exploration centred around calm colour, visual identity and atmosphere.",

    tags: ["Branding", "Web Design", "Visual Design"],

    gradient: "linear-gradient(145deg, #d3d9bd 0%, #e9eadf 48%, #c2caa8 100%)",
  },

  {
    title: "Reading tracker",

    description:
      "A UX/UI mobile concept exploring how small interactions can make reading habits feel lighter and more rewarding.",

    tags: ["UX/UI", "App Design", "Prototype"],

    gradient: "linear-gradient(145deg, #e3e0ea 0%, #f0eeee 48%, #c5c4d3 100%)",
  },

  {
    title: "Gachapon machine",

    description:
      "A playful interaction design experiment inspired by physical vending machines and small moments of surprise.",

    tags: ["Interaction Design", "Visual Design", "Experiment"],

    gradient: "linear-gradient(145deg, #eee8de 0%, #f1eee8 50%, #d9cec3 100%)",
  },
];
</script>

<style scoped>
.explorations__grid {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 18px;

  margin-top: 56px;
}

/* =========================================
   CARD WRAPPER
========================================= */

.explorations__item {
  position: relative;

  min-width: 0;
}

/* =========================================
   COMING SOON
========================================= */

.explorations__status {
  position: absolute;

  top: 18px;
  right: 18px;

  z-index: 5;

  padding: 8px 14px;

  border: 1px solid rgba(17, 17, 17, 0.08);

  border-radius: 999px;

  background: rgba(249, 249, 249, 0.88);

  color: #111111;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 0.06em;

  text-transform: uppercase;

  pointer-events: none;

  backdrop-filter: blur(8px);

  -webkit-backdrop-filter: blur(8px);
}

/* =========================================
   ACTION
========================================= */

.explorations__actions {
  display: flex;

  margin-top: 48px;
}

/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 900px) {
  .explorations__grid {
    grid-template-columns: 1fr;

    gap: 20px;
  }
}
</style>
