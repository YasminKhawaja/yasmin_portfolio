<script setup>
import { ref } from "vue";

import { useScrollReveal } from "../composables/useScrollReveal";

import StickyImageStack from "../components/case/StickyImageStack.vue";
import CaseProgress from "../components/case/CaseProgress.vue";
import BackToTop from "../components/case/BackToTop.vue";

/* =========================================
   SECTION REFS
========================================= */

const hero = ref(null);
const challenge = ref(null);
const learn = ref(null);
const audit = ref(null);
const define = ref(null);
const redesign = ref(null);
const accessibility = ref(null);
const responsive = ref(null);
const decisions = ref(null);
const finalResult = ref(null);
const reflection = ref(null);

/* =========================================
   PROGRESS STEPS
========================================= */

const progressSteps = [
  {
    id: "accessibility-intro",
    label: "Overview",
  },
  {
    id: "accessibility-challenge",
    label: "Challenge",
  },
  {
    id: "accessibility-learn",
    label: "Learn WCAG",
  },
  {
    id: "accessibility-audit",
    label: "Audit",
  },
  {
    id: "accessibility-define",
    label: "Define",
  },
  {
    id: "accessibility-redesign",
    label: "Redesign",
  },
  {
    id: "accessibility-check",
    label: "Accessibility",
  },
  {
    id: "accessibility-responsive",
    label: "Responsive",
  },
  {
    id: "accessibility-final",
    label: "Final result",
  },
  {
    id: "accessibility-reflection",
    label: "Reflection",
  },
];

/* =========================================
   SCROLL REVEAL
========================================= */

useScrollReveal(hero, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(challenge, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(learn, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(audit, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(define, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(redesign, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(accessibility, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(responsive, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(decisions, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(finalResult, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(reflection, ".reveal", {
  stagger: 0.07,
});

/* =========================================
   IMAGE STACKS
========================================= */

const auditImages = [
  "/images/accessibility/moodboard-01.jpg",
  "/images/accessibility/moodboard-02.jpg",
  "/images/accessibility/moodboard-03.jpg",
];

const redesignImages = [
  "/images/accessibility/moodboard-04.jpg",
  "/images/accessibility/moodboard-05.jpg",
  "/images/accessibility/moodboard-06.jpg",
];

const accessibilityImages = [
  "/images/accessibility/moodboard-07.jpg",
  "/images/accessibility/moodboard-08.jpg",
  "/images/accessibility/moodboard-09.jpg",
];

const responsiveImages = [
  "/images/accessibility/moodboard-10.jpg",
  "/images/accessibility/moodboard-11.jpg",
  "/images/accessibility/moodboard-12.jpg",
];

const finalImages = [
  "/images/accessibility/moodboard-13.jpg",
  "/images/accessibility/moodboard-14.jpg",
  "/images/accessibility/moodboard-15.jpg",
];

/* =========================================
   AUDIT ISSUES
========================================= */

const auditIssues = [
  {
    number: "01",
    title: "Interruptive reservation pop-up",
    text: "The reservation pop-up appeared repeatedly while navigating between pages and interrupted the user flow.",
  },
  {
    number: "02",
    title: "Missing practical information",
    text: "The website had a lot of whitespace, but no clear footer with important information.",
  },
  {
    number: "03",
    title: "Inconsistent menu",
    text: "The menu page looked visually different from the rest of the website.",
  },
  {
    number: "04",
    title: "Weak brand recognition",
    text: "The site used very little colour, which made the visual identity less recognisable.",
  },
  {
    number: "05",
    title: "Insufficient contrast",
    text: "Some original colour combinations did not meet WCAG contrast requirements.",
  },
  {
    number: "06",
    title: "Unclear ordering structure",
    text: "The menu and ordering experience needed clearer hierarchy and actions.",
  },
];

/* =========================================
   WCAG POINTS
========================================= */

const wcagPoints = [
  "Colour contrast",
  "Text resizing",
  "Reading order",
  "Input purpose",
  "Consistent navigation",
  "Focus order",
  "Status messages",
  "Alt text",
];

/* =========================================
   KEY DECISIONS
========================================= */

const keyDecisions = [
  {
    number: "01",
    title: "Replace the pop-up",
    text: "The recurring reservation pop-up was replaced with a visible call-to-action so users can choose when they want to reserve.",
  },
  {
    number: "02",
    title: "Improve colour contrast",
    text: "The original palette did not meet WCAG requirements, so I introduced stronger accessible colours while keeping the identity warm.",
  },
  {
    number: "03",
    title: "Make the menu easier to scan",
    text: "Food and drinks were separated and grouped by category to create a clearer hierarchy.",
  },
  {
    number: "04",
    title: "Create one visual system",
    text: "The menu and other pages were redesigned with one consistent style.",
  },
  {
    number: "05",
    title: "Add practical information",
    text: "A fuller footer was added with important information and a link to the accessibility statement.",
  },
  {
    number: "06",
    title: "Redesign the order flow",
    text: "Buttons, prices and actions became more visible, with clearer Details and + actions.",
  },
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
      id="accessibility-intro"
      ref="hero"
      class="section case-hero"
      aria-labelledby="accessibility-title"
    >
      <div class="case-hero__tags reveal">
        <span>Accessibility</span>
        <span>UX/UI</span>
        <span>WCAG AA</span>
        <span>Mobile redesign</span>
      </div>

      <div class="case-hero__layout">
        <div class="case-hero__copy">
          <p class="case-label reveal">User Centered Design</p>

          <h1 id="accessibility-title" class="reveal">Café Crèma</h1>

          <h2 class="case-hero__subtitle reveal">
            Designing accessibility into the experience
          </h2>

          <p class="case-hero__intro reveal">
            For this User Centered Design project, I redesigned the mobile
            website of Café Crèma with a focus on accessibility and WCAG
            guidelines.
          </p>

          <p class="case-hero__intro reveal">
            The goal was not only to make the website visually stronger, but
            also clearer, more consistent and easier to use for different types
            of users.
          </p>
        </div>

        <div class="case-meta">
          <div class="case-meta__item reveal">
            <span>Type</span>

            <p>School project</p>
          </div>

          <div class="case-meta__item reveal">
            <span>Focus</span>

            <p>WCAG AA, mobile accessibility, contrast, navigation</p>
          </div>

          <div class="case-meta__item reveal">
            <span>Tools</span>

            <p>Figma, WCAG guidelines, contrast plugin</p>
          </div>

          <div class="case-meta__item reveal">
            <span>Outcome</span>

            <p>Accessible mobile website redesign</p>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================
         HERO IMAGE
    ====================================== -->

    <section class="case-wide-visual">
      <img
        src="/images/accessibility/moodboard-01.jpg"
        alt="Café Crèma accessibility redesign"
      />
    </section>

    <!-- =====================================
         CHALLENGE
    ====================================== -->

    <section
      id="accessibility-challenge"
      ref="challenge"
      class="section case-text-section"
    >
      <div class="section-number reveal">01</div>

      <div class="case-text-grid">
        <h2 class="reveal">Challenge</h2>

        <div>
          <p class="case-large-copy reveal">
            The original website looked minimal and simple, but several details
            made the experience less clear and less accessible.
          </p>

          <p class="reveal">
            A reservation pop-up appeared repeatedly when navigating between
            pages, which interrupted the flow.
          </p>

          <p class="reveal">
            The website also lacked a clear footer, the menu felt visually
            disconnected and several original colours did not meet WCAG contrast
            requirements.
          </p>

          <p class="reveal">
            The challenge was to redesign the mobile experience while keeping
            the identity of Café Crèma.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         LEARN WCAG
    ====================================== -->

    <section
      id="accessibility-learn"
      ref="learn"
      class="section case-text-section"
    >
      <div class="section-number reveal">02</div>

      <div class="case-text-grid">
        <h2 class="reveal">Learn WCAG</h2>

        <div>
          <p class="case-large-copy reveal">
            Accessibility is much more than colour contrast.
          </p>

          <p class="reveal">
            Before redesigning, I first learned how WCAG guidelines can be
            applied to digital interfaces.
          </p>

          <p class="reveal">
            I looked at contrast, reading order, text resizing, form input
            purpose, consistent navigation, focus order and status messages.
          </p>
        </div>
      </div>

      <div class="wcag-grid">
        <article
          v-for="point in wcagPoints"
          :key="point"
          class="wcag-card reveal"
        >
          {{ point }}
        </article>
      </div>
    </section>

    <!-- =====================================
         AUDIT
    ====================================== -->

    <section id="accessibility-audit" ref="audit" class="section audit-section">
      <p class="case-label reveal">Existing experience</p>

      <h2 class="audit-title reveal">What needed improvement?</h2>

      <div class="audit-list">
        <article
          v-for="issue in auditIssues"
          :key="issue.number"
          class="audit-item reveal"
        >
          <span class="audit-item__number">
            {{ issue.number }}
          </span>

          <div>
            <h3>
              {{ issue.title }}
            </h3>

            <p>
              {{ issue.text }}
            </p>
          </div>
        </article>
      </div>
    </section>

    <!-- =====================================
         AUDIT STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-intro">
        <p class="stack-label">Accessibility audit</p>
      </div>

      <StickyImageStack
        :images="auditImages"
        alt-prefix="Café Crèma accessibility audit"
      />
    </section>

    <!-- =====================================
         DEFINE
    ====================================== -->

    <section
      id="accessibility-define"
      ref="define"
      class="section case-text-section"
    >
      <div class="section-number reveal">03</div>

      <div class="case-text-grid">
        <h2 class="reveal">Define</h2>

        <div>
          <p class="case-large-copy reveal">
            The redesign needed to feel clearer, more consistent and more useful
            without losing the café's identity.
          </p>

          <p class="reveal">
            Users needed to quickly find the menu, understand the content,
            contact the café and move through the website without unnecessary
            interruptions.
          </p>

          <div class="design-question reveal">
            <span> Design direction </span>

            <p>
              Create a warmer and more recognisable visual system, while
              improving accessibility, navigation and the menu and ordering
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================
         REDESIGN
    ====================================== -->

    <section
      id="accessibility-redesign"
      ref="redesign"
      class="section case-text-section"
    >
      <div class="section-number reveal">04</div>

      <div class="case-text-grid">
        <h2 class="reveal">Redesign</h2>

        <div>
          <p class="case-large-copy reveal">
            I improved the structure first, before moving into the final visual
            design.
          </p>

          <p class="reveal">
            I started with low-fi and mid-fi designs before creating the
            high-fidelity version.
          </p>

          <p class="reveal">
            The recurring reservation pop-up was removed and replaced with a
            clear call-to-action button.
          </p>

          <p class="reveal">
            I expanded the navigation and kept it consistent across pages.
          </p>

          <p class="reveal">
            I also added a more complete footer, contact form, accessible menu
            pages and an About us page.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         REDESIGN STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-intro">
        <p class="stack-label">Wireframes &amp; redesign</p>
      </div>

      <StickyImageStack
        :images="redesignImages"
        alt-prefix="Café Crèma wireframes and redesign"
      />
    </section>

    <!-- =====================================
         CHECK ACCESSIBILITY
    ====================================== -->

    <section
      id="accessibility-check"
      ref="accessibility"
      class="section case-text-section"
    >
      <div class="section-number reveal">05</div>

      <div class="case-text-grid">
        <h2 class="reveal">Check accessibility</h2>

        <div>
          <p class="case-large-copy reveal">
            After redesigning, I checked the interface against several WCAG
            criteria.
          </p>

          <p class="reveal">
            Meaningful images received descriptive alt text, while decorative
            images used empty alt attributes.
          </p>

          <p class="reveal">
            I tested the colour combinations using a Figma contrast plugin and
            introduced colours that meet WCAG AA.
          </p>

          <p class="reveal">
            I also tested text at 200% zoom, considered logical heading
            structure and reading order and used appropriate input types for
            form fields.
          </p>

          <p class="reveal">
            Consistent icons, focus order and status messages were also taken
            into account.
          </p>
        </div>
      </div>

      <div class="accessibility-highlight reveal">
        <span> 200% </span>

        <p>
          Text resizing was tested at 200% zoom to make sure content remained
          readable and usable.
        </p>
      </div>
    </section>

    <!-- =====================================
         ACCESSIBILITY STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-intro">
        <p class="stack-label">WCAG checks &amp; visual system</p>
      </div>

      <StickyImageStack
        :images="accessibilityImages"
        alt-prefix="Café Crèma WCAG accessibility checks"
      />
    </section>

    <!-- =====================================
         RESPONSIVE
    ====================================== -->

    <section
      id="accessibility-responsive"
      ref="responsive"
      class="section case-text-section"
    >
      <div class="section-number reveal">06</div>

      <div class="case-text-grid">
        <h2 class="reveal">Responsive design</h2>

        <div>
          <p class="case-large-copy reveal">
            Accessibility also means making sure the interface remains usable
            when the context changes.
          </p>

          <p class="reveal">
            Besides the regular mobile version, I designed a landscape layout
            for users who rotate their device or work on a tablet.
          </p>

          <p class="reveal">
            The content scales without disappearing, overlapping or becoming
            difficult to read.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         RESPONSIVE STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-intro">
        <p class="stack-label">Responsive layouts</p>
      </div>

      <StickyImageStack
        :images="responsiveImages"
        alt-prefix="Café Crèma responsive design"
      />
    </section>

    <!-- =====================================
         KEY DECISIONS
    ====================================== -->

    <section ref="decisions" class="section decisions-section">
      <p class="case-label reveal">Key decisions</p>

      <h2 class="reveal">Small changes can remove big barriers.</h2>

      <div class="decisions-list">
        <article
          v-for="decision in keyDecisions"
          :key="decision.number"
          class="decision reveal"
        >
          <span class="decision__number">
            {{ decision.number }}
          </span>

          <div>
            <h3>
              {{ decision.title }}
            </h3>

            <p>
              {{ decision.text }}
            </p>
          </div>
        </article>
      </div>
    </section>

    <!-- =====================================
         FINAL RESULT
    ====================================== -->

    <section
      id="accessibility-final"
      ref="finalResult"
      class="section final-section"
    >
      <p class="case-label reveal">Final result</p>

      <h2 class="reveal">
        A clearer, more consistent and more accessible Café Crèma experience.
      </h2>

      <div class="final-decisions">
        <span class="reveal"> WCAG AA contrast </span>

        <span class="reveal"> Clear navigation </span>

        <span class="reveal"> Accessible menu </span>

        <span class="reveal"> Improved order flow </span>

        <span class="reveal"> Responsive landscape </span>

        <span class="reveal"> Accessibility statement </span>
      </div>
    </section>

    <!-- =====================================
         FINAL STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-intro">
        <p class="stack-label">Final redesign</p>
      </div>

      <StickyImageStack
        :images="finalImages"
        alt-prefix="Café Crèma final accessible redesign"
      />
    </section>

    <!-- =====================================
         REFLECTION
    ====================================== -->

    <section
      id="accessibility-reflection"
      ref="reflection"
      class="section reflection-section"
    >
      <p class="case-label reveal">Reflection</p>

      <h2 class="reveal">Accessibility is not an extra.</h2>

      <div class="reflection-grid">
        <p class="reveal">
          This project taught me that accessibility is not something you add at
          the end.
        </p>

        <p class="reveal">
          It influences colours, typography, navigation, content structure,
          forms, feedback and responsiveness.
        </p>

        <p class="reveal">
          I also learned that a minimal interface is not automatically an
          accessible interface.
        </p>

        <p class="reveal">
          By applying WCAG criteria, I learned to make design decisions that are
          more inclusive and easier to use for everyone.
        </p>
      </div>

      <p class="reflection-statement reveal">
        Accessible design is better design for everyone.
      </p>
    </section>

    <!-- =====================================
         BACK TO PROJECTS
    ====================================== -->

    <section class="section next-project">
      <p>Back to</p>

      <RouterLink to="/projects">
        All projects

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
   COMMON GRID
========================================= */

.case-text-section {
  position: relative;
}

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

  max-width: 850px;

  font-size: clamp(68px, 9vw, 145px);

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

  height: min(82vh, 920px);

  margin: 0 auto 60px;

  overflow: hidden;

  border-radius: 32px;

  background: #e8eadf;
}

.case-wide-visual img {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
}

/* =========================================
   WCAG GRID
========================================= */

.wcag-grid {
  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 12px;

  margin-top: 80px;
}

.wcag-card {
  display: flex;

  align-items: flex-end;

  min-height: 145px;

  padding: 20px;

  border-radius: 20px;

  background: rgba(211, 217, 189, 0.45);

  font-size: 14px;
}

/* =========================================
   AUDIT
========================================= */

.audit-title {
  max-width: 900px;

  margin: 25px 0 80px;

  font-size: clamp(48px, 7vw, 100px);

  line-height: 0.92;

  letter-spacing: -0.065em;

  text-transform: uppercase;
}

.audit-list {
  border-top: 1px solid rgba(17, 17, 17, 0.16);
}

.audit-item {
  display: grid;

  grid-template-columns:
    100px
    1fr;

  gap: 40px;

  padding: 38px 0;

  border-bottom: 1px solid rgba(17, 17, 17, 0.16);
}

.audit-item__number {
  font-size: 12px;

  opacity: 0.4;
}

.audit-item h3 {
  margin-bottom: 14px;

  max-width: 500px;

  font-size: clamp(20px, 2vw, 28px);

  line-height: 1.2;
}

.audit-item p {
  max-width: 600px;

  font-size: 14px;

  line-height: 1.55;
}

/* =========================================
   DESIGN QUESTION
========================================= */

.design-question {
  margin-top: 55px;

  padding: 30px;

  border-radius: 24px;

  background: var(--color-sage);
}

.design-question span {
  display: block;

  margin-bottom: 18px;

  font-size: 11px;

  text-transform: uppercase;

  letter-spacing: 0.1em;

  opacity: 0.6;
}

.design-question p {
  font-size: clamp(20px, 2vw, 28px);

  line-height: 1.4;
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
   ACCESSIBILITY HIGHLIGHT
========================================= */

.accessibility-highlight {
  display: grid;

  grid-template-columns:
    0.55fr
    1.45fr;

  gap: 50px;

  align-items: end;

  margin-top: 90px;

  padding: 36px;

  border-radius: 28px;

  background: var(--color-sage);
}

.accessibility-highlight span {
  font-size: clamp(70px, 10vw, 150px);

  line-height: 0.8;

  letter-spacing: -0.08em;
}

.accessibility-highlight p {
  max-width: 450px;

  font-size: clamp(18px, 2vw, 27px);

  line-height: 1.4;
}

/* =========================================
   KEY DECISIONS
========================================= */

.decisions-section > h2 {
  max-width: 950px;

  margin: 24px 0 80px;

  font-size: clamp(46px, 7vw, 96px);

  line-height: 0.92;

  letter-spacing: -0.065em;

  text-transform: uppercase;
}

.decisions-list {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 14px;
}

.decision {
  display: flex;

  flex-direction: column;

  justify-content: space-between;

  min-height: 310px;

  padding: 28px;

  border-radius: 24px;

  background: #efefeb;
}

.decision__number {
  font-size: 40px;

  opacity: 0.13;
}

.decision h3 {
  max-width: 420px;

  margin-bottom: 15px;

  font-size: clamp(19px, 2vw, 27px);
}

.decision p {
  max-width: 500px;

  font-size: 14px;

  line-height: 1.55;
}

/* =========================================
   FINAL
========================================= */

.final-section {
  padding-top: 170px;

  padding-bottom: 170px;
}

.final-section h2 {
  max-width: 1050px;

  margin-top: 26px;

  font-size: clamp(44px, 6vw, 88px);

  line-height: 0.96;

  letter-spacing: -0.06em;
}

.final-decisions {
  display: flex;

  flex-wrap: wrap;

  gap: 10px;

  margin-top: 70px;
}

.final-decisions span {
  padding: 13px 18px;

  border-radius: 999px;

  background: var(--color-sage);

  font-size: 13px;
}

/* =========================================
   REFLECTION
========================================= */

.reflection-section {
  padding-top: 160px;

  padding-bottom: 150px;

  border-radius: 40px 40px 0 0;

  background: var(--color-sage);
}

.reflection-section h2 {
  max-width: 950px;

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

.reflection-statement {
  max-width: 1100px;

  margin-top: 120px;

  font-size: clamp(42px, 7vw, 100px);

  line-height: 0.94;

  letter-spacing: -0.065em;
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

  .wcag-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .audit-item {
    grid-template-columns:
      70px
      1fr;
  }

  .decisions-list {
    grid-template-columns: 1fr;
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

  .wcag-grid,
  .reflection-grid {
    grid-template-columns: 1fr;
  }

  .audit-item {
    grid-template-columns: 1fr;

    gap: 15px;
  }

  .accessibility-highlight {
    grid-template-columns: 1fr;

    gap: 35px;
  }

  .final-section,
  .reflection-section {
    padding-top: 110px;

    padding-bottom: 110px;
  }

  .reflection-statement {
    margin-top: 80px;
  }
}
</style>
