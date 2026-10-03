<template>
  <section id="work" ref="root" class="section work">
    <SectionHeading
      title="Selected work"
      intro="A selection of projects where I explored branding, UX/UI, accessibility and front-end development. Each project reflects a different part of my process: understanding people, shaping clear digital experiences and turning ideas into thoughtful, working designs."
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
      "A mobile app concept focused on creating a smoother cinema experience.",

    image: "/images/projects/lumiere.jpg",

    alt: "Cinema Lumière mobile app project",

    tags: ["UX/UI", "Interaction Design", "Prototype"],

    path: "/projects/lumiere",
  },

  {
    title: "Accessibility UCD",

    description: "Designing with accessibility and user needs in mind.",

    image: "/images/projects/accessibility.jpg",

    alt: "Accessibility user-centred design project",

    tags: ["User Research", "Accessibility", "Inclusive Design"],

    path: "/projects/accessibility",
  },

  {
    title: "NEXT",

    description: "Branding and a website for a real client.",

    image: "/images/projects/next.jpg",

    alt: "NEXT branding and website project",

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
