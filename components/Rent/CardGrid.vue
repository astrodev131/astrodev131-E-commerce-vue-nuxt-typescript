<template>
  <div class="flex w-10/12 justify-center mx-auto gap-10 flex-wrap my-5">
    <Card
      v-for="(data, index) in data"
      :key="index"
      :text="text"
      :img="data.img"
      :name="data.name"
      :id="data._id"
    />
  </div>
</template>
<script lang="ts" setup>
import Card from "./Card.vue";
import { defineProps } from "vue";

defineProps<{
  data: Array<{ name: string; img: string; price: number; _id: string }>;
  text: string;
}>();
</script>
