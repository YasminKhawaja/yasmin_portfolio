<script setup>
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  projects: {
    type: Array,
    default: () => [],
  },

  number: {
    type: String,
    default: "",
  },

  tone: {
    type: String,
    default: "light",
  },
});

const open = ref(false);

function toggleCard() {
  open.value = !open.value;
}
</script>

<template>
  <article
    class="skill-card"
    :class="[
      `skill-card--${tone}`,
      {
        'skill-card--open': open,
      },
    ]"
  >
    <button
      class="skill-card__button"
      type="button"
      :aria-expanded="open"
      @click="toggleCard"
    >
      <!-- =====================================
           DEFAULT STATE
      ====================================== -->

      <div class="skill-card__front">
        <span v-if="number" class="skill-card__number">
          {{ number }}
        </span>

        <div class="skill-card__title-row">
          <h2>
            {{ title }}
          </h2>

          <span class="skill-card__plus" aria-hidden="true"> + </span>
        </div>
      </div>

      <!-- =====================================
           DETAILS STATE
      ====================================== -->

      <div class="skill-card__details">
        <div class="skill-card__details-main">
          <span v-if="number" class="skill-card__number">
            {{ number }}
          </span>

          <h2>
            {{ title }}
          </h2>

          <p>
            {{ description }}
          </p>
        </div>

        <div v-if="projects.length" class="skill-card__projects">
          <span class="skill-card__projects-label"> Used in </span>

          <div class="skill-card__project-list">
            <span
              v-for="project in projects"
              :key="project"
              class="skill-card__project"
            >
              {{ project }}
            </span>
          </div>
        </div>
      </div>
    </button>
  </article>
</template>

<style scoped>
/* =========================================
   CARD
========================================= */

.skill-card {
  position: relative;

  min-width: 0;

  min-height: 340px;

  overflow: hidden;

  border-radius: 26px;

  transition:
    transform 0.55s var(--ease-soft),
    border-radius 0.55s var(--ease-soft),
    box-shadow 0.55s var(--ease-soft);
}

.skill-card:hover {
  transform: translateY(-6px);

  border-radius: 36px;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
}

/* =========================================
   BUTTON
========================================= */

.skill-card__button {
  position: relative;

  width: 100%;
  height: 100%;

  min-height: 340px;

  padding: 0;

  overflow: hidden;

  border: none;

  color: inherit;

  text-align: left;

  cursor: none;

  background: transparent;
}

/* =========================================
   COLOUR VARIANTS
========================================= */

.skill-card--light {
  background: #ecece8;
}

.skill-card--sage {
  background: var(--color-sage);
}

.skill-card--soft {
  background: #e5e8e0;
}

.skill-card--cream {
  background: #f0eee6;
}

.skill-card--dark {
  background: #191b19;

  color: #f7f6f2;
}

/* =========================================
   FRONT STATE
========================================= */

.skill-card__front {
  position: absolute;

  inset: 0;

  z-index: 1;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  padding: 26px;

  opacity: 1;

  transform: translateY(0);

  transition:
    opacity 0.35s ease,
    transform 0.55s var(--ease-soft);
}

/* =========================================
   NUMBER
========================================= */

.skill-card__number {
  font-size: 11px;

  letter-spacing: 0.08em;

  opacity: 0.45;
}

/* =========================================
   TITLE ROW
========================================= */

.skill-card__title-row {
  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  gap: 18px;
}

/* =========================================
   TITLES
========================================= */

.skill-card h2 {
  max-width: 82%;

  font-size: clamp(22px, 2vw, 32px);

  line-height: 0.98;

  letter-spacing: -0.045em;

  text-transform: uppercase;
}

/* =========================================
   PLUS ICON
========================================= */

.skill-card__plus {
  display: grid;

  place-items: center;

  width: 36px;
  height: 36px;

  flex-shrink: 0;

  border: 1px solid currentColor;

  border-radius: 50%;

  font-size: 21px;

  line-height: 1;

  opacity: 0.45;

  transition:
    transform 0.5s var(--ease-soft),
    opacity 0.3s ease;
}

/* =========================================
   DETAILS STATE
========================================= */

.skill-card__details {
  position: absolute;

  inset: 0;

  z-index: 2;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  gap: 26px;

  padding: 26px;

  opacity: 0;

  transform: translateY(28px);

  transition:
    opacity 0.35s ease,
    transform 0.55s var(--ease-soft);

  overflow-y: auto;

  scrollbar-width: thin;
}

/* =========================================
   DETAILS MAIN
========================================= */

.skill-card__details-main {
  min-width: 0;
}

.skill-card__details h2 {
  margin-top: 24px;

  margin-bottom: 18px;

  max-width: 100%;
}

.skill-card__details p {
  max-width: 360px;

  font-size: 14px;

  line-height: 1.55;
}

/* =========================================
   PROJECTS
========================================= */

.skill-card__projects {
  margin-top: auto;

  padding-top: 4px;
}

.skill-card__projects-label {
  display: block;

  margin-bottom: 9px;

  font-size: 9px;

  text-transform: uppercase;

  letter-spacing: 0.1em;

  opacity: 0.45;
}

.skill-card__project-list {
  display: flex;

  flex-wrap: wrap;

  gap: 7px;
}

.skill-card__project {
  padding: 7px 10px;

  border: 1px solid currentColor;

  border-radius: 999px;

  font-size: 10px;

  line-height: 1;

  opacity: 0.65;
}

/* =========================================
   HOVER
========================================= */

@media (hover: hover) {
  .skill-card:hover .skill-card__front {
    opacity: 0;

    transform: translateY(-20px);

    pointer-events: none;
  }

  .skill-card:hover .skill-card__details {
    opacity: 1;

    transform: translateY(0);
  }

  .skill-card:hover .skill-card__plus {
    transform: rotate(45deg);

    opacity: 1;
  }
}

/* =========================================
   CLICK / TOUCH
========================================= */

.skill-card--open .skill-card__front {
  opacity: 0;

  transform: translateY(-20px);

  pointer-events: none;
}

.skill-card--open .skill-card__details {
  opacity: 1;

  transform: translateY(0);
}

.skill-card--open .skill-card__plus {
  transform: rotate(45deg);

  opacity: 1;
}

/* =========================================
   KEYBOARD
========================================= */

.skill-card__button:focus-visible {
  outline: 2px solid currentColor;

  outline-offset: -6px;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 1000px) {
  .skill-card,
  .skill-card__button {
    min-height: 320px;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 650px) {
  .skill-card,
  .skill-card__button {
    min-height: 300px;
  }

  .skill-card__front,
  .skill-card__details {
    padding: 22px;
  }

  .skill-card__button {
    cursor: pointer;
  }

  .skill-card h2 {
    max-width: 84%;

    font-size: clamp(21px, 7vw, 29px);
  }

  .skill-card__details h2 {
    margin-top: 20px;

    margin-bottom: 15px;
  }

  .skill-card__details p {
    font-size: 13px;

    line-height: 1.5;
  }

  .skill-card__projects {
    padding-bottom: 2px;
  }
}
</style>
