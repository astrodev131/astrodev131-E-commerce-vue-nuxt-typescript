<template>
  <Index :overviewdata="overviewdata" :specifications="specifications"></Index>
</template>

<script setup lang="js">
import Index from "../../components/Detail/Index.vue";
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import axios from "axios";

const route = useRoute();
const productId = route.params.id;

// Reactive object for images
const overviewdata = reactive({
  img1: "http://172.20.106.13:3000/images/chip1-1-c.png",
  img2: "http://172.20.106.13:3000/images/chip1-2-c.png",
  img3: "",
  img4: "http://172.20.106.13:3000/images/car_bg.png",
  name: "",

});

const specifications = [
  { title: "Body", value: "Sedan" },
  { title: "Seat", value: "2 Seats" },
  { title: "Door", value: "2 Doors" },
  { title: "Luggage", value: "150" },
  { title: "Transmission", value: "Automatic" },
  { title: "Drive", value: "4WD" },
  { title: "Year", value: "2020" },
  { title: "Mileage", value: "200" },
  { title: "Fuel Type", value: "Hybrid" },
  { title: "Engine", value: "3000" },
];

onMounted(() => {
  axios
    .get(`http://localhost:5000/car/getdatabyid/${productId}`)
    .then((response) => {
      overviewdata.img3 = response.data.img; // Update img3 dynamically
      overviewdata.name = response.data.name
      console.log("Car data fetched successfully:", response.data.img);
    })
    .catch((error) => {
      console.error(
        "Error fetching car data:",
        error.response?.data || error.message
      );
    });
});
</script>
