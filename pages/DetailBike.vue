<template>
  <Index :images="images" :specifications="specifications"></Index>
</template>
<script setup lang="js">
import Index from '../components/Detail/Index.vue';
    const images = {
       img: "http://172.20.106.13:3000/images/bike6.png",
      img1: "http://172.20.106.13:3000/images/chip1-1.png",
      img2: "http://172.20.106.13:3000/images/chip1-2.png",
      img3: "http://172.20.106.13:3000/images/chip1-3.png",
      img4: "http://172.20.106.13:3000/images/motercyclebg.png",
    }


    const specifications = [
  { title: "Body", value: "Sedan" },
  { title: "Seat", value: "2 Seats" },
  { title: "Door", value: "2 Doors" },
  { title: "Luggage", value: "150" },
  { title: "Transmission", value: "Automatic" },
  { title: "Drive", value: "4WD" },
  { title: "Year", value: "2020" },
  { title: "Mileage", value: "200" },
  { title: "Fuel Type", value: "Hybird" },
  { title: "Engine", value: "3000" },
];
</script>
