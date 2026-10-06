<script setup>
import { useRoute } from "vue-router";

import CustomCursor from "./components/CustomCursor.vue";
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";
import CookieBanner from "./components/CookieBanner.vue";

const route = useRoute();
</script>

<template>
  <CustomCursor />

  <NavBar />

  <RouterView />

  <!--
    Door de key wordt de footer opnieuw gemount
    bij elke nieuwe route.
  -->
  <AppFooter :key="route.fullPath" />

  <!--
    Analytics worden pas geladen nadat
    de bezoeker toestemming geeft.
  -->
  <CookieBanner />
</template>
