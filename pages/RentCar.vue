<template>
  <Index
    text="Car"
    :data="data"
    imgofbg="http://172.20.106.13:3000/_nuxt/public/images/car.svg"
  />
</template>
<script setup>
import Index from "../components/Rent/Index.vue";
import axios from "axios";
import { reactive, onMounted } from "vue";

// Reactive data for storing fetched car data
const data = reactive([]);

// Function to fetch data from the server
const getData = () => {
  axios
    .get("http://localhost:5000/car/getdata")
    .then((res) => {
      // Clear the array and populate it with the response data
      data.splice(0, data.length, ...res.data);
      console.log(data, "Data after population"); // Log the data after population
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

// Fetch data when the component is mounted
onMounted(() => {
  getData();
});
</script>
