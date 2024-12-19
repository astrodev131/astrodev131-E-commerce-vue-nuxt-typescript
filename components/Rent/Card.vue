<template>
  <section
    class="p-12 md:p-4 border-solid border-gray-300 border-2 bg-white hover:shadow-2xl rounded-xl transition-all duration-300"
    @click="handleClick"
  >
    <div class="w-80 h-44">
      <img class="w-10/12 h-10/12 m-auto" :src="img" />
    </div>

    <div class="mt-4 text-2xl font-bold">{{ name }}</div>

    <div class="flex mt-2 justify-between text-gray-600">
      <div>
        <p>Seats:</p>
        <p>Fuel:</p>
        <p>Front Brake:</p>
        <p>Gear Box:</p>
      </div>

      <div class="text-end">
        <p>Horsepower:</p>
        <p>Engin:</p>
        <p>Stroke:</p>
        <p>Overall Mileage:</p>
      </div>
    </div>

    <div
      class="flex justify-between text-center items-center mt-5 text-gray-600"
    >
      <div>
        <p>Per Hours</p>
        <p class="text-black text-2xl font-bold">$56</p>
      </div>
      <div>
        <button
          class="bg-black text-white p-2 w-full md:w-full rounded shadow hover:bg-gray-800"
        >
          Rent {{ text }}
        </button>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const handleClick = () => {
  return router.push(`./detail${props.text}/${props.id}`);
};

interface Props {
  img: string;
  text: string;
  name: string;
  id: string;
}

const props = defineProps<Props>();
</script>
