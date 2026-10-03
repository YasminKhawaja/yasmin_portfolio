<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="nav__inner">
      <!-- LOGO -->

      <RouterLink to="/" class="nav__logo" aria-label="Yasmin portfolio — home">
        YK
      </RouterLink>

      <!-- NAVIGATION -->

      <nav class="nav__links" aria-label="Hoofdnavigatie">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav__link"
          :class="{
            'nav__link--active': isActive(link),
          }"
        >
          <span class="nav__link-text">
            {{ link.label }}
          </span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

import { useRoute } from "vue-router";

const route = useRoute();

const scrolled = ref(false);

const links = [
  {
    label: "Home",
    to: "/",
    page: "/",
  },

  {
    label: "About me",
    to: "/about",
    page: "/about",
  },

  {
    label: "Projects",
    to: "/projects",
    page: "/projects",
  },

  {
    label: "Skills",
    to: "/skills",
    page: "/skills",
  },

  {
    label: "Contact",
    to: "/contact",
    page: "/contact",
  },
];

function onScroll() {
  scrolled.value = window.scrollY > 40;
}

function isActive(link) {
  if (link.page === "/") {
    return route.path === "/";
  }

  if (link.page === "/projects") {
    return route.path.startsWith("/projects");
  }

  return route.path === link.page;
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

<style scoped>
/* =========================================
   NAV WRAPPER
========================================= */

.nav {
  position: fixed;

  top: 22px;
  left: 0;
  right: 0;

  z-index: 1000;

  height: 58px;

  font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;

  pointer-events: none;
}

/* =========================================
   INNER

   Exact hetzelfde horizontale systeem
   als de globale .section
========================================= */

.nav__inner {
  position: relative;

  width: 100%;
  max-width: 1216px;

  height: 100%;

  margin: 0 auto;

  padding: 0 24px;
}

/* =========================================
   LOGO
========================================= */

.nav__logo {
  position: absolute;

  left: 24px;
  top: 50%;

  z-index: 2;

  transform: translateY(-50%);

  pointer-events: auto;

  color: #111;

  font-size: 27px;

  font-weight: 700;

  line-height: 1;

  letter-spacing: -0.06em;

  text-decoration: none;

  transition:
    transform 0.35s var(--ease-soft),
    opacity 0.3s ease;
}

.nav__logo:hover {
  transform: translateY(-50%) scale(1.06);
}

/* =========================================
   NAV PILL
========================================= */

.nav__links {
  position: fixed;

  left: 50%;
  top: 22px;

  display: flex;

  align-items: center;

  gap: 8px;

  padding: 6px;

  transform: translateX(-50%);

  border: 1px solid rgba(255, 255, 255, 0.38);

  border-radius: 999px;

  background: rgba(248, 248, 244, 0.72);

  backdrop-filter: blur(18px) saturate(120%);

  -webkit-backdrop-filter: blur(18px) saturate(120%);

  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.055);

  pointer-events: auto;

  transition:
    background 0.4s ease,
    box-shadow 0.4s ease,
    border-color 0.4s ease;
}

/* subtle glass highlight */

.nav__links::before {
  content: "";

  position: absolute;

  inset: 1px;

  border-radius: inherit;

  pointer-events: none;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.26),
    transparent 45%
  );

  opacity: 0.65;
}

/* =========================================
   LINKS
========================================= */

.nav__link {
  position: relative;

  z-index: 1;

  display: flex;

  align-items: center;

  justify-content: center;

  min-height: 38px;

  padding: 0 15px;

  border-radius: 999px;

  color: #111;

  font-size: 14px;

  font-weight: 400;

  white-space: nowrap;

  text-decoration: none;

  opacity: 0.68;

  transition:
    opacity 0.3s ease,
    background 0.35s var(--ease-soft),
    transform 0.35s var(--ease-soft);
}

.nav__link-text {
  position: relative;

  display: inline-block;
}

/* =========================================
   HOVER
========================================= */

.nav__link:hover {
  opacity: 1;

  transform: translateY(-1px);

  background: rgba(255, 255, 255, 0.32);
}

.nav__link-text::after {
  content: "";

  position: absolute;

  left: 50%;
  bottom: -5px;

  width: 100%;
  height: 1px;

  background: currentColor;

  transform: translateX(-50%) scaleX(0);

  transform-origin: center;

  transition: transform 0.35s var(--ease-soft);
}

.nav__link:hover .nav__link-text::after {
  transform: translateX(-50%) scaleX(1);
}

/* =========================================
   ACTIVE PAGE
========================================= */

.nav__link--active {
  opacity: 1;

  background: rgba(255, 255, 255, 0.42);
}

.nav__link--active .nav__link-text::after {
  transform: translateX(-50%) scaleX(1);
}

/* =========================================
   SCROLLED
========================================= */

.nav--scrolled .nav__links {
  background: rgba(248, 248, 244, 0.91);

  border-color: rgba(17, 17, 17, 0.055);

  box-shadow: 0 10px 34px rgba(0, 0, 0, 0.085);
}

/* =========================================
   KEYBOARD
========================================= */

.nav__logo:focus-visible,
.nav__link:focus-visible {
  outline: 2px solid currentColor;

  outline-offset: 4px;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 900px) {
  .nav {
    top: 18px;
  }

  .nav__inner {
    padding: 0 20px;
  }

  .nav__logo {
    left: 20px;

    font-size: 24px;
  }

  .nav__links {
    top: 18px;

    gap: 4px;

    padding: 5px;
  }

  .nav__link {
    min-height: 36px;

    padding: 0 11px;

    font-size: 12px;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 700px) {
  .nav {
    top: 14px;

    height: 52px;
  }

  .nav__inner {
    padding: 0 20px;
  }

  .nav__logo {
    left: 20px;

    font-size: 23px;
  }

  .nav__links {
    position: absolute;

    left: auto;
    right: 20px;
    top: 50%;

    transform: translateY(-50%);

    gap: 2px;

    padding: 5px;
  }

  .nav__link {
    display: none;

    min-height: 34px;

    padding: 0 10px;

    font-size: 11px;
  }

  .nav__link:first-child,
  .nav__link:nth-child(3),
  .nav__link:last-child {
    display: flex;
  }

  .nav__link-text::after {
    bottom: -3px;
  }
}

/* =========================================
   VERY SMALL MOBILE
========================================= */

@media (max-width: 430px) {
  .nav__inner {
    padding: 0 16px;
  }

  .nav__logo {
    left: 16px;

    font-size: 21px;
  }

  .nav__links {
    right: 16px;

    padding: 4px;
  }

  .nav__link {
    padding: 0 8px;

    font-size: 10px;
  }
}
</style>
