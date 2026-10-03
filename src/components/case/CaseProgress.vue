<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  steps: {
    type: Array,
    required: true,
  },
});

const progress = ref(0);
const activeIndex = ref(0);

function updateProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  progress.value =
    maxScroll > 0
      ? Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100))
      : 0;

  /*
    Bepalen in welke case-sectie
    de bezoeker zich bevindt.
  */

  const checkPoint = 220;

  let current = 0;

  props.steps.forEach((step, index) => {
    const section = document.getElementById(step.id);

    if (!section) return;

    const rect = section.getBoundingClientRect();

    if (rect.top <= checkPoint) {
      current = index;
    }
  });

  activeIndex.value = current;
}

onMounted(() => {
  updateProgress();

  window.addEventListener("scroll", updateProgress, {
    passive: true,
  });

  window.addEventListener("resize", updateProgress);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateProgress);

  window.removeEventListener("resize", updateProgress);
});
</script>

<template>
  <div class="case-progress">
    <div class="case-progress__track">
      <div
        class="case-progress__fill"
        :style="{
          width: `${progress}%`,
        }"
      ></div>
    </div>

    <div class="case-progress__step">
      <span>
        {{ String(activeIndex + 1).padStart(2, "0") }}
        /
        {{ String(steps.length).padStart(2, "0") }}
      </span>

      <strong>
        {{ steps[activeIndex]?.label }}
      </strong>
    </div>
  </div>
</template>

<style scoped>
.case-progress__track {
  position: fixed;

  top: 0;
  left: 0;
  right: 0;

  z-index: 1400;

  height: 3px;

  background: rgba(17, 17, 17, 0.08);
}

.case-progress__fill {
  width: 0;
  height: 100%;

  background: #111;

  transform-origin: left;

  transition: width 0.08s linear;
}

.case-progress__step {
  position: fixed;

  top: 92px;
  right: 24px;

  z-index: 900;

  display: flex;
  align-items: center;

  gap: 9px;

  padding: 9px 14px;

  border-radius: 999px;

  background: rgba(249, 249, 249, 0.78);

  backdrop-filter: blur(12px);

  -webkit-backdrop-filter: blur(12px);

  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.05);

  font-size: 11px;

  pointer-events: none;
}

.case-progress__step span {
  opacity: 0.45;
}

.case-progress__step strong {
  font-weight: 400;
}

@media (max-width: 700px) {
  .case-progress__step {
    top: 77px;
    right: 14px;

    padding: 8px 11px;
  }

  .case-progress__step strong {
    display: none;
  }
}
</style>
