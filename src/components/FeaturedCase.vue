<template>
  <section
    ref="root"
    class="section featured"
    aria-labelledby="featured-case-title"
  >
    <SectionHeading
      eyebrow="Featured case"
      title="NEXT — A safe pause space for young people"
      max-width="760px"
    />

    <div class="featured__text reveal">
      <p>
        NEXT was a real client project where we translated a briefing into a
        complete visual identity and responsive website. The project combined
        branding, UX/UI design and front-end development, and our concept was
        selected by the client.
      </p>

      <p>
        We designed and built the website for a safe pause space where young
        people can slow down, grow and find direction again. The digital
        experience needed to feel calm, accessible and trustworthy, while
        remaining easy for the client to manage through a CMS.
      </p>
    </div>

    <div class="featured__tags reveal">
      <span v-for="tag in tags" :key="tag" class="pill">
        {{ tag }}
      </span>
    </div>

    <div class="featured__visual reveal">
      <div class="featured__visual-inner">
        <p class="featured__visual-label">
          NEXT is een neutrale rustplek voor jongeren die even de weg kwijt
          zijn.
        </p>
      </div>

      <span class="featured__caption"> Selected by client </span>
    </div>

    <div class="featured__actions reveal">
      <CtaButton to="/projects/next" variant="dark">
        View NEXT case study
      </CtaButton>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import CtaButton from "./ui/CtaButton.vue";
import SectionHeading from "./ui/SectionHeading.vue";

import { useScrollReveal } from "../composables/useScrollReveal";

const root = ref(null);

useScrollReveal(root, ".reveal", {
  stagger: 0.08,
});

const tags = [
  "Real client",
  "Selected concept",
  "Branding & UX/UI",
  "Responsive website",
  "Front-end development",
  "CMS with Bludit",
];
</script>

<style scoped>
.featured__text {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 40px;

  max-width: 1000px;

  margin-top: 36px;

  font-size: 16px;

  line-height: 1.65;

  opacity: 0.8;
}

.featured__tags {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-top: 28px;
}

.featured__visual {
  position: relative;

  height: 420px;

  margin-top: 40px;

  overflow: hidden;

  border-radius: 30px;

  background: linear-gradient(160deg, #2c3521, #4b5a3a 60%, #6c7a52);
}

.featured__visual-inner {
  position: absolute;

  inset: 0;

  display: flex;

  align-items: flex-end;

  padding: 36px;
}

.featured__visual-label {
  max-width: 420px;

  color: #f4f4ec;

  font-size: 20px;

  line-height: 1.4;
}

.featured__caption {
  position: absolute;

  top: 20px;
  right: 24px;

  padding: 8px 18px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.15);

  color: #fff;

  font-size: 14px;

  backdrop-filter: blur(6px);
}

.featured__actions {
  display: flex;

  margin-top: 32px;
}

@media (max-width: 800px) {
  .featured__text {
    grid-template-columns: 1fr;
  }

  .featured__visual {
    height: 360px;
  }
}
</style>
