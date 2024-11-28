<template>
  <div>
    <Header />
    <HeroSection />
    <Search></Search>
    <ServiceSection />
    <TestimonialSection />
    <LocalService />
    <FAQSection />
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Search from "../components/Landingpage/Search.vue";
import HeroSection from "../components/Landingpage/HeroSection.vue";
import ServiceSection from "../components/Landingpage/ServiceSection.vue";
import TestimonialSection from "../components/Landingpage/TestimonialSection.vue";
import LocalService from "../components/Landingpage/LocalService.vue";
import FAQSection from "../components/Landingpage/FAQSection.vue";
import Footer from "../components/Footer.vue";
</script>
