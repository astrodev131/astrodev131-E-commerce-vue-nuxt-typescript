<template>
  <section class="flex w-10/12 justify-center mx-auto gap-10 flex-wrap my-5">
    <Card v-for="(image, index) in images" :key="index" :img="image" />
  </section>
</template>
<script lang="ts" setup>
import Card from "./Card.vue";

// Store the image URLs in an array
const images = [
  "http://172.20.106.13:3000/_nuxt/public/images/bike1.png",
  "http://172.20.106.13:3000/_nuxt/public/images/bike2.png",
  "http://172.20.106.13:3000/_nuxt/public/images/bike3.png",
  "http://172.20.106.13:3000/_nuxt/public/images/bike4.png",
  "http://172.20.106.13:3000/_nuxt/public/images/bike5.png",
  "http://172.20.106.13:3000/_nuxt/public/images/bike6.png",
  "http://172.20.106.13:3000/_nuxt/public/images/bike7.png",
  "http://172.20.106.13:3000/_nuxt/public/images/bike8.png",
  "http://172.20.106.13:3000/_nuxt/public/images/bike9.png",
  "http://172.20.106.13:3000/_nuxt/public/images/bike10.png",
  "http://172.20.106.13:3000/_nuxt/public/images/bike11.png",
  "http://172.20.106.13:3000/_nuxt/public/images/bike12.png",
];
</script>
