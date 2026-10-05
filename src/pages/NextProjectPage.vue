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
const processIntro = ref(null);
const understand = ref(null);
const define = ref(null);
const ideate = ref(null);
const iteration = ref(null);
const build = ref(null);
const testing = ref(null);
const findings = ref(null);
const finalResult = ref(null);
const role = ref(null);
const team = ref(null);
const reflection = ref(null);

/* =========================================
   TEAM
========================================= */

const teammates = [
  {
    name: "Teammate 01",
    url: "https://portfolio-link-1.com",
  },
  {
    name: "Teammate 02",
    url: "https://portfolio-link-2.com",
  },
  {
    name: "Teammate 03",
    url: "https://portfolio-link-3.com",
  },
];

/* =========================================
   PROGRESS STEPS
========================================= */

const progressSteps = [
  {
    id: "next-intro",
    label: "Overview",
  },
  {
    id: "next-challenge",
    label: "Challenge",
  },
  {
    id: "next-understand",
    label: "Understand",
  },
  {
    id: "next-define",
    label: "Define",
  },
  {
    id: "next-ideate",
    label: "Ideate",
  },
  {
    id: "next-iteration",
    label: "Iteration",
  },
  {
    id: "next-build",
    label: "Build",
  },
  {
    id: "next-testing",
    label: "Testing",
  },
  {
    id: "next-final",
    label: "Final result",
  },
  {
    id: "next-reflection",
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

useScrollReveal(processIntro, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(understand, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(define, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(ideate, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(iteration, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(build, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(testing, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(findings, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(finalResult, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(role, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(team, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(reflection, ".reveal", {
  stagger: 0.07,
});

/* =========================================
   IMAGE STACKS
========================================= */

const understandImages = [
  "/images/next/moodboard_next_webdesign.webp",
  "/images/next/values_next_webdesign.webp",
  "/images/next/audience_next_webdesign.webp",
];

const ideateImages = [
  "/images/next/new_moodboard_next_webdesign.webp",
  "/images/next/colours_next_webdesign.webp",
  "/images/next/typography_next_webdesign.webp",
  "/images/next/logos_next_webdesign.webp",
  "/images/next/logo_v1_branding.webp",
  "/images/next/logo_v2_branding.webp",
  "/images/next/logo_v3_branding.webp",
  "/images/next/logo_v4_branding.webp",
  "/images/next/new_next_branding.webp",
];

const iterationImages = [
  "/images/next/wireframe_v1_webdesign.webp",
  "/images/next/wireframe_v2_webdesign.webp",
  "/images/next/wireframe_v3_webdesign.webp",
  "/images/next/wireframe_v4_webdesign.webp",
  "/images/next/wireframe_v5_webdesign.webp",
  "/images/next/wireframe_v6_webdesign.webp",
  "/images/next/wireframe_v7_webdesign.webp",
  "/images/next/wireframe_v8_webdesign.webp",
];

const buildImages = [
  "/images/next/moodboard-10.jpg",
  "/images/next/moodboard-11.jpg",
  "/images/next/moodboard-12.jpg",
];

const testingImages = [
  "/images/next/moodboard-13.jpg",
  "/images/next/moodboard-14.jpg",
  "/images/next/moodboard-15.jpg",
];

const finalImages = [
  "/images/next/moodboard-16.jpg",
  "/images/next/moodboard-17.jpg",
  "/images/next/moodboard-18.jpg",
];

/* =========================================
   USER TESTING
========================================= */

const testingTasks = [
  {
    number: "01",
    title: "Understand NEXT",
    question: "Can users explain what NEXT does?",
  },
  {
    number: "02",
    title: "Donate clothes",
    question: "Can users find where and how to donate?",
  },
  {
    number: "03",
    title: "Meet the team",
    question: "Can users find enough information about the team?",
  },
  {
    number: "04",
    title: "Register",
    question: "Can users find how to sign up?",
  },
  {
    number: "05",
    title: "General impression",
    question: "What audience and feeling does the website communicate?",
  },
];

const findingsData = [
  {
    number: "01",
    title: "Registration was clear",
    finding:
      "Users quickly found the Schrijf je in button and understood how to register.",
    change:
      "We kept the registration action visible and prominent in the navigation.",
  },
  {
    number: "02",
    title: "Donation information was hard to find",
    finding:
      "Some users expected donation information on the homepage, near activities or in a more visible call to action.",
    change:
      "We made donation information more visible and considered clearer entry points towards the contact page.",
  },
  {
    number: "03",
    title: "NEXT's core message came too late",
    finding:
      "Some users only understood what NEXT does after visiting multiple pages or reading further down the homepage.",
    change:
      "We moved the core message higher and simplified the explanation of NEXT's role.",
  },
  {
    number: "04",
    title: "The team section created trust, but needed more clarity",
    finding:
      "Users liked seeing the people behind NEXT, but names, roles and placement needed to be clearer.",
    change:
      "We improved the team section by making names, functions and role descriptions more visible.",
  },
];
</script>

<template>
  <main class="case-page">
    <!-- PROGRESS -->

    <CaseProgress :steps="progressSteps" />

    <!-- BACK TO TOP -->

    <BackToTop />

    <!-- =====================================
         HERO
    ====================================== -->

    <section
      id="next-intro"
      ref="hero"
      class="section case-hero"
      aria-labelledby="next-title"
    >
      <div class="case-hero__tags reveal">
        <span>Branding</span>
        <span>UX/UI design</span>
        <span>Front-end development</span>
        <span>CMS</span>
      </div>

      <div class="case-hero__layout">
        <div class="case-hero__copy">
          <p class="case-label reveal">Client project</p>

          <h1 id="next-title" class="reveal">NEXT</h1>

          <h2 class="case-hero__subtitle reveal">
            A safe pause space for young people
          </h2>

          <p class="case-hero__intro reveal">
            NEXT is a safe pause space for young people who temporarily cannot
            attend school or are at risk of dropping out. This branding and
            website case study shows how we translated that mission into a clear
            and trustworthy digital experience.
          </p>

          <p class="case-hero__intro reveal">
            For this real client project, we combined branding, UX/UI design,
            front-end development and user testing to create a responsive
            website that the client can update through Bludit CMS.
          </p>
        </div>

        <div class="case-meta">
          <div class="case-meta__item reveal">
            <span>Type</span>
            <p>Client project</p>
          </div>

          <div class="case-meta__item reveal">
            <span>Team</span>
            <p>4 students</p>
          </div>

          <div class="case-meta__item reveal">
            <span>Role</span>
            <p>Team lead, UI design, frontend</p>
          </div>

          <div class="case-meta__item reveal">
            <span>Tools</span>
            <p>Figma, HTML, CSS, JavaScript, Bludit CMS</p>
          </div>

          <div class="case-meta__item reveal">
            <span>Outcome</span>
            <p>Selected by the client</p>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================
         HERO IMAGE
    ====================================== -->

    <section class="case-wide-visual">
      <img
        src="/images/next/live_website_webdesign.webp"
        alt="NEXT branding and responsive website project"
      />
    </section>

    <!-- =====================================
         CHALLENGE
    ====================================== -->

    <section
      id="next-challenge"
      ref="challenge"
      class="section case-text-section"
    >
      <div class="section-number reveal">01</div>

      <div class="case-text-grid">
        <h2 class="reveal">Challenge</h2>

        <div>
          <p class="case-large-copy reveal">
            The client needed a responsive website and visual identity that
            explained NEXT clearly without making the organisation feel like
            another formal institution.
          </p>

          <p class="reveal">
            The website also needed a CMS, so the client could manage and update
            the content independently.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         PROCESS INTRO
    ====================================== -->

    <section ref="processIntro" class="section process-heading">
      <p class="case-label reveal">My design process</p>

      <h2 class="reveal">Research. Question. Design. Test. Repeat.</h2>
    </section>

    <!-- =====================================
         UNDERSTAND
    ====================================== -->

    <section
      id="next-understand"
      ref="understand"
      class="section case-text-section"
    >
      <div class="section-number reveal">02</div>

      <div class="case-text-grid">
        <h2 class="reveal">Understand</h2>

        <div>
          <p class="case-large-copy reveal">
            We explored what NEXT stands for: a place where young people can
            pause, grow and find direction again.
          </p>

          <p class="reveal">
            We started by reviewing the client's video and PDF to understand the
            organisation, its mission and the people it supports.
          </p>

          <p class="reveal">
            From there, we created a moodboard, analysed the How / What / Why,
            selected three core values and defined the main audiences.
          </p>

          <p class="reveal">
            We presented this first research direction to the client and
            collected feedback before moving into the concept phase.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         UNDERSTAND STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-intro">
        <p class="stack-label">Research &amp; visual direction</p>
      </div>

      <StickyImageStack
        :images="understandImages"
        alt-prefix="NEXT research and moodboard"
      />
    </section>

    <!-- =====================================
         DEFINE
    ====================================== -->

    <section id="next-define" ref="define" class="section case-text-section">
      <div class="section-number reveal">03</div>

      <div class="case-text-grid">
        <h2 class="reveal">Define</h2>

        <div>
          <p class="case-large-copy reveal">
            NEXT needed to feel safe, neutral and trustworthy for young people,
            schools and CLB without becoming childish, distant or too formal.
          </p>

          <div class="design-question reveal">
            <span> The design question </span>

            <p>
              How can we position NEXT as a safe and neutral growth space for
              young people who feel stuck, while building trust with schools and
              CLB and communicating connection, calmness and personal growth in
              a clear visual identity?
            </p>
          </div>
        </div>
      </div>

      <div class="goals-grid">
        <article class="goal-card reveal">
          <span>01</span>
          <p>Young, but not childish</p>
        </article>

        <article class="goal-card reveal">
          <span>02</span>
          <p>Professional, but not distant</p>
        </article>

        <article class="goal-card reveal">
          <span>03</span>
          <p>Playful, but calm</p>
        </article>

        <article class="goal-card reveal">
          <span>04</span>
          <p>Safe, but not heavy</p>
        </article>

        <article class="goal-card reveal">
          <span>05</span>
          <p>Warm, within a limited budget</p>
        </article>
      </div>
    </section>

    <!-- =====================================
         IDEATE
    ====================================== -->

    <section id="next-ideate" ref="ideate" class="section case-text-section">
      <div class="section-number reveal">04</div>

      <div class="case-text-grid">
        <h2 class="reveal">Ideate</h2>

        <div>
          <p class="case-large-copy reveal">
            We explored the information architecture, navigation, page content,
            UX/UI direction, logo concepts, colours, typography and brand
            guidelines.
          </p>

          <p class="reveal">
            Based on the research, we explored the information architecture,
            navigation and page structure.
          </p>

          <p class="reveal">
            We divided the pages within the team and started exploring logo
            directions, typography, colours and early brand sheets.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         IDEATE STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-intro">
        <p class="stack-label">Logo &amp; identity exploration</p>
      </div>

      <StickyImageStack
        :images="ideateImages"
        alt-prefix="NEXT identity exploration"
      />
    </section>

    <!-- =====================================
         ITERATION
    ====================================== -->

    <section
      id="next-iteration"
      ref="iteration"
      class="section case-text-section"
    >
      <div class="section-number reveal">05</div>

      <div class="case-text-grid">
        <h2 class="reveal">Design, feedback, redesign</h2>

        <div>
          <p class="case-large-copy reveal">
            Our first direction felt too elegant, soft and gentle.
          </p>

          <p class="reveal">
            The client wanted more power, playfulness and energy. This feedback
            forced us to let go of our first direction and restart the visual
            identity from zero.
          </p>

          <p class="reveal">
            We created multiple visual directions and website versions. After
            client feedback, we restarted the identity and simplified the
            website structure.
          </p>

          <p class="reveal">
            In a later online meeting, the client felt that the low fidelity
            website contained too much information and too many details.
          </p>

          <p class="reveal">
            In total, we created five design versions before arriving at the
            final direction.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         ITERATION STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-intro">
        <p class="stack-label">Wireframes &amp; iterations</p>
      </div>

      <StickyImageStack
        :images="iterationImages"
        alt-prefix="NEXT wireframes and design iterations"
      />
    </section>

    <!-- =====================================
         BUILD
    ====================================== -->

    <section id="next-build" ref="build" class="section case-text-section">
      <div class="section-number reveal">06</div>

      <div class="case-text-grid">
        <h2 class="reveal">Build</h2>

        <div>
          <p class="case-large-copy reveal">
            Once the UX/UI and visual direction were approved, we moved into
            front-end development and built the responsive website using Bludit
            CMS.
          </p>

          <p class="reveal">
            This allowed the client to update the content herself after
            delivery.
          </p>
        </div>
      </div>

      <div class="build-points">
        <div class="build-point reveal">Responsive website</div>

        <div class="build-point reveal">Bludit CMS</div>

        <div class="build-point reveal">Editable content</div>

        <div class="build-point reveal">Homepage</div>

        <div class="build-point reveal">Application page</div>

        <div class="build-point reveal">Contact page</div>
      </div>
    </section>

    <!-- =====================================
         BUILD STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-intro">
        <p class="stack-label">Pages I designed and built</p>
      </div>

      <StickyImageStack
        :images="buildImages"
        alt-prefix="NEXT final website pages"
      />
    </section>

    <!-- =====================================
         USER TESTING
    ====================================== -->

    <section id="next-testing" ref="testing" class="section case-text-section">
      <div class="section-number reveal">07</div>

      <div class="case-text-grid">
        <h2 class="reveal">User testing</h2>

        <div>
          <p class="case-large-copy reveal">
            We tested the responsive website with real users and used their
            feedback to improve usability, content clarity, navigation and the
            overall user experience.
          </p>

          <p class="reveal">
            We tested the website with five people through four practical tasks
            and one general feedback question.
          </p>
        </div>
      </div>

      <div class="testing-grid">
        <article
          v-for="task in testingTasks"
          :key="task.number"
          class="testing-card reveal"
        >
          <span class="testing-card__number">
            {{ task.number }}
          </span>

          <h3>
            {{ task.title }}
          </h3>

          <p>
            {{ task.question }}
          </p>
        </article>
      </div>
    </section>

    <!-- =====================================
         TESTING STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-intro">
        <p class="stack-label">Testing &amp; improvements</p>
      </div>

      <StickyImageStack
        :images="testingImages"
        alt-prefix="NEXT user testing"
      />
    </section>

    <!-- =====================================
         KEY FINDINGS
    ====================================== -->

    <section ref="findings" class="section findings-section">
      <p class="case-label reveal">Key findings</p>

      <h2 class="reveal">What changed after testing</h2>

      <div class="findings-list">
        <article
          v-for="finding in findingsData"
          :key="finding.number"
          class="finding reveal"
        >
          <span class="finding__number">
            {{ finding.number }}
          </span>

          <div class="finding__content">
            <h3>
              {{ finding.title }}
            </h3>

            <div class="finding__columns">
              <div>
                <span class="finding__label"> Finding </span>

                <p>
                  {{ finding.finding }}
                </p>
              </div>

              <div>
                <span class="finding__label"> Change </span>

                <p>
                  {{ finding.change }}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- =====================================
         FINAL RESULT
    ====================================== -->

    <section id="next-final" ref="finalResult" class="section final-section">
      <p class="case-label reveal">Redesign &amp; final result</p>

      <h2 class="reveal">
        The branding needed to do what NEXT does: create space, build trust and
        help young people feel that they can begin again.
      </h2>

      <div class="final-decisions">
        <span class="reveal"> Calm visual identity </span>

        <span class="reveal"> Clear content structure </span>

        <span class="reveal"> Responsive website </span>

        <span class="reveal"> Bludit CMS </span>
      </div>
    </section>

    <!-- =====================================
         FINAL STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-intro">
        <p class="stack-label">Final design</p>
      </div>

      <StickyImageStack :images="finalImages" alt-prefix="NEXT final design" />
    </section>

    <!-- =====================================
         MY ROLE
    ====================================== -->

    <section ref="role" class="section role-section">
      <div class="case-text-grid">
        <h2 class="reveal">My role</h2>

        <div>
          <p class="case-large-copy reveal">
            This was a group project with four students.
          </p>

          <p class="reveal">
            Within the team, I took on a guiding role by keeping energy,
            direction and confidence in the process, especially when we had to
            restart after difficult feedback.
          </p>

          <p class="reveal">
            I contributed throughout the project, but my main responsibilities
            were UX/UI design and front-end development for the homepage,
            application page and contact page.
          </p>

          <p class="reveal">
            I also helped with the visual direction, feedback processing and
            final website implementation in Bludit.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         TEAM
    ====================================== -->

    <section
      ref="team"
      class="section team-section"
      aria-labelledby="team-title"
    >
      <p class="case-label reveal">The team</p>

      <h2 id="team-title" class="reveal">Built together.</h2>

      <p class="team-intro reveal">
        NEXT was created by a team of four students. We worked together across
        research, branding, UX/UI, development and client feedback, combining
        different strengths throughout the project.
      </p>

      <div class="team-grid">
        <div
          v-for="member in teammates"
          :key="member.name"
          class="team-card-wrap reveal"
        >
          <TiltSurface class="team-card" :strength="4" :scale="1.012">
            <a
              :href="member.url"
              target="_blank"
              rel="noopener noreferrer"
              class="team-card__link"
              :aria-label="`Visit ${member.name}'s portfolio`"
            >
              <span class="team-card__arrow" aria-hidden="true"> ↗ </span>

              <div class="team-card__content">
                <p>Team member</p>

                <h3>
                  {{ member.name }}
                </h3>

                <span> View portfolio </span>
              </div>
            </a>
          </TiltSurface>
        </div>
      </div>
    </section>

    <!-- =====================================
         REFLECTION
    ====================================== -->

    <section
      id="next-reflection"
      ref="reflection"
      class="section reflection-section"
    >
      <p class="case-label reveal">Reflection</p>

      <h2 class="reveal">Listen. Simplify. Let go. Build again.</h2>

      <div class="reflection-grid">
        <p class="reveal">
          The final concept was selected by the client. I learned how important
          it is to listen, simplify and let go of ideas that do not serve the
          project.
        </p>

        <p class="reveal">
          NEXT taught me that design is not only about creating a beautiful
          direction, but also about listening, letting go and rebuilding when
          something does not fit the client's needs.
        </p>

        <p class="reveal">
          I learned that a strong identity does not always come from the first
          idea. Sometimes the best design appears after difficult feedback,
          simplification and many iterations.
        </p>

        <p class="reveal">
          This project also showed me that I enjoy client work: translating a
          real mission into a visual and digital experience that people can
          actually use.
        </p>
      </div>
    </section>

    <!-- =====================================
         NEXT PROJECT
    ====================================== -->

    <section class="section next-project">
      <p>Next project</p>

      <RouterLink to="/projects/lumiere">
        Cinema Lumière

        <span> ↗ </span>
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
   COMMON
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

  font-size: clamp(74px, 11vw, 160px);

  line-height: 0.82;

  letter-spacing: -0.075em;
}

.case-hero__subtitle {
  max-width: 650px;

  margin-bottom: 40px;

  font-size: clamp(32px, 4vw, 60px);

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
  display: grid;

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

  aspect-ratio: 16 / 10;

  margin: 0 auto 60px;

  overflow: hidden;

  border-radius: 32px;

  background: #f1f1ef;
}

.case-wide-visual img {
  display: block;

  width: 100%;
  height: auto;

  max-height: min(72vh, 1000px);

  object-fit: contain;
}

.image-stack__item {
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
}

/* =========================================
   PROCESS
========================================= */

.process-heading {
  padding-top: 170px;

  padding-bottom: 170px;
}

.process-heading h2 {
  max-width: 1000px;

  margin-top: 24px;

  font-size: clamp(54px, 8vw, 118px);

  line-height: 0.9;

  letter-spacing: -0.07em;

  text-transform: uppercase;
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
   GOALS
========================================= */

.goals-grid {
  display: grid;

  grid-template-columns: repeat(5, minmax(0, 1fr));

  gap: 12px;

  margin-top: 80px;
}

.goal-card {
  min-height: 180px;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  padding: 20px;

  border-radius: 20px;

  background: rgba(211, 217, 189, 0.45);
}

.goal-card span {
  font-size: 11px;

  opacity: 0.45;
}

.goal-card p {
  font-size: 15px;

  line-height: 1.35;
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
   BUILD
========================================= */

.build-points {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 12px;

  margin-top: 80px;
}

.build-point {
  padding: 28px;

  border-radius: 20px;

  background: rgba(211, 217, 189, 0.42);

  font-size: 15px;
}

/* =========================================
   TESTING
========================================= */

.testing-grid {
  display: grid;

  grid-template-columns: repeat(5, minmax(0, 1fr));

  gap: 12px;

  margin-top: 90px;
}

.testing-card {
  min-height: 250px;

  display: flex;

  flex-direction: column;

  padding: 22px;

  border-radius: 22px;

  background: #efefeb;
}

.testing-card__number {
  margin-bottom: auto;

  font-size: 42px;

  line-height: 1;

  opacity: 0.15;
}

.testing-card h3 {
  margin: 55px 0 12px;

  font-size: 15px;

  text-transform: uppercase;
}

.testing-card p {
  font-size: 13px;

  line-height: 1.5;
}

/* =========================================
   FINDINGS
========================================= */

.findings-section > h2 {
  max-width: 850px;

  margin: 22px 0 80px;

  font-size: clamp(42px, 6vw, 86px);

  line-height: 0.94;

  letter-spacing: -0.06em;

  text-transform: uppercase;
}

.findings-list {
  border-top: 1px solid rgba(17, 17, 17, 0.16);
}

.finding {
  display: grid;

  grid-template-columns:
    120px
    1fr;

  gap: 40px;

  padding: 48px 0;

  border-bottom: 1px solid rgba(17, 17, 17, 0.16);
}

.finding__number {
  font-size: clamp(38px, 4vw, 64px);

  opacity: 0.14;
}

.finding__content h3 {
  margin-bottom: 35px;

  max-width: 650px;

  font-size: clamp(21px, 2vw, 28px);

  line-height: 1.25;
}

.finding__columns {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 70px;
}

.finding__label {
  display: block;

  margin-bottom: 10px;

  font-size: 10px;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  opacity: 0.5;
}

.finding__columns p {
  max-width: 430px;

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
   ROLE
========================================= */

.role-section {
  padding-top: 170px;

  padding-bottom: 170px;
}

/* =========================================
   TEAM
========================================= */

.team-section {
  padding-top: 40px;

  padding-bottom: 170px;
}

.team-section > h2 {
  max-width: 760px;

  margin-top: 22px;

  font-size: clamp(42px, 6vw, 82px);

  line-height: 0.95;

  letter-spacing: -0.06em;

  text-transform: uppercase;
}

.team-intro {
  max-width: 700px;

  margin-top: 28px;

  font-size: 15px;

  line-height: 1.65;

  opacity: 0.78;
}

.team-grid {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 18px;

  margin-top: 55px;
}

.team-card-wrap {
  min-width: 0;

  height: 100%;
}

.team-card {
  position: relative;

  min-height: 240px;

  height: 100%;

  overflow: hidden;

  border: 1px solid rgba(17, 17, 17, 0.055);

  border-radius: 28px;

  background: rgba(211, 217, 189, 0.28);
}

.team-card__link {
  position: relative;

  display: flex;

  min-height: 240px;

  height: 100%;

  padding: 26px;

  color: inherit;

  text-decoration: none;
}

.team-card__arrow {
  position: absolute;

  top: 24px;

  right: 26px;

  font-size: 20px;
}

.team-card__content {
  display: flex;

  flex-direction: column;

  justify-content: flex-end;

  gap: 10px;

  width: 100%;
}

.team-card__content > p {
  font-size: 11px;

  letter-spacing: 0.08em;

  text-transform: uppercase;

  opacity: 0.5;
}

.team-card__content h3 {
  font-size: 22px;

  line-height: 1.15;
}

.team-card__content > span {
  font-size: 13px;

  opacity: 0.65;
}

/* =========================================
   REFLECTION
========================================= */

.reflection-section {
  padding-top: 160px;

  padding-bottom: 170px;

  border-radius: 40px 40px 0 0;

  background: var(--color-sage);
}

.reflection-section h2 {
  max-width: 900px;

  margin: 25px 0 80px;

  font-size: clamp(52px, 7vw, 105px);

  line-height: 0.9;

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

  .goals-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .testing-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .build-points {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .team-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
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

    height: 65vh;

    border-radius: 22px;
  }

  .process-heading,
  .final-section,
  .role-section,
  .team-section,
  .reflection-section {
    padding-top: 110px;

    padding-bottom: 110px;
  }

  .goals-grid,
  .testing-grid,
  .build-points,
  .team-grid,
  .reflection-grid,
  .finding__columns {
    grid-template-columns: 1fr;
  }

  .finding {
    grid-template-columns: 1fr;

    gap: 20px;
  }

  .goal-card {
    min-height: 130px;
  }

  .testing-card {
    min-height: 210px;
  }
}
</style>
