<template>
  <div id="app">
    <NavbarComponent />
    <HomeSection />
    <ServicesSection />
    <AboutSection />
    <FooterSection />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import HomeSection from "./components/HomeSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import FooterSection from "./components/FooterSection.vue"; // Changed import to FooterSection

export default {
  name: "App",
  components: {
    NavbarComponent,
    HomeSection,
    AboutSection,
    ServicesSection,
    FooterSection, // Updated component name
  },
};
</script>

<style>
body {
  scroll-behavior: smooth;
}
</style>
