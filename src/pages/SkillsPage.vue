<script setup>
import { ref } from "vue";

import SkillCard from "../components/skills/SkillCard.vue";

import { useScrollReveal } from "../composables/useScrollReveal";

/* =========================================
   REFS
========================================= */

const intro = ref(null);
const topSkills = ref(null);
const workflow = ref(null);
const bottomSkills = ref(null);

/* =========================================
   SAME REVEAL SYSTEM AS HOME
========================================= */

useScrollReveal(intro, ".reveal", {
  stagger: 0.08,
});

useScrollReveal(topSkills, ".reveal", {
  stagger: 0.08,
});

useScrollReveal(workflow, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(bottomSkills, ".reveal", {
  stagger: 0.07,
});

/* =========================================
   SKILLS
========================================= */

const firstRow = [
  {
    number: "01",

    title: "UX Research",

    description:
      "I use UX research to understand people, context and problems before deciding what a digital experience should become.",

    projects: ["NEXT", "Lumière"],

    tone: "sage",
  },

  {
    number: "02",

    title: "UI Design",

    description:
      "I translate structure and content into clear UX/UI interfaces with attention to hierarchy, spacing, accessibility and visual consistency.",

    projects: ["NEXT", "Lumière", "Café Crèma"],

    tone: "light",
  },

  {
    number: "03",

    title: "Interaction Design",

    description:
      "I think about what users need to do, how they move through a digital experience and how interactions can feel natural and intuitive.",

    projects: ["Lumière", "NEXT"],

    tone: "soft",
  },

  {
    number: "04",

    title: "Accessibility",

    description:
      "I consider WCAG, contrast, reading order, text resizing, forms, focus, navigation and responsive behaviour as part of the design process.",

    projects: ["Café Crèma"],

    tone: "cream",
  },
];

const secondRow = [
  {
    number: "05",

    title: "Prototyping",

    description:
      "I use interactive prototypes to explore user flows, communicate ideas and test whether UX and interaction decisions make sense before development.",

    projects: ["Lumière", "NEXT"],

    tone: "light",
  },

  {
    number: "06",

    title: "User Testing",

    description:
      "I test designs with users to identify friction, validate UX decisions and find the smaller changes that improve the overall experience.",

    projects: ["NEXT", "Lumière"],

    tone: "sage",
  },

  {
    number: "07",

    title: "Branding",

    description:
      "I enjoy building visual identities through colour, typography, imagery and brand systems while keeping the concept connected to the project and audience.",

    projects: ["NEXT"],

    tone: "soft",
  },

  {
    number: "08",

    title: "Figma",

    description:
      "I use Figma for UX research organisation, wireframes, UI systems, responsive layouts, interactive prototypes and developer-ready design work.",

    projects: ["NEXT", "Lumière", "Café Crèma"],

    tone: "light",
  },

  {
    number: "09",

    title: "Front-end Development",

    description:
      "I turn designs into responsive digital interfaces and enjoy understanding what is technically possible instead of stopping at the mockup.",

    projects: ["NEXT", "Portfolio"],

    tone: "dark",
  },

  {
    number: "10",

    title: "HTML & CSS",

    description:
      "I work comfortably with semantic HTML, responsive CSS, layout systems, animations and accessible interface structure.",

    projects: ["NEXT", "Portfolio"],

    tone: "cream",
  },

  {
    number: "11",

    title: "JavaScript & Vue",

    description:
      "I use JavaScript and Vue to build interactive digital experiences, reusable components and motion-driven interfaces.",

    projects: ["Portfolio"],

    tone: "sage",
  },

  {
    number: "12",

    title: "CMS",

    description:
      "I have experience building interfaces around editable content and working with lightweight CMS solutions such as Bludit.",

    projects: ["NEXT"],

    tone: "soft",
  },
];
</script>

<template>
  <main class="skills-page">
    <!-- =====================================
         INTRO
    ====================================== -->

    <section
      ref="intro"
      class="section skills-intro"
      aria-labelledby="skills-title"
    >
      <div class="skills-intro__copy">
        <p class="skills-eyebrow reveal">UX/UI skills &amp; tools</p>

        <h1 id="skills-title" class="reveal">Skills</h1>

        <p class="skills-intro__text reveal">
          My skills combine UX research, UI design, interaction design,
          accessibility and front-end development. I enjoy understanding how
          people use digital products, shaping clear visual systems and turning
          ideas into responsive, interactive experiences.
        </p>
      </div>

      <div class="skills-dog reveal" aria-hidden="true">
        <img src="/images/sleeping-dog.png" alt="" />

        <span> still learning... </span>
      </div>
    </section>

    <!-- =====================================
         FIRST ROW
    ====================================== -->

    <section
      ref="topSkills"
      class="section skills-grid-section"
      aria-label="UX and design skills"
    >
      <div class="skills-grid skills-grid--four">
        <SkillCard
          v-for="skill in firstRow"
          :key="skill.title"
          class="reveal"
          :number="skill.number"
          :title="skill.title"
          :description="skill.description"
          :projects="skill.projects"
          :tone="skill.tone"
        />
      </div>
    </section>

    <!-- =====================================
         HOW I WORK
    ====================================== -->

    <section ref="workflow" class="section workflow-section">
      <article class="workflow-card reveal">
        <div class="workflow-card__top">
          <p>How I work</p>

          <span> 01 → 06 </span>
        </div>

        <div class="workflow-card__main">
          <h2>I’m strongest where design and logic meet.</h2>

          <p>
            I like understanding why something works before deciding how it
            should look. My UX/UI process moves between research, information
            structure, visual design, prototyping, testing and refinement rather
            than treating them as completely separate steps.
          </p>
        </div>

        <div class="workflow-steps" aria-label="Design process">
          <span>Research</span>
          <span>Structure</span>
          <span>Design</span>
          <span>Prototype</span>
          <span>Test</span>
          <span>Refine</span>
        </div>

        <div class="workflow-water" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </article>
    </section>

    <!-- =====================================
         MORE SKILLS
    ====================================== -->

    <section
      ref="bottomSkills"
      class="section skills-grid-section skills-grid-section--bottom"
      aria-labelledby="more-skills-title"
    >
      <header class="skills-subheading">
        <p class="skills-eyebrow reveal">Tools &amp; making</p>

        <h2 id="more-skills-title" class="reveal">
          Things I use to make ideas real
        </h2>
      </header>

      <div class="skills-grid skills-grid--four">
        <SkillCard
          v-for="skill in secondRow"
          :key="skill.title"
          class="reveal"
          :number="skill.number"
          :title="skill.title"
          :description="skill.description"
          :projects="skill.projects"
          :tone="skill.tone"
        />
      </div>
    </section>

    <!-- =====================================
         END
    ====================================== -->

    <section class="section skills-ending">
      <p class="skills-eyebrow">Still growing</p>

      <p class="skills-ending__text">
        I don’t see UX/UI, accessibility or front-end development as skills that
        are ever completely finished. I want to keep improving the way I
        research, design, prototype, test and build digital experiences that are
        clear, thoughtful and accessible.
      </p>
    </section>
  </main>
</template>

<style scoped>
/* =========================================
   PAGE
========================================= */

.skills-page {
  min-height: 100vh;

  padding-top: 90px;

  overflow: hidden;

  background: var(--color-bg);

  color: var(--color-text);

  font-family: var(--font-body);
}

/* =========================================
   INTRO
========================================= */

.skills-intro {
  min-height: 620px;

  display: grid;

  grid-template-columns:
    1fr
    0.65fr;

  gap: clamp(70px, 10vw, 160px);

  align-items: center;
}

.skills-intro__copy {
  max-width: 720px;
}

.skills-eyebrow {
  margin-bottom: 18px;

  font-size: 11px;

  letter-spacing: 0.12em;

  text-transform: uppercase;

  opacity: 0.5;
}

.skills-intro h1 {
  margin-bottom: 28px;

  font-size: clamp(70px, 11vw, 160px);

  line-height: 0.82;

  letter-spacing: -0.075em;

  text-transform: uppercase;
}

.skills-intro__text {
  max-width: 650px;

  font-size: clamp(17px, 1.5vw, 21px);

  line-height: 1.55;
}

/* =========================================
   DOG
========================================= */

.skills-dog {
  position: relative;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  min-height: 330px;
}

.skills-dog img {
  width: min(100%, 290px);

  height: auto;

  display: block;
}

.skills-dog span {
  margin-top: 18px;

  font-size: 11px;

  letter-spacing: 0.08em;

  text-transform: uppercase;

  opacity: 0.35;
}

/* =========================================
   GRID
========================================= */

.skills-grid-section {
  padding-top: 40px;

  padding-bottom: 40px;
}

.skills-grid {
  display: grid;

  gap: 14px;
}

.skills-grid--four {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

/* =========================================
   WORKFLOW
========================================= */

.workflow-section {
  padding-top: 24px;

  padding-bottom: 24px;
}

.workflow-card {
  position: relative;

  min-height: 500px;

  overflow: hidden;

  padding: clamp(28px, 4vw, 55px);

  border-radius: 30px;

  background: #191b19;

  color: #f5f4ee;

  isolation: isolate;
}

.workflow-card__top {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;

  position: relative;

  z-index: 2;

  font-size: 11px;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  opacity: 0.6;
}

.workflow-card__main {
  position: relative;

  z-index: 2;

  display: grid;

  grid-template-columns:
    1.25fr
    0.75fr;

  gap: 80px;

  align-items: end;

  margin-top: clamp(80px, 11vw, 150px);
}

.workflow-card__main h2 {
  max-width: 720px;

  font-size: clamp(42px, 6vw, 84px);

  line-height: 0.94;

  letter-spacing: -0.06em;
}

.workflow-card__main p {
  max-width: 430px;

  font-size: 14px;

  line-height: 1.6;

  opacity: 0.8;
}

/* =========================================
   PROCESS
========================================= */

.workflow-steps {
  position: relative;

  z-index: 2;

  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-top: 50px;
}

.workflow-steps span {
  padding: 9px 13px;

  border: 1px solid rgba(255, 255, 255, 0.35);

  border-radius: 999px;

  font-size: 11px;
}

/* =========================================
   WATER DECORATION
========================================= */

.workflow-water {
  position: absolute;

  right: -90px;

  top: -80px;

  z-index: -1;

  width: 500px;

  height: 500px;

  opacity: 0.16;
}

.workflow-water span {
  position: absolute;

  inset: 50% auto auto 50%;

  border: 1px solid #fff;

  border-radius: 50%;

  transform: translate(-50%, -50%);
}

.workflow-water span:nth-child(1) {
  width: 160px;

  height: 160px;
}

.workflow-water span:nth-child(2) {
  width: 290px;

  height: 290px;
}

.workflow-water span:nth-child(3) {
  width: 430px;

  height: 430px;
}

/* =========================================
   BOTTOM SKILLS
========================================= */

.skills-grid-section--bottom {
  padding-top: 120px;

  padding-bottom: 100px;
}

.skills-subheading {
  max-width: 800px;

  margin-bottom: 55px;
}

.skills-subheading h2 {
  font-size: clamp(38px, 5vw, 72px);

  line-height: 0.95;

  letter-spacing: -0.055em;

  text-transform: uppercase;
}

/* =========================================
   END
========================================= */

.skills-ending {
  padding-top: 160px;

  padding-bottom: 180px;
}

.skills-ending__text {
  max-width: 900px;

  font-size: clamp(32px, 5vw, 70px);

  line-height: 1;

  letter-spacing: -0.055em;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 1000px) {
  .skills-grid--four {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .skills-intro {
    grid-template-columns:
      1fr
      0.55fr;
  }

  .workflow-card__main {
    grid-template-columns: 1fr;

    gap: 35px;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 650px) {
  .skills-page {
    padding-top: 70px;
  }

  .skills-intro {
    min-height: auto;

    grid-template-columns: 1fr;

    gap: 40px;
  }

  .skills-dog {
    min-height: 230px;
  }

  .skills-dog img {
    width: 190px;
  }

  .skills-grid--four {
    grid-template-columns: 1fr;
  }

  .workflow-card {
    min-height: 530px;

    border-radius: 24px;
  }

  .workflow-card__main {
    margin-top: 90px;
  }

  .workflow-water {
    right: -250px;
  }

  .skills-grid-section--bottom {
    padding-top: 90px;
  }

  .skills-ending {
    padding-top: 110px;

    padding-bottom: 120px;
  }
}
</style>
