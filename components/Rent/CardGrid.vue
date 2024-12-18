<template>
  <div class="flex w-10/12 justify-center mx-auto gap-10 flex-wrap my-5">
    <Card
      v-for="(image, index) in data"
      :key="index"
      :text="text"
      :img="image.img"
    />
  </div>
</template>
<script lang="ts" setup>
import Card from "./Card.vue";
import { defineProps } from "vue";

defineProps<{
  data: Array<{ name: string; img: string; price: number }>;
  text: string;
}>();
</script>
