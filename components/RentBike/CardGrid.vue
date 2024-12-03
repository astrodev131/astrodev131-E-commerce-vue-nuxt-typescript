<template>
  <section class="flex w-10/12 justify-center mx-auto gap-10 flex-wrap my-5">
    <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
  </section>
</template>
<script lang="ts" setup>
let arr: Array<undefined> = new Array(5);
import Card from "./Card.vue";
</script>
