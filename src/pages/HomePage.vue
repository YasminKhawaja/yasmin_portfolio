<script setup>
import IntroLoader from "../components/IntroLoader.vue";

import HeroSection from "../components/HeroSection.vue";
import SelectedWork from "../components/SelectedWork.vue";
import FeaturedCase from "../components/FeaturedCase.vue";
import ApproachSection from "../components/ApproachSection.vue";
import AboutSection from "../components/AboutSection.vue";
import MoreExplorations from "../components/MoreExplorations.vue";
</script>

<template>
  <!-- ALLEEN HOME HEEFT DE INTRO -->
  <IntroLoader />

  <main>
    <HeroSection />

    <SelectedWork />

    <FeaturedCase />

    <ApproachSection />

    <AboutSection />

    <MoreExplorations />
  </main>
</template>
