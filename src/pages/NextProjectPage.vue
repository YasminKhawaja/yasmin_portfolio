<script setup>
import { ref } from "vue";

import { useScrollReveal } from "../composables/useScrollReveal.js";

import StickyImageStack from "../components/case/StickyImageStack.vue";
import CaseImageGallery from "../components/case/CaseImageGallery.vue";
import CaseProgress from "../components/case/CaseProgress.vue";
import BackToTop from "../components/case/BackToTop.vue";
import TiltSurface from "../components/ui/TiltSurface.vue";
import IconArrowUpRight from "../components/ui/IconArrowUpRight.vue";

/* =========================================
   SECTION REFS
========================================= */

const hero = ref(null);
const overview = ref(null);
const challenge = ref(null);
const research = ref(null);
const architecture = ref(null);
const identity = ref(null);
const iteration = ref(null);
const highFidelity = ref(null);
const build = ref(null);
const testing = ref(null);
const finalResult = ref(null);
const status = ref(null);
const role = ref(null);
const team = ref(null);
const reflection = ref(null);

/* =========================================
   PROGRESS
========================================= */

const progressSteps = [
  {
    id: "next-v2-intro",
    label: "Overview",
  },
  {
    id: "next-v2-challenge",
    label: "Challenge",
  },
  {
    id: "next-v2-research",
    label: "Research",
  },
  {
    id: "next-v2-architecture",
    label: "Structure",
  },
  {
    id: "next-v2-identity",
    label: "Identity",
  },
  {
    id: "next-v2-iteration",
    label: "Iterations",
  },
  {
    id: "next-v2-high-fidelity",
    label: "UI design",
  },
  {
    id: "next-v2-build",
    label: "Build",
  },
  {
    id: "next-v2-testing",
    label: "Testing",
  },
  {
    id: "next-v2-final",
    label: "Final result",
  },
  {
    id: "next-v2-role",
    label: "My role",
  },
  {
    id: "next-v2-reflection",
    label: "Reflection",
  },
];

/* =========================================
   SCROLL REVEALS
========================================= */

[
  hero,
  overview,
  challenge,
  research,
  architecture,
  identity,
  iteration,
  highFidelity,
  build,
  testing,
  finalResult,
  status,
  role,
  team,
  reflection,
].forEach((section) => {
  useScrollReveal(section, ".reveal", {
    stagger: 0.07,
  });
});

/* =========================================
   TEAM
========================================= */

const teammates = [
  {
    name: "Lorelien Michiels",
    url: "https://www.lorelienmichiels.be/",
  },
  {
    name: "Sarah El Marzouki",
    url: "https://sarah-el-marzouki-portfolio.vercel.app/",
  },
  {
    name: "Salma Napaga",
    url: "https://salmanapaga.be/",
  },
];

/* =========================================
   TIMELINE
========================================= */

const timeline = [
  {
    month: "February",
    title: "Discover NEXT",
    text: "Client information, project introduction and first exploration of the organisation.",
  },
  {
    month: "March",
    title: "Research",
    text: "Mission, target audiences, values, moodboards and visual positioning.",
  },
  {
    month: "March",
    title: "First branding",
    text: "Early identity directions, typography, colour and logo exploration.",
  },
  {
    month: "April",
    title: "Wireframes",
    text: "Information architecture, page structure and low-fidelity website iterations.",
  },
  {
    month: "April",
    title: "New identity",
    text: "A stronger branding and logo direction after client feedback.",
  },
  {
    month: "May",
    title: "High-fidelity",
    text: "Detailed responsive interface design and visual refinement.",
  },
  {
    month: "May",
    title: "Implementation",
    text: "Front-end development and implementation in Bludit CMS.",
  },
  {
    month: "June",
    title: "Final result",
    text: "User testing, final improvements and client presentation.",
  },
];

/* =========================================
   RESEARCH STACK
========================================= */

const researchImages = [
  "/images/next/research_next_1.webp",
  "/images/next/research_next_2.webp",
  "/images/next/research_next_3.webp",
];

const researchImagesStreamingSisters = [
  "/images/next/next_moodboard_webdesign_1.webp",
  "/images/next/next_why_webdesign_2.webp",
  "/images/next/next_values_webdesign_3.webp",
  "/images/next/next_audience_webdesign_4.webp",
  "/images/next/next_richting_webdesign_5.webp",
];

/* =========================================
   IDENTITY STACK
========================================= */

const identityImages = [
  "/images/next/next_new_moodboard_next_webdesign.webp",
  "/images/next/next_colours_webdesign.webp",
  "/images/next/next_typography_webdesign.webp",
  "/images/next/next_logos_webdesign.webp",
];

/* =========================================
   BRANDING / LOGO GALLERY
========================================= */

const brandingGallery = [
  {
    src: "/images/next/logo_v1_branding.webp",
    alt: "Early NEXT logo exploration",
    label: "Logo exploration 01",
    caption:
      "One of the early logo directions explored during the branding process.",
  },
  {
    src: "/images/next/logo_v2_branding.webp",
    alt: "Second NEXT logo exploration",
    label: "Logo exploration 02",
    caption:
      "We experimented with typography, composition and different levels of visual energy.",
  },
  {
    src: "/images/next/logo_v3_branding.webp",
    alt: "Third NEXT logo exploration",
    label: "Logo exploration 03",
    caption:
      "Several directions were compared and discussed during feedback rounds with the client.",
  },
  {
    src: "/images/next/logo_v4_branding.webp",
    alt: "Fourth NEXT logo exploration",
    label: "Logo exploration 04",
    caption:
      "The logo evolved together with the colour palette, typography and overall identity.",
  },
  {
    src: "/images/next/new_next_branding.webp",
    alt: "Selected NEXT visual identity and logo",
    label: "Selected identity",
    caption:
      "The final identity direction and logo approved during the client project.",
    wide: true,
  },
];

/* =========================================
   ITERATION STACK
========================================= */

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

/* =========================================
   BUILD GALLERY

   Replace these later with sharp WebP
   exports directly from Figma.
========================================= */

const buildGallery = [
  {
    src: "/images/next/final_wireframes_webdesign.webp",
    alt: "NEXT responsive website implementation",
    label: "Responsive website",
    caption:
      "The approved UX/UI direction was translated into a responsive website and implemented with Bludit CMS.",
    wide: true,
  },
  {
    src: "/images/next/next_live.webp",
    alt: "NEXT website interface",
    label: "Front-end development",
    caption:
      "The visual identity was translated from Figma into a working interface using HTML, CSS and JavaScript.",
  },
  {
    src: "/images/next/next_bludit_cms.webp",
    alt: "NEXT website page",
    label: "Bludit CMS",
    caption:
      "The CMS allowed the client to edit and maintain website content independently.",
  },
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

const findings = [
  {
    number: "01",
    title: "Registration was clear",
    finding:
      "Users quickly found the registration action and understood how to sign up.",
    change:
      "We kept the registration action visible and prominent in the navigation.",
  },
  {
    number: "02",
    title: "Donation information was harder to find",
    finding: "Some users expected donation information earlier on the website.",
    change:
      "We made the information more visible and explored clearer entry points.",
  },
  {
    number: "03",
    title: "The core message came too late",
    finding:
      "Some users only fully understood NEXT after navigating through several sections.",
    change: "We moved the core explanation higher and simplified the message.",
  },
  {
    number: "04",
    title: "The team created trust",
    finding:
      "Users liked seeing the people behind NEXT, but names and roles needed more clarity.",
    change: "Names, functions and descriptions became more visible.",
  },
];

/* =========================================
   FINAL GALLERY

   Replace these later with final sharp
   WebP exports.
========================================= */

const finalGallery = [
  {
    src: "/images/next/next_homepage_live.webp",
    alt: "NEXT final homepage design",
    label: "Final result",
    caption:
      "The final responsive website direction developed during the client project.",
    wide: true,
  },
  {
    src: "/images/next/next_wireframe_mobile_webdesign.webp",
    alt: "NEXT final responsive interface",
    label: "Responsive design",
    caption:
      "The final interface combines a clearer content hierarchy with the stronger visual identity.",
  },
  {
    src: "/images/next/next_hero_live.webp",
    alt: "NEXT final website design",
    label: "Final website",
    caption:
      "The design was created to remain approachable for young people while still feeling trustworthy to schools and professionals.",
  },
];

/* =========================================
   FIGMA PROTOTYPE
========================================= */

const figmaEmbedUrl =
  "https://embed.figma.com/proto/CsZqexWVIw8F1rkaxha3vE/NEXT?node-id=1-1807&p=f&t=itNADDHTagTpqfQj-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1807&embed-host=share";
</script>

<template>
  <main class="case-page case-page--v2">
    <CaseProgress :steps="progressSteps" />

    <BackToTop />

    <!-- =====================================
         HERO
    ====================================== -->

    <section
      id="next-v2-intro"
      ref="hero"
      class="section case-hero"
      aria-labelledby="next-v2-title"
    >
      <div class="case-hero__tags reveal">
        <span>Branding</span>
        <span>UX/UI design</span>
        <span>Front-end development</span>
        <span>User testing</span>
        <span>CMS</span>
      </div>

      <div class="case-hero__layout">
        <div class="case-hero__copy">
          <p class="case-label reveal">Client project</p>

          <h1 id="next-v2-title" class="reveal">NEXT</h1>

          <h2 class="case-hero__subtitle reveal">
            A safe pause space for young people.
          </h2>

          <p class="case-hero__intro reveal">
            NEXT supports young people who temporarily cannot attend school or
            are at risk of dropping out. For this real client project, our team
            created a complete visual identity and responsive website that makes
            NEXT feel clear, trustworthy and approachable.
          </p>

          <p class="case-hero__intro reveal">
            The project combined branding, UX/UI design, information
            architecture, user testing, front-end development and Bludit CMS
            implementation.
          </p>
        </div>

        <dl class="case-meta">
          <div class="case-meta__item reveal">
            <dt>Client</dt>
            <dd>Project NEXT</dd>
          </div>

          <div class="case-meta__item reveal">
            <dt>Period</dt>
            <dd>February – June 2026</dd>
          </div>

          <div class="case-meta__item reveal">
            <dt>Team</dt>
            <dd>4 students</dd>
          </div>

          <div class="case-meta__item reveal">
            <dt>My role</dt>
            <dd>Team lead, UX/UI design, frontend</dd>
          </div>

          <div class="case-meta__item reveal">
            <dt>Tools</dt>
            <dd>Figma, HTML, CSS, JavaScript, Bludit CMS</dd>
          </div>

          <div class="case-meta__item reveal">
            <dt>Outcome</dt>
            <dd>Concept initially selected · logo retained</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- =====================================
         HERO VISUAL
    ====================================== -->

    <section class="case-wide-visual">
      <img
        src="/images/next/live_website_webdesign.webp"
        alt="NEXT branding and responsive website project"
      />
    </section>

    <!-- =====================================
         ABOUT NEXT
    ====================================== -->

    <section ref="overview" class="section text-section about-section">
      <p class="section-kicker reveal">About the client</p>

      <div class="text-section__grid">
        <h2 class="reveal">A place to pause, grow and find direction again.</h2>

        <div>
          <p class="large-copy reveal">
            NEXT supports young people who temporarily feel stuck at school, at
            home or within their social environment.
          </p>

          <p class="reveal">
            The organisation offers a safe and neutral environment where young
            people can slow down, rebuild confidence and work towards a new
            perspective.
          </p>

          <p class="reveal">
            Through individual guidance and activities in smaller groups, NEXT
            focuses on personal growth, creativity, movement and self-reliance.
          </p>

          <p class="reveal">
            The website therefore had to speak to several audiences at once:
            young people, parents, schools and CLB professionals.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         TIMELINE
    ====================================== -->

    <section class="section timeline-section">
      <p class="section-kicker">Project timeline</p>

      <h2>From first research to final client presentation.</h2>

      <div class="timeline">
        <article
          v-for="(step, index) in timeline"
          :key="`${step.month}-${index}`"
          class="timeline-item"
        >
          <span class="timeline-item__number">
            {{ String(index + 1).padStart(2, "0") }}
          </span>

          <p class="timeline-item__month">
            {{ step.month }}
          </p>

          <h3>
            {{ step.title }}
          </h3>

          <p>
            {{ step.text }}
          </p>
        </article>
      </div>
    </section>

    <!-- =====================================
         CHALLENGE
    ====================================== -->

    <section
      id="next-v2-challenge"
      ref="challenge"
      class="section text-section"
    >
      <p class="section-kicker reveal">01 · Challenge</p>

      <div class="text-section__grid">
        <h2 class="reveal">
          Make NEXT feel safe without feeling institutional.
        </h2>

        <div>
          <p class="large-copy reveal">
            NEXT needed a responsive website and visual identity that explained
            the organisation clearly without feeling like another formal
            institution.
          </p>

          <p class="reveal">
            The website needed to explain what NEXT does, who it is for, what a
            trajectory looks like and how young people can register.
          </p>

          <p class="reveal">
            At the same time, the experience could not become too formal,
            text-heavy or distant. The challenge was finding a balance between
            clarity, trust, warmth and personality.
          </p>

          <p class="reveal">
            The client also needed an editable CMS so they could manage and
            update the content independently after delivery.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         RESEARCH
    ====================================== -->

    <section id="next-v2-research" ref="research" class="section text-section">
      <p class="section-kicker reveal">02 · Research</p>

      <div class="text-section__grid">
        <h2 class="reveal">Understanding NEXT before designing for NEXT.</h2>

        <div>
          <p class="large-copy reveal">
            Before thinking about colours, logos or interfaces, we first needed
            to understand what NEXT stands for.
          </p>

          <p class="reveal">
            We reviewed the client material, including an information brochure
            and video tour, to understand the organisation, environment,
            mission, target audiences and team.
          </p>

          <p class="reveal">
            From this research we created a moodboard, explored the How / What /
            Why, selected core values and defined the most important audiences.
          </p>

          <p class="reveal">
            We presented this first direction to the client and used their
            feedback as the starting point for the next phase.
          </p>
        </div>
      </div>
    </section>

    <section class="stack-section">
      <div class="section stack-heading">
        <p>Research &amp; visual direction</p>

        <h2>
          The first clues for the identity came from the organisation itself.
        </h2>
      </div>

      <StickyImageStack
        :images="researchImages"
        alt-prefix="NEXT research and visual direction"
      />

      <div class="section stack-heading">
        <p>Our interpretation</p>

        <h2>
          From client information to our own visual understanding of NEXT.
        </h2>
      </div>

      <StickyImageStack
        :images="researchImagesStreamingSisters"
        alt-prefix="NEXT team research, moodboard, values and audience exploration"
      />
    </section>

    <!-- =====================================
         INFORMATION ARCHITECTURE
    ====================================== -->

    <section
      id="next-v2-architecture"
      ref="architecture"
      class="section text-section"
    >
      <p class="section-kicker reveal">03 · Information architecture</p>

      <div class="text-section__grid">
        <h2 class="reveal">
          Turning a large amount of information into a clear structure.
        </h2>

        <div>
          <p class="large-copy reveal">
            NEXT had information for several different audiences, so the content
            needed a strong hierarchy.
          </p>

          <p class="reveal">
            We divided the information into logical pages and refined the
            navigation together with the client.
          </p>

          <p class="reveal">
            The final structure included Home, About NEXT, How it works,
            Registration, Our team and Contact.
          </p>

          <p class="reveal">
            A clear registration call-to-action remained accessible throughout
            the website so the most important user action never became hidden.
          </p>
        </div>
      </div>

      <div class="info-cards">
        <article class="info-card reveal">
          <span>01</span>

          <h3>Home</h3>

          <p>Introduce NEXT and communicate the core purpose quickly.</p>
        </article>

        <article class="info-card reveal">
          <span>02</span>

          <h3>About NEXT</h3>

          <p>Explain the organisation, values and approach.</p>
        </article>

        <article class="info-card reveal">
          <span>03</span>

          <h3>How it works</h3>

          <p>Explain the programme and what young people can expect.</p>
        </article>

        <article class="info-card reveal">
          <span>04</span>

          <h3>Registration</h3>

          <p>Make the process of starting a trajectory understandable.</p>
        </article>

        <article class="info-card reveal">
          <span>05</span>

          <h3>Our team</h3>

          <p>Build trust by showing the people behind NEXT.</p>
        </article>

        <article class="info-card reveal">
          <span>06</span>

          <h3>Contact</h3>

          <p>Provide a clear place for questions and practical information.</p>
        </article>
      </div>

      <div class="asset-image reveal">
        <img
          src="/images/next/next_navigatiestructuur_webdesign.webp"
          alt="NEXT information architecture and sitemap"
        />
      </div>
    </section>

    <!-- =====================================
         FIRST VISUAL DIRECTION
    ====================================== -->

    <section class="section text-section first-direction-section">
      <p class="section-kicker">First visual direction</p>

      <div class="text-section__grid">
        <h2>Warm and calm — but not powerful enough.</h2>

        <div>
          <p class="large-copy">
            Our first direction was inspired by the calm and natural environment
            surrounding NEXT.
          </p>

          <p>
            We explored soft colours, natural tones and visual ideas connected
            to growth, opportunities and new beginnings.
          </p>

          <p>
            The client appreciated the warmth of the concept, but felt that the
            identity lacked energy and confidence.
          </p>

          <p>
            That feedback became a turning point. Instead of polishing the first
            direction, we allowed ourselves to restart.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         BRANDING & IDENTITY
    ====================================== -->

    <section id="next-v2-identity" ref="identity" class="section text-section">
      <p class="section-kicker reveal">04 · Branding &amp; identity</p>

      <div class="text-section__grid">
        <h2 class="reveal">Calm, but not passive. Young, but not childish.</h2>

        <div>
          <p class="large-copy reveal">
            NEXT needed to feel neutral and trustworthy for young people,
            schools and CLB without becoming distant or overly formal.
          </p>

          <p class="reveal">
            We explored several colour palettes, typography combinations and
            logo directions before finding a visual language with more strength.
          </p>

          <p class="reveal">
            The natural foundation remained, but darker green tones, stronger
            typography and more confident graphic elements gave the identity
            additional energy.
          </p>

          <div class="design-question reveal">
            <span> Design question </span>

            <p>
              How can we position NEXT as a safe and neutral growth space for
              young people while communicating connection, calmness and personal
              growth?
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="stack-section">
      <div class="section stack-heading">
        <p>Logo &amp; identity exploration</p>

        <h2>The first idea was not the final answer.</h2>
      </div>

      <StickyImageStack
        :images="identityImages"
        alt-prefix="NEXT branding and identity exploration"
      />
    </section>

    <!-- =====================================
         BRANDING & LOGO DEVELOPMENT
    ====================================== -->

    <section class="section branding-selection-section">
      <p class="section-kicker">Branding &amp; logo development</p>

      <div class="text-section__grid">
        <h2>Exploring different identities before finding the right one.</h2>

        <div>
          <p class="large-copy">
            The branding went through several rounds before reaching the
            direction that felt right for NEXT.
          </p>

          <p>
            We experimented with typography, colour combinations, logo
            compositions and different levels of visual energy.
          </p>

          <p>
            Some directions felt too soft, while others did not communicate
            enough confidence or personality.
          </p>

          <p>
            Client feedback helped us gradually move towards a stronger identity
            while preserving the warmth and openness associated with NEXT.
          </p>
        </div>
      </div>

      <div class="gallery-wrap">
        <CaseImageGallery
          :images="brandingGallery"
          label="NEXT branding and logo development"
        />
      </div>

      <div class="selected-logo-note">
        <span>Selected logo</span>

        <img
          class="selected-logo-note__logo"
          src="/images/next/logo_final_branding.svg"
          alt="Selected NEXT logo"
        />

        <div>
          <h3>The identity changed. This logo stayed.</h3>

          <p>
            The final logo was approved during the project and became one of the
            strongest outcomes of the collaboration.
          </p>

          <p>
            When NEXT later decided not to continue with our website, the logo
            was the part of the concept they still wanted to retain.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         SLOGAN
    ====================================== -->

    <section class="section slogan-section">
      <p class="section-kicker">Brand message</p>

      <blockquote>“Opnieuw beginnen is ook vooruitgaan.”</blockquote>

      <p class="slogan-section__text">
        The message reflects the idea behind NEXT: taking a pause or beginning
        again does not mean standing still. It can be part of moving forward.
      </p>
    </section>

    <!-- =====================================
         WIREFRAMES & ITERATIONS
    ====================================== -->

    <section
      id="next-v2-iteration"
      ref="iteration"
      class="section text-section"
    >
      <p class="section-kicker reveal">05 · Wireframes &amp; iterations</p>

      <div class="text-section__grid">
        <h2 class="reveal">Design. Feedback. Let go. Design again.</h2>

        <div>
          <p class="large-copy reveal">
            Wireframes helped us test content, hierarchy and layout before
            committing to the final visual design.
          </p>

          <p class="reveal">
            We explored multiple versions of the homepage, programme pages and
            registration flow.
          </p>

          <p class="reveal">
            Teacher feedback focused strongly on structure and layout, while the
            client helped us evaluate content, tone and page organisation.
          </p>

          <p class="reveal">
            Several design directions and approximately nine Figma iterations
            were explored throughout the project before we arrived at the final
            direction.
          </p>
        </div>
      </div>
    </section>

    <section class="stack-section">
      <div class="section stack-heading">
        <p>Wireframes &amp; iterations</p>

        <h2>The process was anything but linear.</h2>
      </div>

      <StickyImageStack
        :images="iterationImages"
        alt-prefix="NEXT wireframes and website iterations"
      />
    </section>

    <!-- =====================================
         HIGH FIDELITY
    ====================================== -->

    <section
      id="next-v2-high-fidelity"
      ref="highFidelity"
      class="section text-section"
    >
      <p class="section-kicker reveal">06 · High-fidelity design</p>

      <div class="text-section__grid">
        <h2 class="reveal">
          Turning the identity into a complete digital experience.
        </h2>

        <div>
          <p class="large-copy reveal">
            Once the structure worked, we translated the visual identity into
            detailed responsive screens in Figma.
          </p>

          <p class="reveal">
            The interface used photography, cards, organic lines and playful
            visual interruptions to prevent information-heavy pages from feeling
            formal or overwhelming.
          </p>

          <p class="reveal">
            The combination of clear hierarchy and expressive visuals helped us
            create a website that still felt human despite the large amount of
            information.
          </p>
        </div>
      </div>

      <div class="asset-image reveal">
        <img
          src="/images/next/final_wireframes_webdesign.webp"
          alt="NEXT high-fidelity design"
        />
      </div>
    </section>

    <!-- =====================================
         BUILD
    ====================================== -->

    <section id="next-v2-build" ref="build" class="section text-section">
      <p class="section-kicker reveal">07 · Front-end &amp; Bludit</p>

      <div class="text-section__grid">
        <h2 class="reveal">From Figma to an editable website.</h2>

        <div>
          <p class="large-copy reveal">
            After the UX/UI direction was approved, we moved into front-end
            development and implementation in Bludit CMS.
          </p>

          <p class="reveal">
            This allowed the client to manage the content independently after
            delivery instead of depending on developers for every small update.
          </p>

          <p class="reveal">
            Translating the Figma designs into a real website also revealed
            practical responsive challenges that were less visible during the
            design phase.
          </p>

          <p class="reveal">
            My own development responsibilities focused mainly on the homepage,
            application page and contact page, while I also contributed to the
            general implementation and feedback process.
          </p>
        </div>
      </div>

      <div class="gallery-wrap reveal">
        <CaseImageGallery
          :images="buildGallery"
          label="NEXT website implementation gallery"
        />
      </div>
    </section>

    <!-- =====================================
         USER TESTING
    ====================================== -->

    <section id="next-v2-testing" ref="testing" class="section testing-section">
      <p class="section-kicker reveal">08 · User testing</p>

      <div class="text-section__grid">
        <h2 class="reveal">
          We tested whether the website was actually clear.
        </h2>

        <div>
          <p class="large-copy reveal">
            Five participants completed four practical tasks and one general
            feedback question.
          </p>

          <p class="reveal">
            The goal was to identify friction in navigation, content clarity and
            the overall user experience before final delivery.
          </p>
        </div>
      </div>

      <div class="testing-grid">
        <article
          v-for="task in testingTasks"
          :key="task.number"
          class="testing-card reveal"
        >
          <span>
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
         TESTING FINDINGS
    ====================================== -->

    <section class="section findings-section">
      <p class="section-kicker">What changed?</p>

      <h2 class="findings-title">
        Feedback became part of the design process.
      </h2>

      <div class="findings-list">
        <article
          v-for="finding in findings"
          :key="finding.number"
          class="finding"
        >
          <span class="finding__number">
            {{ finding.number }}
          </span>

          <div>
            <h3>
              {{ finding.title }}
            </h3>

            <div class="finding__grid">
              <div>
                <span> Finding </span>

                <p>
                  {{ finding.finding }}
                </p>
              </div>

              <div>
                <span> Change </span>

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
         CLIENT DECISION
    ====================================== -->

    <section class="section selection-section">
      <p class="section-kicker">Client decision</p>

      <div class="selection-card">
        <span> Initially selected by the client </span>

        <h2>
          Our concept was chosen — but the project later changed direction.
        </h2>

        <p>
          At the end of the school project, NEXT initially selected our concept
          from the student team proposals. The amount of research, design work
          and iteration we had invested in the project contributed to that
          decision.
        </p>

        <p>
          During the summer, NEXT received another opportunity and ultimately
          decided not to continue with our website as their permanent final
          solution.
        </p>

        <p>
          They did, however, want to retain the logo we created. That made the
          branding itself an important lasting outcome of the project.
        </p>
      </div>
    </section>

    <!-- =====================================
         FINAL RESULT
    ====================================== -->

    <section id="next-v2-final" ref="finalResult" class="section final-section">
      <p class="section-kicker reveal">09 · Final result</p>

      <h2 class="reveal">
        A clearer identity and a website that gives NEXT room to breathe.
      </h2>

      <p class="final-intro reveal">
        The final project direction combined branding, information architecture,
        responsive UX/UI, front-end development and an editable CMS into one
        coherent digital experience.
      </p>

      <div class="final-tags">
        <span> Visual identity </span>

        <span> Responsive UX/UI </span>

        <span> User testing </span>

        <span> Front-end development </span>

        <span> Bludit CMS </span>
      </div>

      <div class="gallery-wrap reveal">
        <CaseImageGallery
          :images="finalGallery"
          label="NEXT final website gallery"
        />
      </div>
    </section>

    <!-- =====================================
         FIGMA PROTOTYPE
    ====================================== -->

    <section class="section prototype-section">
      <p class="section-kicker">Interactive prototype</p>

      <div class="prototype-heading">
        <h2>Explore the final experience.</h2>

        <p>
          The prototype lets you move through the final NEXT interface and
          explore the design in more detail than static screenshots can show.
        </p>
      </div>

      <div class="figma-frame">
        <iframe
          :src="figmaEmbedUrl"
          title="Interactive Figma prototype of Project NEXT"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </section>

    <!-- =====================================
         PROJECT STATUS
    ====================================== -->

    <section ref="status" class="section text-section status-section">
      <p class="section-kicker reveal">Project status</p>

      <div class="text-section__grid">
        <h2 class="reveal">
          The website changed direction. The identity still left its mark.
        </h2>

        <div>
          <p class="large-copy reveal">
            Our concept was initially selected, but the website was ultimately
            not completed as NEXT's permanent website.
          </p>

          <p class="reveal">
            During the summer, the organisation received another opportunity and
            decided to continue in a different direction.
          </p>

          <p class="reveal">
            The logo was the part of our work they wanted to retain. That
            outcome still reflects the strength of the branding process and the
            many iterations that led to the final identity.
          </p>

          <p class="reveal">
            For me, the case remains valuable because it involved a real client,
            changing requirements, repeated feedback, user testing and the need
            to adapt when the project did not end exactly as originally
            expected.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         MY CONTRIBUTION
    ====================================== -->

    <section
      id="next-v2-role"
      ref="role"
      class="section text-section role-section"
    >
      <p class="section-kicker reveal">10 · My contribution</p>

      <div class="text-section__grid">
        <h2 class="reveal">A team project, with a very hands-on role.</h2>

        <div>
          <p class="large-copy reveal">
            I worked as team lead and contributed throughout research, branding,
            UX/UI design, feedback processing and development.
          </p>

          <p class="reveal">
            Within the team, I often took a guiding role by helping maintain
            direction and confidence, especially when we needed to restart parts
            of the concept after difficult feedback.
          </p>

          <p class="reveal">
            My main UX/UI and front-end responsibilities focused on the
            homepage, application page and contact page.
          </p>

          <p class="reveal">
            I also contributed to the visual direction, information structure,
            client presentations and implementation of the final website in
            Bludit.
          </p>

          <p class="reveal">
            The project allowed me to work across several parts of the digital
            design process rather than focusing on only one specialised task.
          </p>
        </div>
      </div>

      <div class="contribution-grid">
        <article class="contribution-card reveal">
          <span> 01 </span>

          <h3>Research</h3>

          <p>Understanding the organisation, audiences and client material.</p>
        </article>

        <article class="contribution-card reveal">
          <span> 02 </span>

          <h3>UX/UI</h3>

          <p>
            Translating structure and feedback into responsive interface design.
          </p>
        </article>

        <article class="contribution-card reveal">
          <span> 03 </span>

          <h3>Team lead</h3>

          <p>
            Supporting direction, communication and momentum throughout the
            project.
          </p>
        </article>

        <article class="contribution-card reveal">
          <span> 04 </span>

          <h3>Frontend</h3>

          <p>Translating selected Figma designs into working web pages.</p>
        </article>
      </div>

      <div class="asset-placeholder reveal">
        <span> Images to add later </span>

        <p>
          Screenshots of the pages, wireframes or components you personally
          designed and built
        </p>
      </div>
    </section>

    <!-- =====================================
         TEAM
    ====================================== -->

    <section
      ref="team"
      class="section team-section"
      aria-labelledby="next-team-title"
    >
      <p class="section-kicker reveal">The team</p>

      <h2 id="next-team-title" class="reveal">Built together.</h2>

      <p class="team-intro reveal">
        NEXT was created by a team of four Digital Experience Design students.
        We worked together across research, branding, UX/UI, development and
        client feedback, combining different strengths throughout the project.
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
              <IconArrowUpRight class="team-card__arrow" />

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
      id="next-v2-reflection"
      ref="reflection"
      class="section reflection-section"
    >
      <p class="section-kicker reveal">Reflection</p>

      <h2 class="reveal">Listen. Simplify. Let go. Build again.</h2>

      <div class="reflection-grid">
        <p class="reveal">
          NEXT taught me that a strong design does not always come from the
          first idea.
        </p>

        <p class="reveal">
          Sometimes the better direction appears after difficult feedback,
          simplification and several iterations.
        </p>

        <p class="reveal">
          I learned that being attached to an idea is less important than
          understanding whether that idea actually serves the client and the
          people using the product.
        </p>

        <p class="reveal">
          The project also taught me how much I enjoy client work: listening,
          translating a real mission into visual decisions and then turning
          those decisions into something people can actually use.
        </p>

        <p class="reveal">
          Working as part of a team pushed me to communicate ideas more clearly,
          support others and stay constructive when the project needed a major
          change in direction.
        </p>

        <p class="reveal">
          Even though the website itself was ultimately not continued, the
          project remains meaningful to me because the logo was retained and the
          process taught me how real client work can change unexpectedly.
        </p>
      </div>
    </section>

    <!-- =====================================
         NEXT PROJECT
    ====================================== -->

    <section class="section next-project">
      <p>Next project</p>

      <RouterLink to="/projects/lumiere">
        <span> Cinema Lumière </span>

        <IconArrowUpRight />
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
   COMMON
========================================= */

.section-kicker {
  margin-bottom: 34px;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  opacity: 0.46;
}

.text-section__grid {
  display: grid;

  grid-template-columns:
    minmax(260px, 0.8fr)
    minmax(0, 1.2fr);

  gap: clamp(60px, 9vw, 150px);
}

.text-section__grid h2 {
  max-width: 590px;

  font-family: var(--font-heading);

  font-size: clamp(38px, 5vw, 72px);

  line-height: 0.98;

  letter-spacing: -0.055em;
}

.text-section__grid p {
  max-width: 650px;

  font-size: 15px;

  line-height: 1.65;
}

.text-section__grid p + p {
  margin-top: 22px;
}

.large-copy {
  font-size: clamp(21px, 2vw, 30px) !important;

  line-height: 1.35 !important;

  letter-spacing: -0.025em;
}

.text-section {
  padding-top: 150px;

  padding-bottom: 150px;
}

/* =========================================
   HERO
========================================= */

.case-hero {
  padding-top: 100px;

  padding-bottom: 130px;
}

.case-hero__tags {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-bottom: 52px;
}

.case-hero__tags span {
  padding: 8px 13px;

  border: 1px solid rgba(17, 17, 17, 0.14);

  border-radius: 999px;

  font-size: 11px;
}

.case-hero__layout {
  display: grid;

  grid-template-columns:
    1.25fr
    0.75fr;

  gap: clamp(70px, 10vw, 170px);

  align-items: end;
}

.case-label {
  font-size: 11px;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  opacity: 0.5;
}

.case-hero h1 {
  margin: 15px 0 22px;

  font-family: var(--font-heading);

  font-size: clamp(80px, 12vw, 170px);

  line-height: 0.8;

  letter-spacing: -0.08em;
}

.case-hero__subtitle {
  max-width: 690px;

  margin-bottom: 34px;

  font-family: var(--font-heading);

  font-size: clamp(34px, 4vw, 62px);

  line-height: 1;

  letter-spacing: -0.05em;
}

.case-hero__intro {
  max-width: 620px;

  font-size: clamp(16px, 1.4vw, 20px);

  line-height: 1.6;
}

.case-hero__intro + .case-hero__intro {
  margin-top: 18px;
}

/* =========================================
   META
========================================= */

.case-meta {
  display: grid;

  margin: 0;

  border-top: 1px solid rgba(17, 17, 17, 0.15);
}

.case-meta__item {
  display: grid;

  grid-template-columns: 100px 1fr;

  gap: 20px;

  padding: 17px 0;

  border-bottom: 1px solid rgba(17, 17, 17, 0.15);
}

.case-meta dt {
  font-size: 10px;

  letter-spacing: 0.08em;

  text-transform: uppercase;

  opacity: 0.45;
}

.case-meta dd {
  margin: 0;

  font-size: 13px;

  line-height: 1.45;
}

/* =========================================
   HERO VISUAL
========================================= */

.case-wide-visual {
  width: calc(100% - 48px);

  max-width: 1500px;

  margin: 0 auto 50px;

  overflow: hidden;

  border-radius: 32px;

  background: #efefeb;
}

.case-wide-visual img {
  display: block;

  width: 100%;
  height: auto;

  object-fit: contain;
}

/* =========================================
   ABOUT
========================================= */

.about-section {
  padding-top: 170px;
}

/* =========================================
   TIMELINE
========================================= */

.timeline-section {
  padding-top: 60px;

  padding-bottom: 170px;
}

.timeline-section > h2 {
  max-width: 900px;

  margin-bottom: 70px;

  font-family: var(--font-heading);

  font-size: clamp(42px, 6vw, 84px);

  line-height: 0.95;

  letter-spacing: -0.06em;
}

.timeline {
  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  border-top: 1px solid rgba(17, 17, 17, 0.15);

  border-left: 1px solid rgba(17, 17, 17, 0.15);
}

.timeline-item {
  min-height: 280px;

  padding: 24px;

  border-right: 1px solid rgba(17, 17, 17, 0.15);

  border-bottom: 1px solid rgba(17, 17, 17, 0.15);
}

.timeline-item__number {
  display: block;

  margin-bottom: 55px;

  font-size: 42px;

  opacity: 0.12;
}

.timeline-item__month {
  margin-bottom: 8px;

  font-size: 10px;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  opacity: 0.46;
}

.timeline-item h3 {
  margin-bottom: 12px;

  font-family: var(--font-heading);

  font-size: 18px;
}

.timeline-item > p:last-child {
  font-size: 13px;

  line-height: 1.55;

  opacity: 0.72;
}

/* =========================================
   DESIGN QUESTION
========================================= */

.design-question {
  margin-top: 50px;

  padding: 28px;

  border-radius: 24px;

  background: var(--color-sage);
}

.design-question span {
  display: block;

  margin-bottom: 14px;

  font-size: 10px;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  opacity: 0.55;
}

.design-question p {
  font-size: clamp(19px, 2vw, 27px);

  line-height: 1.4;
}

/* =========================================
   INFORMATION ARCHITECTURE
========================================= */

.info-cards {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 12px;

  margin-top: 80px;
}

.info-card {
  min-height: 220px;

  display: flex;

  flex-direction: column;

  padding: 24px;

  border-radius: 22px;

  background: rgba(211, 217, 189, 0.4);
}

.info-card > span {
  margin-bottom: auto;

  font-size: 34px;

  opacity: 0.13;
}

.info-card h3 {
  margin-top: 45px;

  margin-bottom: 10px;

  font-family: var(--font-heading);

  font-size: 17px;
}

.info-card p {
  font-size: 13px;

  line-height: 1.5;

  opacity: 0.72;
}

.asset-image {
  margin-top: 80px;
  overflow: hidden;
  border-radius: 28px;
}

.asset-image img {
  display: block;
  width: 100%;
  height: auto;
}

/* =========================================
   STACK
========================================= */

.stack-section {
  padding-bottom: 100px;
}

.stack-heading {
  padding-top: 30px;

  padding-bottom: 48px;
}

.stack-heading > p {
  margin-bottom: 16px;

  font-size: 11px;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  opacity: 0.48;
}

.stack-heading h2 {
  max-width: 850px;

  font-family: var(--font-heading);

  font-size: clamp(34px, 5vw, 70px);

  line-height: 0.98;

  letter-spacing: -0.055em;
}

/* =========================================
   PLACEHOLDERS
========================================= */

.asset-placeholder {
  min-height: 350px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  gap: 10px;

  margin-top: 80px;

  padding: 40px;

  border: 1px dashed rgba(17, 17, 17, 0.18);

  border-radius: 28px;

  background: rgba(211, 217, 189, 0.18);

  text-align: center;
}

.asset-placeholder span {
  font-size: 10px;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  opacity: 0.45;
}

.asset-placeholder p {
  max-width: 600px;

  font-size: 16px;

  line-height: 1.5;
}

/* =========================================
   BRANDING SELECTION
========================================= */

.branding-selection-section {
  padding-top: 80px;

  padding-bottom: 170px;
}

.branding-selection-section .text-section__grid h2 {
  max-width: 650px;
}
/* 
.selected-logo-note {
  display: grid;

  grid-template-columns: 150px 1fr;

  gap: 40px;

  max-width: 900px;

  margin-top: 55px;
  margin-left: auto;

  padding-top: 30px;

  border-top: 1px solid rgba(17, 17, 17, 0.16);
} */

.selected-logo-note {
  display: grid;
  grid-template-columns:
    140px
    minmax(220px, 320px)
    minmax(0, 1fr);

  gap: clamp(40px, 6vw, 90px);

  align-items: start;

  margin-top: 90px;
  padding-top: 36px;

  border-top: 1px solid rgba(17, 17, 17, 0.15);
}

.selected-logo-note > span {
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.45;
}

/* .selected-logo-note h3 {
  max-width: 600px;

  margin-bottom: 14px;

  font-family: var(--font-heading);

  font-size: clamp(22px, 2.3vw, 32px);

  line-height: 1.2;
} */

.selected-logo-note h3 {
  margin-bottom: 20px;

  font-family: var(--font-heading);
  font-size: clamp(30px, 3vw, 46px);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.selected-logo-note p {
  max-width: 500px;

  font-size: 14px;
  line-height: 1.6;
}

.selected-logo-note p + p {
  margin-top: 14px;
}

/* .selected-logo-note__logo {
  display: block;
  width: min(220px, 100%);
  height: auto;
} */

.selected-logo-note__logo {
  display: block;
  width: 100%;
  max-width: 280px;
  height: auto;

  justify-self: center;
}

.selected-logo-note > div {
  min-width: 0;
  max-width: 520px;
}

/* =========================================
   SLOGAN
========================================= */

.slogan-section {
  padding-top: 120px;

  padding-bottom: 170px;

  text-align: center;
}

.slogan-section blockquote {
  max-width: 1050px;

  margin: 30px auto 0;

  font-family: var(--font-heading);

  font-size: clamp(48px, 8vw, 120px);

  line-height: 0.9;

  letter-spacing: -0.07em;
}

.slogan-section__text {
  max-width: 600px;

  margin: 45px auto 0;

  font-size: 15px;

  line-height: 1.65;

  opacity: 0.7;
}

/* =========================================
   GALLERY
========================================= */

.gallery-wrap {
  margin-top: 80px;
}

/* =========================================
   TESTING
========================================= */

.testing-section {
  padding-top: 150px;

  padding-bottom: 150px;
}

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

.testing-card > span {
  margin-bottom: auto;

  font-size: 42px;

  opacity: 0.14;
}

.testing-card h3 {
  margin: 50px 0 12px;

  font-family: var(--font-heading);

  font-size: 14px;

  text-transform: uppercase;
}

.testing-card p {
  font-size: 13px;

  line-height: 1.5;
}

/* =========================================
   FINDINGS
========================================= */

.findings-section {
  padding-top: 70px;

  padding-bottom: 150px;
}

.findings-title {
  max-width: 850px;

  margin-bottom: 70px;

  font-family: var(--font-heading);

  font-size: clamp(42px, 6vw, 82px);

  line-height: 0.95;

  letter-spacing: -0.06em;
}

.findings-list {
  border-top: 1px solid rgba(17, 17, 17, 0.15);
}

.finding {
  display: grid;

  grid-template-columns: 110px 1fr;

  gap: 45px;

  padding: 46px 0;

  border-bottom: 1px solid rgba(17, 17, 17, 0.15);
}

.finding__number {
  font-size: clamp(38px, 4vw, 62px);

  opacity: 0.13;
}

.finding h3 {
  max-width: 700px;

  margin-bottom: 32px;

  font-family: var(--font-heading);

  font-size: clamp(22px, 2.2vw, 31px);
}

.finding__grid {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 70px;
}

.finding__grid span {
  display: block;

  margin-bottom: 10px;

  font-size: 10px;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  opacity: 0.45;
}

.finding__grid p {
  max-width: 450px;

  font-size: 14px;

  line-height: 1.55;
}

/* =========================================
   CLIENT DECISION
========================================= */

.selection-section {
  padding-top: 80px;

  padding-bottom: 170px;
}

.selection-card {
  padding: clamp(34px, 6vw, 80px);

  border-radius: 34px;

  background: var(--color-sage);
}

.selection-card > span {
  display: block;

  margin-bottom: 30px;

  font-size: 10px;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  opacity: 0.5;
}

.selection-card h2 {
  max-width: 950px;

  margin-bottom: 40px;

  font-family: var(--font-heading);

  font-size: clamp(44px, 7vw, 96px);

  line-height: 0.94;

  letter-spacing: -0.065em;
}

.selection-card p {
  max-width: 700px;

  font-size: 15px;

  line-height: 1.65;
}

.selection-card p + p {
  margin-top: 20px;
}

/* =========================================
   FINAL
========================================= */

.final-section {
  padding-top: 160px;

  padding-bottom: 160px;
}

.final-section > h2 {
  max-width: 1050px;

  font-family: var(--font-heading);

  font-size: clamp(46px, 7vw, 96px);

  line-height: 0.94;

  letter-spacing: -0.065em;
}

.final-intro {
  max-width: 650px;

  margin-top: 32px;

  font-size: 16px;

  line-height: 1.65;

  opacity: 0.72;
}

.final-tags {
  display: flex;

  flex-wrap: wrap;

  gap: 10px;

  margin-top: 45px;
}

.final-tags span {
  padding: 11px 16px;

  border-radius: 999px;

  background: var(--color-sage);

  font-size: 12px;
}

/* =========================================
   FIGMA
========================================= */

.prototype-section {
  padding-top: 80px;

  padding-bottom: 170px;
}

.prototype-heading {
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    minmax(260px, 0.45fr);

  gap: 70px;

  align-items: end;

  margin-bottom: 50px;
}

.prototype-heading h2 {
  max-width: 760px;

  font-family: var(--font-heading);

  font-size: clamp(44px, 6vw, 82px);

  line-height: 0.95;

  letter-spacing: -0.06em;
}

.prototype-heading p {
  max-width: 420px;

  font-size: 14px;

  line-height: 1.6;

  opacity: 0.7;
}

/* =========================================
   FIGMA PROTOTYPE
========================================= */

.figma-frame {
  position: relative;

  overflow: hidden;

  border: 1px solid rgba(17, 17, 17, 0.12);

  border-radius: 28px;

  background: #efefeb;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

.figma-frame iframe {
  display: block;

  width: 100%;

  height: min(82vh, 900px);

  border: 0;

  background: transparent;
}

/* =========================================
   CONTRIBUTION
========================================= */

.contribution-grid {
  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 12px;

  margin-top: 90px;
}

.contribution-card {
  min-height: 220px;

  display: flex;

  flex-direction: column;

  padding: 24px;

  border-radius: 22px;

  background: rgba(211, 217, 189, 0.4);
}

.contribution-card > span {
  margin-bottom: auto;

  font-size: 34px;

  opacity: 0.13;
}

.contribution-card h3 {
  margin: 45px 0 10px;

  font-family: var(--font-heading);

  font-size: 17px;
}

.contribution-card p {
  font-size: 13px;

  line-height: 1.5;

  opacity: 0.72;
}

/* =========================================
   TEAM
========================================= */

.team-section {
  padding-top: 60px;

  padding-bottom: 170px;
}

.team-section > h2 {
  max-width: 760px;

  margin-top: 20px;

  font-family: var(--font-heading);

  font-size: clamp(44px, 6vw, 84px);

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

  width: 20px;
  height: 20px;
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
  font-family: var(--font-heading);

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
  padding-top: 150px;

  padding-bottom: 160px;

  border-radius: 40px 40px 0 0;

  background: var(--color-sage);
}

.reflection-section > h2 {
  max-width: 1000px;

  margin-bottom: 75px;

  font-family: var(--font-heading);

  font-size: clamp(52px, 7vw, 105px);

  line-height: 0.9;

  letter-spacing: -0.07em;

  text-transform: uppercase;
}

.reflection-grid {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 40px 100px;
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

  letter-spacing: 0.1em;

  text-transform: uppercase;

  opacity: 0.45;
}

.next-project a {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;

  padding-bottom: 28px;

  border-bottom: 1px solid rgba(17, 17, 17, 0.18);

  color: inherit;

  text-decoration: none;

  transition: opacity 0.3s ease;
}

.next-project a > span {
  font-family: var(--font-heading);

  font-size: clamp(42px, 7vw, 100px);

  line-height: 1;

  letter-spacing: -0.065em;
}

.next-project a svg {
  width: clamp(32px, 4vw, 54px);

  height: clamp(32px, 4vw, 54px);
}

.next-project a:hover {
  opacity: 0.55;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 950px) {
  .case-hero__layout,
  .text-section__grid,
  .prototype-heading {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .timeline {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .info-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .testing-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contribution-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .team-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .selected-logo-note {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .selected-logo-note__logo {
    justify-self: start;
    max-width: 220px;
  }

  .selected-logo-note > div {
    max-width: 600px;
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
    padding-top: 75px;
    padding-bottom: 100px;
  }

  .case-wide-visual {
    width: calc(100% - 24px);
    border-radius: 22px;
  }

  .text-section,
  .testing-section,
  .final-section,
  .prototype-section,
  .reflection-section,
  .selection-section,
  .branding-selection-section {
    padding-top: 105px;
    padding-bottom: 105px;
  }

  .timeline,
  .info-cards,
  .testing-grid,
  .finding__grid,
  .contribution-grid,
  .team-grid,
  .reflection-grid {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    min-height: 220px;
  }

  .finding {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .testing-card {
    min-height: 210px;
  }

  .asset-placeholder {
    min-height: 280px;
  }

  .figma-frame iframe {
    height: 70vh;
  }

  .selected-logo-note {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .selected-logo-note__logo {
    justify-self: start;
    max-width: 180px;
  }

  .selected-logo-note > div {
    max-width: 100%;
  }
}
</style>
