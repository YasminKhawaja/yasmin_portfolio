<script setup>
import { ref } from "vue";
import { useScrollReveal } from "../composables/useScrollReveal";
import IconArrowUpRight from "./ui/IconArrowUpRight.vue";

const root = ref(null);

useScrollReveal(root, ".reveal", {
  stagger: 0.1,
});

const year = new Date().getFullYear();

function openCookieSettings() {
  window.dispatchEvent(new CustomEvent("open-cookie-settings"));
}
</script>

<template>
  <footer id="footer" ref="root" class="footer">
    <div class="footer__inner">
      <!-- =====================================
           INTRO
      ====================================== -->

      <div class="footer__top reveal">
        <div class="footer__availability">
          <span class="footer__availability-dot" aria-hidden="true"></span>

          <span>
            Open to internships, collaborations &amp; creative projects
          </span>
        </div>

        <p class="footer__eyebrow">Have something in mind?</p>

        <h2>Let’s create something calm, thoughtful and a little bit alive.</h2>

        <p class="footer__intro-text">
          Whether it starts with UX/UI, branding, accessibility, front-end
          development or a slightly strange creative idea, I’d love to hear
          about it.
        </p>
      </div>

      <!-- =====================================
           CONTACT
      ====================================== -->

      <div class="footer__contact reveal">
        <a href="mailto:heyitsyasmink.design@outlook.com" class="footer__email">
          <span> heyitsyasmink.design@outlook.com </span>

          <span aria-hidden="true"> <IconArrowUpRight /> </span>
        </a>

        <div class="footer__socials" aria-label="Social links">
          <a
            href="https://www.linkedin.com/in/yasmin-khawaja"
            class="pill"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn

            <span aria-hidden="true"> <IconArrowUpRight /> </span>
          </a>

          <a
            href="https://www.instagram.com/yasmiinniimsay/"
            class="pill"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram

            <span aria-hidden="true"> <IconArrowUpRight /> </span>
          </a>
        </div>
      </div>

      <!-- =====================================
           FOOTER NAVIGATION
      ====================================== -->

      <nav class="footer__nav reveal" aria-label="Footer navigation">
        <RouterLink to="/"> Home </RouterLink>

        <RouterLink to="/about"> About </RouterLink>

        <RouterLink to="/projects"> Projects </RouterLink>

        <RouterLink to="/skills"> Skills </RouterLink>

        <RouterLink to="/contact"> Contact </RouterLink>
      </nav>

      <!-- =====================================
           PRIVACY
      ====================================== -->

      <div class="footer__privacy reveal">
        <RouterLink to="/privacy"> Privacy &amp; Cookies </RouterLink>

        <button type="button" @click="openCookieSettings">
          Cookie settings
        </button>
      </div>

      <!-- =====================================
           BOTTOM
      ====================================== -->

      <div class="footer__bottom reveal">
        <span class="footer__logo"> YK </span>

        <span class="footer__copy">
          © {{ year }} Yasmin — designed &amp; built with Vue, GSAP &amp;
          three.js
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;

  width: 100%;

  padding: 110px 24px 32px;

  background: var(--color-sage);

  isolation: isolate;
}

/* Keep this — prevents the white strip below the footer */
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

  gap: 70px;
}

/* =========================================
   TOP
========================================= */

.footer__top {
  max-width: 1000px;
}

.footer__availability {
  display: inline-flex;

  align-items: center;

  gap: 9px;

  margin-bottom: 54px;

  font-size: 11px;

  letter-spacing: 0.08em;

  text-transform: uppercase;

  opacity: 0.62;
}

.footer__availability-dot {
  width: 8px;

  height: 8px;

  flex-shrink: 0;

  border-radius: 50%;

  background: currentColor;

  animation: footerPulse 2.4s ease-in-out infinite;
}

.footer__eyebrow {
  margin-bottom: 20px;

  font-size: 11px;

  letter-spacing: 0.12em;

  text-transform: uppercase;

  opacity: 0.5;
}

.footer__top h2 {
  max-width: 980px;

  font-family: var(--font-heading);

  font-weight: 700;

  font-size: clamp(44px, 7vw, 92px);

  line-height: 0.94;

  letter-spacing: -0.06em;
}

.footer__intro-text {
  max-width: 630px;

  margin-top: 32px;

  font-size: clamp(15px, 1.4vw, 18px);

  line-height: 1.65;

  opacity: 0.72;
}

/* =========================================
   CONTACT
========================================= */

.footer__contact {
  display: flex;

  flex-wrap: wrap;

  align-items: flex-end;

  justify-content: space-between;

  gap: 34px;
}

.footer__email {
  display: inline-flex;

  align-items: center;

  gap: 18px;

  max-width: 100%;

  padding-bottom: 8px;

  border-bottom: 2px solid currentColor;

  color: inherit;

  font-family: var(--font-heading);

  font-weight: 600;

  font-size: clamp(18px, 3vw, 32px);

  letter-spacing: -0.035em;

  text-decoration: none;

  overflow-wrap: anywhere;

  transition:
    opacity 0.3s ease,
    transform 0.35s var(--ease-soft);
}

.footer__email:hover {
  opacity: 0.6;

  transform: translateX(4px);
}

.footer__email > span:last-child {
  flex-shrink: 0;

  font-size: 0.7em;
}

/* =========================================
   SOCIALS
========================================= */

.footer__socials {
  display: flex;

  flex-wrap: wrap;

  gap: 10px;
}

.footer__socials .pill {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding: 10px 15px;

  border: 1px solid rgba(17, 17, 17, 0.12);

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.3);

  color: inherit;

  font-size: 12px;

  text-decoration: none;

  transition:
    transform 0.3s var(--ease-soft),
    background 0.3s ease;
}

.footer__socials .pill:hover {
  transform: translateY(-3px);

  background: rgba(255, 255, 255, 0.5);
}

/* =========================================
   FOOTER NAVIGATION
========================================= */

.footer__nav {
  display: flex;

  flex-wrap: wrap;

  gap: 10px 24px;

  padding-top: 26px;

  border-top: 1px solid rgba(0, 0, 0, 0.12);
}

.footer__nav a {
  position: relative;

  color: inherit;

  font-size: 13px;

  text-decoration: none;

  opacity: 0.68;

  transition:
    opacity 0.3s ease,
    transform 0.3s var(--ease-soft);
}

.footer__nav a::after {
  content: "";

  position: absolute;

  left: 0;

  bottom: -5px;

  width: 100%;

  height: 1px;

  background: currentColor;

  transform: scaleX(0);

  transform-origin: left;

  transition: transform 0.3s var(--ease-soft);
}

.footer__nav a:hover {
  opacity: 1;

  transform: translateY(-2px);
}

.footer__nav a:hover::after {
  transform: scaleX(1);
}

.footer__nav a.router-link-active {
  opacity: 1;
}

/* =========================================
   PRIVACY
========================================= */

.footer__privacy {
  display: flex;

  flex-wrap: wrap;

  gap: 12px 22px;

  margin-top: -38px;
}

.footer__privacy a,
.footer__privacy button {
  padding: 0;

  border: 0;

  background: transparent;

  color: inherit;

  font-family: var(--font-body);

  font-size: 11px;

  text-decoration: none;

  cursor: pointer;

  opacity: 0.5;

  transition: opacity 0.3s ease;
}

.footer__privacy a:hover,
.footer__privacy button:hover {
  opacity: 1;
}

.footer__privacy a {
  text-decoration: underline;

  text-underline-offset: 4px;
}

/* =========================================
   BOTTOM
========================================= */

.footer__bottom {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;

  padding-top: 26px;

  border-top: 1px solid rgba(0, 0, 0, 0.15);

  font-size: 12px;

  opacity: 0.62;
}

.footer__logo {
  flex-shrink: 0;

  font-family: var(--font-heading);

  font-weight: 700;

  font-size: 18px;

  letter-spacing: -0.04em;
}

.footer__copy {
  text-align: right;
}

/* =========================================
   MOTION
========================================= */

@keyframes footerPulse {
  0%,
  100% {
    opacity: 0.35;

    transform: scale(0.9);
  }

  50% {
    opacity: 1;

    transform: scale(1);
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 650px) {
  .footer {
    padding: 90px 20px 30px;
  }

  .footer__inner {
    gap: 52px;
  }

  .footer__availability {
    margin-bottom: 42px;

    line-height: 1.5;
  }

  .footer__top h2 {
    font-size: clamp(40px, 12vw, 64px);
  }

  .footer__contact,
  .footer__bottom {
    flex-direction: column;

    align-items: flex-start;
  }

  .footer__email {
    font-size: clamp(16px, 5vw, 22px);
  }

  .footer__socials {
    margin-top: 8px;
  }

  .footer__nav {
    gap: 12px 20px;
  }

  .footer__privacy {
    margin-top: -22px;
  }

  .footer__copy {
    text-align: left;

    line-height: 1.5;
  }
}

@media (prefers-reduced-motion: reduce) {
  .footer__availability-dot {
    animation: none;
  }

  .footer__email,
  .footer__socials .pill,
  .footer__nav a,
  .footer__nav a::after,
  .footer__privacy a,
  .footer__privacy button {
    transition: none;
  }
}
</style>
