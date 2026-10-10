<script setup>
import { ref } from "vue";

import { useScrollReveal } from "../composables/useScrollReveal";

import StickyImageStack from "../components/case/StickyImageStack.vue";
import CaseImageGallery from "../components/case/CaseImageGallery.vue";
import CaseProgress from "../components/case/CaseProgress.vue";
import BackToTop from "../components/case/BackToTop.vue";
import IconArrowUpRight from "../components/ui/IconArrowUpRight.vue";

/* =========================================
   SECTION REFS
========================================= */

const hero = ref(null);
const assignment = ref(null);
const audit = ref(null);
const approach = ref(null);
const wireframes = ref(null);
const highFidelity = ref(null);
const flows = ref(null);
const responsive = ref(null);
const contrast = ref(null);
const annotations = ref(null);
const readingOrder = ref(null);
const wcag = ref(null);
const finalResult = ref(null);
const reflection = ref(null);

/* =========================================
   PROGRESS
========================================= */

const progressSteps = [
  { id: "accessibility-intro", label: "Overview" },
  { id: "accessibility-assignment", label: "Assignment" },
  { id: "accessibility-audit", label: "Audit" },
  { id: "accessibility-approach", label: "Approach" },
  { id: "accessibility-wireframes", label: "Wireframes" },
  { id: "accessibility-high-fidelity", label: "High-fi" },
  { id: "accessibility-flows", label: "Flows" },
  { id: "accessibility-responsive", label: "Responsive" },
  { id: "accessibility-contrast", label: "Contrast" },
  { id: "accessibility-annotations", label: "Annotations" },
  { id: "accessibility-reading-order", label: "Reading order" },
  { id: "accessibility-wcag", label: "WCAG" },
  { id: "accessibility-final", label: "Final result" },
  { id: "accessibility-reflection", label: "Reflection" },
];

/* =========================================
   SCROLL REVEALS
========================================= */

[
  hero,
  assignment,
  audit,
  approach,
  wireframes,
  highFidelity,
  flows,
  responsive,
  contrast,
  annotations,
  readingOrder,
  wcag,
  finalResult,
  reflection,
].forEach((section) => {
  useScrollReveal(section, ".reveal", {
    stagger: 0.07,
  });
});

/* =========================================
   AUDIT
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
    text: "The website had a lot of whitespace, but no clear footer with important practical information.",
  },
  {
    number: "03",
    title: "Inconsistent menu",
    text: "The menu page looked visually disconnected from the rest of the website, reducing consistency.",
  },
  {
    number: "04",
    title: "Weak brand recognition",
    text: "The original website used very little colour, making the identity feel less recognisable.",
  },
  {
    number: "05",
    title: "Insufficient contrast",
    text: "Several original colour combinations did not meet WCAG AA contrast requirements.",
  },
  {
    number: "06",
    title: "Unclear ordering structure",
    text: "The menu and ordering experience needed clearer hierarchy, labels and actions.",
  },
];

/* =========================================
   IMAGE GALLERIES

   Add your sharp WebP exports later.
========================================= */

const currentWebsiteGallery = [];

const wireframeGallery = [];

const highFidelityGallery = [];

const happyFlowGallery = [];

const unhappyFlowGallery = [];

const responsiveGallery = [];

const contrastGallery = [];

const annotationGallery = [];

const readingOrderGallery = [];

/* =========================================
   WCAG CRITERIA
========================================= */

const wcagCriteria = [
  {
    number: "01",
    code: "1.1.1",
    level: "A",
    title: "Non-text Content",
    text: "Meaningful images and functional icons receive descriptive alternative text. Decorative images use an empty alt attribute so assistive technology can skip them.",
  },
  {
    number: "02",
    code: "1.4.3",
    level: "AA",
    title: "Contrast (Minimum)",
    text: "Colour combinations were checked so normal text reaches at least 4.5:1 contrast and large or bold text reaches at least 3:1. The palette was tested in Figma with a contrast plugin.",
  },
  {
    number: "03",
    code: "1.4.4",
    level: "AA",
    title: "Resize Text",
    text: "A separate large-text screen was designed to check whether content remains readable and usable when text is enlarged up to 200%.",
  },
  {
    number: "04",
    code: "1.3.1",
    level: "A",
    title: "Info and Relationships",
    text: "Content follows a logical heading hierarchy with clear grouping and structure. The reading order follows the visual hierarchy so relationships remain understandable without relying only on appearance.",
  },
  {
    number: "05",
    code: "1.3.4",
    level: "A",
    title: "Orientation",
    text: "The interface was designed to remain usable in both portrait and landscape orientation without important information disappearing.",
  },
  {
    number: "06",
    code: "1.3.5",
    level: "AA",
    title: "Identify Input Purpose",
    text: "Form fields clearly communicate what information is expected. Accessibility annotations document suitable input types and autocomplete purposes for implementation.",
  },
  {
    number: "07",
    code: "1.4.12",
    level: "AA",
    title: "Text Spacing",
    text: "Paragraphs, line spacing, letter spacing and whitespace were designed to support readability and scanning.",
  },
  {
    number: "08",
    code: "2.4.3",
    level: "A",
    title: "Focus Order",
    text: "The screens follow a logical and linear focus order from top to bottom and left to right. Reading-order annotations document the intended sequence.",
  },
  {
    number: "09",
    code: "3.2.3",
    level: "AA",
    title: "Consistent Navigation",
    text: "Navigation elements remain in predictable positions across screens and repeated interface elements keep the same structure and behaviour.",
  },
  {
    number: "10",
    code: "3.2.4",
    level: "AA",
    title: "Consistent Identification",
    text: "Icons and controls keep the same meaning throughout the interface. For example, the search icon is consistently used for search.",
  },
  {
    number: "11",
    code: "4.1.3",
    level: "AA",
    title: "Status Messages",
    text: "The design includes clear confirmation and error states, such as feedback when an item is added to the basket or a form is submitted successfully.",
  },
];

/* =========================================
   KEY IMPROVEMENTS
========================================= */

const improvements = [
  {
    number: "01",
    title: "Clearer navigation",
    text: "Predictable placement and consistent navigation patterns make the interface easier to understand.",
  },
  {
    number: "02",
    title: "Accessible colour system",
    text: "The palette was checked against WCAG AA contrast requirements instead of relying on visual preference alone.",
  },
  {
    number: "03",
    title: "Clearer menu structure",
    text: "Food and drink content is grouped more clearly so users can scan and compare options more easily.",
  },
  {
    number: "04",
    title: "Accessible ordering flow",
    text: "The ordering journey includes successful and unsuccessful states with clearer labels, actions and feedback.",
  },
  {
    number: "05",
    title: "Flexible layouts",
    text: "Large-text and landscape states show how the interface can adapt without losing content or hierarchy.",
  },
  {
    number: "06",
    title: "Accessible handoff",
    text: "Annotations and reading-order documentation make accessibility requirements visible before development.",
  },
];

/* =========================================
   EXISTING STACKS

   Keep these until you replace them
   with your final sharp exports.
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

const finalImages = [
  "/images/accessibility/moodboard-13.jpg",
  "/images/accessibility/moodboard-14.jpg",
  "/images/accessibility/moodboard-15.jpg",
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
        <span>Mobile UX</span>
        <span>WCAG AA</span>
        <span>Inclusive design</span>
        <span>Figma</span>
      </div>

      <div class="case-hero__layout">
        <div>
          <p class="case-label reveal">User-Centered Design case study</p>

          <h1 id="accessibility-title" class="reveal">Café Crèma</h1>

          <h2 class="case-hero__subtitle reveal">
            Designing accessibility into the experience.
          </h2>

          <p class="case-hero__intro reveal">
            For this individual User-Centered Design project, I redesigned Café
            Crèma's mobile website with accessibility as a core design
            requirement rather than a final check.
          </p>

          <p class="case-hero__intro reveal">
            The project focused on mobile UX, WCAG level AA, colour contrast,
            screen-reader structure, responsive behaviour and a clearer ordering
            experience in Figma.
          </p>
        </div>

        <dl class="case-meta">
          <div class="case-meta__item reveal">
            <dt>Project</dt>
            <dd>Café Crèma</dd>
          </div>

          <div class="case-meta__item reveal">
            <dt>Type</dt>
            <dd>Individual school project</dd>
          </div>

          <div class="case-meta__item reveal">
            <dt>Course</dt>
            <dd>User-Centered Design</dd>
          </div>

          <div class="case-meta__item reveal">
            <dt>Tools</dt>
            <dd>Figma · contrast plugin</dd>
          </div>

          <div class="case-meta__item reveal">
            <dt>Focus</dt>
            <dd>Mobile UX · accessibility · WCAG AA</dd>
          </div>

          <div class="case-meta__item reveal">
            <dt>Outcome</dt>
            <dd>Accessible mobile-first redesign</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- =====================================
         HERO VISUAL
    ====================================== -->

    <section class="case-wide-visual">
      <img
        src="/images/accessibility/moodboard-01.jpg"
        alt="Café Crèma accessible mobile website redesign"
      />
    </section>

    <!-- =====================================
         ASSIGNMENT
    ====================================== -->

    <section
      id="accessibility-assignment"
      ref="assignment"
      class="section text-section"
    >
      <p class="section-kicker reveal">The assignment</p>

      <div class="text-section__grid">
        <h2 class="reveal">
          Design a mobile-first hospitality experience with accessibility built
          in.
        </h2>

        <div>
          <p class="large-copy reveal">
            The goal was to create a mobile website or app for a hospitality
            business while applying WCAG level AA principles throughout the
            design process.
          </p>

          <p class="reveal">
            The experience needed a homepage, information page, menu or drinks
            menu, an ordering flow without payment, a happy and unhappy flow,
            and a contact page.
          </p>

          <p class="reveal">
            The project also required accessible typography, real content,
            large-text behaviour, accessibility annotations, documented WCAG
            criteria and a colour contrast matrix.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         AUDIT
    ====================================== -->

    <section id="accessibility-audit" ref="audit" class="section audit-section">
      <p class="section-kicker reveal">01 · Existing website analysis</p>

      <h2 class="audit-title reveal">
        First understand the barriers. Then redesign.
      </h2>

      <p class="audit-intro reveal">
        I reviewed the existing mobile website before creating new screens. The
        audit focused on usability, structure, visual consistency and
        accessibility issues that could create unnecessary friction.
      </p>

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
            <h3>{{ issue.title }}</h3>
            <p>{{ issue.text }}</p>
          </div>
        </article>
      </div>

      <div v-if="currentWebsiteGallery.length" class="gallery-wrap reveal">
        <CaseImageGallery
          :images="currentWebsiteGallery"
          label="Existing Café Crèma mobile website"
        />
      </div>

      <div v-else class="asset-placeholder reveal">
        <span>Screenshots to add later</span>

        <p>Mobile screenshots of the existing Café Crèma website.</p>
      </div>
    </section>

    <section class="stack-section">
      <div class="section stack-heading">
        <p>Existing experience</p>

        <h2>
          The redesign started with the problems already visible in the
          interface.
        </h2>
      </div>

      <StickyImageStack
        :images="auditImages"
        alt-prefix="Café Crèma existing website and accessibility audit"
      />
    </section>

    <!-- =====================================
         APPROACH
    ====================================== -->

    <section
      id="accessibility-approach"
      ref="approach"
      class="section text-section"
    >
      <p class="section-kicker reveal">02 · Design approach</p>

      <div class="text-section__grid">
        <h2 class="reveal">Structure first. Accessibility throughout.</h2>

        <div>
          <p class="large-copy reveal">
            I treated accessibility as part of the UX process from the first
            wireframes onwards.
          </p>

          <p class="reveal">
            I started with mobile-first low-fidelity wireframes to define what
            information users needed and how they should move through the
            website.
          </p>

          <p class="reveal">
            From there I created the high-fidelity experience, documented happy
            and unhappy states, checked contrast, designed for large text and
            landscape orientation and annotated the interface for accessible
            implementation.
          </p>

          <div class="design-question reveal">
            <span>Design goal</span>

            <p>
              Create a clearer and more inclusive Café Crèma experience that
              remains understandable, readable and operable across different
              user needs and device states.
            </p>
          </div>
        </div>
      </div>

      <div class="process-strip reveal">
        <span>Audit</span>
        <span>Wireframes</span>
        <span>High-fi</span>
        <span>Happy / unhappy flow</span>
        <span>Responsive states</span>
        <span>Annotations</span>
        <span>WCAG documentation</span>
      </div>
    </section>

    <!-- =====================================
         WIREFRAMES
    ====================================== -->

    <section
      id="accessibility-wireframes"
      ref="wireframes"
      class="section text-section"
    >
      <p class="section-kicker reveal">03 · Low-fi wireframes</p>

      <div class="text-section__grid">
        <h2 class="reveal">
          Building the mobile structure before styling the interface.
        </h2>

        <div>
          <p class="large-copy reveal">
            The first designs focused on content hierarchy, navigation and the
            ordering journey.
          </p>

          <p class="reveal">
            Working in low fidelity made it easier to evaluate whether the
            required pages and interactions were understandable before colour,
            imagery and styling were introduced.
          </p>

          <p class="reveal">
            The wireframes covered the main mobile experience, including home,
            information, menu, ordering and contact.
          </p>
        </div>
      </div>

      <div v-if="wireframeGallery.length" class="gallery-wrap reveal">
        <CaseImageGallery
          :images="wireframeGallery"
          label="Café Crèma low fidelity wireframes"
        />
      </div>

      <div v-else class="asset-placeholder reveal">
        <span>Wireframes to add later</span>

        <p>Add your low-fi mobile wireframes here as sharp WebP exports.</p>
      </div>
    </section>

    <section class="stack-section">
      <div class="section stack-heading">
        <p>Wireframes &amp; redesign</p>

        <h2>
          Accessibility decisions became visible before the final visual layer.
        </h2>
      </div>

      <StickyImageStack
        :images="redesignImages"
        alt-prefix="Café Crèma accessible wireframes and redesign"
      />
    </section>

    <!-- =====================================
         HIGH FIDELITY
    ====================================== -->

    <section
      id="accessibility-high-fidelity"
      ref="highFidelity"
      class="section text-section"
    >
      <p class="section-kicker reveal">04 · High-fidelity design</p>

      <div class="text-section__grid">
        <h2 class="reveal">
          Turning the structure into a clearer accessible interface.
        </h2>

        <div>
          <p class="large-copy reveal">
            The high-fidelity design translated the mobile structure into a more
            consistent and recognisable Café Crèma experience.
          </p>

          <p class="reveal">
            I used clearer hierarchy, more deliberate spacing, stronger contrast
            and consistent navigation patterns across the screens.
          </p>

          <p class="reveal">
            The menu and ordering experience were simplified so labels, prices
            and actions were easier to scan and understand.
          </p>
        </div>
      </div>

      <div v-if="highFidelityGallery.length" class="gallery-wrap reveal">
        <CaseImageGallery
          :images="highFidelityGallery"
          label="Café Crèma high fidelity accessible interface"
        />
      </div>

      <div v-else class="asset-placeholder reveal">
        <span>Screens to add later</span>

        <p>Your strongest high-fidelity mobile screens.</p>
      </div>
    </section>

    <!-- =====================================
         HAPPY + UNHAPPY
    ====================================== -->

    <section id="accessibility-flows" ref="flows" class="section flows-section">
      <p class="section-kicker reveal">05 · Happy &amp; unhappy flow</p>

      <div class="text-section__grid">
        <h2 class="reveal">
          Accessible UX also explains what happens when things go wrong.
        </h2>

        <div>
          <p class="large-copy reveal">
            I designed both a successful ordering journey and an unsuccessful
            state so the interface could communicate progress, confirmation and
            problems clearly.
          </p>

          <p class="reveal">
            The happy flow shows the expected route through the ordering
            process, while the unhappy flow documents how the interface responds
            when someone cannot continue as expected.
          </p>
        </div>
      </div>

      <div class="flow-columns">
        <article class="flow-block reveal">
          <div class="flow-block__heading">
            <span>01</span>

            <div>
              <p>Happy flow</p>
              <h3>Successful ordering journey</h3>
            </div>
          </div>

          <CaseImageGallery
            v-if="happyFlowGallery.length"
            :images="happyFlowGallery"
            label="Café Crèma happy ordering flow"
          />

          <div v-else class="asset-placeholder asset-placeholder--compact">
            <span>Images to add later</span>
            <p>High-fi happy flow</p>
          </div>
        </article>

        <article class="flow-block reveal">
          <div class="flow-block__heading">
            <span>02</span>

            <div>
              <p>Unhappy flow</p>
              <h3>Error and recovery states</h3>
            </div>
          </div>

          <CaseImageGallery
            v-if="unhappyFlowGallery.length"
            :images="unhappyFlowGallery"
            label="Café Crèma unhappy ordering flow"
          />

          <div v-else class="asset-placeholder asset-placeholder--compact">
            <span>Images to add later</span>
            <p>High-fi unhappy flow</p>
          </div>
        </article>
      </div>
    </section>

    <!-- =====================================
         LARGE TEXT / LANDSCAPE
    ====================================== -->

    <section
      id="accessibility-responsive"
      ref="responsive"
      class="section text-section"
    >
      <p class="section-kicker reveal">06 · Large text &amp; orientation</p>

      <div class="text-section__grid">
        <h2 class="reveal">
          The layout should adapt without losing information.
        </h2>

        <div>
          <p class="large-copy reveal">
            Accessibility was tested beyond the default portrait mobile screen.
          </p>

          <p class="reveal">
            I created a large-text version to check whether the interface
            remained understandable when typography was significantly enlarged.
          </p>

          <p class="reveal">
            I also designed a landscape state to show that the content could
            adapt when the device orientation changes.
          </p>
        </div>
      </div>

      <div class="responsive-highlight reveal">
        <div>
          <strong>200%</strong>
          <span>Text resizing</span>
        </div>

        <p>
          Content should remain readable and usable when users enlarge text
          rather than forcing them to work with the designer's default size.
        </p>
      </div>

      <div v-if="responsiveGallery.length" class="gallery-wrap reveal">
        <CaseImageGallery
          :images="responsiveGallery"
          label="Café Crèma large text and landscape screens"
        />
      </div>

      <div v-else class="asset-placeholder reveal">
        <span>Screens to add later</span>

        <p>Large-text screen · landscape screen</p>
      </div>
    </section>

    <!-- =====================================
         CONTRAST
    ====================================== -->

    <section
      id="accessibility-contrast"
      ref="contrast"
      class="section text-section"
    >
      <p class="section-kicker reveal">07 · Colour contrast</p>

      <div class="text-section__grid">
        <h2 class="reveal">
          Brand colours still need to work when readability is the priority.
        </h2>

        <div>
          <p class="large-copy reveal">
            I created a contrast matrix to check how the brand colours perform
            when combined with text and interface elements.
          </p>

          <p class="reveal">
            Normal text was evaluated against the WCAG AA minimum of 4.5:1,
            while large or bold text was checked against the 3:1 threshold.
          </p>

          <p class="reveal">
            The matrix helped identify combinations that were suitable and
            combinations that should not be used for important information.
          </p>
        </div>
      </div>

      <div class="contrast-callout reveal">
        <div>
          <span>Normal text</span>
          <strong>4.5:1</strong>
        </div>

        <div>
          <span>Large text</span>
          <strong>3:1</strong>
        </div>
      </div>

      <div v-if="contrastGallery.length" class="gallery-wrap reveal">
        <CaseImageGallery
          :images="contrastGallery"
          label="Café Crèma colour contrast matrix"
        />
      </div>

      <div v-else class="asset-placeholder reveal">
        <span>Matrix to add later</span>

        <p>Brand colour contrast matrix</p>
      </div>
    </section>

    <!-- =====================================
         ANNOTATIONS
    ====================================== -->

    <section
      id="accessibility-annotations"
      ref="annotations"
      class="section text-section"
    >
      <p class="section-kicker reveal">08 · Accessibility annotations</p>

      <div class="text-section__grid">
        <h2 class="reveal">
          Accessible design decisions need to survive the handoff.
        </h2>

        <div>
          <p class="large-copy reveal">
            The interface was annotated so accessibility requirements were not
            left as assumptions for a developer.
          </p>

          <p class="reveal">
            The annotations document elements such as buttons, links, meaningful
            and decorative images, headings, form fields and input purpose.
          </p>

          <p class="reveal">
            This makes the intended semantics and behaviour visible alongside
            the visual interface.
          </p>
        </div>
      </div>

      <div v-if="annotationGallery.length" class="gallery-wrap reveal">
        <CaseImageGallery
          :images="annotationGallery"
          label="Café Crèma accessibility annotations"
        />
      </div>

      <div v-else class="asset-placeholder reveal">
        <span>Screens to add later</span>

        <p>Accessibility annotation screens</p>
      </div>
    </section>

    <!-- =====================================
         READING ORDER
    ====================================== -->

    <section
      id="accessibility-reading-order"
      ref="readingOrder"
      class="section reading-section"
    >
      <p class="section-kicker reveal">09 · Reading order</p>

      <div class="reading-layout">
        <div>
          <h2 class="reveal">
            Visual order and screen-reader order should tell the same story.
          </h2>

          <p class="large-copy reveal">
            I documented the intended reading and focus sequence from top to
            bottom and left to right.
          </p>

          <p class="reveal">
            This helps preserve the relationship between headings, text, actions
            and form controls when the interface is experienced through
            assistive technology rather than visually.
          </p>
        </div>

        <div class="reading-order-demo reveal">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
        </div>
      </div>

      <div v-if="readingOrderGallery.length" class="gallery-wrap reveal">
        <CaseImageGallery
          :images="readingOrderGallery"
          label="Café Crèma reading order"
        />
      </div>

      <div v-else class="asset-placeholder reveal">
        <span>Screens to add later</span>

        <p>Reading order / focus-order annotations</p>
      </div>
    </section>

    <!-- =====================================
         ACCESSIBILITY STACK
    ====================================== -->

    <section class="stack-section">
      <div class="section stack-heading">
        <p>Accessibility documentation</p>

        <h2>
          Contrast, annotations and structure turn accessibility into something
          visible.
        </h2>
      </div>

      <StickyImageStack
        :images="accessibilityImages"
        alt-prefix="Café Crèma accessibility documentation"
      />
    </section>

    <!-- =====================================
         WCAG
    ====================================== -->

    <section id="accessibility-wcag" ref="wcag" class="section wcag-section">
      <p class="section-kicker reveal">10 · WCAG documentation</p>

      <div class="wcag-heading">
        <h2 class="reveal">11 documented success criteria.</h2>

        <p class="reveal">
          Each criterion connects a WCAG requirement to a concrete design or
          implementation decision in the Café Crèma experience.
        </p>
      </div>

      <div class="wcag-list">
        <article
          v-for="criterion in wcagCriteria"
          :key="criterion.code"
          class="wcag-item reveal"
        >
          <div class="wcag-item__number">
            {{ criterion.number }}
          </div>

          <div class="wcag-item__code">
            <span>{{ criterion.code }}</span>
            <small>Level {{ criterion.level }}</small>
          </div>

          <div>
            <h3>{{ criterion.title }}</h3>
            <p>{{ criterion.text }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- =====================================
         KEY IMPROVEMENTS
    ====================================== -->

    <section class="section improvements-section">
      <p class="section-kicker">Key improvements</p>

      <h2>Small accessibility decisions can remove big barriers.</h2>

      <div class="improvements-grid">
        <article
          v-for="item in improvements"
          :key="item.number"
          class="improvement-card"
        >
          <span>{{ item.number }}</span>

          <h3>{{ item.title }}</h3>

          <p>{{ item.text }}</p>
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
      <p class="section-kicker reveal">11 · Final result</p>

      <h2 class="reveal">
        A more structured, flexible and accessible Café Crèma experience.
      </h2>

      <p class="final-intro reveal">
        The final mobile-first concept combines clearer information hierarchy,
        accessible colour choices, responsive states, documented semantics and a
        more understandable ordering experience.
      </p>

      <div class="final-tags reveal">
        <span>WCAG AA</span>
        <span>Mobile-first UX</span>
        <span>Happy &amp; unhappy flow</span>
        <span>200% text</span>
        <span>Landscape</span>
        <span>Reading order</span>
        <span>Accessibility annotations</span>
      </div>
    </section>

    <section class="stack-section">
      <div class="section stack-heading">
        <p>Final accessible redesign</p>

        <h2>
          Accessibility became part of the system, not a layer added afterwards.
        </h2>
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
      <p class="section-kicker reveal">Reflection</p>

      <h2 class="reveal">Accessibility is part of the design.</h2>

      <div class="reflection-grid">
        <p class="reveal">
          This project taught me that accessibility should influence design
          decisions from the beginning instead of becoming a checklist at the
          end.
        </p>

        <p class="reveal">
          Colour, typography, orientation, navigation, form structure and
          feedback all affect whether someone can understand and use an
          interface.
        </p>

        <p class="reveal">
          Designing the large-text and landscape versions made responsive
          accessibility much more concrete because I could see what happens when
          the default layout is challenged.
        </p>

        <p class="reveal">
          Accessibility annotations and reading-order documentation also showed
          me that an accessible design is not complete unless the intended
          behaviour can be communicated during development.
        </p>

        <p class="reveal">
          The WCAG criteria gave me a stronger framework for explaining design
          decisions with measurable requirements rather than personal
          preference.
        </p>

        <p class="reveal">
          The project changed how I look at UX/UI: removing barriers often
          creates a clearer experience for everyone.
        </p>
      </div>

      <p class="reflection-statement reveal">
        Accessible design is better design.
      </p>
    </section>

    <!-- =====================================
         BACK
    ====================================== -->

    <section class="section next-project">
      <p>Back to</p>

      <RouterLink to="/projects">
        <span>All projects</span>

        <IconArrowUpRight />
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
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
  grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.2fr);
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

.gallery-wrap {
  margin-top: 80px;
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
  grid-template-columns: 1.25fr 0.75fr;
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
  background: #e8eadf;
}

.case-wide-visual img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* =========================================
   AUDIT
========================================= */

.audit-section {
  padding-top: 150px;
  padding-bottom: 150px;
}

.audit-title {
  max-width: 980px;
  margin-bottom: 28px;
  font-family: var(--font-heading);
  font-size: clamp(48px, 7vw, 96px);
  line-height: 0.93;
  letter-spacing: -0.065em;
}

.audit-intro {
  max-width: 670px;
  margin-bottom: 80px;
  font-size: 16px;
  line-height: 1.65;
  opacity: 0.72;
}

.audit-list {
  border-top: 1px solid rgba(17, 17, 17, 0.15);
}

.audit-item {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 45px;
  padding: 42px 0;
  border-bottom: 1px solid rgba(17, 17, 17, 0.15);
}

.audit-item__number {
  font-size: clamp(34px, 4vw, 58px);
  opacity: 0.13;
}

.audit-item h3 {
  max-width: 500px;
  margin-bottom: 12px;
  font-family: var(--font-heading);
  font-size: clamp(21px, 2.2vw, 30px);
}

.audit-item p {
  max-width: 630px;
  font-size: 14px;
  line-height: 1.55;
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
   APPROACH
========================================= */

.design-question {
  margin-top: 50px;
  padding: 30px;
  border-radius: 28px;
  background: var(--color-sage);
}

.design-question span {
  display: block;
  margin-bottom: 12px;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.55;
}

.design-question p {
  font-size: clamp(21px, 2vw, 28px);
  line-height: 1.4;
}

.process-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 80px;
}

.process-strip span {
  padding: 10px 14px;
  border: 1px solid rgba(17, 17, 17, 0.12);
  border-radius: 999px;
  font-size: 11px;
}

/* =========================================
   PLACEHOLDERS
========================================= */

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

.asset-placeholder--compact {
  min-height: 240px;
  margin-top: 30px;
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
   FLOWS
========================================= */

.flows-section {
  padding-top: 150px;
  padding-bottom: 150px;
}

.flow-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26px;
  margin-top: 90px;
}

.flow-block {
  min-width: 0;
}

.flow-block__heading {
  display: grid;
  grid-template-columns: 70px 1fr;
  gap: 18px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(17, 17, 17, 0.14);
}

.flow-block__heading > span {
  font-size: 38px;
  opacity: 0.13;
}

.flow-block__heading p {
  margin-bottom: 8px;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.45;
}

.flow-block__heading h3 {
  font-family: var(--font-heading);
  font-size: clamp(22px, 2.4vw, 34px);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

/* =========================================
   RESPONSIVE
========================================= */

.responsive-highlight {
  display: grid;
  grid-template-columns: 0.55fr 1.45fr;
  gap: 60px;
  align-items: end;
  margin-top: 90px;
  padding: 36px;
  border-radius: 28px;
  background: var(--color-sage);
}

.responsive-highlight > div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.responsive-highlight strong {
  font-family: var(--font-heading);
  font-size: clamp(70px, 10vw, 150px);
  font-weight: 400;
  line-height: 0.8;
  letter-spacing: -0.08em;
}

.responsive-highlight span {
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.55;
}

.responsive-highlight p {
  max-width: 500px;
  font-size: clamp(18px, 2vw, 27px);
  line-height: 1.4;
}

/* =========================================
   CONTRAST
========================================= */

.contrast-callout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 80px;
}

.contrast-callout > div {
  min-height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px;
  border-radius: 28px;
  background: #111;
  color: #f9f9f9;
}

.contrast-callout span {
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.64;
}

.contrast-callout strong {
  font-family: var(--font-heading);
  font-size: clamp(58px, 8vw, 110px);
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: -0.07em;
}

/* =========================================
   READING ORDER
========================================= */

.reading-section {
  padding-top: 150px;
  padding-bottom: 150px;
}

.reading-layout {
  display: grid;
  grid-template-columns: 1fr 0.75fr;
  gap: clamp(70px, 10vw, 150px);
  align-items: center;
}

.reading-layout h2 {
  max-width: 760px;
  margin-bottom: 32px;
  font-family: var(--font-heading);
  font-size: clamp(42px, 6vw, 82px);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.reading-layout p {
  max-width: 600px;
  font-size: 15px;
  line-height: 1.65;
}

.reading-layout p + p {
  margin-top: 22px;
}

.reading-order-demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid rgba(17, 17, 17, 0.14);
  border-left: 1px solid rgba(17, 17, 17, 0.14);
}

.reading-order-demo span {
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(17, 17, 17, 0.14);
  border-bottom: 1px solid rgba(17, 17, 17, 0.14);
  font-family: var(--font-heading);
  font-size: 42px;
  opacity: 0.18;
}

/* =========================================
   WCAG
========================================= */

.wcag-section {
  padding-top: 160px;
  padding-bottom: 170px;
}

.wcag-heading {
  display: grid;
  grid-template-columns: 1fr 0.45fr;
  gap: 70px;
  align-items: end;
  margin-bottom: 80px;
}

.wcag-heading h2 {
  max-width: 850px;
  font-family: var(--font-heading);
  font-size: clamp(48px, 7vw, 96px);
  line-height: 0.93;
  letter-spacing: -0.065em;
}

.wcag-heading p {
  max-width: 440px;
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.72;
}

.wcag-list {
  border-top: 1px solid rgba(17, 17, 17, 0.15);
}

.wcag-item {
  display: grid;
  grid-template-columns: 90px 130px 1fr;
  gap: 35px;
  padding: 38px 0;
  border-bottom: 1px solid rgba(17, 17, 17, 0.15);
}

.wcag-item__number {
  font-size: 36px;
  opacity: 0.13;
}

.wcag-item__code span {
  display: block;
  font-family: var(--font-heading);
  font-size: 21px;
}

.wcag-item__code small {
  display: block;
  margin-top: 7px;
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.45;
}

.wcag-item h3 {
  margin-bottom: 12px;
  font-family: var(--font-heading);
  font-size: clamp(20px, 2vw, 28px);
}

.wcag-item p {
  max-width: 720px;
  font-size: 14px;
  line-height: 1.6;
}

/* =========================================
   IMPROVEMENTS
========================================= */

.improvements-section {
  padding-top: 80px;
  padding-bottom: 170px;
}

.improvements-section > h2 {
  max-width: 920px;
  margin-bottom: 75px;
  font-family: var(--font-heading);
  font-size: clamp(44px, 6vw, 84px);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.improvements-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.improvement-card {
  min-height: 260px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 24px;
  background: rgba(211, 217, 189, 0.38);
}

.improvement-card > span {
  margin-bottom: auto;
  font-size: 38px;
  opacity: 0.13;
}

.improvement-card h3 {
  margin: 45px 0 10px;
  font-family: var(--font-heading);
  font-size: 18px;
}

.improvement-card p {
  font-size: 13px;
  line-height: 1.5;
  opacity: 0.72;
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
  max-width: 700px;
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

.reflection-statement {
  max-width: 1100px;
  margin-top: 110px;
  font-family: var(--font-heading);
  font-size: clamp(42px, 7vw, 100px);
  line-height: 0.94;
  letter-spacing: -0.065em;
}

/* =========================================
   BACK
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
  .improvements-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 950px) {
  .case-hero__layout,
  .text-section__grid,
  .reading-layout,
  .wcag-heading {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .flow-columns {
    grid-template-columns: 1fr;
    gap: 80px;
  }

  .wcag-item {
    grid-template-columns: 70px 110px 1fr;
    gap: 24px;
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
  .audit-section,
  .flows-section,
  .reading-section,
  .wcag-section,
  .improvements-section,
  .final-section,
  .reflection-section {
    padding-top: 105px;
    padding-bottom: 105px;
  }

  .audit-item,
  .wcag-item {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .responsive-highlight,
  .contrast-callout,
  .reflection-grid,
  .improvements-grid {
    grid-template-columns: 1fr;
  }

  .responsive-highlight {
    gap: 35px;
  }

  .reading-order-demo span {
    min-height: 115px;
  }

  .asset-placeholder {
    min-height: 280px;
  }

  .reflection-statement {
    margin-top: 80px;
  }
}
</style>
