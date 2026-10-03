<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";

import WaterSurface from "../WaterSurface.vue";

const flower = ref(null);

let floatTween = null;

onMounted(() => {
  if (!flower.value) return;

  floatTween = gsap.to(flower.value, {
    x: 18,
    y: -10,
    rotation: 2.5,

    duration: 6,

    repeat: -1,
    yoyo: true,

    ease: "sine.inOut",
  });
});

onBeforeUnmount(() => {
  floatTween?.kill();
});
</script>

<template>
  <section class="about-intro">
    <div class="about-intro__copy">
      <p class="eyebrow">About me</p>

      <h1>Who is Yasmin?</h1>

      <p>
        I’m Yasmin, a Digital Experience Design student with a creative mind and
        a slightly nerdy side.
      </p>

      <p>
        Outside of design, I enjoy watching series and anime, collecting cute
        little trinkets, and exploring ideas that make digital experiences feel
        more intuitive and human.
      </p>
    </div>

    <div class="about-intro__visual">
      <WaterSurface />

      <img
        ref="flower"
        class="about-intro__lotus"
        src="/images/lotus.png"
        alt=""
      />
    </div>
  </section>
</template>

<style scoped>
.about-intro {
  min-height: 100vh;

  display: grid;

  grid-template-columns:
    minmax(0, 0.9fr)
    minmax(0, 1.1fr);

  align-items: center;

  gap: clamp(50px, 8vw, 140px);

  width: min(1400px, calc(100% - 96px));

  margin: 0 auto;

  padding: 170px 0 100px;
}

.about-intro__copy {
  position: relative;

  z-index: 2;

  max-width: 580px;
}

.eyebrow {
  margin-bottom: 18px;

  font-size: 13px;

  text-transform: uppercase;

  letter-spacing: 0.12em;

  opacity: 0.6;
}

h1 {
  margin: 0 0 34px;

  font-size: clamp(54px, 7vw, 110px);

  line-height: 0.95;

  letter-spacing: -0.06em;
}

.about-intro__copy p:not(.eyebrow) {
  max-width: 540px;

  margin: 0 0 20px;

  font-size: clamp(16px, 1.35vw, 20px);

  line-height: 1.6;
}

.about-intro__visual {
  position: relative;

  min-height: 620px;

  overflow: hidden;

  border-radius: 42px;

  background: #173b2a;
}

.about-intro__lotus {
  position: absolute;

  right: 12%;
  top: 22%;

  z-index: 2;

  width: clamp(110px, 14vw, 220px);

  pointer-events: none;

  filter: drop-shadow(0 20px 24px rgba(0, 0, 0, 0.16));
}

@media (max-width: 900px) {
  .about-intro {
    grid-template-columns: 1fr;

    width: calc(100% - 40px);

    padding-top: 130px;
  }

  .about-intro__visual {
    min-height: 480px;
  }
}
</style>
