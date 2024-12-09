<template>
  <Overview :images="images"></Overview>
  <Description :specifications="specifications" :images="images"></Description>
</template>

<script setup lang="ts">
import Description from "./Description.vue";
import Overview from "./Overview.vue";
import { defineProps } from "vue";

// Define the interface for the `images` prop
interface Images {
  img: string;
  img1: string;
  img2: string;
  img3: string;
}

// Define the interface for each specification
interface Specification {
  title: string;
  value: string;
}

// Use the interfaces with defineProps
defineProps<{
  images: Images;
  specifications: Specification[];
}>();
</script>
