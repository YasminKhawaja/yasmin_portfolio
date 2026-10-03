<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },

  altPrefix: {
    type: String,
    default: "Project image",
  },
});

const stack = ref(null);
const cards = ref([]);

let context = null;

function setCardRef(el) {
  if (el && !cards.value.includes(el)) {
    cards.value.push(el);
  }
}

onMounted(async () => {
  await nextTick();

  if (!stack.value) return;

  context = gsap.context(() => {
    cards.value.forEach((card, index) => {
      /*
        De eerste kaart hoeft niet door een
        vorige kaart beïnvloed te worden.
      */
      if (index === cards.value.length - 1) {
        return;
      }

      const nextCard = cards.value[index + 1];

      /*
        Wanneer de volgende kaart omhoog komt,
        krijgt de huidige kaart een kleine
        scale + rotatie.

        Daardoor blijft de oude kaart duidelijk
        zichtbaar achter de nieuwe.
      */
      gsap.to(card, {
        scale: 0.965,

        rotation: index % 2 === 0 ? -1.2 : 1.2,

        y: -18,

        ease: "none",

        scrollTrigger: {
          trigger: nextCard,

          start: "top 88%",

          end: "top 22%",

          scrub: true,
        },
      });
    });

    ScrollTrigger.refresh();
  }, stack.value);
});

onBeforeUnmount(() => {
  context?.revert();

  cards.value = [];
});
</script>

<template>
  <section ref="stack" class="image-stack" aria-label="Project image gallery">
    <article
      v-for="(image, index) in images"
      :key="`${image}-${index}`"
      :ref="setCardRef"
      class="image-stack__card"
      :style="{
        zIndex: index + 1,
        '--stack-index': index,
      }"
    >
      <div class="image-stack__image-wrapper">
        <img
          :src="image"
          :alt="`${altPrefix} ${index + 1}`"
          class="image-stack__image"
        />
      </div>
    </article>
  </section>
</template>

<style scoped>
/* =========================================
   STACK
========================================= */

.image-stack {
  position: relative;

  width: 100%;

  /*
    Ruimte onder de laatste kaart zodat
    het einde niet abrupt voelt.
  */
  padding-bottom: 120px;
}

/* =========================================
   CARD
========================================= */

.image-stack__card {
  position: sticky;

  /*
    Iedere kaart blijft bijna op dezelfde plek.

    De kleine extra offset zorgt ervoor dat
    je de vorige kaarten bovenaan nog ziet.
  */
  top: calc(115px + (var(--stack-index) * 14px));

  width: min(1216px, calc(100% - 48px));

  margin: 0 auto 110px;

  transform-origin: center top;

  will-change: transform;
}

/* =========================================
   VISUAL CARD
========================================= */

.image-stack__image-wrapper {
  position: relative;

  width: 100%;

  /*
    Grote editorial kaart zoals in
    je PieterKoopt referentie.
  */
  min-height: min(72vh, 760px);

  overflow: hidden;

  border-radius: 30px;

  background: #f1f1ed;

  border: 1px solid rgba(17, 17, 17, 0.1);

  /*
    Schaduw blijft heel subtiel.
    Zo zie je wel duidelijk dat kaart 2
    boven kaart 1 ligt.
  */
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.06);
}

/* =========================================
   IMAGE
========================================= */

.image-stack__image {
  display: block;

  width: 100%;
  height: 100%;

  min-height: min(72vh, 760px);

  object-fit: cover;

  /*
    Geen border radius nodig op img zelf
    omdat wrapper overflow:hidden heeft.
  */
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 900px) {
  .image-stack__card {
    top: calc(95px + (var(--stack-index) * 10px));

    width: calc(100% - 40px);

    margin-bottom: 80px;
  }

  .image-stack__image-wrapper,
  .image-stack__image {
    min-height: 62vh;
  }

  .image-stack__image-wrapper {
    border-radius: 24px;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 600px) {
  .image-stack {
    padding-bottom: 70px;
  }

  .image-stack__card {
    top: calc(80px + (var(--stack-index) * 7px));

    width: calc(100% - 28px);

    margin-bottom: 60px;
  }

  .image-stack__image-wrapper,
  .image-stack__image {
    min-height: 52vh;
  }

  .image-stack__image-wrapper {
    border-radius: 20px;
  }
}
</style>
