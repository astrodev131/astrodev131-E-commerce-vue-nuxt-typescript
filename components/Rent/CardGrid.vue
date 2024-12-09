<template>
  <div class="flex w-10/12 justify-center mx-auto gap-10 flex-wrap my-5">
    <Card
      v-for="(image, index) in images"
      :key="index"
      :text="text"
      :img="image"
    />
  </div>
</template>
<script lang="ts" setup>
import Card from "./Card.vue";
import { defineProps } from "vue";

defineProps<{ images: Array<string>; text: string }>();
</script>
