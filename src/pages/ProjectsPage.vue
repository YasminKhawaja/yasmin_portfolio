<script setup>
import { ref } from "vue";

import TiltCard from "../components/TiltCard.vue";

import { useScrollReveal } from "../composables/useScrollReveal";

const projectsSection = ref(null);

useScrollReveal(projectsSection, ".reveal", {
  stagger: 0.1,
});

/* =========================================
   CASE STUDIES
========================================= */

const projects = [
  {
    title: "NEXT",

    description: "Branding and a website for a real client.",

    image: "/images/projects/next.jpg",

    alt: "NEXT branding and website project",

    tags: ["Branding", "Web Design", "Frontend", "CMS", "Client Work"],

    path: "/projects/next",
  },

  {
    title: "Cinema Lumière App",

    description:
      "A mobile app concept focused on creating a smoother cinema experience.",

    image: "/images/projects/lumiere.jpg",

    alt: "Cinema Lumière mobile app project",

    tags: ["UX/UI", "Interaction Design", "Usability", "Prototype"],

    path: "/projects/lumiere",
  },

  {
    title: "Accessibility UCD",

    description:
      "Exploring accessibility and inclusive design through a user-centred design process.",

    image: "/images/projects/accessibility.jpg",

    alt: "Accessibility user-centred design project",

    tags: ["User Research", "Accessibility", "Inclusive Design", "UCD"],

    path: "/projects/accessibility",
  },
];

/* =========================================
   MORE EXPLORATIONS
========================================= */

const explorations = [
  {
    title: "Matcha Stand",

    description:
      "A playful branding and digital design exploration inspired by calm colour, atmosphere and identity.",

    tags: ["Branding", "Visual Design", "Coming soon"],

    gradient: "linear-gradient(145deg, #d3d9bd 0%, #edf0e5 48%, #b8c39b 100%)",
  },

  {
    title: "Reading Tracker",

    description:
      "A mobile concept exploring how small interactions can make reading habits feel lighter and more rewarding.",

    tags: ["UX/UI", "App Design", "Coming soon"],

    gradient: "linear-gradient(145deg, #dddbea 0%, #f0eeee 48%, #c5c4d3 100%)",
  },

  {
    title: "Gachapon Machine",

    description:
      "A playful interaction experiment inspired by physical vending machines and small moments of surprise.",

    tags: ["Interaction", "Creative Coding", "Coming soon"],

    gradient: "linear-gradient(145deg, #eee5dc 0%, #f4f0ea 52%, #d9c7bb 100%)",
  },
];
</script>

<template>
  <main class="projects-page">
    <section
      ref="projectsSection"
      class="section projects-section"
      aria-labelledby="projects-title"
    >
      <!-- =====================================
           PAGE INTRO
      ====================================== -->

      <header class="projects-header">
        <p class="projects-eyebrow reveal">Selected work</p>

        <h1 id="projects-title" class="reveal">Projects</h1>

        <p class="projects-intro reveal">
          A selection of projects where I explored branding, UX/UI,
          accessibility and front-end development. Each project reflects a
          different part of my process: understanding people, shaping clear
          digital experiences and turning ideas into thoughtful, working
          designs.
        </p>
      </header>

      <!-- =====================================
           CASE STUDIES
      ====================================== -->

      <div class="projects-group">
        <div class="projects-group__heading">
          <h2 class="reveal">Case studies</h2>

          <p class="reveal">
            Finished projects with a deeper look into my process, decisions and
            outcomes.
          </p>
        </div>

        <div class="projects-grid">
          <TiltCard
            v-for="project in projects"
            :key="project.title"
            v-bind="project"
          />
        </div>
      </div>

      <!-- =====================================
           MORE EXPLORATIONS
      ====================================== -->

      <div class="projects-group projects-group--explorations">
        <div class="projects-group__heading">
          <p class="projects-eyebrow reveal">In progress</p>

          <h2 class="reveal">More explorations</h2>

          <p class="reveal">
            Smaller ideas and experiments I would love to develop further when I
            have the time.
          </p>
        </div>

        <div class="projects-grid">
          <TiltCard
            v-for="project in explorations"
            :key="project.title"
            v-bind="project"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* =========================================
   PAGE
========================================= */

.projects-page {
  min-height: 100vh;

  padding-top: 90px;

  background: var(--color-bg);

  color: var(--color-text);
}

/* =========================================
   SECTION
========================================= */

.projects-section {
  min-height: 100vh;

  padding-bottom: 160px;
}

/* =========================================
   PAGE HEADER
========================================= */

.projects-header {
  max-width: 760px;

  margin-bottom: 90px;
}

.projects-eyebrow {
  margin-bottom: 12px;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  opacity: 0.48;
}

.projects-header h1 {
  margin-bottom: 20px;

  font-family: var(--font-heading);

  font-size: clamp(42px, 5vw, 72px);

  font-weight: 700;

  line-height: 0.95;

  letter-spacing: -0.055em;

  text-transform: uppercase;
}

.projects-intro {
  max-width: 720px;

  font-size: 15px;

  line-height: 1.65;

  opacity: 0.78;
}

/* =========================================
   PROJECT GROUPS
========================================= */

.projects-group {
  margin-top: 0;
}

.projects-group + .projects-group {
  margin-top: 130px;
}

.projects-group__heading {
  max-width: 650px;

  margin-bottom: 42px;
}

.projects-group__heading h2 {
  margin-bottom: 14px;

  font-family: var(--font-heading);

  font-size: clamp(30px, 4vw, 42px);

  font-weight: 700;

  line-height: 1;

  letter-spacing: -0.04em;

  text-transform: uppercase;
}

.projects-group__heading p:not(.projects-eyebrow) {
  max-width: 560px;

  font-size: 14px;

  line-height: 1.6;

  opacity: 0.68;
}

/* =========================================
   GRID
========================================= */

.projects-grid {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 18px;

  align-items: stretch;
}

/* =========================================
   EXPLORATIONS
========================================= */

.projects-group--explorations {
  position: relative;

  padding-top: 10px;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 1000px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 650px) {
  .projects-page {
    padding-top: 70px;
  }

  .projects-section {
    padding-bottom: 100px;
  }

  .projects-header {
    margin-bottom: 70px;
  }

  .projects-group + .projects-group {
    margin-top: 95px;
  }

  .projects-group__heading {
    margin-bottom: 32px;
  }

  .projects-grid {
    grid-template-columns: 1fr;

    gap: 20px;
  }
}
</style>
