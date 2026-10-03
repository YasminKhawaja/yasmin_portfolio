<script setup>
import { ref } from "vue";

import { useScrollReveal } from "../composables/useScrollReveal";

/* =========================================
   REFS
========================================= */

const intro = ref(null);
const links = ref(null);
const closing = ref(null);

/* =========================================
   SCROLL REVEAL
========================================= */

useScrollReveal(intro, ".reveal", {
  stagger: 0.08,
});

useScrollReveal(links, ".reveal", {
  stagger: 0.08,
});

useScrollReveal(closing, ".reveal", {
  stagger: 0.08,
});
</script>

<template>
  <main class="contact-page">
    <!-- =====================================
         HERO
    ====================================== -->

    <section
      ref="intro"
      class="section contact-hero"
      aria-labelledby="contact-title"
    >
      <div class="contact-hero__copy">
        <p class="contact-eyebrow reveal">Contact</p>

        <h1 id="contact-title" class="reveal">Let’s talk.</h1>

        <p class="contact-hero__intro reveal">
          Have a question, want to collaborate or just want to say hi? I’d love
          to hear from you.
        </p>

        <a class="contact-email reveal" href="mailto:hello@example.com">
          hello@example.com

          <span aria-hidden="true"> ↗ </span>
        </a>
      </div>

      <div class="contact-visual reveal" aria-hidden="true">
        <div class="contact-visual__glow"></div>

        <img
          src="/images/lotus.png"
          alt=""
          class="contact-visual__lotus contact-visual__lotus--one"
        />

        <img src="/images/leaf.png" alt="" class="contact-visual__leaf" />

        <img
          src="/images/lotus.png"
          alt=""
          class="contact-visual__lotus contact-visual__lotus--two"
        />
      </div>
    </section>

    <!-- =====================================
         LINKS
    ====================================== -->

    <section
      ref="links"
      class="section contact-links-section"
      aria-label="Contact links"
    >
      <div class="contact-links">
        <a class="contact-link reveal" href="mailto:hello@example.com">
          <span> Email </span>

          <strong> Send me a message </strong>

          <span aria-hidden="true"> ↗ </span>
        </a>

        <a
          class="contact-link reveal"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span> LinkedIn </span>

          <strong> Connect with me </strong>

          <span aria-hidden="true"> ↗ </span>
        </a>

        <a
          class="contact-link reveal"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span> GitHub </span>

          <strong> See what I build </strong>

          <span aria-hidden="true"> ↗ </span>
        </a>
      </div>
    </section>

    <!-- =====================================
         CLOSING
    ====================================== -->

    <section
      ref="closing"
      class="contact-closing"
      aria-labelledby="contact-closing-title"
    >
      <div class="section contact-closing__inner">
        <p class="contact-eyebrow reveal">Open to opportunities</p>

        <h2 id="contact-closing-title" class="reveal">
          Let’s make something thoughtful.
        </h2>

        <p class="contact-closing__text reveal">
          I’m interested in digital experiences where research, visual design
          and interaction come together.
        </p>

        <a
          href="mailto:hello@example.com"
          class="contact-closing__button reveal"
        >
          Say hello

          <span aria-hidden="true"> ↗ </span>
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* =========================================
   PAGE
========================================= */

.contact-page {
  min-height: 100vh;

  padding-top: 90px;

  overflow: hidden;

  background: var(--color-bg);

  color: var(--color-text);

  font-family: var(--font-body);
}

/* =========================================
   SHARED
========================================= */

.contact-eyebrow {
  margin-bottom: 18px;

  font-size: 11px;

  letter-spacing: 0.12em;

  text-transform: uppercase;

  opacity: 0.5;
}

/* =========================================
   HERO
========================================= */

.contact-hero {
  min-height: 720px;

  display: grid;

  grid-template-columns:
    0.9fr
    1.1fr;

  gap: clamp(60px, 9vw, 150px);

  align-items: center;

  padding-top: 100px;

  padding-bottom: 130px;
}

.contact-hero__copy {
  max-width: 660px;
}

.contact-hero h1 {
  margin-bottom: 30px;

  font-size: clamp(72px, 10vw, 150px);

  line-height: 0.82;

  letter-spacing: -0.075em;

  text-transform: uppercase;
}

.contact-hero__intro {
  max-width: 550px;

  font-size: clamp(18px, 1.6vw, 23px);

  line-height: 1.55;
}

.contact-email {
  display: inline-flex;

  align-items: center;

  gap: 18px;

  margin-top: 42px;

  padding-bottom: 8px;

  border-bottom: 1px solid rgba(17, 17, 17, 0.22);

  color: inherit;

  font-size: clamp(18px, 2vw, 28px);

  letter-spacing: -0.025em;

  text-decoration: none;

  transition: opacity 0.3s ease;
}

.contact-email:hover {
  opacity: 0.55;
}

/* =========================================
   LOTUS VISUAL
========================================= */

.contact-visual {
  position: relative;

  min-height: 520px;
}

.contact-visual__glow {
  position: absolute;

  left: 50%;
  top: 50%;

  width: 420px;
  height: 420px;

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(211, 217, 189, 0.45),
    rgba(211, 217, 189, 0) 68%
  );

  transform: translate(-50%, -50%);
}

.contact-visual__lotus,
.contact-visual__leaf {
  position: absolute;

  display: block;

  pointer-events: none;

  user-select: none;
}

.contact-visual__leaf {
  left: 50%;
  top: 49%;

  width: min(70%, 480px);

  transform: translate(-50%, -50%) rotate(-8deg);

  opacity: 0.9;
}

.contact-visual__lotus--one {
  right: 2%;
  top: 29%;

  width: clamp(130px, 15vw, 220px);

  transform: rotate(7deg);
}

.contact-visual__lotus--two {
  left: 18%;
  bottom: 10%;

  width: clamp(150px, 18vw, 250px);

  transform: rotate(-10deg);
}

/* =========================================
   CONTACT LINKS
========================================= */

.contact-links-section {
  padding-top: 60px;

  padding-bottom: 140px;
}

.contact-links {
  border-top: 1px solid rgba(17, 17, 17, 0.16);
}

.contact-link {
  display: grid;

  grid-template-columns:
    150px
    1fr
    auto;

  gap: 30px;

  align-items: center;

  padding: 32px 0;

  border-bottom: 1px solid rgba(17, 17, 17, 0.16);

  color: inherit;

  text-decoration: none;

  transition:
    opacity 0.3s ease,
    padding-left 0.4s var(--ease-soft);
}

.contact-link:hover {
  opacity: 0.55;

  padding-left: 10px;
}

.contact-link > span:first-child {
  font-size: 11px;

  text-transform: uppercase;

  letter-spacing: 0.1em;

  opacity: 0.5;
}

.contact-link strong {
  font-size: clamp(22px, 2.4vw, 36px);

  font-weight: 400;

  letter-spacing: -0.04em;
}

.contact-link > span:last-child {
  font-size: 22px;
}

/* =========================================
   CLOSING
========================================= */

.contact-closing {
  background: var(--color-sage);
}

.contact-closing__inner {
  min-height: 560px;

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: flex-start;
}

.contact-closing h2 {
  max-width: 950px;

  font-size: clamp(52px, 8vw, 112px);

  line-height: 0.9;

  letter-spacing: -0.07em;

  text-transform: uppercase;
}

.contact-closing__text {
  max-width: 520px;

  margin-top: 38px;

  font-size: 16px;

  line-height: 1.6;
}

.contact-closing__button {
  display: inline-flex;

  align-items: center;

  gap: 15px;

  margin-top: 42px;

  padding: 13px 18px;

  border: 1px solid rgba(17, 17, 17, 0.24);

  border-radius: 999px;

  color: inherit;

  font-size: 13px;

  text-decoration: none;

  transition:
    transform 0.3s var(--ease-soft),
    background 0.3s ease;
}

.contact-closing__button:hover {
  transform: translateY(-3px);

  background: rgba(255, 255, 255, 0.25);
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 900px) {
  .contact-hero {
    grid-template-columns: 1fr;

    min-height: auto;

    gap: 40px;
  }

  .contact-visual {
    min-height: 430px;
  }

  .contact-link {
    grid-template-columns:
      110px
      1fr
      auto;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 650px) {
  .contact-page {
    padding-top: 70px;
  }

  .contact-hero {
    padding-top: 80px;

    padding-bottom: 90px;
  }

  .contact-visual {
    min-height: 330px;
  }

  .contact-visual__leaf {
    width: 300px;
  }

  .contact-visual__lotus--one {
    width: 130px;
  }

  .contact-visual__lotus--two {
    width: 150px;
  }

  .contact-links-section {
    padding-bottom: 100px;
  }

  .contact-link {
    grid-template-columns:
      1fr
      auto;

    gap: 14px;

    padding: 26px 0;
  }

  .contact-link > span:first-child {
    grid-column: 1 / -1;
  }

  .contact-closing__inner {
    min-height: 500px;
  }
}
</style>
