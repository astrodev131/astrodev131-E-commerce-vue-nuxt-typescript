<template>
  <section class="py-16 bg-gray-100">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-800">
        Local Service We Provide
      </h2>
    </div>

    <!-- Services Container -->
    <div class="flex items-center flex-wrap justify-center gap-6 md:gap-12">
      <!-- Left Arrow --

      <!-- Services List -->
      <div
        ref="scrollContainer"
        class="flex flex-wrap md:flex-nowrap gap-6 md:gap-12 overflow-x-auto no-scrollbar w-full justify-center"
      >
        <div
          v-for="(service, index) in services"
          :key="index"
          class="flex flex-col items-center w-32 md:w-40"
        >
          <div
            class="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md"
          >
            <img
              :src="service.image"
              alt="Service Area"
              class="w-full h-full object-cover"
            />
          </div>
          <p
            class="text-base md:text-lg font-semibold text-gray-800 mt-4 text-center"
          >
            {{ service.name }}
          </p>
        </div>
      </div>

      <!-- Right Arrow -->
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
