<template>
  <section ref="root" class="section explorations">
    <SectionHeading
      title="More explorations"
      intro="A selection of smaller experiments and projects where I explored branding, UX/UI, accessibility and front-end development."
    />

    <div class="explorations__grid">
      <TiltCard
        v-for="project in projects"
        :key="project.title"
        v-bind="project"
      />
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
      "A playful branding and web exploration centred around calm colour, identity and atmosphere.",

    tags: ["Branding", "Web Design", "Visual Design"],

    gradient: "linear-gradient(145deg, #d3d9bd 0%, #e9eadf 48%, #c2caa8 100%)",
  },

  {
    title: "Reading tracker",

    description:
      "A mobile concept exploring how small interactions can make reading habits feel lighter and more rewarding.",

    tags: ["UX/UI", "App Design", "Prototype"],

    gradient: "linear-gradient(145deg, #e3e0ea 0%, #f0eeee 48%, #c5c4d3 100%)",
  },

  {
    title: "Gachapon machine",

    description:
      "A playful interaction experiment inspired by physical vending machines and small moments of surprise.",

    tags: ["Interaction", "Visual Design", "Experiment"],

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

.explorations__actions {
  display: flex;

  margin-top: 48px;
}

@media (max-width: 900px) {
  .explorations__grid {
    grid-template-columns: 1fr;

    gap: 20px;
  }
}
</style>
