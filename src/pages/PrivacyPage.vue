<script setup>
import { ref } from "vue";

import { useScrollReveal } from "../composables/useScrollReveal";

const intro = ref(null);
const content = ref(null);

useScrollReveal(intro, ".reveal", {
  stagger: 0.08,
});

useScrollReveal(content, ".reveal", {
  stagger: 0.06,
});

function openCookieSettings() {
  window.dispatchEvent(new CustomEvent("open-cookie-settings"));
}
</script>

<template>
  <main class="privacy-page">
    <!-- =====================================
         INTRO
    ====================================== -->

    <section
      ref="intro"
      class="section privacy-intro"
      aria-labelledby="privacy-title"
    >
      <p class="privacy-eyebrow reveal">Privacy &amp; cookies</p>

      <h1 id="privacy-title" class="reveal">Your visit, your choice.</h1>

      <p class="privacy-intro__text reveal">
        This portfolio uses optional analytics to help me understand how
        visitors move through the site, which pages they view, where they click
        and how far they scroll. Analytics are only loaded after you choose to
        accept them.
      </p>
    </section>

    <!-- =====================================
         CONTENT
    ====================================== -->

    <section ref="content" class="section privacy-content">
      <!-- WHY -->

      <article class="privacy-block reveal">
        <p class="privacy-block__number">01</p>

        <div class="privacy-block__copy">
          <h2>Why I use analytics</h2>

          <p>
            I use analytics to learn how people experience my portfolio. For
            example, I may look at which pages are visited, where people click,
            how far they scroll and how visitors move between pages.
          </p>

          <p>
            I use these insights to improve the usability, structure and design
            of the portfolio.
          </p>
        </div>
      </article>

      <!-- CONTENTSQUARE -->

      <article class="privacy-block reveal">
        <p class="privacy-block__number">02</p>

        <div class="privacy-block__copy">
          <h2>Contentsquare</h2>

          <p>
            If you accept analytics, I use Contentsquare to understand
            interaction patterns such as clicks, scrolling, navigation and page
            engagement.
          </p>

          <p>
            Contentsquare may also create session replays. My current
            Contentsquare setup uses masking so that text and numbers are hidden
            in these recordings. The goal is to understand interaction
            behaviour, not to identify individual visitors.
          </p>

          <a
            href="https://contentsquare.com/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Contentsquare’s privacy information
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>

      <!-- GOOGLE -->

      <article class="privacy-block reveal">
        <p class="privacy-block__number">03</p>

        <div class="privacy-block__copy">
          <h2>Google Analytics</h2>

          <p>
            If you accept analytics, I may also use Google Analytics to
            understand general website usage, such as page views, engagement and
            how visitors move through the portfolio.
          </p>

          <p>
            Google Analytics is not loaded before you give permission through
            the cookie banner.
          </p>

          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Google’s privacy policy
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>

      <!-- CONSENT -->

      <article class="privacy-block reveal">
        <p class="privacy-block__number">04</p>

        <div class="privacy-block__copy">
          <h2>Your consent</h2>

          <p>
            Analytics are optional. You can accept or reject analytics when you
            first visit the site.
          </p>

          <p>
            Your choice is stored in your browser so that I do not have to ask
            you again every time you visit. You can reopen the cookie settings
            and change your choice at any time.
          </p>

          <button
            type="button"
            class="privacy-settings-button"
            @click="openCookieSettings"
          >
            Open cookie settings
          </button>
        </div>
      </article>

      <!-- CONTACT -->

      <article class="privacy-block reveal">
        <p class="privacy-block__number">05</p>

        <div class="privacy-block__copy">
          <h2>Questions?</h2>

          <p>
            If you have a question about privacy or how analytics are used on
            this portfolio, you can contact me by email.
          </p>

          <a href="mailto:heyitsyasmink.design@outlook.com">
            heyitsyasmink.design@outlook.com
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
/* =========================================
   PAGE
========================================= */

.privacy-page {
  min-height: 100vh;

  padding-top: 90px;

  background: var(--color-bg);

  color: var(--color-text);

  font-family: var(--font-body);
}

/* =========================================
   INTRO
========================================= */

.privacy-intro {
  padding-top: 140px;

  padding-bottom: 120px;
}

.privacy-eyebrow {
  margin-bottom: 18px;

  font-size: 11px;

  letter-spacing: 0.12em;

  text-transform: uppercase;

  opacity: 0.5;
}

.privacy-intro h1 {
  max-width: 950px;

  font-size: clamp(62px, 10vw, 140px);

  line-height: 0.86;

  letter-spacing: -0.07em;

  text-transform: uppercase;
}

.privacy-intro__text {
  max-width: 700px;

  margin-top: 40px;

  font-size: clamp(17px, 1.6vw, 22px);

  line-height: 1.6;
}

/* =========================================
   CONTENT
========================================= */

.privacy-content {
  padding-top: 20px;

  padding-bottom: 160px;
}

.privacy-block {
  display: grid;

  grid-template-columns:
    100px
    minmax(0, 720px);

  gap: clamp(30px, 7vw, 90px);

  padding: 48px 0;

  border-top: 1px solid rgba(17, 17, 17, 0.15);
}

.privacy-block:last-child {
  border-bottom: 1px solid rgba(17, 17, 17, 0.15);
}

.privacy-block__number {
  font-size: 11px;

  letter-spacing: 0.1em;

  opacity: 0.4;
}

.privacy-block__copy {
  display: grid;

  gap: 18px;
}

.privacy-block h2 {
  font-size: clamp(30px, 4vw, 48px);

  line-height: 1;

  letter-spacing: -0.045em;
}

.privacy-block p {
  max-width: 680px;

  font-size: 15px;

  line-height: 1.7;

  opacity: 0.78;
}

.privacy-block a {
  width: fit-content;

  display: inline-flex;

  align-items: center;

  gap: 8px;

  color: inherit;

  font-size: 13px;

  text-decoration: underline;

  text-underline-offset: 4px;
}

/* =========================================
   SETTINGS BUTTON
========================================= */

.privacy-settings-button {
  width: fit-content;

  margin-top: 4px;

  padding: 11px 16px;

  border: 1px solid rgba(17, 17, 17, 0.2);

  border-radius: 999px;

  background: var(--color-sage);

  color: inherit;

  font-family: var(--font-body);

  font-size: 12px;

  cursor: pointer;

  transition:
    transform 0.3s var(--ease-soft),
    background 0.3s ease;
}

.privacy-settings-button:hover {
  transform: translateY(-2px);

  background: #e1e5d2;
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 650px) {
  .privacy-page {
    padding-top: 70px;
  }

  .privacy-intro {
    padding-top: 100px;

    padding-bottom: 90px;
  }

  .privacy-block {
    grid-template-columns: 1fr;

    gap: 18px;

    padding: 38px 0;
  }

  .privacy-content {
    padding-bottom: 120px;
  }
}
</style>
