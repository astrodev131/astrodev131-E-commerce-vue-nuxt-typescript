<template>
  <div class="bg-zinc-50">
    <HeroSection :text="text" :imgofbg="imgofbg"></HeroSection>
    <Search></Search>
    <CardGrid :text="text" :images="images"></CardGrid>
  </div>
</template>

<script lang="ts" setup>
import CardGrid from "./CardGrid.vue";
import HeroSection from "./HeroSection.vue";
import Search from "./Search.vue";
import { defineProps } from "vue";

defineProps<{
  images: Array<{ name: string; img: string; price: number }>;
  imgofbg: string;
  text: string;
}>();
</script>
