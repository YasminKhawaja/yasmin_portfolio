<script setup>
import { ref } from "vue";

import { useScrollReveal } from "../composables/useScrollReveal";

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
const userNeeds = ref(null);
const structure = ref(null);
const wireframes = ref(null);
const highFidelity = ref(null);
const interactions = ref(null);
const variables = ref(null);
const testing = ref(null);
const refine = ref(null);
const finalResult = ref(null);
const role = ref(null);
const reflection = ref(null);

/* =========================================
   PROGRESS
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
    id: "lumiere-user-needs",
    label: "User needs",
  },
  {
    id: "lumiere-structure",
    label: "Structure",
  },
  {
    id: "lumiere-wireframes",
    label: "Wireframes",
  },
  {
    id: "lumiere-high-fidelity",
    label: "UI design",
  },
  {
    id: "lumiere-interactions",
    label: "Interactions",
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
    id: "lumiere-final",
    label: "Final result",
  },
  {
    id: "lumiere-role",
    label: "My role",
  },
  {
    id: "lumiere-reflection",
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
  userNeeds,
  structure,
  wireframes,
  highFidelity,
  interactions,
  variables,
  testing,
  refine,
  finalResult,
  role,
  reflection,
].forEach((section) => {
  useScrollReveal(section, ".reveal", {
    stagger: 0.07,
  });
});

/* =========================================
   TIMELINE
========================================= */

const timeline = [
  {
    number: "01",
    title: "Research & benchmark",
    text: "Analyse the existing Lumière experience and compare familiar cinema interaction patterns.",
  },
  {
    number: "02",
    title: "User stories & flows",
    text: "Translate user needs into concrete goals, flows and acceptance criteria.",
  },
  {
    number: "03",
    title: "Information architecture",
    text: "Prioritise functionality and organise the app structure before designing screens.",
  },
  {
    number: "04",
    title: "Group wireframes",
    text: "Create a shared low-fidelity foundation for the main cinema app flows.",
  },
  {
    number: "05",
    title: "Individual UI design",
    text: "Develop the shared structure into an individual high-fidelity visual direction.",
  },
  {
    number: "06",
    title: "Variables & interactions",
    text: "Add dynamic states, ticket logic, profile changes and light/dark mode.",
  },
  {
    number: "07",
    title: "Usability testing",
    text: "Test the high-fidelity prototype with ten participants.",
  },
  {
    number: "08",
    title: "Refine & deliver",
    text: "Improve the interface based on testing and final UX reviews.",
  },
];

/* =========================================
   UX LAWS
========================================= */

const uxLaws = [
  {
    title: "Jakob's Law",
    text: "Users bring expectations from other digital products into a new interface.",
  },
  {
    title: "Fitts's Law",
    text: "Important interactive targets should be easy to reach and large enough to use comfortably.",
  },
  {
    title: "Hick's Law",
    text: "Reducing unnecessary choices can make important decisions feel easier.",
  },
  {
    title: "Miller's Law",
    text: "Information becomes easier to process when it is grouped into manageable chunks.",
  },
  {
    title: "Peak-End Rule",
    text: "Memorable moments and the end of a flow strongly influence the overall experience.",
  },
];

/* =========================================
   BENCHMARK STACK
========================================= */

const benchmarkImages = ["/images/lumiere/benchmarking_webdesign.webp"];

/* =========================================
   USER STORIES GALLERY

   Add your own WebP exports later.
========================================= */

const userStoryGallery = [];

/* =========================================
   FLOWCHART GALLERY

   Add your own WebP exports later.
========================================= */

const flowchartGallery = [];

/* =========================================
   MOSCOW
========================================= */

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

/* =========================================
   STRUCTURE STACK
========================================= */

const structureImages = [
  "/images/lumiere/moodboard-04.jpg",
  "/images/lumiere/moodboard-05.jpg",
  "/images/lumiere/moodboard-06.jpg",
];

/* =========================================
   GROUP WIREFRAMES

   Add sharp exports later.
========================================= */

const groupWireframeGallery = [];

/* =========================================
   WIREFRAME / PROTOTYPE STACK
========================================= */

const prototypeImages = [
  "/images/lumiere/moodboard-07.jpg",
  "/images/lumiere/moodboard-08.jpg",
  "/images/lumiere/moodboard-09.jpg",
];

/* =========================================
   HIGH FIDELITY

   Add your individual screen exports here.
========================================= */

const highFidelityGallery = [];

/* =========================================
   FUNCTIONALITIES
========================================= */

const functionalityCards = [
  {
    number: "01",
    title: "Search",
    text: "Find films quickly and move directly towards the most relevant result.",
  },
  {
    number: "02",
    title: "Favorites",
    text: "Save films and return to them later without having to search again.",
  },
  {
    number: "03",
    title: "Purchased tickets",
    text: "Keep current and previous cinema tickets accessible from the account.",
  },
  {
    number: "04",
    title: "Notifications",
    text: "Communicate relevant updates without interrupting the main cinema experience.",
  },
  {
    number: "05",
    title: "Ticket flow",
    text: "Guide users from film selection to tickets through a clear step-by-step process.",
  },
  {
    number: "06",
    title: "Feedback states",
    text: "Use contextual messages for connection problems, confirmation and leaving a flow.",
  },
];

/* =========================================
   VIDEOS

   Later add:
   {
     src: "/videos/lumiere/favorites.mp4",
     title: "Favorites",
     caption: "...",
   }
========================================= */

const interactionVideos = [];

/* =========================================
   VARIABLES
========================================= */

const variableCards = [
  {
    title: "Profile picture",
    text: "A variable allows the selected profile image to update immediately across the account experience.",
  },
  {
    title: "Ticket quantity",
    text: "Plus and minus controls change the number of tickets and update the total price.",
  },
  {
    title: "Light & dark mode",
    text: "Variables control visual themes so users can switch between light and dark interface states.",
  },
  {
    title: "Interface states",
    text: "Dynamic values help keep components and interactions consistent throughout the prototype.",
  },
];

/* =========================================
   USER TESTING
========================================= */

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

const testResults = [
  {
    value: "9 / 10",
    text: "successfully completed the student ticket flow",
  },
  {
    value: "100%",
    text: "found current and previous tickets",
  },
  {
    value: "10 / 10",
    text: "found and used the dark/light mode toggle",
  },
];

const testingFindings = [
  {
    title: "Account vs tickets",
    finding: "One participant confused Mijn tickets with Mijn account.",
    change:
      "The visual treatment of both sections needed a clearer distinction.",
  },
  {
    title: "Light mode",
    finding:
      "The light interface remained usable, but some users felt the yellow accents were slightly too bright.",
    change:
      "The accent treatment was refined to improve readability and visual comfort.",
  },
];

/* =========================================
   TESTING STACK
========================================= */

const testingImages = [
  "/images/lumiere/moodboard-10.jpg",
  "/images/lumiere/moodboard-11.jpg",
  "/images/lumiere/moodboard-12.jpg",
];

/* =========================================
   FINAL STACK
========================================= */

const finalImages = [
  "/images/lumiere/moodboard-13.jpg",
  "/images/lumiere/moodboard-14.jpg",
  "/images/lumiere/moodboard-15.jpg",
];

/* =========================================
   FINAL SCREEN GALLERY

   Add your sharp app screen exports here.
========================================= */

const finalScreenGallery = [];

/* =========================================
   FIGMA PROTOTYPES
========================================= */

const newUserPrototype =
  "https://embed.figma.com/proto/HOIpFGuIOSgTzNX3GzkAro/Wireframes-Lumi%C3%A9re-app---Yasmin-Khawaja?node-id=3542-9879&t=69yx41biI6rfSddq-1&scaling=scale-down&content-scaling=fixed&page-id=3131%3A118754&embed-host=share";

const returningUserPrototype =
  "https://embed.figma.com/proto/HOIpFGuIOSgTzNX3GzkAro/Wireframes-Lumi%C3%A9re-app---Yasmin-Khawaja?node-id=3016-678&t=k3oiCI7V4sqz4w3x-1&scaling=scale-down&content-scaling=fixed&page-id=3001%3A1371&starting-point-node-id=3001%3A1373&embed-host=share";
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
        <span>UX/UI design</span>
        <span>Interaction design</span>
        <span>UX laws</span>
        <span>Usability testing</span>
        <span>Figma variables</span>
      </div>

      <div class="case-hero__layout">
        <div>
          <p class="case-label reveal">Mobile app UX/UI case study</p>

          <h1 id="lumiere-title" class="reveal">Cinema Lumière</h1>

          <h2 class="case-hero__subtitle reveal">
            Designing a smoother cinema experience.
          </h2>

          <p class="case-hero__intro reveal">
            For this school project, I designed a mobile app concept for Cinema
            Lumière Mechelen with a focus on UX/UI, interaction design and
            usability.
          </p>

          <p class="case-hero__intro reveal">
            The project combined UX laws, benchmarking, user stories,
            information architecture, wireframes, Figma variables, high-fidelity
            prototyping and usability testing.
          </p>
        </div>

        <dl class="case-meta">
          <div class="case-meta__item reveal">
            <dt>Type</dt>
            <dd>School project</dd>
          </div>

          <div class="case-meta__item reveal">
            <dt>Format</dt>
            <dd>Group research · individual UI design</dd>
          </div>

          <div class="case-meta__item reveal">
            <dt>Focus</dt>
            <dd>UX/UI, interaction design, usability</dd>
          </div>

          <div class="case-meta__item reveal">
            <dt>Tools</dt>
            <dd>Figma, FigJam, Useberry</dd>
          </div>

          <div class="case-meta__item reveal">
            <dt>Testing</dt>
            <dd>10 participants</dd>
          </div>

          <div class="case-meta__item reveal">
            <dt>Outcome</dt>
            <dd>Interactive high-fidelity mobile app</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- =====================================
         HERO VISUAL
    ====================================== -->

    <section class="case-wide-visual">
      <img
        src="/images/lumiere/hero_webdesign.webp"
        alt="Cinema Lumière mobile app UX/UI case study"
      />
    </section>

    <!-- =====================================
         PROJECT OVERVIEW
    ====================================== -->

    <section ref="overview" class="section text-section">
      <p class="section-kicker reveal">Project overview</p>

      <div class="text-section__grid">
        <h2 class="reveal">
          From an existing cinema website to a complete mobile experience.
        </h2>

        <div>
          <p class="large-copy reveal">
            The project started with analysis rather than interface design.
          </p>

          <p class="reveal">
            We first evaluated the existing Cinema Lumière experience and
            explored where users could experience friction during common
            cinema-related tasks.
          </p>

          <p class="reveal">
            The group phase focused on UX research, structure and wireframes.
            Afterwards, each student developed an individual high-fidelity
            mobile app direction.
          </p>

          <p class="reveal">
            My final concept included ticket flows, search, favorites,
            notifications, account management, feedback states, Figma variables
            and an adjustable light and dark mode.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         TIMELINE
    ====================================== -->

    <section class="section timeline-section">
      <p class="section-kicker">Design process</p>

      <h2>Research first. Interaction second. Polish last.</h2>

      <div class="timeline-grid">
        <article
          v-for="step in timeline"
          :key="step.number"
          class="timeline-card"
        >
          <span>
            {{ step.number }}
          </span>

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
      id="lumiere-challenge"
      ref="challenge"
      class="section text-section"
    >
      <p class="section-kicker reveal">01 · Challenge</p>

      <div class="text-section__grid">
        <h2 class="reveal">Make common cinema tasks feel easier on mobile.</h2>

        <div>
          <p class="large-copy reveal">
            Before designing the app, we needed to understand where users could
            experience friction in the existing Cinema Lumière experience.
          </p>

          <p class="reveal">
            We explored tasks such as discovering films, checking film
            information, buying tickets, applying discounts, logging in,
            managing an account and reserving seats.
          </p>

          <p class="reveal">
            The challenge was not simply to redesign screens. It was to create a
            mobile UX/UI structure that felt intuitive, predictable and easy to
            navigate.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         RESEARCH & BENCHMARK
    ====================================== -->

    <section id="lumiere-research" ref="research" class="section text-section">
      <p class="section-kicker reveal">02 · Research &amp; benchmark</p>

      <div class="text-section__grid">
        <h2 class="reveal">Learning from familiar cinema experiences.</h2>

        <div>
          <p class="large-copy reveal">
            We compared Cinema Lumière with other cinema platforms to identify
            familiar interaction patterns, usability strengths and friction.
          </p>

          <p class="reveal">
            The benchmark looked at film discovery, ticket purchase, seat
            selection, account features, navigation, notifications and
            accessibility-related options.
          </p>

          <p class="reveal">
            UX laws helped turn observations into design principles instead of
            relying only on visual preference.
          </p>
        </div>
      </div>

      <div class="law-grid">
        <article
          v-for="(law, index) in uxLaws"
          :key="law.title"
          class="law-card-wrap reveal"
        >
          <TiltSurface class="law-card" :strength="3" :scale="1.01">
            <span>
              {{ String(index + 1).padStart(2, "0") }}
            </span>

            <h3>
              {{ law.title }}
            </h3>

            <p>
              {{ law.text }}
            </p>
          </TiltSurface>
        </article>
      </div>
    </section>

    <!-- =====================================
         BENCHMARK STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-heading">
        <p>Benchmarking &amp; UX analysis</p>

        <h2>Finding patterns before creating new ones.</h2>
      </div>

      <StickyImageStack
        :images="benchmarkImages"
        alt-prefix="Cinema Lumière UX benchmarking"
      />
    </section>

    <!-- =====================================
         USER STORIES
    ====================================== -->

    <section
      id="lumiere-user-needs"
      ref="userNeeds"
      class="section text-section"
    >
      <p class="section-kicker reveal">03 · User stories</p>

      <div class="text-section__grid">
        <h2 class="reveal">Turning features into actual user goals.</h2>

        <div>
          <p class="large-copy reveal">
            User stories helped us move from “what should the app contain?” to
            “what should someone be able to accomplish?”
          </p>

          <p class="reveal">
            They defined important actions such as discovering a film,
            purchasing tickets, reviewing previous bookings, managing favorites
            and controlling account preferences.
          </p>

          <p class="reveal">
            Acceptance criteria made those goals more concrete and gave us a
            clearer basis for later prototyping and testing.
          </p>
        </div>
      </div>

      <div v-if="userStoryGallery.length" class="gallery-wrap reveal">
        <CaseImageGallery
          :images="userStoryGallery"
          label="Cinema Lumière user stories"
        />
      </div>

      <div v-else class="asset-placeholder reveal">
        <span> Image to add later </span>

        <p>Export your user stories from FigJam or Figma as a sharp WebP.</p>
      </div>
    </section>

    <!-- =====================================
         FLOWCHART
    ====================================== -->

    <section class="section text-section">
      <p class="section-kicker">User flows</p>

      <div class="text-section__grid">
        <h2>Mapping how users move through the experience.</h2>

        <div>
          <p class="large-copy">
            Before designing individual screens, we mapped the key routes
            through the app.
          </p>

          <p>
            The flowchart connected actions such as discovering films, logging
            in, buying tickets, accessing favorites and managing settings.
          </p>

          <p>
            This gave the team one shared structure and helped identify where
            users might face unnecessary decisions or dead ends.
          </p>
        </div>
      </div>

      <div v-if="flowchartGallery.length" class="gallery-wrap">
        <CaseImageGallery
          :images="flowchartGallery"
          label="Cinema Lumière flowchart"
        />
      </div>

      <div v-else class="asset-placeholder">
        <span> Image to add later </span>

        <p>Flowchart / main user flows</p>
      </div>
    </section>

    <!-- =====================================
         STRUCTURE
    ====================================== -->

    <section
      id="lumiere-structure"
      ref="structure"
      class="section text-section"
    >
      <p class="section-kicker reveal">04 · Information architecture</p>

      <div class="text-section__grid">
        <h2 class="reveal">
          Deciding what belongs in the app before deciding how it looks.
        </h2>

        <div>
          <p class="large-copy reveal">
            After the benchmark, we prioritised the functionality using the
            MoSCoW method.
          </p>

          <p class="reveal">
            This helped distinguish essential cinema tasks from useful additions
            and ideas that were outside the scope of the project.
          </p>

          <p class="reveal">
            We then used card sorting and information architecture to organise
            the content into a structure that users could understand.
          </p>
        </div>
      </div>

      <div class="moscow-grid">
        <article class="moscow-card reveal">
          <span> Must have </span>

          <ul>
            <li v-for="item in mustHave" :key="item">
              {{ item }}
            </li>
          </ul>
        </article>

        <article class="moscow-card reveal">
          <span> Should have </span>

          <ul>
            <li v-for="item in shouldHave" :key="item">
              {{ item }}
            </li>
          </ul>
        </article>

        <article class="moscow-card reveal">
          <span> Could have </span>

          <ul>
            <li v-for="item in couldHave" :key="item">
              {{ item }}
            </li>
          </ul>
        </article>

        <article class="moscow-card reveal">
          <span> Out of scope </span>

          <ul>
            <li v-for="item in outOfScope" :key="item">
              {{ item }}
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section class="stack-section">
      <div class="section stack-heading">
        <p>Information architecture</p>

        <h2>Giving the app a logical backbone.</h2>
      </div>

      <StickyImageStack
        :images="structureImages"
        alt-prefix="Cinema Lumière information architecture"
      />
    </section>

    <!-- =====================================
         GROUP WIREFRAMES
    ====================================== -->

    <section
      id="lumiere-wireframes"
      ref="wireframes"
      class="section text-section"
    >
      <p class="section-kicker reveal">05 · Group wireframes</p>

      <div class="text-section__grid">
        <h2 class="reveal">
          One shared structure before four individual visual directions.
        </h2>

        <div>
          <p class="large-copy reveal">
            The low-fidelity phase was created as a group.
          </p>

          <p class="reveal">
            We designed the main flows and screens together so the interaction
            structure was established before each student moved into an
            individual high-fidelity direction.
          </p>

          <p class="reveal">
            Working in low fidelity allowed us to focus on hierarchy, navigation
            and task completion instead of getting distracted by styling too
            early.
          </p>
        </div>
      </div>

      <div v-if="groupWireframeGallery.length" class="gallery-wrap reveal">
        <CaseImageGallery
          :images="groupWireframeGallery"
          label="Cinema Lumière group wireframes"
        />
      </div>

      <div v-else class="asset-placeholder reveal">
        <span> Images to add later </span>

        <p>Group wireframes — overview and important flows</p>
      </div>
    </section>

    <!-- =====================================
         PROTOTYPE STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-heading">
        <p>Flows, wireframes &amp; early prototype</p>

        <h2>Structure came before visual polish.</h2>
      </div>

      <StickyImageStack
        :images="prototypeImages"
        alt-prefix="Cinema Lumière wireframes and early prototype"
      />
    </section>

    <!-- =====================================
         HIGH FIDELITY
    ====================================== -->

    <section
      id="lumiere-high-fidelity"
      ref="highFidelity"
      class="section text-section"
    >
      <p class="section-kicker reveal">06 · Individual high-fidelity design</p>

      <div class="text-section__grid">
        <h2 class="reveal">
          From a shared UX structure to my own visual system.
        </h2>

        <div>
          <p class="large-copy reveal">
            After the group wireframes, I developed the interface individually
            in Figma.
          </p>

          <p class="reveal">
            I refined visual hierarchy, interaction patterns, spacing,
            components and micro-interactions while keeping the underlying user
            flows consistent.
          </p>

          <p class="reveal">
            The app was designed for two different contexts: a new user who
            needs more guidance and a returning user who benefits from faster
            access to personal content.
          </p>
        </div>
      </div>

      <div v-if="highFidelityGallery.length" class="gallery-wrap reveal">
        <CaseImageGallery
          :images="highFidelityGallery"
          label="Cinema Lumière high fidelity app screens"
        />
      </div>

      <div v-else class="asset-placeholder reveal">
        <span> Screens to add later </span>

        <p>
          Add your strongest high-fidelity app screens here as WebP exports.
        </p>
      </div>
    </section>

    <!-- =====================================
         FUNCTIONALITIES
    ====================================== -->

    <section
      id="lumiere-interactions"
      ref="interactions"
      class="section interaction-section"
    >
      <p class="section-kicker reveal">
        07 · Functionalities &amp; interactions
      </p>

      <div class="interaction-heading">
        <h2 class="reveal">Small interactions make the app feel usable.</h2>

        <p class="reveal">
          The concept included the full cinema journey, from discovering a film
          to managing tickets and account preferences.
        </p>
      </div>

      <div class="function-grid">
        <article
          v-for="item in functionalityCards"
          :key="item.number"
          class="function-card reveal"
        >
          <span>
            {{ item.number }}
          </span>

          <h3>
            {{ item.title }}
          </h3>

          <p>
            {{ item.text }}
          </p>
        </article>
      </div>
    </section>

    <!-- =====================================
         INTERACTION VIDEOS
    ====================================== -->

    <section class="section video-section">
      <p class="section-kicker">Interaction demos</p>

      <div class="video-heading">
        <h2>Some interactions are easier to understand in motion.</h2>

        <p>
          Short clips can show micro-interactions and dynamic states without
          requiring someone to explore the complete prototype.
        </p>
      </div>

      <div v-if="interactionVideos.length" class="video-grid">
        <figure
          v-for="video in interactionVideos"
          :key="video.src"
          class="video-card"
        >
          <div class="video-card__frame">
            <video controls playsinline preload="metadata">
              <source :src="video.src" type="video/mp4" />

              Your browser does not support this video.
            </video>
          </div>

          <figcaption>
            <strong>
              {{ video.title }}
            </strong>

            <p v-if="video.caption">
              {{ video.caption }}
            </p>
          </figcaption>
        </figure>
      </div>

      <div v-else class="asset-placeholder">
        <span> Videos to add later </span>

        <p>
          Favorites · ticket flow · notifications · pop-ups · profile photo ·
          light/dark mode
        </p>
      </div>
    </section>

    <!-- =====================================
         VARIABLES
    ====================================== -->

    <section ref="variables" class="section variables-section">
      <p class="section-kicker reveal">08 · Figma variables</p>

      <div class="text-section__grid">
        <h2 class="reveal">
          Making the prototype behave more like a real product.
        </h2>

        <div>
          <p class="large-copy reveal">
            Variables were an important part of the interaction design.
          </p>

          <p class="reveal">
            Instead of building every state as a completely separate screen,
            variables allowed information and interface states to update
            dynamically.
          </p>

          <p class="reveal">
            I used them for interactions such as profile images, ticket
            quantities, prices and switching between light and dark mode.
          </p>
        </div>
      </div>

      <div class="variable-grid">
        <article
          v-for="(item, index) in variableCards"
          :key="item.title"
          class="variable-card reveal"
        >
          <span>
            {{ String(index + 1).padStart(2, "0") }}
          </span>

          <h3>
            {{ item.title }}
          </h3>

          <p>
            {{ item.text }}
          </p>
        </article>
      </div>
    </section>

    <!-- =====================================
         TESTING
    ====================================== -->

    <section id="lumiere-testing" ref="testing" class="section testing-section">
      <p class="section-kicker reveal">09 · Usability testing</p>

      <div class="text-section__grid">
        <h2 class="reveal">
          Ten participants tested the high-fidelity prototype.
        </h2>

        <div>
          <p class="large-copy reveal">
            The goal was to see whether the main flows were understandable
            without extra explanation.
          </p>

          <p class="reveal">
            Participants completed practical tasks covering tickets, navigation,
            account features, watchlists, notifications and interface
            preferences.
          </p>
        </div>
      </div>

      <div class="testing-grid">
        <article
          v-for="(task, index) in testTasks"
          :key="task"
          class="testing-card reveal"
        >
          <span>
            {{ String(index + 1).padStart(2, "0") }}
          </span>

          <p>
            {{ task }}
          </p>
        </article>
      </div>
    </section>

    <!-- =====================================
         TESTING STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-heading">
        <p>Usability testing</p>

        <h2>Observe first. Improve second.</h2>
      </div>

      <StickyImageStack
        :images="testingImages"
        alt-prefix="Cinema Lumière usability testing"
      />
    </section>

    <!-- =====================================
         TEST RESULTS
    ====================================== -->

    <section class="section results-section">
      <p class="section-kicker">Test results</p>

      <h2>The main structure already worked well.</h2>

      <div class="results-grid">
        <article
          v-for="result in testResults"
          :key="result.value"
          class="result-card"
        >
          <strong>
            {{ result.value }}
          </strong>

          <p>
            {{ result.text }}
          </p>
        </article>
      </div>

      <div class="findings-list">
        <article
          v-for="(finding, index) in testingFindings"
          :key="finding.title"
          class="finding"
        >
          <span class="finding__number">
            {{ String(index + 1).padStart(2, "0") }}
          </span>

          <div>
            <h3>
              {{ finding.title }}
            </h3>

            <div class="finding__columns">
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
         REFINE
    ====================================== -->

    <section id="lumiere-refine" ref="refine" class="section text-section">
      <p class="section-kicker reveal">10 · Refine</p>

      <div class="text-section__grid">
        <h2 class="reveal">Not every test result needs a complete redesign.</h2>

        <div>
          <p class="large-copy reveal">
            Most important user flows already worked, so the final iteration
            focused on smaller usability improvements.
          </p>

          <p class="reveal">
            I adjusted the visual distinction between account and ticket
            sections after one participant confused the two.
          </p>

          <p class="reveal">
            I also refined the yellow accent treatment in light mode after
            feedback about brightness and visual comfort.
          </p>

          <p class="reveal">
            The high-fidelity interface was additionally reviewed through
            Nielsen heuristics and C.R.A.P. principles to identify consistency,
            hierarchy and usability improvements.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         FINAL STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-heading">
        <p>Refined prototype</p>

        <h2>
          Improving the experience without redesigning what already worked.
        </h2>
      </div>

      <StickyImageStack
        :images="finalImages"
        alt-prefix="Cinema Lumière refined mobile app"
      />
    </section>

    <!-- =====================================
         FINAL RESULT
    ====================================== -->

    <section id="lumiere-final" ref="finalResult" class="section final-section">
      <p class="section-kicker reveal">11 · Final result</p>

      <h2 class="reveal">
        One app, two user contexts and a complete cinema journey.
      </h2>

      <p class="final-intro reveal">
        The final mobile app combines film discovery, tickets, favorites,
        notifications, profile management, dynamic variables and light/dark mode
        in one consistent UX/UI system.
      </p>

      <div class="final-tags">
        <span> Film discovery </span>

        <span> Ticket flows </span>

        <span> Favorites </span>

        <span> Variables </span>

        <span> Light &amp; dark mode </span>

        <span> Micro-interactions </span>
      </div>

      <div v-if="finalScreenGallery.length" class="gallery-wrap reveal">
        <CaseImageGallery
          :images="finalScreenGallery"
          label="Cinema Lumière final app screens"
        />
      </div>

      <div v-else class="asset-placeholder reveal">
        <span> Final screens to add later </span>

        <p>
          This is where we can show every important app screen in a sharp,
          clickable gallery.
        </p>
      </div>
    </section>

    <!-- =====================================
         FIGMA PROTOTYPES
    ====================================== -->

    <section class="section prototype-section">
      <p class="section-kicker">Interactive prototypes</p>

      <div class="prototype-heading">
        <h2>Explore both versions of the experience.</h2>

        <p>
          The two prototypes represent different levels of familiarity with the
          app: a new user who needs guidance and a returning user who can move
          more directly towards personal content.
        </p>
      </div>

      <div class="prototype-grid">
        <article class="prototype-card">
          <div class="prototype-card__heading">
            <span> Prototype 01 </span>

            <h3>New user</h3>

            <p>
              An experience with more guidance, onboarding and empty states.
            </p>
          </div>

          <div class="figma-frame figma-frame--mobile">
            <iframe
              :src="newUserPrototype"
              title="Cinema Lumière prototype for a new user"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </article>

        <article class="prototype-card">
          <div class="prototype-card__heading">
            <span> Prototype 02 </span>

            <h3>Returning user</h3>

            <p>
              Faster access to tickets, preferences and personalised content.
            </p>
          </div>

          <div class="figma-frame figma-frame--mobile">
            <iframe
              :src="returningUserPrototype"
              title="Cinema Lumière prototype for a returning user"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </article>
      </div>
    </section>

    <!-- =====================================
         MY ROLE
    ====================================== -->

    <section id="lumiere-role" ref="role" class="section role-section">
      <p class="section-kicker reveal">My contribution</p>

      <div class="text-section__grid">
        <h2 class="reveal">Group research. Individual product design.</h2>

        <div>
          <p class="large-copy reveal">
            I contributed throughout the UX research and interaction design
            process before developing my own high-fidelity version of the app.
          </p>

          <p class="reveal">
            My work included benchmarking, UX laws, information architecture,
            user stories, flows, wireframes, prototyping and design iterations.
          </p>

          <p class="reveal">
            In the individual phase, I translated the shared wireframe structure
            into my own visual system and interaction design.
          </p>

          <p class="reveal">
            I also implemented the required Figma variables, built the two user
            contexts and tested the high-fidelity prototype with ten
            participants.
          </p>
        </div>
      </div>

      <div class="contribution-grid">
        <article class="contribution-card reveal">
          <span> 01 </span>

          <h3>UX research</h3>

          <p>
            Benchmarking the existing experience and applying UX principles.
          </p>
        </article>

        <article class="contribution-card reveal">
          <span> 02 </span>

          <h3>Structure</h3>

          <p>
            User stories, flows, prioritisation and information architecture.
          </p>
        </article>

        <article class="contribution-card reveal">
          <span> 03 </span>

          <h3>UI design</h3>

          <p>Creating my individual high-fidelity app and visual system.</p>
        </article>

        <article class="contribution-card reveal">
          <span> 04 </span>

          <h3>Interaction</h3>

          <p>Prototyping variables, dynamic states and micro-interactions.</p>
        </article>

        <article class="contribution-card reveal">
          <span> 05 </span>

          <h3>Testing</h3>

          <p>Evaluating the prototype with ten participants and refining it.</p>
        </article>
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
      <p class="section-kicker reveal">Reflection</p>

      <h2 class="reveal">Structure before polish.</h2>

      <div class="reflection-grid">
        <p class="reveal">
          This project helped me understand that interaction design is not only
          about creating screens. It is about building a logical and usable
          experience between those screens.
        </p>

        <p class="reveal">
          UX laws gave me a stronger vocabulary for explaining why an
          interaction works or where an interface creates unnecessary friction.
        </p>

        <p class="reveal">
          User stories, flowcharts and information architecture showed me the
          importance of solving structural problems before investing time in
          high-fidelity visuals.
        </p>

        <p class="reveal">
          Working with variables made my Figma prototypes feel much closer to
          real product behaviour and pushed me to think in states rather than
          static screens.
        </p>

        <p class="reveal">
          Usability testing also taught me that a good result does not always
          require a dramatic redesign. Sometimes a few precise changes are more
          valuable than starting over.
        </p>

        <p class="reveal">
          Lumière strengthened my interest in UX/UI and interaction design
          because it combined analysis, visual design, prototyping and real user
          feedback in one project.
        </p>
      </div>
    </section>

    <!-- =====================================
         NEXT PROJECT
    ====================================== -->

    <section class="section next-project">
      <p>Next project</p>

      <RouterLink to="/projects/accessibility">
        <span> Café Crèma Accessibility </span>

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

.text-section {
  padding-top: 150px;

  padding-bottom: 150px;
}

.text-section__grid {
  display: grid;

  grid-template-columns:
    minmax(260px, 0.8fr)
    minmax(0, 1.2fr);

  gap: clamp(60px, 9vw, 150px);
}

.text-section__grid h2 {
  max-width: 610px;

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
  max-width: 850px;

  margin: 15px 0 22px;

  font-family: var(--font-heading);

  font-size: clamp(68px, 9vw, 145px);

  line-height: 0.82;

  letter-spacing: -0.075em;
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

  background: #111;
}

.case-wide-visual img {
  display: block;

  width: 100%;
  height: auto;

  object-fit: contain;
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

.timeline-grid {
  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  border-top: 1px solid rgba(17, 17, 17, 0.15);

  border-left: 1px solid rgba(17, 17, 17, 0.15);
}

.timeline-card {
  min-height: 260px;

  display: flex;

  flex-direction: column;

  padding: 24px;

  border-right: 1px solid rgba(17, 17, 17, 0.15);

  border-bottom: 1px solid rgba(17, 17, 17, 0.15);
}

.timeline-card > span {
  margin-bottom: auto;

  font-size: 40px;

  opacity: 0.12;
}

.timeline-card h3 {
  margin: 50px 0 10px;

  font-family: var(--font-heading);

  font-size: 17px;
}

.timeline-card p {
  font-size: 13px;

  line-height: 1.5;

  opacity: 0.72;
}

/* =========================================
   UX LAWS
========================================= */

.law-grid {
  display: grid;

  grid-template-columns: repeat(5, minmax(0, 1fr));

  gap: 12px;

  margin-top: 90px;
}

.law-card-wrap {
  min-width: 0;

  height: 100%;
}

.law-card {
  min-height: 230px;

  height: 100%;

  display: flex;

  flex-direction: column;

  padding: 22px;

  border: 1px solid rgba(17, 17, 17, 0.05);

  border-radius: 24px;

  background: rgba(211, 217, 189, 0.4);
}

.law-card > span {
  margin-bottom: auto;

  font-size: 36px;

  opacity: 0.13;
}

.law-card h3 {
  margin: 45px 0 10px;

  font-family: var(--font-heading);

  font-size: 16px;
}

.law-card p {
  font-size: 12px;

  line-height: 1.5;

  opacity: 0.7;
}

/* =========================================
   STACKS
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
   GALLERY / PLACEHOLDERS
========================================= */

.gallery-wrap {
  margin-top: 80px;
}

.asset-placeholder {
  min-height: 340px;

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

  font-size: 15px;

  line-height: 1.55;
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
  min-height: 250px;

  padding: 28px;

  border-radius: 26px;

  background: #efefeb;
}

.moscow-card > span {
  display: block;

  margin-bottom: 28px;

  font-size: 11px;

  letter-spacing: 0.08em;

  text-transform: uppercase;

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
   FUNCTIONALITIES
========================================= */

.interaction-section {
  padding-top: 150px;

  padding-bottom: 150px;
}

.interaction-heading,
.video-heading {
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    minmax(260px, 0.45fr);

  gap: 70px;

  align-items: end;
}

.interaction-heading h2,
.video-heading h2 {
  max-width: 850px;

  font-family: var(--font-heading);

  font-size: clamp(44px, 6vw, 84px);

  line-height: 0.95;

  letter-spacing: -0.06em;
}

.interaction-heading > p,
.video-heading > p {
  max-width: 420px;

  font-size: 14px;

  line-height: 1.6;

  opacity: 0.7;
}

.function-grid {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 12px;

  margin-top: 80px;
}

.function-card {
  min-height: 250px;

  display: flex;

  flex-direction: column;

  padding: 24px;

  border-radius: 24px;

  background: rgba(211, 217, 189, 0.38);
}

.function-card > span {
  margin-bottom: auto;

  font-size: 38px;

  opacity: 0.13;
}

.function-card h3 {
  margin: 45px 0 10px;

  font-family: var(--font-heading);

  font-size: 18px;
}

.function-card p {
  font-size: 13px;

  line-height: 1.5;

  opacity: 0.72;
}

/* =========================================
   VIDEO
========================================= */

.video-section {
  padding-top: 70px;

  padding-bottom: 170px;
}

.video-grid {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 18px;

  margin-top: 60px;
}

.video-card {
  min-width: 0;
}

.video-card__frame {
  overflow: hidden;

  border-radius: 26px;

  background: #111;
}

.video-card video {
  display: block;

  width: 100%;
  height: auto;

  aspect-ratio: 9 / 16;

  object-fit: cover;
}

.video-card figcaption {
  padding: 14px 3px 0;
}

.video-card figcaption strong {
  display: block;

  margin-bottom: 6px;

  font-family: var(--font-heading);

  font-size: 14px;
}

.video-card figcaption p {
  font-size: 12px;

  line-height: 1.5;

  opacity: 0.68;
}

/* =========================================
   VARIABLES
========================================= */

.variables-section {
  padding-top: 150px;

  padding-bottom: 160px;
}

.variable-grid {
  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 12px;

  margin-top: 85px;
}

.variable-card {
  min-height: 240px;

  display: flex;

  flex-direction: column;

  padding: 24px;

  border-radius: 24px;

  background: #efefeb;
}

.variable-card > span {
  margin-bottom: auto;

  font-size: 36px;

  opacity: 0.13;
}

.variable-card h3 {
  margin: 45px 0 10px;

  font-family: var(--font-heading);

  font-size: 17px;
}

.variable-card p {
  font-size: 13px;

  line-height: 1.5;

  opacity: 0.72;
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

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 12px;

  margin-top: 85px;
}

.testing-card {
  min-height: 200px;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  padding: 22px;

  border-radius: 24px;

  background: #efefeb;
}

.testing-card span {
  font-size: 36px;

  opacity: 0.13;
}

.testing-card p {
  max-width: 210px;

  font-size: 13px;

  line-height: 1.5;
}

/* =========================================
   RESULTS
========================================= */

.results-section {
  padding-top: 80px;

  padding-bottom: 160px;
}

.results-section > h2 {
  max-width: 900px;

  margin-bottom: 70px;

  font-family: var(--font-heading);

  font-size: clamp(44px, 6vw, 84px);

  line-height: 0.95;

  letter-spacing: -0.06em;
}

.results-grid {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 14px;

  margin-bottom: 90px;
}

.result-card {
  min-height: 260px;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  padding: 28px;

  border-radius: 28px;

  background: var(--color-sage);
}

.result-card strong {
  font-family: var(--font-heading);

  font-size: clamp(42px, 5vw, 72px);

  font-weight: 400;

  letter-spacing: -0.06em;
}

.result-card p {
  max-width: 220px;

  font-size: 13px;

  line-height: 1.45;
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
  margin-bottom: 30px;

  font-family: var(--font-heading);

  font-size: clamp(22px, 2.2vw, 31px);
}

.finding__columns {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 70px;
}

.finding__columns span {
  display: block;

  margin-bottom: 10px;

  font-size: 10px;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  opacity: 0.45;
}

.finding__columns p {
  max-width: 450px;

  font-size: 14px;

  line-height: 1.55;
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
  max-width: 680px;

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
   FIGMA PROTOTYPES
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

  margin-bottom: 65px;
}

.prototype-heading h2 {
  max-width: 780px;

  font-family: var(--font-heading);

  font-size: clamp(44px, 6vw, 84px);

  line-height: 0.95;

  letter-spacing: -0.06em;
}

.prototype-heading p {
  max-width: 440px;

  font-size: 14px;

  line-height: 1.6;

  opacity: 0.7;
}

.prototype-grid {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 22px;
}

.prototype-card {
  min-width: 0;
}

.prototype-card__heading {
  min-height: 170px;

  padding-bottom: 25px;
}

.prototype-card__heading > span {
  display: block;

  margin-bottom: 12px;

  font-size: 10px;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  opacity: 0.45;
}

.prototype-card__heading h3 {
  margin-bottom: 10px;

  font-family: var(--font-heading);

  font-size: clamp(28px, 3vw, 42px);

  letter-spacing: -0.04em;
}

.prototype-card__heading p {
  max-width: 430px;

  font-size: 13px;

  line-height: 1.55;

  opacity: 0.68;
}

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

  border: 0;

  background: transparent;
}

.figma-frame--mobile iframe {
  height: min(78vh, 850px);
}

/* =========================================
   CONTRIBUTION
========================================= */

.role-section {
  padding-top: 150px;

  padding-bottom: 160px;
}

.contribution-grid {
  display: grid;

  grid-template-columns: repeat(5, minmax(0, 1fr));

  gap: 12px;

  margin-top: 90px;
}

.contribution-card {
  min-height: 230px;

  display: flex;

  flex-direction: column;

  padding: 22px;

  border-radius: 24px;

  background: rgba(211, 217, 189, 0.38);
}

.contribution-card > span {
  margin-bottom: auto;

  font-size: 34px;

  opacity: 0.13;
}

.contribution-card h3 {
  margin: 45px 0 9px;

  font-family: var(--font-heading);

  font-size: 16px;
}

.contribution-card p {
  font-size: 12px;

  line-height: 1.5;

  opacity: 0.72;
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

@media (max-width: 1050px) {
  .law-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .function-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .variable-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contribution-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 950px) {
  .case-hero__layout,
  .text-section__grid,
  .interaction-heading,
  .video-heading,
  .prototype-heading {
    grid-template-columns: 1fr;

    gap: 50px;
  }

  .timeline-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .testing-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .prototype-grid {
    grid-template-columns: 1fr;
  }

  .prototype-card__heading {
    min-height: auto;
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
  .interaction-section,
  .variables-section,
  .testing-section,
  .final-section,
  .prototype-section,
  .role-section,
  .reflection-section {
    padding-top: 105px;

    padding-bottom: 105px;
  }

  .timeline-grid,
  .law-grid,
  .moscow-grid,
  .function-grid,
  .video-grid,
  .variable-grid,
  .testing-grid,
  .results-grid,
  .finding__columns,
  .contribution-grid,
  .reflection-grid {
    grid-template-columns: 1fr;
  }

  .timeline-card {
    min-height: 220px;
  }

  .finding {
    grid-template-columns: 1fr;

    gap: 18px;
  }

  .asset-placeholder {
    min-height: 280px;
  }

  .figma-frame--mobile iframe {
    height: 70vh;
  }
}
</style>
