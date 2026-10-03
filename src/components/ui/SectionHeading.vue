<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: "",
  },

  title: {
    type: String,
    required: true,
  },

  intro: {
    type: String,
    default: "",
  },

  maxWidth: {
    type: String,
    default: "700px",
  },
});
</script>

<template>
  <header class="section-heading" :style="{ '--heading-width': maxWidth }">
    <p v-if="eyebrow" class="section-heading__eyebrow reveal">
      {{ eyebrow }}
    </p>

    <h2 class="section-heading__title reveal">
      {{ title }}
    </h2>

    <p v-if="intro" class="section-heading__intro reveal">
      {{ intro }}
    </p>
  </header>
</template>

<style scoped>
.section-heading {
  max-width: var(--heading-width);
}

.section-heading__eyebrow {
  margin-bottom: 10px;

  font-size: 12px;
  font-weight: 700;

  letter-spacing: 0.09em;

  text-transform: uppercase;

  opacity: 0.55;
}

.section-heading__title {
  font-family: var(--font-heading);

  font-size: clamp(32px, 5vw, 40px);

  font-weight: 700;

  line-height: 1.05;

  letter-spacing: -0.035em;

  text-transform: uppercase;
}

.section-heading__intro {
  max-width: 700px;

  margin-top: 20px;

  font-size: 16px;

  line-height: 1.65;

  opacity: 0.75;
}

@media (max-width: 650px) {
  .section-heading__eyebrow {
    font-size: 11px;
  }

  .section-heading__intro {
    margin-top: 16px;

    font-size: 15px;
  }
}
</style>
