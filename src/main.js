import { createApp } from "vue";

import App from "./App.vue";

import router from "./router/index.js";

import "./style.css";

import { loadAnalytics, trackPageView } from "./utils/analytics";

/* =========================================
   CONSENT
========================================= */

const STORAGE_KEY = "yasmin-analytics-consent";

function hasAnalyticsConsent() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return false;
    }

    const parsed = JSON.parse(stored);

    return parsed.choice === "accepted";
  } catch {
    return false;
  }
}

/* =========================================
   APP
========================================= */

const app = createApp(App);

app.use(router);

app.mount("#app");

/* =========================================
   ANALYTICS PAGE VIEWS
========================================= */

router.afterEach((to) => {
  if (!hasAnalyticsConsent()) {
    return;
  }

  loadAnalytics();

  requestAnimationFrame(() => {
    trackPageView(to.fullPath);
  });
});
