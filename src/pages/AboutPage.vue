<script setup>
import { ref, onBeforeUnmount } from "vue";

import FallingDog from "../components/about/FallingDog.vue";
import TiltSurface from "../components/ui/TiltSurface.vue";
import SectionHeading from "../components/ui/SectionHeading.vue";

import { useScrollReveal } from "../composables/useScrollReveal";

/* =========================================
   SECTION REFS
========================================= */

const intro = ref(null);
const why = ref(null);
const care = ref(null);
const thinking = ref(null);
const more = ref(null);
const ending = ref(null);

/* =========================================
   SCROLL REVEAL
========================================= */

useScrollReveal(intro, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(why, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(care, ".reveal", {
  stagger: 0.09,
});

useScrollReveal(thinking, ".reveal", {
  stagger: 0.1,
});

useScrollReveal(more, ".reveal", {
  stagger: 0.07,
});

useScrollReveal(ending, ".reveal", {
  stagger: 0.08,
});

/* =========================================
   INTRO WATER RIPPLES
========================================= */

const ripples = ref([]);

let rippleId = 0;
let lastRippleTime = 0;

const rippleTimers = new Set();

function createRipple(event) {
  /*
    Keep this interaction quiet on touch devices.
    The FallingDog and scroll reveals already
    provide enough movement there.
  */

  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
    return;
  }

  const target = event.currentTarget;

  if (!target) return;

  const now = performance.now();

  /*
    Prevent hundreds of ripples
    from being created every second.
  */

  if (now - lastRippleTime < 120) {
    return;
  }

  lastRippleTime = now;

  const rect = target.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const id = rippleId++;

  ripples.value.push({
    id,
    x,
    y,
  });

  const timer = window.setTimeout(() => {
    ripples.value = ripples.value.filter((ripple) => ripple.id !== id);

    rippleTimers.delete(timer);
  }, 1100);

  rippleTimers.add(timer);
}

/* =========================================
   CARE DATA
========================================= */

const careItems = [
  {
    title: "User-friendly",

    text: "I want people to understand and use a digital experience without having to think too much about how it works.",

    type: "water",
  },

  {
    title: "Intuitive",

    text: "I care about creating UX and interactions that feel natural, accessible and easy to understand.",

    type: "leaf",
  },

  {
    title: "A good feeling",

    text: "Good design should not only work well. It should also leave the user with a positive and memorable feeling.",

    type: "lotus",
  },
];

/* =========================================
   CLEANUP
========================================= */

onBeforeUnmount(() => {
  rippleTimers.forEach((timer) => {
    window.clearTimeout(timer);
  });

  rippleTimers.clear();
});
</script>

<template>
  <main class="about-page">
    <!-- =====================================
         FALLING DOG
    ====================================== -->

    <FallingDog />

    <!-- =====================================
         WHO IS YASMIN
    ====================================== -->

    <section
      ref="intro"
      class="section about-intro"
      aria-labelledby="about-title"
    >
      <!-- COPY -->

      <div class="about-intro__copy">
        <p class="about-eyebrow reveal">A little about me</p>

        <h1 id="about-title" class="reveal">Who is Yasmin</h1>

        <p class="reveal">
          I’m Yasmin, a Digital Experience Design student interested in UX/UI,
          interaction design, accessibility and front-end development. I enjoy
          combining clear structure with a soft and playful visual style.
        </p>

        <p class="reveal">
          I have a creative mind and a slightly nerdy side. Outside of design, I
          enjoy watching series and anime, collecting cute little trinkets and
          exploring visual ideas that often find their way back into my work.
        </p>
      </div>

      <!-- INTERACTIVE WATER VISUAL -->

      <div
        class="about-intro__visual reveal"
        aria-hidden="true"
        @pointermove="createRipple"
      >
        <div class="about-intro__water-glow"></div>

        <span
          v-for="ripple in ripples"
          :key="ripple.id"
          class="about-ripple"
          :style="{
            left: ripple.x + 'px',
            top: ripple.y + 'px',
          }"
        ></span>

        <div class="about-intro__water-ring about-intro__water-ring--one"></div>

        <div class="about-intro__water-ring about-intro__water-ring--two"></div>

        <img
          src="/images/lotus.png"
          alt=""
          class="about-intro__lotus about-intro__lotus--one"
        />

        <img
          src="/images/lotus.png"
          alt=""
          class="about-intro__lotus about-intro__lotus--two"
        />

        <img src="/images/leaf.png" alt="" class="about-intro__leaf" />
      </div>
    </section>

    <!-- =====================================
         WHY I DESIGN
    ====================================== -->

    <section ref="why" class="section why-section" aria-labelledby="why-title">
      <div class="why-layout">
        <div>
          <p class="about-eyebrow reveal">What drives me</p>

          <h2 id="why-title" class="about-section-title reveal">
            Why I design
          </h2>
        </div>

        <div class="why-copy">
          <p class="reveal">
            I enjoy the entire UX and design process, from researching users and
            finding inspiration to creating interfaces, prototyping, testing,
            collecting feedback and improving the result.
          </p>

          <p class="reveal">
            What I like most is having the freedom to explore ideas and turn
            them into something tangible. I enjoy finding the balance between a
            strong visual identity and a digital experience that feels clear,
            accessible and natural to use.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         WHAT I CARE ABOUT
    ====================================== -->

    <section
      ref="care"
      class="section care-section"
      aria-label="What I care about"
    >
      <SectionHeading
        eyebrow="Design values"
        title="What I care about"
        intro="The things I keep coming back to when I design digital experiences: clarity, accessibility, intuitive interaction and how an experience makes someone feel."
      />

      <div class="care-grid">
        <article
          v-for="item in careItems"
          :key="item.title"
          class="care-item reveal"
        >
          <div class="care-item__copy">
            <h3>
              {{ item.title }}
            </h3>

            <p>
              {{ item.text }}
            </p>
          </div>

          <TiltSurface
            class="care-card"
            :class="`care-card--${item.type}`"
            :strength="5"
            :scale="1.018"
          >
            <!-- WATER -->

            <template v-if="item.type === 'water'">
              <div class="care-water-glow"></div>

              <div class="care-ripple care-ripple--one"></div>

              <div class="care-ripple care-ripple--two"></div>

              <div class="care-ripple care-ripple--three"></div>
            </template>

            <!-- LEAF -->

            <img
              v-if="item.type === 'leaf'"
              src="/images/leaf.png"
              alt=""
              class="care-card__leaf"
            />

            <!-- LOTUS -->

            <img
              v-if="item.type === 'lotus'"
              src="/images/lotus.png"
              alt=""
              class="care-card__lotus"
            />

            <span class="care-card__orb" aria-hidden="true"></span>
          </TiltSurface>
        </article>
      </div>
    </section>

    <!-- =====================================
         THINKING + GROWING
    ====================================== -->

    <section ref="thinking" class="section thinking-section">
      <!-- HOW I THINK -->

      <article class="thinking-column">
        <p class="about-eyebrow reveal">Process</p>

        <h2 class="about-section-title reveal">How I think</h2>

        <div class="thinking-block reveal">
          <span class="thinking-number"> 01 </span>

          <div>
            <h3>Take a step back</h3>

            <p>
              When I run into a design problem, I like to take a step back
              first. I give myself time to research the context and user needs,
              organise information and explore different possible solutions.
            </p>
          </div>
        </div>

        <div class="thinking-block reveal">
          <span class="thinking-number"> 02 </span>

          <div>
            <h3>Try, test &amp; improve</h3>

            <p>
              I like exploring different ideas instead of immediately committing
              to one solution. Prototyping, user testing, feedback and iteration
              are important parts of my design process.
            </p>
          </div>
        </div>
      </article>

      <!-- GROWING -->

      <article class="thinking-column growing-column">
        <p class="about-eyebrow reveal">Looking forward</p>

        <h2 class="about-section-title reveal">What I’m growing into</h2>

        <p class="reveal">
          I’m still growing as a Digital Experience Designer, and there are many
          areas I want to explore further. I want to become more confident in
          front-end development and make accessibility an even more natural part
          of my UX/UI design process.
        </p>

        <p class="reveal">
          In the future, I want to become a designer people can rely on: someone
          who can research a problem, structure it clearly and turn ideas into
          thoughtful digital experiences that work for real people.
        </p>

        <div class="growing-orbit reveal" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>

          <img src="/images/lotus.png" alt="" />
        </div>
      </article>
    </section>

    <!-- =====================================
         MORE ABOUT ME
    ====================================== -->

    <section
      ref="more"
      class="section more-about"
      aria-label="More about Yasmin"
    >
      <SectionHeading eyebrow="The longer version" title="More about me" />

      <div class="more-about__grid">
        <div>
          <p class="reveal">
            I’m Yasmin, a Digital Experience Design student who enjoys creating
            calm, thoughtful and user-friendly digital experiences. My interests
            include UX/UI, interaction design, visual design, accessibility and
            front-end development.
          </p>

          <p class="reveal">
            Before studying Digital Experience Design, I studied Business
            Organisation because I thought I wanted to become self-employed.
            Eventually, I realised that I wanted to combine that independent
            mindset with something much more creative.
          </p>

          <p class="reveal">
            I knew I wanted to work digitally, create things and solve problems,
            but I did not yet know what that role looked like. Discovering
            digital design helped those interests come together.
          </p>
        </div>

        <div>
          <p class="reveal">
            What I enjoy most about UX and design is the process. I like
            researching, looking for inspiration, structuring information,
            creating, prototyping, testing, receiving feedback and going back to
            improve my work.
          </p>

          <p class="reveal">
            I’ve learned that being a designer also means learning to let go. A
            design is not only yours — it needs to work for the people who
            actually use it. User needs and accessibility should guide the final
            experience.
          </p>

          <p class="reveal">
            My approach combines research with intuition. I want my digital
            experiences to feel clear, accessible and enjoyable to use while
            still having their own visual character.
          </p>
        </div>
      </div>
    </section>

    <!-- =====================================
         END VISUAL
    ====================================== -->

    <section
      ref="ending"
      class="section about-end"
      aria-label="About page closing visual"
    >
      <TiltSurface
        class="about-end__visual reveal"
        :strength="2.5"
        :scale="1.005"
      >
        <div class="about-end__water" aria-hidden="true"></div>

        <div class="about-end__rings" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <img src="/images/lotus.png" alt="" class="about-end__lotus" />

        <p class="about-end__statement">
          Calm interaction.
          <br />
          Thoughtful design.
        </p>
      </TiltSurface>
    </section>
  </main>
</template>

<style scoped>
/* =========================================
   PAGE
========================================= */

.about-page {
  min-height: 100vh;

  padding-top: 90px;

  overflow: hidden;

  background: var(--color-bg);

  color: var(--color-text);

  font-family: var(--font-body);
}

/* =========================================
   SHARED TYPOGRAPHY
========================================= */

.about-eyebrow {
  margin-bottom: 12px;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  opacity: 0.48;
}

.about-section-title {
  font-family: var(--font-heading);

  font-size: clamp(32px, 4vw, 50px);

  font-weight: 700;

  line-height: 1;

  letter-spacing: -0.045em;

  text-transform: uppercase;
}

/* =========================================
   INTRO
========================================= */

.about-intro {
  min-height: 680px;

  display: grid;

  grid-template-columns:
    0.85fr
    1.15fr;

  align-items: center;

  gap: clamp(70px, 9vw, 150px);
}

.about-intro__copy {
  position: relative;

  z-index: 2;

  max-width: 520px;
}

.about-intro h1 {
  margin-bottom: 28px;

  font-family: var(--font-heading);

  font-size: clamp(48px, 6vw, 76px);

  font-weight: 700;

  line-height: 0.92;

  letter-spacing: -0.06em;

  text-transform: uppercase;
}

.about-intro__copy p:not(.about-eyebrow) {
  font-size: 15px;

  line-height: 1.65;

  opacity: 0.82;
}

.about-intro__copy p:not(.about-eyebrow) + p {
  margin-top: 24px;
}

/* =========================================
   INTRO WATER
========================================= */

.about-intro__visual {
  position: relative;

  min-height: 500px;

  overflow: hidden;

  border: 1px solid rgba(17, 17, 17, 0.05);

  border-radius: 36px;

  background: radial-gradient(
    circle at 44% 40%,
    rgba(255, 255, 255, 0.8),
    rgba(211, 217, 189, 0.28) 35%,
    rgba(213, 226, 220, 0.42) 70%,
    rgba(197, 196, 211, 0.18)
  );

  cursor: crosshair;
}

.about-intro__water-glow {
  position: absolute;

  left: 50%;
  top: 50%;

  width: 420px;
  height: 420px;

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.46),
    transparent 67%
  );

  transform: translate(-50%, -50%);

  pointer-events: none;
}

/* permanent slow water rings */

.about-intro__water-ring {
  position: absolute;

  border: 1px solid rgba(255, 255, 255, 0.44);

  border-radius: 50%;

  pointer-events: none;
}

.about-intro__water-ring--one {
  left: 38%;
  top: 42%;

  width: 190px;
  height: 190px;
}

.about-intro__water-ring--two {
  left: 25%;
  top: 27%;

  width: 330px;
  height: 330px;

  opacity: 0.55;
}

/* cursor ripples */

.about-ripple {
  position: absolute;

  z-index: 1;

  width: 20px;
  height: 20px;

  border: 1px solid rgba(255, 255, 255, 0.8);

  border-radius: 50%;

  transform: translate(-50%, -50%) scale(0.3);

  pointer-events: none;

  animation: about-ripple-grow 1.1s ease-out forwards;
}

@keyframes about-ripple-grow {
  0% {
    opacity: 0.8;

    transform: translate(-50%, -50%) scale(0.3);
  }

  100% {
    opacity: 0;

    transform: translate(-50%, -50%) scale(8);
  }
}

/* intro assets */

.about-intro__lotus,
.about-intro__leaf {
  position: absolute;

  z-index: 2;

  display: block;

  pointer-events: none;

  user-select: none;

  filter: drop-shadow(0 14px 20px rgba(0, 0, 0, 0.08));
}

.about-intro__lotus--one {
  left: 8%;
  top: 9%;

  width: clamp(145px, 15vw, 225px);

  transform: rotate(-8deg);

  animation: about-float-one 7s ease-in-out infinite alternate;
}

.about-intro__lotus--two {
  left: 29%;
  top: 54%;

  width: clamp(115px, 13vw, 185px);

  transform: rotate(8deg);

  animation: about-float-two 8.5s ease-in-out infinite alternate;
}

.about-intro__leaf {
  right: -4%;
  top: 20%;

  width: clamp(280px, 31vw, 440px);

  opacity: 0.92;

  transform: rotate(10deg);

  animation: about-leaf-float 10s ease-in-out infinite alternate;
}

@keyframes about-float-one {
  to {
    transform: translate(12px, -10px) rotate(-4deg);
  }
}

@keyframes about-float-two {
  to {
    transform: translate(-12px, 10px) rotate(12deg);
  }
}

@keyframes about-leaf-float {
  to {
    transform: translate(-14px, 8px) rotate(7deg);
  }
}

/* =========================================
   WHY
========================================= */

.why-layout {
  display: grid;

  grid-template-columns:
    0.75fr
    1.25fr;

  gap: clamp(60px, 10vw, 160px);
}

.why-copy {
  max-width: 620px;
}

.why-copy p {
  font-size: 16px;

  line-height: 1.7;

  opacity: 0.8;
}

.why-copy p + p {
  margin-top: 26px;
}

/* =========================================
   CARE
========================================= */

.care-grid {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 18px;

  margin-top: 56px;
}

.care-item {
  display: flex;

  flex-direction: column;

  min-width: 0;
}

.care-item__copy {
  min-height: 130px;

  padding: 0 4px;
}

.care-item__copy h3 {
  margin-bottom: 10px;

  font-family: var(--font-heading);

  font-size: 20px;

  font-weight: 700;

  letter-spacing: -0.025em;
}

.care-item__copy p {
  max-width: 320px;

  font-size: 14px;

  line-height: 1.55;

  opacity: 0.72;
}

/* =========================================
   CARE CARDS
========================================= */

.care-card {
  position: relative;

  min-height: 350px;

  overflow: hidden;

  border: 1px solid rgba(17, 17, 17, 0.055);

  border-radius: 30px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.035);

  transition:
    border-radius 0.5s var(--ease-soft),
    box-shadow 0.5s var(--ease-soft);
}

.care-card:hover {
  border-radius: 36px;

  box-shadow: 0 22px 46px rgba(0, 0, 0, 0.07);
}

/* WATER CARD */

.care-card--water {
  display: grid;

  place-items: center;

  background: radial-gradient(
    circle at 45% 40%,
    #f2f5f0 0%,
    #d7e2d6 42%,
    #aabfae 100%
  );
}

.care-water-glow {
  position: absolute;

  width: 180px;
  height: 180px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.18);

  filter: blur(30px);
}

.care-ripple {
  position: absolute;

  border: 1px solid rgba(255, 255, 255, 0.55);

  border-radius: 50%;

  transition: transform 0.7s var(--ease-soft);
}

.care-card:hover .care-ripple--one {
  transform: scale(1.08);
}

.care-card:hover .care-ripple--two {
  transform: scale(0.96);
}

.care-card:hover .care-ripple--three {
  transform: scale(1.04);
}

.care-ripple--one {
  width: 110px;
  height: 110px;
}

.care-ripple--two {
  width: 185px;
  height: 185px;
}

.care-ripple--three {
  width: 265px;
  height: 265px;
}

/* LEAF CARD */

.care-card--leaf {
  background: #e5eadf;
}

.care-card__leaf {
  position: absolute;

  left: 50%;
  top: 50%;

  width: 72%;

  transform: translate(-50%, -50%) rotate(-10deg) translateZ(28px);

  transition: transform 0.6s var(--ease-soft);
}

.care-card--leaf:hover .care-card__leaf {
  transform: translate(-50%, -52%) rotate(-5deg) scale(1.04) translateZ(28px);
}

/* LOTUS CARD */

.care-card--lotus {
  background: #ebe5df;
}

.care-card__lotus {
  position: absolute;

  left: 50%;
  bottom: -4%;

  width: 65%;

  transform: translateX(-50%) translateZ(30px);

  transition: transform 0.65s var(--ease-soft);
}

.care-card--lotus:hover .care-card__lotus {
  transform: translateX(-50%) translateY(-10px) scale(1.035) translateZ(30px);
}

/* shared orb */

.care-card__orb {
  position: absolute;

  right: -80px;
  top: -80px;

  width: 200px;
  height: 200px;

  border: 1px solid rgba(255, 255, 255, 0.4);

  border-radius: 50%;

  pointer-events: none;
}

/* =========================================
   THINKING
========================================= */

.thinking-section {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: clamp(80px, 11vw, 180px);
}

.thinking-column {
  position: relative;

  max-width: 520px;
}

.thinking-block {
  display: grid;

  grid-template-columns:
    48px
    1fr;

  gap: 18px;

  margin-top: 38px;

  padding-top: 24px;

  border-top: 1px solid rgba(17, 17, 17, 0.13);
}

.thinking-number {
  font-size: 11px;

  font-weight: 700;

  letter-spacing: 0.08em;

  opacity: 0.4;
}

.thinking-block h3 {
  margin-bottom: 10px;

  font-family: var(--font-heading);

  font-size: 18px;

  font-weight: 700;
}

.thinking-block p,
.growing-column > p {
  font-size: 15px;

  line-height: 1.65;

  opacity: 0.78;
}

.growing-column > p {
  margin-top: 28px;
}

.growing-column > p + p {
  margin-top: 20px;
}

/* orbit decoration */

.growing-orbit {
  position: relative;

  width: 250px;
  height: 250px;

  margin-top: 48px;
}

.growing-orbit span {
  position: absolute;

  left: 50%;
  top: 50%;

  border: 1px solid rgba(17, 17, 17, 0.12);

  border-radius: 50%;

  transform: translate(-50%, -50%);
}

.growing-orbit span:nth-child(1) {
  width: 110px;
  height: 110px;
}

.growing-orbit span:nth-child(2) {
  width: 180px;
  height: 180px;
}

.growing-orbit span:nth-child(3) {
  width: 245px;
  height: 245px;
}

.growing-orbit img {
  position: absolute;

  left: 50%;
  top: 50%;

  width: 115px;

  transform: translate(-50%, -50%) rotate(-5deg);

  animation: growing-lotus 5.5s ease-in-out infinite alternate;
}

@keyframes growing-lotus {
  to {
    transform: translate(-50%, -56%) rotate(3deg);
  }
}

/* =========================================
   MORE ABOUT
========================================= */

.more-about__grid {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: clamp(70px, 10vw, 165px);

  margin-top: 48px;
}

.more-about__grid > div {
  max-width: 540px;
}

.more-about__grid p {
  font-size: 15px;

  line-height: 1.7;

  opacity: 0.8;
}

.more-about__grid p + p {
  margin-top: 22px;
}

/* =========================================
   END
========================================= */

.about-end {
  padding-bottom: 150px;
}

.about-end__visual {
  position: relative;

  min-height: 480px;

  overflow: hidden;

  border: 1px solid rgba(17, 17, 17, 0.05);

  border-radius: 36px;

  background: #dce4d9;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
}

.about-end__water {
  position: absolute;

  inset: 0;

  background:
    radial-gradient(
      circle at 70% 35%,
      rgba(255, 255, 255, 0.5),
      transparent 34%
    ),
    linear-gradient(145deg, #e0e9df, #9fb7a3);
}

.about-end__rings {
  position: absolute;

  right: 10%;
  top: 12%;

  width: 300px;
  height: 300px;
}

.about-end__rings span {
  position: absolute;

  left: 50%;
  top: 50%;

  border: 1px solid rgba(255, 255, 255, 0.45);

  border-radius: 50%;

  transform: translate(-50%, -50%);
}

.about-end__rings span:nth-child(1) {
  width: 110px;
  height: 110px;
}

.about-end__rings span:nth-child(2) {
  width: 200px;
  height: 200px;
}

.about-end__rings span:nth-child(3) {
  width: 290px;
  height: 290px;
}

.about-end__lotus {
  position: absolute;

  right: 6%;
  bottom: -3%;

  z-index: 1;

  width: min(350px, 34%);

  transform: translateZ(30px);

  transition: transform 0.6s var(--ease-soft);
}

.about-end__visual:hover .about-end__lotus {
  transform: translateY(-12px) rotate(3deg) translateZ(30px);
}

.about-end__statement {
  position: absolute;

  left: 6%;
  bottom: 10%;

  z-index: 2;

  font-size: clamp(28px, 3.2vw, 50px);

  line-height: 1.04;

  letter-spacing: -0.045em;

  transform: translateZ(38px);
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 900px) {
  .about-page {
    padding-top: 70px;
  }

  .about-intro {
    grid-template-columns: 1fr;

    gap: 45px;

    min-height: auto;
  }

  .about-intro__visual {
    min-height: 440px;
  }

  .why-layout {
    grid-template-columns: 1fr;

    gap: 35px;
  }

  .care-grid,
  .thinking-section,
  .more-about__grid {
    grid-template-columns: 1fr;
  }

  .care-grid {
    gap: 55px;
  }

  .care-item__copy {
    min-height: auto;

    margin-bottom: 20px;
  }

  .thinking-section {
    gap: 90px;
  }

  .thinking-column {
    max-width: 650px;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 600px) {
  .about-intro__visual {
    min-height: 360px;

    border-radius: 28px;
  }

  .about-intro__lotus--one {
    width: 145px;
  }

  .about-intro__lotus--two {
    width: 120px;
  }

  .about-intro__leaf {
    width: 280px;
  }

  .about-intro__water-ring--one {
    width: 130px;
    height: 130px;
  }

  .about-intro__water-ring--two {
    width: 220px;
    height: 220px;
  }

  .care-card {
    min-height: 300px;
  }

  .thinking-block {
    grid-template-columns:
      38px
      1fr;
  }

  .growing-orbit {
    width: 220px;
    height: 220px;
  }

  .about-end__visual {
    min-height: 370px;

    border-radius: 28px;
  }

  .about-end__lotus {
    width: 52%;
  }

  .about-end__rings {
    right: -30px;

    width: 230px;
    height: 230px;
  }

  .about-end__statement {
    left: 24px;
    bottom: 28px;
  }
}
</style>
