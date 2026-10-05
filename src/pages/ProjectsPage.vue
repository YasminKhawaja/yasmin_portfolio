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

    description:
      "A real client case study combining branding, UX/UI design, front-end development and a responsive CMS website.",

    image: "/images/projects/next.jpg",

    alt: "NEXT branding and responsive website case study",

    tags: ["Branding", "UX/UI", "Web Design", "Frontend", "CMS", "Client Work"],

    path: "/projects/next",
  },

  {
    title: "Cinema Lumière App",

    description:
      "A UX/UI and interaction design case study for a mobile cinema app, including research, prototyping and usability testing.",

    image: "/images/projects/lumiere.jpg",

    alt: "Cinema Lumière mobile app UX/UI case study",

    tags: ["UX/UI", "Interaction Design", "Usability", "Prototype"],

    path: "/projects/lumiere",
  },

  {
    title: "Café Crèma Accessibility",

    description:
      "An accessibility-focused UX case study exploring WCAG AA, inclusive design and user-centred design principles.",

    image: "/images/projects/accessibility.jpg",

    alt: "Café Crèma accessibility and inclusive design case study",

    tags: ["User Research", "Accessibility", "Inclusive Design", "WCAG", "UCD"],

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
      "A playful branding and digital design exploration centred around calm colour, visual identity and web design.",

    tags: ["Branding", "Visual Design", "Coming soon"],

    gradient: "linear-gradient(145deg, #d3d9bd 0%, #edf0e5 48%, #b8c39b 100%)",
  },

  {
    title: "Reading Tracker",

    description:
      "A UX/UI mobile app concept exploring how small interactions can make reading habits feel lighter and more rewarding.",

    tags: ["UX/UI", "App Design", "Interaction", "Coming soon"],

    gradient: "linear-gradient(145deg, #dddbea 0%, #f0eeee 48%, #c5c4d3 100%)",
  },

  {
    title: "Gachapon Machine",

    description:
      "A playful interaction design and creative coding experiment inspired by physical vending machines and moments of surprise.",

    tags: [
      "Interaction Design",
      "Creative Coding",
      "Visual Design",
      "Coming soon",
    ],

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
        <p class="projects-eyebrow reveal">UX/UI portfolio</p>

        <h1 id="projects-title" class="reveal">Projects</h1>

        <p class="projects-intro reveal">
          A selection of UX/UI, interaction design, accessibility, branding and
          front-end projects. These case studies show how I research user needs,
          structure digital experiences, create interfaces, test ideas and turn
          concepts into working designs.
        </p>
      </header>

      <!-- =====================================
           CASE STUDIES
      ====================================== -->

      <div class="projects-group">
        <div class="projects-group__heading">
          <h2 class="reveal">Case studies</h2>

          <p class="reveal">
            Finished digital design projects with a deeper look into my process,
            UX decisions, visual direction, testing and outcomes.
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
          <p class="projects-eyebrow reveal">Coming soon</p>

          <h2 class="reveal">More explorations</h2>

          <p class="reveal">
            Smaller branding, UX/UI and interaction design experiments that I
            would like to develop into fuller projects in the future.
          </p>
        </div>

        <div class="projects-grid">
          <div
            v-for="project in explorations"
            :key="project.title"
            class="exploration-item"
          >
            <TiltCard v-bind="project" />

            <span class="exploration-status"> Coming soon </span>
          </div>
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

  font-family: var(--font-body);
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

.exploration-item {
  position: relative;

  min-width: 0;
}

.exploration-status {
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
