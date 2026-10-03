<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const visible = ref(false);

function onScroll() {
  visible.value = window.scrollY > 700;
}

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

onMounted(() => {
  onScroll();

  window.addEventListener("scroll", onScroll, {
    passive: true,
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <button
    class="back-to-top"
    :class="{
      'back-to-top--visible': visible,
    }"
    type="button"
    aria-label="Scroll terug naar boven"
    @click="goToTop"
  >
    <span aria-hidden="true"> ↑ </span>
  </button>
</template>

<style scoped>
.back-to-top {
  position: fixed;

  right: 26px;
  bottom: 26px;

  z-index: 1200;

  display: grid;

  place-items: center;

  width: 54px;
  height: 54px;

  border-radius: 50%;

  background: rgba(249, 249, 249, 0.88);

  color: #111;

  border: 1px solid rgba(17, 17, 17, 0.1);

  backdrop-filter: blur(12px);

  -webkit-backdrop-filter: blur(12px);

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);

  font-size: 22px;

  opacity: 0;

  visibility: hidden;

  transform: translateY(12px);

  transition:
    opacity 0.3s ease,
    visibility 0.3s ease,
    transform 0.3s ease,
    background 0.3s ease;
}

.back-to-top--visible {
  opacity: 1;

  visibility: visible;

  transform: translateY(0);
}

.back-to-top:hover {
  background: var(--color-sage);

  transform: translateY(-3px);
}

@media (max-width: 700px) {
  .back-to-top {
    right: 16px;
    bottom: 16px;

    width: 48px;
    height: 48px;
  }
}
</style>
