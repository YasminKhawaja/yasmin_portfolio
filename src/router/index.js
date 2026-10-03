import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import ProjectsPage from "../pages/ProjectsPage.vue";
import NextProjectPage from "../pages/NextProjectPage.vue";
import LumiereProjectPage from "../pages/LumiereProjectPage.vue";
import AccessibilityProjectPage from "../pages/AccessibilityProjectPage.vue";
import SkillsPage from "../pages/SkillsPage.vue";
import ContactPage from "../pages/ContactPage.vue";

gsap.registerPlugin(ScrollTrigger);

/* =========================================
   SITE SEO DEFAULTS
========================================= */

const defaultTitle = "Yasmin — Digital Experience Designer";

const defaultDescription =
  "Portfolio of Yasmin, a Digital Experience Designer creating thoughtful, accessible and visually engaging digital experiences.";

/*
  Later, when your portfolio has a real domain,
  add this to your .env file:

  VITE_SITE_URL=https://yourdomain.com

  For now, the fallback keeps local development working.
*/

const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin;

/* =========================================
   ROUTER
========================================= */

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,

      meta: {
        title: "Yasmin — Digital Experience Designer",

        description:
          "Portfolio of Yasmin, a Digital Experience Designer combining UX, UI design, accessibility and front-end development to create thoughtful digital experiences.",
      },
    },

    {
      path: "/about",
      name: "about",
      component: AboutPage,

      meta: {
        title: "About Yasmin | Digital Experience Designer",

        description:
          "Learn more about Yasmin, her design approach and how she combines UX, visual design, interaction and front-end development.",
      },
    },

    {
      path: "/projects",
      name: "projects",
      component: ProjectsPage,

      meta: {
        title: "UX & Digital Design Projects | Yasmin",

        description:
          "Explore UX, UI, accessibility, branding and front-end projects by Yasmin, including client work and detailed digital design case studies.",
      },
    },

    {
      path: "/projects/next",
      name: "next-project",
      component: NextProjectPage,

      meta: {
        title: "NEXT Branding & Website Case Study | Yasmin",

        description:
          "NEXT case study covering UX, branding, UI design, front-end development, user testing and a responsive CMS website for a safe pause space for young people.",
      },
    },

    {
      path: "/projects/lumiere",
      name: "lumiere-project",
      component: LumiereProjectPage,

      meta: {
        title: "Cinema Lumière UX/UI Case Study | Yasmin",

        description:
          "Cinema Lumière UX/UI case study covering benchmarking, information architecture, interaction design, prototyping, usability testing and refinement.",
      },
    },

    {
      path: "/projects/accessibility",
      name: "accessibility-project",
      component: AccessibilityProjectPage,

      meta: {
        title: "Café Crèma Accessibility Case Study | Yasmin",

        description:
          "Accessibility-focused Café Crèma redesign using WCAG AA guidelines, stronger contrast, clearer navigation, responsive layouts and accessible interaction design.",
      },
    },

    {
      path: "/skills",
      name: "skills",
      component: SkillsPage,

      meta: {
        title: "UX, UI & Front-End Skills | Yasmin",

        description:
          "Explore Yasmin's skills in UX research, UI design, interaction design, accessibility, prototyping, user testing, Figma, Vue and front-end development.",
      },
    },

    {
      path: "/contact",
      name: "contact",
      component: ContactPage,

      meta: {
        title: "Contact Yasmin | Digital Experience Designer",

        description:
          "Get in touch with Yasmin about digital design projects, collaborations, internships, freelance opportunities or portfolio questions.",
      },
    },
  ],

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 90,
      };
    }

    return {
      top: 0,
      left: 0,
    };
  },
});

/* =========================================
   SEO HELPERS
========================================= */

function setMetaTag(selector, attributes) {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");

    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });
}

function setCanonical(url) {
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");

    canonical.setAttribute("rel", "canonical");

    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

/* =========================================
   ROUTE SEO
========================================= */

router.afterEach(async (to) => {
  const title = to.meta.title || defaultTitle;

  const description = to.meta.description || defaultDescription;

  const canonicalUrl = new URL(to.path, siteUrl).href;

  /* Page title */

  document.title = title;

  /* Standard description */

  setMetaTag('meta[name="description"]', {
    name: "description",
    content: description,
  });

  /* Open Graph */

  setMetaTag('meta[property="og:title"]', {
    property: "og:title",
    content: title,
  });

  setMetaTag('meta[property="og:description"]', {
    property: "og:description",
    content: description,
  });

  setMetaTag('meta[property="og:type"]', {
    property: "og:type",
    content: "website",
  });

  setMetaTag('meta[property="og:url"]', {
    property: "og:url",
    content: canonicalUrl,
  });

  setMetaTag('meta[property="og:site_name"]', {
    property: "og:site_name",
    content: "Yasmin Portfolio",
  });

  /* Twitter / social */

  setMetaTag('meta[name="twitter:card"]', {
    name: "twitter:card",
    content: "summary",
  });

  setMetaTag('meta[name="twitter:title"]', {
    name: "twitter:title",
    content: title,
  });

  setMetaTag('meta[name="twitter:description"]', {
    name: "twitter:description",
    content: description,
  });

  /* Canonical URL */

  setCanonical(canonicalUrl);

  /* Refresh GSAP after route change */

  await nextTick();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  });
});

export default router;
