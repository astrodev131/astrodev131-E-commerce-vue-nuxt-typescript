<template>
  <section class="py-16 bg-gray-100">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-gray-800">Local Service We Provide</h2>
    </div>

    <div class="flex items-center flex-wrap justify-center gap-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>

      <div
        v-for="(service, index) in services"
        :key="index"
        class="flex flex-col items-center w-40"
      >
        <div class="w-32 h-32 rounded-full overflow-hidden shadow-md">
          <img
            :src="service.image"
            alt="Service Area"
            class="w-full h-full object-cover"
          />
        </div>
        <p class="text-lg font-semibold text-gray-800 mt-4">
          {{ service.name }}
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LocalServiceSection",
  setup() {
    const scrollContainer = ref<HTMLElement | null>(null);

    const scroll = (direction: string) => {
      if (scrollContainer.value) {
        const scrollAmount = 300; // Customize the scrolling amount
        if (direction === "left") {
          scrollContainer.value.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          });
        } else if (direction === "right") {
          scrollContainer.value.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }
    };

    return {
      scrollContainer,
      scroll,
    };
  },
  data() {
    return {
      services: [
        {
          image: "./images/images (3).jpg",
          name: "Gazipur",
        },
        {
          image: "./images/images (4).jpg",
          name: "Mohammad Pur",
        },
        {
          image: "./images/images (5).jpg",
          name: "Gulshan",
        },
        {
          image: "./images/images (6).jpg",
          name: "Dhanmondi",
        },
        {
          image: "./images/images (7).jpg",
          name: "Mohakali",
        },
      ],
    };
  },
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
</style>
