<template>
  <Overview :overviewdata="overviewdata"></Overview>
  <Description
    :specifications="specifications"
    :overviewdata="overviewdata"
  ></Description>
</template>

<script setup lang="ts">
import Description from "./Description.vue";
import Overview from "./Overview.vue";
import { defineProps } from "vue";

// Define the interface for the `images` prop
interface overviewdata {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  name: string;
}

// Define the interface for each specification
interface Specification {
  title: string;
  value: string;
}

// Use the interfaces with defineProps
defineProps<{
  overviewdata: overviewdata;
  specifications: Specification[];
}>();
</script>
