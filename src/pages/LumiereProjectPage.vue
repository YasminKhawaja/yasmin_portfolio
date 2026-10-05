<script setup>
import { ref } from "vue";

import { useScrollReveal } from "../composables/useScrollReveal";

import StickyImageStack from "../components/case/StickyImageStack.vue";
import CaseProgress from "../components/case/CaseProgress.vue";
import BackToTop from "../components/case/BackToTop.vue";
import TiltSurface from "../components/ui/TiltSurface.vue";

/* =========================================
   SECTION REFS
========================================= */

const hero = ref(null);
const challenge = ref(null);
const research = ref(null);
const structure = ref(null);
const prototype = ref(null);
const testing = ref(null);
const results = ref(null);
const refine = ref(null);
const role = ref(null);
const reflection = ref(null);

/* =========================================
   SCROLL REVEAL
========================================= */

useScrollReveal(hero, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(challenge, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(research, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(structure, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(prototype, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(testing, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(results, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(refine, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(role, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(reflection, ".reveal", {
  stagger: 0.07,
});

/* =========================================
   PROGRESS STEPS
========================================= */

const progressSteps = [
  {
    id: "lumiere-intro",
    label: "Overview",
  },
  {
    id: "lumiere-challenge",
    label: "Challenge",
  },
  {
    id: "lumiere-research",
    label: "Research",
  },
  {
    id: "lumiere-structure",
    label: "Structure",
  },
  {
    id: "lumiere-prototype",
    label: "Prototype",
  },
  {
    id: "lumiere-testing",
    label: "Testing",
  },
  {
    id: "lumiere-refine",
    label: "Refine",
  },
  {
    id: "lumiere-reflection",
    label: "Reflection",
  },
];

/* =========================================
   IMAGE STACKS
========================================= */

const benchmarkImages = [
  "/images/lumiere/moodboard-01.jpg",
  "/images/lumiere/moodboard-02.jpg",
  "/images/lumiere/moodboard-03.jpg",
];

const structureImages = [
  "/images/lumiere/moodboard-04.jpg",
  "/images/lumiere/moodboard-05.jpg",
  "/images/lumiere/moodboard-06.jpg",
];

const prototypeImages = [
  "/images/lumiere/moodboard-07.jpg",
  "/images/lumiere/moodboard-08.jpg",
  "/images/lumiere/moodboard-09.jpg",
];

const testingImages = [
  "/images/lumiere/moodboard-10.jpg",
  "/images/lumiere/moodboard-11.jpg",
  "/images/lumiere/moodboard-12.jpg",
];

const finalImages = [
  "/images/lumiere/moodboard-13.jpg",
  "/images/lumiere/moodboard-14.jpg",
  "/images/lumiere/moodboard-15.jpg",
];

/* =========================================
   UX DATA
========================================= */

const uxLaws = [
  "Jakob's Law",
  "Fitt's Law",
  "Hick's Law",
  "Miller's Law",
  "Peak-End Rule",
];

const mustHave = [
  "Ordering tickets",
  "Room information",
  "Search",
  "Film language",
];

const shouldHave = [
  "User account",
  "Multiple languages",
  "Booking notifications",
  "Seat selection",
];

const couldHave = ["Recommendations", "Personal watchlist", "Genre filters"];

const outOfScope = [
  "Extensive gamification",
  "Pre-ordering snacks",
  "Favourite cinema",
];

const testTasks = [
  "Order three student tickets",
  "Find current and previous tickets",
  "Locate the watchlist",
  "Remove notifications",
  "Switch light and dark mode",
  "Edit profile information",
  "Explore analytics",
  "Give feedback on light mode",
];
</script>

<template>
  <main class="case-page">
    <CaseProgress :steps="progressSteps" />

    <BackToTop />

    <!-- =====================================
         HERO
    ====================================== -->

    <section
      id="lumiere-intro"
      ref="hero"
      class="section case-hero"
      aria-labelledby="lumiere-title"
    >
      <div class="case-hero__tags reveal">
        <span>UX/UI</span>
        <span>Interaction design</span>
        <span>Usability testing</span>
        <span>Prototype</span>
      </div>

      <div class="case-hero__layout">
        <div class="case-hero__copy">
          <p class="case-label reveal">UX/UI case study</p>

          <h1 id="lumiere-title" class="reveal">Cinema Lumière</h1>

          <h2 class="case-hero__subtitle reveal">
            Designing a smoother cinema experience
          </h2>

          <p class="case-hero__intro reveal">
            For this school project, we designed a UX/UI mobile app concept for
            Cinema Lumière Mechelen, focused on making the cinema experience
            clearer, smoother and easier to navigate.
          </p>

          <p class="case-hero__intro reveal">
            The project explored interaction design, information architecture,
            prototyping and usability testing. We analysed existing user
            journeys, applied UX laws and heuristics, structured user flows and
            validated design decisions with real participants.
          </p>
        </div>

        <div class="case-meta">
          <div class="case-meta__item reveal">
            <span>Type</span>
            <p>School project</p>
          </div>

          <div class="case-meta__item reveal">
            <span>Focus</span>
            <p>UX/UI, interaction design, usability</p>
          </div>

          <div class="case-meta__item reveal">
            <span>Tools</span>
            <p>Figma, FigJam, Useberry, UX laws, Nielsen heuristics</p>
          </div>

          <div class="case-meta__item reveal">
            <span>Outcome</span>
            <p>High-fidelity mobile app prototype</p>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================
         HERO VISUAL
    ====================================== -->

    <section class="case-wide-visual">
      <img
        src="/images/lumiere/moodboard-01.jpg"
        alt="Cinema Lumière UX/UI mobile app case study"
      />
    </section>

    <!-- =====================================
         CHALLENGE
    ====================================== -->

    <section
      id="lumiere-challenge"
      ref="challenge"
      class="section case-text-section"
    >
      <div class="section-number reveal">01</div>

      <div class="case-text-grid">
        <h2 class="reveal">Challenge</h2>

        <div>
          <p class="case-large-copy reveal">
            Before designing the mobile app, we first had to understand where
            users could experience friction on the existing Cinema Lumière
            mobile website.
          </p>

          <p class="reveal">
            We explored important cinema-related tasks such as finding a film,
            checking film information, buying tickets, applying discounts,
            creating an account, logging in and reserving seats.
          </p>

          <p class="reveal">
            The challenge was to translate those findings into a UX/UI concept
            that felt more intuitive, better structured and easier to use.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         RESEARCH
    ====================================== -->

    <section
      id="lumiere-research"
      ref="research"
      class="section case-text-section"
    >
      <div class="section-number reveal">02</div>

      <div class="case-text-grid">
        <h2 class="reveal">Research &amp; benchmark</h2>

        <div>
          <p class="case-large-copy reveal">
            We compared Cinema Lumière with other cinema platforms to understand
            familiar interaction patterns, usability strengths and points of
            friction.
          </p>

          <p class="reveal">
            We benchmarked Cinema Lumière against platforms such as UGC,
            Kinepolis, Pathé and AMC.
          </p>

          <p class="reveal">
            We compared film discovery, ticket purchase, seat selection, account
            features, notifications and accessibility-related options.
          </p>
        </div>
      </div>

      <div class="law-grid">
        <div v-for="law in uxLaws" :key="law" class="law-card-wrap reveal">
          <TiltSurface class="law-card" :strength="3.5" :scale="1.01">
            {{ law }}
          </TiltSurface>
        </div>
      </div>
    </section>

    <!-- =====================================
         BENCHMARK STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-intro">
        <p class="stack-label">Benchmarking &amp; UX analysis</p>
      </div>

      <StickyImageStack
        :images="benchmarkImages"
        alt-prefix="Cinema Lumière UX benchmarking"
      />
    </section>

    <!-- =====================================
         STRUCTURE
    ====================================== -->

    <section
      id="lumiere-structure"
      ref="structure"
      class="section case-text-section"
    >
      <div class="section-number reveal">03</div>

      <div class="case-text-grid">
        <h2 class="reveal">Structure</h2>

        <div>
          <p class="case-large-copy reveal">
            Before designing screens, we defined what the mobile app actually
            needed to help users accomplish.
          </p>

          <p class="reveal">
            After benchmarking, we created a functionality list using the MoSCoW
            method to prioritise the most important features.
          </p>

          <p class="reveal">
            We then used card sorting to organise more than forty features and
            content items into a logical information architecture.
          </p>
        </div>
      </div>

      <div class="moscow-grid">
        <div class="moscow-card-wrap reveal">
          <TiltSurface class="moscow-card" :strength="3" :scale="1.01">
            <span> Must have </span>

            <ul>
              <li v-for="item in mustHave" :key="item">
                {{ item }}
              </li>
            </ul>
          </TiltSurface>
        </div>

        <div class="moscow-card-wrap reveal">
          <TiltSurface class="moscow-card" :strength="3" :scale="1.01">
            <span> Should have </span>

            <ul>
              <li v-for="item in shouldHave" :key="item">
                {{ item }}
              </li>
            </ul>
          </TiltSurface>
        </div>

        <div class="moscow-card-wrap reveal">
          <TiltSurface class="moscow-card" :strength="3" :scale="1.01">
            <span> Could have </span>

            <ul>
              <li v-for="item in couldHave" :key="item">
                {{ item }}
              </li>
            </ul>
          </TiltSurface>
        </div>

        <div class="moscow-card-wrap reveal">
          <TiltSurface class="moscow-card" :strength="3" :scale="1.01">
            <span> Out of scope </span>

            <ul>
              <li v-for="item in outOfScope" :key="item">
                {{ item }}
              </li>
            </ul>
          </TiltSurface>
        </div>
      </div>
    </section>

    <!-- =====================================
         STRUCTURE STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-intro">
        <p class="stack-label">Information architecture</p>
      </div>

      <StickyImageStack
        :images="structureImages"
        alt-prefix="Cinema Lumière information architecture"
      />
    </section>

    <!-- =====================================
         PROTOTYPE
    ====================================== -->

    <section
      id="lumiere-prototype"
      ref="prototype"
      class="section case-text-section"
    >
      <div class="section-number reveal">04</div>

      <div class="case-text-grid">
        <h2 class="reveal">Prototype</h2>

        <div>
          <p class="case-large-copy reveal">
            Structure came before visual polish.
          </p>

          <p class="reveal">
            Based on the information architecture, we moved from flowcharts to
            low-fidelity wireframes and interactive prototypes.
          </p>

          <p class="reveal">
            We also wrote user stories and acceptance criteria to turn abstract
            app features into concrete user goals.
          </p>

          <div class="design-question reveal">
            <span> Instead of asking </span>

            <p>What screen should we make?</p>

            <span class="question-shift"> we asked </span>

            <p>
              What should the user be able to do, and what does success look
              like?
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================
         PROTOTYPE STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-intro">
        <p class="stack-label">Flows, wireframes &amp; prototype</p>
      </div>

      <StickyImageStack
        :images="prototypeImages"
        alt-prefix="Cinema Lumière mobile app prototype"
      />
    </section>

    <!-- =====================================
         TESTING
    ====================================== -->

    <section
      id="lumiere-testing"
      ref="testing"
      class="section case-text-section"
    >
      <div class="section-number reveal">05</div>

      <div class="case-text-grid">
        <h2 class="reveal">Usability testing</h2>

        <div>
          <p class="case-large-copy reveal">
            I tested the high-fidelity UX/UI prototype with ten participants to
            evaluate usability, navigation and the main interaction flows.
          </p>

          <p class="reveal">
            The goal was to check whether users could complete the most
            important actions independently.
          </p>

          <p class="reveal">
            I also wanted to understand whether the navigation structure felt
            logical, whether labels were clear and whether users could move
            through the app without extra explanation.
          </p>
        </div>
      </div>

      <div class="testing-grid">
        <div
          v-for="(task, index) in testTasks"
          :key="task"
          class="testing-card-wrap reveal"
        >
          <TiltSurface class="testing-card" :strength="3" :scale="1.01">
            <span class="testing-card__number">
              {{ String(index + 1).padStart(2, "0") }}
            </span>

            <p>
              {{ task }}
            </p>
          </TiltSurface>
        </div>
      </div>
    </section>

    <!-- =====================================
         TESTING STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-intro">
        <p class="stack-label">User testing</p>
      </div>

      <StickyImageStack
        :images="testingImages"
        alt-prefix="Cinema Lumière usability testing"
      />
    </section>

    <!-- =====================================
         TEST RESULTS
    ====================================== -->

    <section ref="results" class="section findings-section">
      <p class="case-label reveal">Test results</p>

      <h2 class="reveal">The main structure worked well.</h2>

      <div class="results-grid">
        <div class="result-card-wrap reveal">
          <TiltSurface class="result-card" :strength="3" :scale="1.01">
            <strong> 9 / 10 </strong>

            <p>successfully completed the student ticket flow</p>
          </TiltSurface>
        </div>

        <div class="result-card-wrap reveal">
          <TiltSurface class="result-card" :strength="3" :scale="1.01">
            <strong> 100% </strong>

            <p>found current and previous tickets</p>
          </TiltSurface>
        </div>

        <div class="result-card-wrap reveal">
          <TiltSurface class="result-card" :strength="3" :scale="1.01">
            <strong> 10 / 10 </strong>

            <p>found and used the dark/light mode toggle</p>
          </TiltSurface>
        </div>
      </div>

      <div class="finding-list">
        <article class="finding reveal">
          <span> Watchlist </span>

          <p>
            One participant confused Mijn tickets with Mijn account. This showed
            that both sections needed a clearer visual difference.
          </p>
        </article>

        <article class="finding reveal">
          <span> Light mode </span>

          <p>
            The light interface remained usable, but some users felt the yellow
            accents were slightly too bright.
          </p>
        </article>
      </div>
    </section>

    <!-- =====================================
         REFINE
    ====================================== -->

    <section id="lumiere-refine" ref="refine" class="section case-text-section">
      <div class="section-number reveal">06</div>

      <div class="case-text-grid">
        <h2 class="reveal">Refine</h2>

        <div>
          <p class="case-large-copy reveal">
            The prototype did not need a complete redesign.
          </p>

          <p class="reveal">
            Most important user flows already worked, so I focused on smaller
            usability refinements instead of making unnecessary large changes.
          </p>

          <p class="reveal">
            I adjusted the icon and label treatment for Mijn account and Mijn
            tickets to make the difference clearer.
          </p>

          <p class="reveal">
            I also refined the yellow accent colour in light mode to improve
            readability and contrast.
          </p>

          <p class="reveal">
            In the high-fidelity phase, we reviewed the prototype using
            Nielsen's heuristics and C.R.A.P. principles.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         FINAL STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-intro">
        <p class="stack-label">Refined prototype</p>
      </div>

      <StickyImageStack
        :images="finalImages"
        alt-prefix="Cinema Lumière refined UX/UI prototype"
      />
    </section>

    <!-- =====================================
         MY ROLE
    ====================================== -->

    <section ref="role" class="section role-section">
      <div class="case-text-grid">
        <h2 class="reveal">My role</h2>

        <div>
          <p class="case-large-copy reveal">
            I contributed throughout the UX research and interaction design
            process.
          </p>

          <p class="reveal">
            My work included benchmarking, information architecture, user flows,
            wireframes, prototyping and design iterations.
          </p>

          <p class="reveal">
            Through this project, I learned how UX laws, user stories,
            acceptance criteria, usability testing and heuristics can make
            design decisions more intentional and less dependent on personal
            preference.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         REFLECTION
    ====================================== -->

    <section
      id="lumiere-reflection"
      ref="reflection"
      class="section reflection-section"
    >
      <p class="case-label reveal">Reflection</p>

      <h2 class="reveal">Structure before polish.</h2>

      <div class="reflection-grid">
        <p class="reveal">
          This project helped me understand that interaction design is not only
          about creating screens, but about building a logical and usable
          digital experience.
        </p>

        <p class="reveal">
          By working with UX laws, card sorting, information architecture, user
          stories, usability testing and heuristics, I learned how to analyse
          problems and improve a design step by step.
        </p>

        <p class="reveal">
          A strong mobile app experience needs a clear structure before visual
          polish.
        </p>

        <p class="reveal">
          The prototype did not need to be perfect or beautiful from the start.
          It needed to be understandable, intuitive, tested and improved.
        </p>
      </div>
    </section>

    <!-- =====================================
         NEXT PROJECT
    ====================================== -->

    <section class="section next-project">
      <p>Next project</p>

      <RouterLink to="/projects/accessibility">
        Café Crèma Accessibility

        <span aria-hidden="true"> ↗ </span>
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
/* =========================================
   PAGE
========================================= */

.case-page {
  min-height: 100vh;

  padding-top: 90px;

  background: var(--color-bg);

  color: var(--color-text);

  font-family: var(--font-body);
}

/* =========================================
   LABELS
========================================= */

.case-label,
.stack-label {
  font-size: 12px;

  text-transform: uppercase;

  letter-spacing: 0.12em;

  opacity: 0.58;
}

/* =========================================
   COMMON CASE GRID
========================================= */

.case-text-grid {
  display: grid;

  grid-template-columns:
    minmax(220px, 0.75fr)
    minmax(0, 1.25fr);

  gap: clamp(60px, 9vw, 150px);
}

.case-text-grid h2 {
  max-width: 430px;

  font-size: clamp(34px, 4vw, 62px);

  line-height: 0.98;

  letter-spacing: -0.05em;

  text-transform: uppercase;
}

.case-text-grid p {
  max-width: 650px;

  font-size: 15px;

  line-height: 1.65;
}

.case-text-grid p + p {
  margin-top: 24px;
}

.case-large-copy {
  font-size: clamp(21px, 2vw, 29px) !important;

  line-height: 1.35 !important;

  letter-spacing: -0.025em;
}

.section-number {
  margin-bottom: 40px;

  font-size: clamp(54px, 7vw, 100px);

  line-height: 1;

  letter-spacing: -0.06em;

  opacity: 0.14;
}

/* =========================================
   HERO
========================================= */

.case-hero {
  padding-top: 100px;

  padding-bottom: 140px;
}

.case-hero__tags {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-bottom: 50px;
}

.case-hero__tags span {
  padding: 8px 13px;

  border: 1px solid rgba(17, 17, 17, 0.16);

  border-radius: 999px;

  font-size: 12px;
}

.case-hero__layout {
  display: grid;

  grid-template-columns:
    1.25fr
    0.75fr;

  gap: clamp(70px, 11vw, 180px);

  align-items: end;
}

.case-hero h1 {
  margin: 16px 0 18px;

  max-width: 800px;

  font-size: clamp(66px, 9vw, 142px);

  line-height: 0.84;

  letter-spacing: -0.075em;
}

.case-hero__subtitle {
  max-width: 650px;

  margin-bottom: 40px;

  font-size: clamp(30px, 4vw, 58px);

  line-height: 1;

  letter-spacing: -0.05em;
}

.case-hero__intro {
  max-width: 620px;

  font-size: clamp(16px, 1.4vw, 20px);

  line-height: 1.55;
}

.case-hero__intro + .case-hero__intro {
  margin-top: 18px;
}

/* =========================================
   META
========================================= */

.case-meta {
  border-top: 1px solid rgba(17, 17, 17, 0.17);
}

.case-meta__item {
  display: grid;

  grid-template-columns: 90px 1fr;

  gap: 20px;

  padding: 17px 0;

  border-bottom: 1px solid rgba(17, 17, 17, 0.17);
}

.case-meta__item span {
  font-size: 11px;

  text-transform: uppercase;

  letter-spacing: 0.08em;

  opacity: 0.5;
}

.case-meta__item p {
  font-size: 13px;

  line-height: 1.45;
}

/* =========================================
   HERO VISUAL
========================================= */

.case-wide-visual {
  width: calc(100% - 48px);

  max-width: 1500px;

  height: min(82vh, 900px);

  margin: 0 auto 60px;

  overflow: hidden;

  border-radius: 32px;

  background: #111;
}

.case-wide-visual img {
  display: block;

  width: 100%;

  height: 100%;

  object-fit: cover;
}

/* =========================================
   STACKS
========================================= */

.stack-section {
  padding: 10px 0 80px;
}

.stack-intro {
  padding-bottom: 45px;
}

/* =========================================
   SHARED CARD DNA
========================================= */

.law-card,
.moscow-card,
.testing-card,
.result-card {
  border: 1px solid rgba(17, 17, 17, 0.055);

  border-radius: 30px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.035);

  transition:
    border-radius 0.45s var(--ease-soft),
    box-shadow 0.45s var(--ease-soft);
}

.law-card:hover,
.moscow-card:hover,
.testing-card:hover,
.result-card:hover {
  border-radius: 36px;

  box-shadow: 0 20px 42px rgba(0, 0, 0, 0.06);
}

/* wrappers keep reveal and tilt transforms separate */

.law-card-wrap,
.moscow-card-wrap,
.testing-card-wrap,
.result-card-wrap {
  min-width: 0;

  height: 100%;
}

/* =========================================
   UX LAWS
========================================= */

.law-grid {
  display: grid;

  grid-template-columns: repeat(5, minmax(0, 1fr));

  gap: 12px;

  margin-top: 80px;
}

.law-card {
  display: flex;

  align-items: flex-end;

  min-height: 130px;

  height: 100%;

  padding: 20px;

  background: rgba(211, 217, 189, 0.42);

  font-size: 14px;
}

/* =========================================
   MOSCOW
========================================= */

.moscow-grid {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 14px;

  margin-top: 80px;
}

.moscow-card {
  height: 100%;

  padding: 28px;

  background: #efefeb;
}

.moscow-card > span {
  display: block;

  margin-bottom: 28px;

  font-size: 12px;

  text-transform: uppercase;

  letter-spacing: 0.08em;

  opacity: 0.5;
}

.moscow-card ul {
  margin: 0;

  padding-left: 18px;
}

.moscow-card li {
  margin-top: 10px;

  font-size: 14px;

  line-height: 1.45;
}

/* =========================================
   DESIGN QUESTION
========================================= */

.design-question {
  margin-top: 50px;

  padding: 30px;

  border-radius: 30px;

  background: var(--color-sage);
}

.design-question span {
  display: block;

  margin-bottom: 12px;

  font-size: 10px;

  text-transform: uppercase;

  letter-spacing: 0.1em;

  opacity: 0.55;
}

.design-question p {
  font-size: clamp(21px, 2vw, 28px);
}

.design-question .question-shift {
  margin-top: 28px;
}

/* =========================================
   TESTING
========================================= */

.testing-grid {
  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 12px;

  margin-top: 80px;
}

.testing-card {
  display: flex;

  flex-direction: column;

  justify-content: space-between;

  min-height: 210px;

  height: 100%;

  padding: 22px;

  background: #efefeb;
}

.testing-card__number {
  font-size: 38px;

  opacity: 0.14;
}

.testing-card p {
  font-size: 13px;

  line-height: 1.45;
}

/* =========================================
   RESULTS
========================================= */

.findings-section > h2 {
  max-width: 850px;

  margin: 22px 0 70px;

  font-size: clamp(44px, 6vw, 88px);

  line-height: 0.94;

  letter-spacing: -0.06em;

  text-transform: uppercase;
}

.results-grid {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 14px;

  margin-bottom: 80px;
}

.result-card {
  display: flex;

  flex-direction: column;

  justify-content: space-between;

  min-height: 250px;

  height: 100%;

  padding: 26px;

  background: var(--color-sage);
}

.result-card strong {
  font-size: clamp(42px, 5vw, 72px);

  font-weight: 400;

  letter-spacing: -0.06em;
}

.result-card p {
  max-width: 210px;

  font-size: 13px;

  line-height: 1.45;
}

.finding-list {
  border-top: 1px solid rgba(17, 17, 17, 0.16);
}

.finding {
  display: grid;

  grid-template-columns: 180px 1fr;

  gap: 50px;

  padding: 38px 0;

  border-bottom: 1px solid rgba(17, 17, 17, 0.16);
}

.finding > span {
  font-size: 12px;

  text-transform: uppercase;

  opacity: 0.5;
}

.finding p {
  max-width: 650px;

  font-size: 15px;

  line-height: 1.6;
}

/* =========================================
   ROLE
========================================= */

.role-section {
  padding-top: 160px;

  padding-bottom: 160px;
}

/* =========================================
   REFLECTION
========================================= */

.reflection-section {
  padding-top: 160px;

  padding-bottom: 170px;

  background: var(--color-sage);

  border-radius: 40px 40px 0 0;
}

.reflection-section h2 {
  max-width: 900px;

  margin: 25px 0 80px;

  font-size: clamp(54px, 8vw, 110px);

  line-height: 0.88;

  letter-spacing: -0.07em;

  text-transform: uppercase;
}

.reflection-grid {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 45px 100px;
}

.reflection-grid p {
  max-width: 520px;

  font-size: 15px;

  line-height: 1.65;
}

/* =========================================
   NEXT PROJECT
========================================= */

.next-project {
  padding-top: 100px;

  padding-bottom: 140px;
}

.next-project > p {
  margin-bottom: 24px;

  font-size: 11px;

  text-transform: uppercase;

  letter-spacing: 0.1em;

  opacity: 0.5;
}

.next-project a {
  display: flex;

  align-items: center;

  justify-content: space-between;

  padding-bottom: 28px;

  border-bottom: 1px solid rgba(17, 17, 17, 0.2);

  font-size: clamp(42px, 7vw, 100px);

  line-height: 1;

  letter-spacing: -0.065em;

  transition: opacity 0.3s ease;
}

.next-project a:hover {
  opacity: 0.55;
}

.next-project a span {
  font-size: 0.5em;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 950px) {
  .case-hero__layout,
  .case-text-grid {
    grid-template-columns: 1fr;

    gap: 50px;
  }

  .case-meta {
    max-width: 550px;
  }

  .law-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .testing-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 650px) {
  .case-page {
    padding-top: 70px;
  }

  .case-hero {
    padding-top: 80px;
  }

  .case-wide-visual {
    width: calc(100% - 24px);

    height: 60vh;

    border-radius: 22px;
  }

  .law-grid,
  .moscow-grid,
  .testing-grid,
  .results-grid,
  .reflection-grid {
    grid-template-columns: 1fr;
  }

  .finding {
    grid-template-columns: 1fr;

    gap: 18px;
  }

  .reflection-section,
  .role-section {
    padding-top: 110px;

    padding-bottom: 110px;
  }
}
</style>
