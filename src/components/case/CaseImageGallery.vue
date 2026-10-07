<script setup>
import { onBeforeUnmount, ref } from "vue";

defineProps({
  images: {
    type: Array,
    required: true,
  },

  label: {
    type: String,
    default: "Project gallery",
  },
});

const activeImage = ref(null);

function openImage(image) {
  activeImage.value = image;

  document.body.style.overflow = "hidden";
}

function closeImage() {
  activeImage.value = null;

  document.body.style.overflow = "";
}

function handleKeydown(event) {
  if (event.key === "Escape") {
    closeImage();
  }
}

window.addEventListener("keydown", handleKeydown);

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);

  document.body.style.overflow = "";
});
</script>

<template>
  <div class="case-gallery" :aria-label="label">
    <button
      v-for="(image, index) in images"
      :key="image.src"
      class="case-gallery__item"
      type="button"
      :class="{
        'case-gallery__item--wide': image.wide,
      }"
      :aria-label="`Open ${image.alt || `project image ${index + 1}`}`"
      @click="openImage(image)"
    >
      <div class="case-gallery__visual">
        <img
          :src="image.src"
          :alt="image.alt"
          :loading="index === 0 ? 'eager' : 'lazy'"
        />

        <span class="case-gallery__zoom" aria-hidden="true"> View larger </span>
      </div>

      <div v-if="image.caption || image.label" class="case-gallery__caption">
        <span v-if="image.label">
          {{ image.label }}
        </span>

        <p v-if="image.caption">
          {{ image.caption }}
        </p>
      </div>
    </button>
  </div>

  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="activeImage"
        class="case-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="activeImage.alt || 'Project image preview'"
        @click.self="closeImage"
      >
        <button
          class="case-lightbox__close"
          type="button"
          aria-label="Close image"
          @click="closeImage"
        >
          ×
        </button>

        <div class="case-lightbox__content">
          <img :src="activeImage.src" :alt="activeImage.alt" />

          <div
            v-if="activeImage.caption || activeImage.label"
            class="case-lightbox__caption"
          >
            <span v-if="activeImage.label">
              {{ activeImage.label }}
            </span>

            <p v-if="activeImage.caption">
              {{ activeImage.caption }}
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.case-gallery {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 18px;
}

.case-gallery__item {
  min-width: 0;

  padding: 0;

  border: 0;

  background: transparent;

  color: inherit;

  text-align: left;

  cursor: zoom-in;
}

.case-gallery__item--wide {
  grid-column: 1 / -1;
}

.case-gallery__visual {
  position: relative;

  overflow: hidden;

  border: 1px solid rgba(17, 17, 17, 0.07);

  border-radius: 26px;

  background: #efefeb;
}

.case-gallery__visual img {
  display: block;

  width: 100%;
  height: auto;

  transition: transform 0.55s var(--ease-soft);
}

.case-gallery__item:hover .case-gallery__visual img {
  transform: scale(1.015);
}

.case-gallery__zoom {
  position: absolute;

  right: 16px;
  bottom: 16px;

  padding: 9px 13px;

  border: 1px solid rgba(17, 17, 17, 0.08);

  border-radius: 999px;

  background: rgba(249, 249, 249, 0.9);

  font-size: 10px;

  letter-spacing: 0.07em;

  text-transform: uppercase;

  backdrop-filter: blur(12px);

  opacity: 0;

  transform: translateY(5px);

  transition:
    opacity 0.3s ease,
    transform 0.3s var(--ease-soft);
}

.case-gallery__item:hover .case-gallery__zoom {
  opacity: 1;

  transform: translateY(0);
}

.case-gallery__caption {
  padding: 14px 4px 0;
}

.case-gallery__caption span {
  display: block;

  margin-bottom: 5px;

  font-size: 10px;

  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;

  opacity: 0.46;
}

.case-gallery__caption p {
  max-width: 520px;

  font-size: 13px;

  line-height: 1.5;

  opacity: 0.72;
}

/* =========================================
   LIGHTBOX
========================================= */

.case-lightbox {
  position: fixed;

  inset: 0;

  z-index: 100000;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 70px 30px 30px;

  background: rgba(17, 17, 17, 0.92);

  backdrop-filter: blur(12px);
}

.case-lightbox__close {
  position: fixed;

  top: 22px;
  right: 24px;

  z-index: 2;

  display: grid;

  place-items: center;

  width: 48px;
  height: 48px;

  padding: 0;

  border: 1px solid rgba(255, 255, 255, 0.18);

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.1);

  color: #ffffff;

  font-family: inherit;

  font-size: 28px;

  line-height: 1;

  cursor: pointer;
}

.case-lightbox__content {
  max-width: min(1500px, 96vw);

  max-height: calc(100vh - 110px);

  overflow: auto;
}

.case-lightbox__content img {
  display: block;

  width: auto;
  max-width: 100%;

  height: auto;
  max-height: calc(100vh - 170px);

  margin: 0 auto;

  object-fit: contain;
}

.case-lightbox__caption {
  max-width: 760px;

  margin: 18px auto 0;

  color: #ffffff;

  text-align: center;
}

.case-lightbox__caption span {
  display: block;

  margin-bottom: 6px;

  font-size: 10px;

  letter-spacing: 0.08em;

  text-transform: uppercase;

  opacity: 0.55;
}

.case-lightbox__caption p {
  font-size: 13px;

  line-height: 1.55;

  opacity: 0.8;
}

/* =========================================
   TRANSITION
========================================= */

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 650px) {
  .case-gallery {
    grid-template-columns: 1fr;
  }

  .case-gallery__item--wide {
    grid-column: auto;
  }

  .case-gallery__zoom {
    opacity: 1;

    transform: none;
  }

  .case-lightbox {
    padding: 70px 14px 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .case-gallery__visual img,
  .case-gallery__zoom,
  .lightbox-enter-active,
  .lightbox-leave-active {
    transition: none;
  }
}
</style>
