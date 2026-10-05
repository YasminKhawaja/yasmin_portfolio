<template>
  <section
    id="about"
    ref="root"
    class="section about"
    aria-labelledby="about-home-title"
  >
    <SectionHeading
      title="About me"
      intro="I'm Yasmin, a Digital Experience Design student focused on UX/UI, interaction design, branding and front-end development. I like creating digital experiences that feel calm, thoughtful, accessible and a little playful."
    />

    <div class="about__copy">
      <p class="reveal">
        My work often starts with structure: understanding the problem,
        organising information and shaping clear user flows. From there, I build
        a visual direction around the experience through UI design, branding,
        interaction, illustration and 3D.
      </p>

      <p class="reveal">
        I'm especially interested in projects where design feels useful, human
        and visually engaging, while still remaining clear and easy to use.
      </p>
    </div>

    <div class="about__hats">
      <header class="about__hats-header">
        <p class="about__eyebrow reveal">How I work</p>

        <h3 class="reveal">My three hats</h3>

        <p class="about__hats-intro reveal">
          I work across three connected areas: design, code and visual
          storytelling. Together, they shape how I think, design and build
          digital experiences that are clear, human and a little playful.
        </p>
      </header>

      <div class="about__hats-grid">
        <div
          v-for="(hat, index) in hats"
          :key="hat.title"
          class="about__hat-item reveal"
        >
          <TiltSurface class="about__hat" :strength="4" :scale="1.012">
            <span class="about__hat-number"> 0{{ index + 1 }} </span>

            <div class="about__hat-content">
              <h4>
                {{ hat.title }}
              </h4>

              <p>
                {{ hat.text }}
              </p>
            </div>

            <span class="about__hat-orb" aria-hidden="true"></span>
          </TiltSurface>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import TiltSurface from "./ui/TiltSurface.vue";
import SectionHeading from "./ui/SectionHeading.vue";

import { useScrollReveal } from "../composables/useScrollReveal";

const root = ref(null);

useScrollReveal(root, ".reveal", {
  stagger: 0.08,
});

const hats = [
  {
    title: "Design",

    text: "Design is where my work begins. I focus on UX/UI, branding and visual systems to bring clarity and structure to complex ideas and create digital experiences that feel logical, accessible and human.",
  },

  {
    title: "Code",

    text: "Code is how I bring ideas to life. With HTML, CSS, JavaScript and Vue, I build responsive websites, interactive prototypes and micro-interactions that extend the design experience.",
  },

  {
    title: "Visual Worlds",

    text: "This is where I explore illustration, 3D, motion, characters and atmosphere to create digital spaces that feel distinctive, intuitive and visually engaging.",
  },
];
</script>

<style scoped>
/* =========================================
   INTRO COPY
========================================= */

.about__copy {
  display: flex;

  flex-direction: column;

  gap: 20px;

  max-width: 700px;

  margin-top: 20px;
}

.about__copy p {
  font-size: 16px;

  line-height: 1.65;

  opacity: 0.8;
}

/* =========================================
   HATS
========================================= */

.about__hats {
  margin-top: 96px;
}

.about__hats-header {
  max-width: 700px;
}

.about__eyebrow {
  margin-bottom: 10px;

  font-size: 12px;

  font-weight: 700;

  letter-spacing: 0.09em;

  text-transform: uppercase;

  opacity: 0.55;
}

.about__hats h3 {
  font-family: var(--font-heading);

  font-size: clamp(26px, 4vw, 34px);

  font-weight: 700;

  letter-spacing: -0.03em;
}

.about__hats-intro {
  max-width: 620px;

  margin-top: 16px;

  font-size: 16px;

  line-height: 1.65;

  opacity: 0.75;
}

/* =========================================
   GRID
========================================= */

.about__hats-grid {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 18px;

  margin-top: 40px;
}

.about__hat-item {
  min-width: 0;

  height: 100%;
}

/* =========================================
   CARD
========================================= */

.about__hat {
  position: relative;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  min-height: 340px;

  height: 100%;

  padding: 28px;

  overflow: hidden;

  border: 1px solid rgba(17, 17, 17, 0.055);

  border-radius: 30px;

  background: rgba(217, 217, 217, 0.14);

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.035);

  transition:
    border-radius 0.5s var(--ease-soft),
    background 0.5s var(--ease-soft),
    box-shadow 0.5s var(--ease-soft);
}

.about__hat:hover {
  border-radius: 36px;

  background: rgba(211, 217, 189, 0.26);

  box-shadow: 0 20px 42px rgba(0, 0, 0, 0.06);
}

/* =========================================
   NUMBER
========================================= */

.about__hat-number {
  position: relative;

  z-index: 2;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 0.1em;

  opacity: 0.4;

  transform: translateZ(22px);
}

/* =========================================
   CONTENT
========================================= */

.about__hat-content {
  position: relative;

  z-index: 2;

  transform: translateZ(28px);
}

.about__hat h4 {
  margin-bottom: 14px;

  font-family: var(--font-heading);

  font-size: 24px;

  font-weight: 700;

  line-height: 1;

  letter-spacing: -0.035em;
}

.about__hat p {
  font-size: 14px;

  line-height: 1.6;

  opacity: 0.76;
}

/* =========================================
   DECORATION
========================================= */

.about__hat-orb {
  position: absolute;

  top: -85px;
  right: -85px;

  width: 220px;
  height: 220px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.2);

  border: 1px solid rgba(255, 255, 255, 0.4);

  transition: transform 0.65s var(--ease-soft);
}

.about__hat:hover .about__hat-orb {
  transform: translate(-15px, 18px) scale(1.06);
}

/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 900px) {
  .about__hats-grid {
    grid-template-columns: 1fr;
  }

  .about__hat {
    min-height: 280px;
  }
}
</style>
