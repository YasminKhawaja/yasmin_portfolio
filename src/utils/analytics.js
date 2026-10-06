/* =========================================
   ANALYTICS
========================================= */

const CONTENTSQUARE_TAG_ID = "3930b5e9cb286";

let analyticsLoaded = false;

/* =========================================
   DATA LAYER
========================================= */

function getDataLayer() {
  window.dataLayer = window.dataLayer || [];

  return window.dataLayer;
}

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
   GOOGLE TAG MANAGER CONSENT EVENT
========================================= */

function grantGoogleAnalyticsConsent() {
  const dataLayer = getDataLayer();

  dataLayer.push({
    event: "analytics_consent_granted",
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

  /*
    Contentsquare is loaded only after the visitor
    accepts analytics.
  */

  loadContentsquare();

  /*
    Google Analytics itself is managed by
    Google Tag Manager.

    This event activates the Google tag in GTM.
  */

  grantGoogleAnalyticsConsent();
}

/* =========================================
   PAGE VIEW
========================================= */

export function trackPageView(path) {
  if (!analyticsLoaded) {
    return;
  }

  const dataLayer = getDataLayer();

  dataLayer.push({
    event: "portfolio_page_view",

    page_title: document.title,

    page_location: `${window.location.origin}${path}`,

    page_path: path,
  });
}
