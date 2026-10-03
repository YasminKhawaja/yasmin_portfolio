<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";

const dog = ref(null);

let currentScroll = 0;
let targetScroll = 0;
let animationFrame = null;

function updateDog() {
  if (!dog.value) return;

  // zachte vertraging
  currentScroll += (targetScroll - currentScroll) * 0.075;

  /*
    De hond blijft binnen de viewport,
    maar "valt" opnieuw wanneer hij onderaan komt.
  */
  const viewportHeight = window.innerHeight;

  const minY = 110;
  const maxY = viewportHeight - 190;

  const travel = Math.max(200, maxY - minY);

  const y = minY + ((currentScroll * 0.34) % travel);

  /*
    Kleine horizontale sway.
  */
  const x = Math.sin(currentScroll * 0.005) * 55;

  /*
    Zachte rotatie.
  */
  const rotation = Math.sin(currentScroll * 0.004) * 10;

  gsap.set(dog.value, {
    x,
    y,
    rotation,
  });

  animationFrame = requestAnimationFrame(updateDog);
}

function handleScroll() {
  targetScroll = window.scrollY;
}

onMounted(() => {
  targetScroll = window.scrollY;

  currentScroll = window.scrollY;

  /*
    Expliciet zichtbaar maken.
  */
  gsap.set(dog.value, {
    opacity: 1,
    visibility: "visible",
  });

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  animationFrame = requestAnimationFrame(updateDog);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);

  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
});
</script>

<template>
  <div ref="dog" class="falling-dog" aria-hidden="true">
    <img src="/images/sleeping-dog.png" alt="" />
  </div>
</template>

<style scoped>
.falling-dog {
  position: fixed;

  top: 0;
  right: 7%;

  /*
    Hoog genoeg om boven alle About-content
    zichtbaar te blijven.
  */
  z-index: 800;

  width: clamp(105px, 10vw, 175px);

  opacity: 1;
  visibility: visible;

  pointer-events: none;

  will-change: transform;
}

.falling-dog img {
  display: block;

  width: 100%;
  height: auto;

  user-select: none;

  pointer-events: none;
}

@media (max-width: 800px) {
  .falling-dog {
    right: 3%;

    width: clamp(80px, 18vw, 120px);
  }
}
</style>
