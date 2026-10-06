/* =========================================
   ANALYTICS
========================================= */

const CONTENTSQUARE_TAG_ID = "3930b5e9cb286";

const GOOGLE_ANALYTICS_ID = "G-D8VV3T3WR2";

let analyticsLoaded = false;

/* =========================================
   CONTENTSQUARE
========================================= */

function loadContentsquare() {
  if (document.querySelector("[data-contentsquare-tag]")) {
    return;
  }

  const script = document.createElement("script");

  script.defer = true;

  script.src = `https://t.contentsquare.net/uxa/${CONTENTSQUARE_TAG_ID}.js`;

  script.dataset.contentsquareTag = "true";

  document.head.appendChild(script);
}

/* =========================================
   GOOGLE ANALYTICS
========================================= */

function loadGoogleAnalytics() {
  if (document.querySelector("[data-google-analytics-tag]")) {
    return;
  }

  const script = document.createElement("script");

  script.async = true;

  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;

  script.dataset.googleAnalyticsTag = "true";

  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];

  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());

  window.gtag("config", GOOGLE_ANALYTICS_ID, {
    send_page_view: false,
  });
}

/* =========================================
   LOAD ANALYTICS
========================================= */

export function loadAnalytics() {
  if (analyticsLoaded) {
    return;
  }

  analyticsLoaded = true;

  loadContentsquare();

  loadGoogleAnalytics();
}

/* =========================================
   GOOGLE PAGE VIEW
========================================= */

export function trackPageView(path) {
  if (!window.gtag) {
    return;
  }

  window.gtag("event", "page_view", {
    page_title: document.title,

    page_location: `${window.location.origin}${path}`,

    page_path: path,
  });
}
