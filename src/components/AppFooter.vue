<script setup>
import { ref } from "vue";
import { useScrollReveal } from "../composables/useScrollReveal";

const root = ref(null);

useScrollReveal(root, ".reveal", {
  stagger: 0.1,
});

const year = new Date().getFullYear();
</script>

<template>
  <footer id="footer" ref="root" class="footer">
    <div class="footer__inner">
      <div class="footer__intro reveal">
        <h2>Let's create something calm and a little bit alive.</h2>

        <p>Open voor freelance werk, stages en toffe samenwerkingen.</p>
      </div>

      <div class="footer__contact reveal">
        <a href="mailto:hello@yasmink.design" class="footer__email">
          hello@yasmink.design
        </a>

        <div class="footer__socials">
          <a href="#" class="pill" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>

          <a href="#" class="pill" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>

          <a href="#" class="pill" target="_blank" rel="noopener noreferrer">
            Behance
          </a>
        </div>
      </div>

      <div class="footer__bottom reveal">
        <span class="footer__logo"> YK </span>

        <span class="footer__copy">
          © {{ year }} Yasmin — made with Vue, GSAP &amp; three.js
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;

  width: 100%;

  background: var(--color-sage);

  padding: 100px 24px 32px;

  isolation: isolate;
}
.footer::after {
  content: "";

  position: absolute;

  left: 0;
  right: 0;

  bottom: -20px;

  height: 20px;

  background: var(--color-sage);

  z-index: -1;
}
.footer__inner {
  width: 100%;

  max-width: 1216px;

  margin: 0 auto;

  display: flex;

  flex-direction: column;

  gap: 56px;
}

/* =========================================
   INTRO
========================================= */

.footer__intro h2 {
  max-width: 640px;

  font-family: var(--font-heading);

  font-weight: 700;

  font-size: clamp(28px, 5vw, 44px);

  line-height: 1.2;

  letter-spacing: -0.035em;
}

.footer__intro p {
  margin-top: 16px;

  font-size: 16px;

  line-height: 1.55;

  opacity: 0.75;
}

/* =========================================
   CONTACT
========================================= */

.footer__contact {
  display: flex;

  flex-wrap: wrap;

  align-items: center;

  justify-content: space-between;

  gap: 24px;
}

.footer__email {
  padding-bottom: 4px;

  border-bottom: 2px solid currentColor;

  font-family: var(--font-heading);

  font-weight: 600;

  font-size: clamp(22px, 4vw, 32px);

  transition: opacity 0.3s ease;
}

.footer__email:hover {
  opacity: 0.6;
}

/* =========================================
   SOCIALS
========================================= */

.footer__socials {
  display: flex;

  flex-wrap: wrap;

  gap: 12px;
}

.footer__socials .pill {
  background: rgba(255, 255, 255, 0.35);
}

/* =========================================
   BOTTOM
========================================= */

.footer__bottom {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;

  padding-top: 24px;

  border-top: 1px solid rgba(0, 0, 0, 0.15);

  font-size: 13px;

  opacity: 0.7;
}

.footer__logo {
  flex-shrink: 0;

  font-family: var(--font-heading);

  font-weight: 700;

  font-size: 18px;
}

.footer__copy {
  text-align: right;
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 600px) {
  .footer {
    padding: 80px 20px 30px;
  }

  .footer__inner {
    gap: 44px;
  }

  .footer__contact,
  .footer__bottom {
    flex-direction: column;

    align-items: flex-start;

    gap: 18px;
  }

  .footer__copy {
    text-align: left;

    line-height: 1.5;
  }
}
</style>
