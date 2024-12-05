<template>
  <section>
    <Index
      text="Car"
      :images="images"
      imgofbg="http://172.20.106.13:3000/_nuxt/public/images/car.svg"
    ></Index>
  </section>
</template>

<script setup>
import Index from "../components/Rent/Index.vue";
const images = [
  "http://172.20.106.13:3000/_nuxt/public/images/car1.png",
  "http://172.20.106.13:3000/_nuxt/public/images/car2.png",
  "http://172.20.106.13:3000/_nuxt/public/images/car3.png",
  "http://172.20.106.13:3000/_nuxt/public/images/car4.png",
  "http://172.20.106.13:3000/_nuxt/public/images/car5.png",
  "http://172.20.106.13:3000/_nuxt/public/images/car6.png",
  "http://172.20.106.13:3000/_nuxt/public/images/car7.png",
  "http://172.20.106.13:3000/_nuxt/public/images/car8.png",
  "http://172.20.106.13:3000/_nuxt/public/images/car9.png",
  "http://172.20.106.13:3000/_nuxt/public/images/car10.png",
  "http://172.20.106.13:3000/_nuxt/public/images/car11.png",
  "http://172.20.106.13:3000/_nuxt/public/images/car12.png",
];
</script>
