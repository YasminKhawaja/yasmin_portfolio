<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

import { loadAnalytics } from "../utils/analytics";

/* =========================================
   CONSENT
========================================= */

const STORAGE_KEY = "yasmin-analytics-consent";

const CONSENT_LIFETIME = 1000 * 60 * 60 * 24 * 180;

const choice = ref(null);

const showBanner = ref(false);

const showDetails = ref(false);

/* =========================================
   STORAGE
========================================= */

function readConsent() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return null;
    }

    const parsed = JSON.parse(stored);

    if (!parsed || !parsed.choice || !parsed.timestamp) {
      return null;
    }

    const expired = Date.now() - parsed.timestamp > CONSENT_LIFETIME;

    if (expired) {
      localStorage.removeItem(STORAGE_KEY);

      return null;
    }

    return parsed.choice;
  } catch {
    return null;
  }
}

function saveConsent(value) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        choice: value,
        timestamp: Date.now(),
      }),
    );
  } catch {
    // Analytics consent still works for this visit
    // if localStorage is unavailable.
  }
}

/* =========================================
   ACTIONS
========================================= */

function acceptAnalytics() {
  choice.value = "accepted";

  saveConsent("accepted");

  loadAnalytics();

  showBanner.value = false;
}

function rejectAnalytics() {
  choice.value = "rejected";

  saveConsent("rejected");

  showBanner.value = false;
}

function openSettings() {
  showDetails.value = false;

  showBanner.value = true;
}

function handleOpenSettings() {
  openSettings();
}

/* =========================================
   STATE
========================================= */

const hasChoice = computed(() => {
  return choice.value === "accepted" || choice.value === "rejected";
});

/* =========================================
   MOUNT
========================================= */

onMounted(() => {
  choice.value = readConsent();

  if (choice.value === "accepted") {
    loadAnalytics();
  }

  if (!choice.value) {
    showBanner.value = true;
  }

  window.addEventListener("open-cookie-settings", handleOpenSettings);
});

onBeforeUnmount(() => {
  window.removeEventListener("open-cookie-settings", handleOpenSettings);
});
</script>

<template>
  <!-- =====================================
       COOKIE BANNER
  ====================================== -->

  <Transition name="cookie">
    <aside
      v-if="showBanner"
      class="cookie-banner"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
    >
      <div class="cookie-banner__top">
        <p class="cookie-banner__eyebrow">A tiny bit of analytics 🌱</p>

        <h2 id="cookie-title">Can I learn from your visit?</h2>

        <p id="cookie-description" class="cookie-banner__text">
          I use analytics to understand how people use my portfolio — which
          pages they visit, where they click and how far they scroll. This helps
          me see what works and what I can improve.
        </p>

        <button
          class="cookie-banner__details-toggle"
          type="button"
          :aria-expanded="showDetails"
          @click="showDetails = !showDetails"
        >
          {{ showDetails ? "Hide details" : "What gets tracked?" }}
        </button>

        <Transition name="details">
          <div v-if="showDetails" class="cookie-banner__details">
            <p>
              If you accept, I use
              <strong>Contentsquare</strong> and
              <strong>Google Analytics</strong> to understand things like page
              visits, clicks, scrolling and how visitors move through the
              portfolio.
            </p>

            <p>
              Contentsquare may also create session replays. Text and numbers
              are masked in my current setup so I can focus on interaction
              patterns rather than what someone types or reads.
            </p>

            <p>
              Analytics are optional and are not loaded until you choose “Accept
              analytics”. You can change your choice later.
            </p>
          </div>
        </Transition>
      </div>

      <div class="cookie-banner__actions">
        <button
          type="button"
          class="cookie-button cookie-button--secondary"
          @click="rejectAnalytics"
        >
          Reject analytics
        </button>

        <button
          type="button"
          class="cookie-button cookie-button--primary"
          @click="acceptAnalytics"
        >
          Accept analytics
        </button>
      </div>
    </aside>
  </Transition>

  <!-- =====================================
       REOPEN SETTINGS
  ====================================== -->

  <button
    v-if="hasChoice && !showBanner"
    type="button"
    class="cookie-settings"
    @click="openSettings"
  >
    Cookie settings
  </button>
</template>

<style scoped>
/* =========================================
   BANNER
========================================= */

.cookie-banner {
  position: fixed;

  left: 24px;
  right: 24px;
  bottom: 24px;

  z-index: 99999;

  width: calc(100% - 48px);
  max-width: 760px;

  margin-left: auto;

  padding: 28px;

  border: 1px solid rgba(17, 17, 17, 0.12);

  border-radius: 26px;

  background: rgba(249, 249, 249, 0.97);

  box-shadow: 0 24px 70px rgba(17, 17, 17, 0.14);

  backdrop-filter: blur(18px);

  color: var(--color-text);

  font-family: var(--font-body);
}

/* =========================================
   CONTENT
========================================= */

.cookie-banner__top {
  max-width: 650px;
}

.cookie-banner__eyebrow {
  margin-bottom: 12px;

  font-size: 10px;

  letter-spacing: 0.12em;

  text-transform: uppercase;

  opacity: 0.5;
}

.cookie-banner h2 {
  max-width: 620px;

  font-family: var(--font-heading);

  font-size: clamp(28px, 4vw, 42px);

  line-height: 1;

  letter-spacing: -0.05em;
}

.cookie-banner__text {
  max-width: 640px;

  margin-top: 18px;

  font-size: 14px;

  line-height: 1.6;

  opacity: 0.78;
}

/* =========================================
   DETAILS
========================================= */

.cookie-banner__details-toggle {
  margin-top: 16px;

  padding: 0;

  border: 0;

  background: transparent;

  color: inherit;

  font: inherit;

  font-size: 12px;

  text-decoration: underline;

  text-underline-offset: 4px;

  cursor: pointer;

  opacity: 0.65;
}

.cookie-banner__details-toggle:hover {
  opacity: 1;
}

.cookie-banner__details {
  display: grid;

  gap: 10px;

  max-width: 640px;

  margin-top: 18px;

  padding-top: 18px;

  border-top: 1px solid rgba(17, 17, 17, 0.12);

  font-size: 12px;

  line-height: 1.6;

  opacity: 0.72;
}

/* =========================================
   ACTIONS
========================================= */

.cookie-banner__actions {
  display: flex;

  flex-wrap: wrap;

  gap: 10px;

  margin-top: 26px;
}

.cookie-button {
  min-height: 44px;

  padding: 11px 17px;

  border: 1px solid rgba(17, 17, 17, 0.2);

  border-radius: 999px;

  font-family: var(--font-body);

  font-size: 12px;

  cursor: pointer;

  transition:
    transform 0.3s var(--ease-soft),
    background 0.3s ease;
}

/*
  Accept and reject are deliberately
  similarly prominent.
*/

.cookie-button--primary,
.cookie-button--secondary {
  background: var(--color-sage);

  color: var(--color-text);
}

.cookie-button:hover {
  transform: translateY(-2px);

  background: #e1e5d2;
}

/* =========================================
   COOKIE SETTINGS
========================================= */

.cookie-settings {
  position: fixed;

  left: 18px;
  bottom: 18px;

  z-index: 9000;

  padding: 8px 12px;

  border: 1px solid rgba(17, 17, 17, 0.14);

  border-radius: 999px;

  background: rgba(249, 249, 249, 0.88);

  backdrop-filter: blur(10px);

  color: var(--color-text);

  font-family: var(--font-body);

  font-size: 10px;

  cursor: pointer;

  opacity: 0.55;

  transition:
    opacity 0.3s ease,
    transform 0.3s var(--ease-soft);
}

.cookie-settings:hover {
  opacity: 1;

  transform: translateY(-2px);
}

/* =========================================
   TRANSITIONS
========================================= */

.cookie-enter-active,
.cookie-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s var(--ease-soft);
}

.cookie-enter-from,
.cookie-leave-to {
  opacity: 0;

  transform: translateY(20px);
}

.details-enter-active,
.details-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.details-enter-from,
.details-leave-to {
  opacity: 0;

  transform: translateY(-5px);
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 650px) {
  .cookie-banner {
    left: 12px;
    right: 12px;
    bottom: 12px;

    width: calc(100% - 24px);

    padding: 22px;

    border-radius: 22px;
  }

  .cookie-banner__actions {
    display: grid;

    grid-template-columns: 1fr;
  }

  .cookie-button {
    width: 100%;
  }

  .cookie-settings {
    left: 12px;
    bottom: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cookie-enter-active,
  .cookie-leave-active,
  .details-enter-active,
  .details-leave-active,
  .cookie-button,
  .cookie-settings {
    transition: none;
  }
}
</style>
