<template>
  <div class="bg-zinc-50">
    <HeroSection :text="text" :imgofbg="imgofbg"></HeroSection>
    <Search></Search>
    <CardGrid :text="text" :data="data"></CardGrid>
  </div>
</template>

<script lang="ts" setup>
import CardGrid from "./CardGrid.vue";
import HeroSection from "./HeroSection.vue";
import Search from "./Search.vue";
import { defineProps } from "vue";

defineProps<{
  data: Array<{ name: string; img: string; price: number; _id: string }>;
  imgofbg: string;
  text: string;
}>();
</script>
