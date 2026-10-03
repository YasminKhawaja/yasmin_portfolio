<script setup>
import { RouterLink } from "vue-router";

import TiltSurface from "./ui/TiltSurface.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    default: "",
  },

  tags: {
    type: Array,
    default: () => [],
  },

  image: {
    type: String,
    default: "",
  },

  alt: {
    type: String,
    default: "",
  },

  path: {
    type: String,
    default: "",
  },

  gradient: {
    type: String,
    default: "linear-gradient(145deg, #d3d9bd, #ecece8)",
  },
});
</script>

<template>
  <TiltSurface class="project-card reveal" :strength="9" :scale="1.015">
    <component
      :is="path ? RouterLink : 'article'"
      :to="path || undefined"
      class="project-card__link"
      :aria-label="path ? `View ${title} project` : undefined"
    >
      <!-- =====================================
           VISUAL
      ====================================== -->

      <div
        class="project-card__visual"
        :class="{
          'project-card__visual--abstract': !image,
        }"
        :style="{
          background: !image ? gradient : undefined,
        }"
      >
        <img v-if="image" :src="image" :alt="alt" class="project-card__image" />

        <template v-else>
          <span
            class="project-card__orb project-card__orb--one"
            aria-hidden="true"
          ></span>

          <span
            class="project-card__orb project-card__orb--two"
            aria-hidden="true"
          ></span>

          <span class="project-card__line" aria-hidden="true"></span>
        </template>
      </div>

      <!-- =====================================
           OVERLAY
      ====================================== -->

      <div class="project-card__overlay" aria-hidden="true"></div>

      <!-- =====================================
           CONTENT
      ====================================== -->

      <div class="project-card__content">
        <div class="project-card__text">
          <h3>
            {{ title }}
          </h3>

          <p v-if="description">
            {{ description }}
          </p>
        </div>

        <ul
          v-if="tags.length"
          class="project-card__tags"
          :aria-label="`${title} categories`"
        >
          <li v-for="tag in tags" :key="tag">
            {{ tag }}
          </li>
        </ul>
      </div>

      <!-- =====================================
           ARROW
      ====================================== -->

      <span v-if="path" class="project-card__arrow" aria-hidden="true">
        ↗
      </span>
    </component>
  </TiltSurface>
</template>

<style scoped>
/* =========================================
   CARD
========================================= */

.project-card {
  min-width: 0;

  min-height: 520px;

  overflow: hidden;

  border: 1px solid rgba(17, 17, 17, 0.06);

  border-radius: 30px;

  background: #ecece8;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.045);

  transition:
    border-radius 0.5s var(--ease-soft),
    box-shadow 0.5s var(--ease-soft);
}

.project-card:hover {
  border-radius: 36px;

  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.075);
}

/* =========================================
   LINK
========================================= */

.project-card__link {
  position: absolute;

  inset: 0;

  display: block;

  overflow: hidden;

  border-radius: inherit;

  color: #111;

  isolation: isolate;

  cursor: pointer;
}

/* =========================================
   VISUAL
========================================= */

.project-card__visual {
  position: absolute;

  inset: -2%;

  z-index: -3;

  overflow: hidden;

  transform: scale(1.02);

  transition: transform 0.8s var(--ease-soft);
}

.project-card:hover .project-card__visual {
  transform: scale(1.07);
}

/* =========================================
   IMAGE
========================================= */

.project-card__image {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
}

/* =========================================
   ABSTRACT VISUAL
========================================= */

.project-card__visual--abstract {
  isolation: isolate;
}

.project-card__orb {
  position: absolute;

  border-radius: 50%;

  pointer-events: none;
}

.project-card__orb--one {
  top: -40px;
  right: -60px;

  width: 260px;
  height: 260px;

  background: rgba(255, 255, 255, 0.36);
}

.project-card__orb--two {
  top: 120px;
  left: -70px;

  width: 200px;
  height: 200px;

  border: 1px solid rgba(255, 255, 255, 0.5);

  background: rgba(255, 255, 255, 0.08);
}

.project-card__line {
  position: absolute;

  top: 29%;
  left: -10%;

  width: 125%;
  height: 110px;

  border: 1px solid rgba(255, 255, 255, 0.3);

  border-radius: 50%;

  transform: rotate(-11deg);
}

/* =========================================
   OVERLAY
========================================= */

.project-card__overlay {
  position: absolute;

  inset: 0;

  z-index: -2;

  background: linear-gradient(
    to top,
    rgba(248, 248, 243, 0.96) 0%,
    rgba(248, 248, 243, 0.76) 29%,
    rgba(248, 248, 243, 0.16) 64%,
    rgba(248, 248, 243, 0.02) 100%
  );

  transition: background 0.5s var(--ease-soft);
}

/* =========================================
   CONTENT
========================================= */

.project-card__content {
  position: absolute;

  left: 0;
  right: 0;
  bottom: 0;

  z-index: 2;

  display: flex;

  flex-direction: column;

  gap: 18px;

  padding: 28px;

  transform: translateZ(32px);
}

.project-card__text h3 {
  max-width: 92%;

  margin-bottom: 8px;

  font-family: var(--font-heading);

  font-size: clamp(24px, 2.2vw, 34px);

  font-weight: 700;

  line-height: 1;

  letter-spacing: -0.045em;
}

.project-card__text p {
  max-width: 330px;

  font-size: 14px;

  line-height: 1.5;

  opacity: 0.82;
}

/* =========================================
   TAGS
========================================= */

.project-card__tags {
  display: flex;

  flex-wrap: wrap;

  gap: 7px;

  margin: 0;

  padding: 0;

  list-style: none;
}

.project-card__tags li {
  padding: 8px 12px;

  border: 1px solid rgba(255, 255, 255, 0.72);

  border-radius: 999px;

  background: rgba(248, 248, 243, 0.36);

  backdrop-filter: blur(9px);

  -webkit-backdrop-filter: blur(9px);

  font-size: 11px;

  line-height: 1;
}

/* =========================================
   ARROW
========================================= */

.project-card__arrow {
  position: absolute;

  top: 22px;
  right: 22px;

  z-index: 5;

  display: grid;

  place-items: center;

  width: 46px;
  height: 46px;

  border-radius: 50%;

  background: rgba(249, 249, 249, 0.85);

  backdrop-filter: blur(12px);

  -webkit-backdrop-filter: blur(12px);

  font-size: 20px;

  opacity: 0;

  transform: translate(-8px, 8px) translateZ(40px);

  transition:
    opacity 0.4s var(--ease-soft),
    transform 0.4s var(--ease-soft);
}

.project-card:hover .project-card__arrow {
  opacity: 1;

  transform: translate(0, 0) translateZ(40px);
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 650px) {
  .project-card {
    min-height: 470px;
  }

  .project-card__content {
    padding: 22px;
  }

  .project-card__arrow {
    opacity: 1;

    transform: translateZ(40px);
  }
}
</style>
