<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  to: {
    type: String,
    default: "",
  },

  href: {
    type: String,
    default: "",
  },

  variant: {
    type: String,
    default: "dark",
    validator: (value) => ["dark", "outline", "light", "glass"].includes(value),
  },

  target: {
    type: String,
    default: "",
  },

  arrow: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    class="cta-button"
    :class="`cta-button--${variant}`"
  >
    <span class="cta-button__label">
      <slot />
    </span>

    <span v-if="arrow" class="cta-button__arrow" aria-hidden="true"> ↗ </span>
  </RouterLink>

  <a
    v-else
    :href="href"
    :target="target || undefined"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    class="cta-button"
    :class="`cta-button--${variant}`"
  >
    <span class="cta-button__label">
      <slot />
    </span>

    <span v-if="arrow" class="cta-button__arrow" aria-hidden="true"> ↗ </span>
  </a>
</template>

<style scoped>
.cta-button {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 12px;

  min-height: 48px;

  padding: 12px 19px;

  border: 1px solid transparent;

  border-radius: 999px;

  font-size: 13px;
  font-weight: 600;
  line-height: 1;

  white-space: nowrap;

  text-decoration: none;

  cursor: pointer;

  transition:
    transform 0.35s var(--ease-soft),
    background 0.35s var(--ease-soft),
    color 0.35s var(--ease-soft),
    border-color 0.35s var(--ease-soft),
    box-shadow 0.35s var(--ease-soft);
}

.cta-button__arrow {
  display: inline-block;

  transition: transform 0.35s var(--ease-soft);
}

.cta-button:hover {
  transform: translateY(-3px);
}

.cta-button:hover .cta-button__arrow {
  transform: translate(3px, -3px);
}

/* =========================================
   DARK
   Voor lichte pagina's
========================================= */

.cta-button--dark {
  background: #111;
  color: #fff;
}

.cta-button--dark:hover {
  background: var(--color-sage);
  color: #111;
}

/* =========================================
   OUTLINE
   Secondary CTA op lichte achtergrond
========================================= */

.cta-button--outline {
  border-color: rgba(17, 17, 17, 0.28);

  background: rgba(255, 255, 255, 0.15);

  color: #111;
}

.cta-button--outline:hover {
  border-color: var(--color-sage);

  background: var(--color-sage);
}

/* =========================================
   LIGHT
   Hero primary
========================================= */

.cta-button--light {
  background: rgba(255, 255, 255, 0.94);

  color: #111;
}

.cta-button--light:hover {
  background: var(--color-sage);
}

/* =========================================
   GLASS
   Hero secondary
========================================= */

.cta-button--glass {
  border-color: rgba(255, 255, 255, 0.65);

  background: rgba(255, 255, 255, 0.08);

  color: #fff;

  backdrop-filter: blur(8px);

  -webkit-backdrop-filter: blur(8px);
}

.cta-button--glass:hover {
  border-color: rgba(255, 255, 255, 0.95);

  background: rgba(255, 255, 255, 0.18);
}

/* =========================================
   KEYBOARD
========================================= */

.cta-button:focus-visible {
  outline: 2px solid currentColor;

  outline-offset: 4px;
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 700px) {
  .cta-button {
    min-height: 44px;

    padding: 11px 16px;

    font-size: 12px;
  }
}
</style>
