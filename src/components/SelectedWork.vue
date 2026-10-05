<template>
  <section id="work" ref="root" class="section work">
    <SectionHeading
      title="Selected work"
      intro="A selection of UX/UI, accessibility, branding and front-end projects. Each case study shows a different part of my process, from understanding user needs and shaping clear digital experiences to prototyping, testing and development."
    />

    <div class="work__grid">
      <TiltCard
        v-for="project in projects"
        :key="project.title"
        v-bind="project"
      />
    </div>

    <div class="work__actions reveal">
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
    title: "Cinema Lumière App",

    description:
      "A UX/UI and interaction design case study for a mobile cinema app, from research and prototyping to usability testing.",

    image: "/images/projects/lumiere.jpg",

    alt: "Cinema Lumière mobile app UX/UI design",

    tags: ["UX/UI", "Interaction Design", "Prototype"],

    path: "/projects/lumiere",
  },

  {
    title: "Café Crèma Accessibility",

    description:
      "An accessibility-focused redesign using WCAG AA, inclusive design and user-centred design principles.",

    image: "/images/projects/accessibility.jpg",

    alt: "Café Crèma accessible mobile website redesign",

    tags: ["User Research", "Accessibility", "Inclusive Design"],

    path: "/projects/accessibility",
  },

  {
    title: "NEXT",

    description:
      "A real client project combining branding, UX/UI, front-end development and a responsive CMS website.",

    image: "/images/projects/next.jpg",

    alt: "NEXT branding and responsive website design",

    tags: ["Branding", "Web Design", "Frontend", "CMS"],

    path: "/projects/next",
  },
];
</script>

<style scoped>
.work__grid {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 18px;

  margin-top: 56px;
}

.work__actions {
  display: flex;

  margin-top: 48px;
}

@media (max-width: 900px) {
  .work__grid {
    grid-template-columns: 1fr;

    gap: 20px;
  }
}
</style>
