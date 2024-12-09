<template>
  <section
    class="text-2xl text-gray-600 w-11/12 m-auto p-6 md:p-12 lg:p-16 bg-cover bg-center"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <!-- Car Details -->
    <div class="mb-12 lg:mb-24">
      <strong class="text-black text-2xl lg:text-3xl">BMW M2 2020</strong>
      <p class="mt-4 text-lg sm:w-8/12 lg:w-5/12 xl:w-6/12 lg:text-xl">
        The BMW M2 Is The High-Performance Version Of The 2 Series 2-Door Coupé.
        The First Generation Of The M2 Is The F87 Coupé And Is Powered By
        Turbocharged.
      </p>
    </div>

    <!-- Specifications Section -->
    <strong class="text-black text-2xl lg:text-3xl mt-12 lg:mt-24">
      Specifications
    </strong>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-6 lg:mt-12 text-sm lg:text-base"
    >
      <!-- Left Column (Specifications Titles) -->
      <div class="space-y-2">
        <p
          v-for="(spec, index) in specifications"
          :key="index"
          class="font-medium"
        >
          {{ spec.title }}
        </p>
      </div>

      <!-- Right Column (Specifications Values) -->
      <div class="space-y-2 text-right lg:text-left">
        <p v-for="(spec, index) in specifications" :key="index">
          {{ spec.value }}
        </p>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";

// Define props structure
interface Specification {
  title: string;
  value: string;
}

interface Props {
  images: {
    img: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
  };
  specifications: Array<Specification>;
}

// Props definition
const props = defineProps<Props>();

// Reactive state for the background image
const image = ref(props.images.img4);
</script>
<style lang="css">
/* Section padding */
section {
  padding-left: 10%;
  padding-right: 10%;
}

/* Font and spacing */
p {
  margin-top: 0.75rem;
  font-size: 20px;
}

@media (max-width: 768px) {
  section {
    padding-left: 5%;
    padding-right: 5%;
  }
  .text-2xl {
    font-size: 1.5rem;
  }
  .lg\:grid-cols-4 {
    grid-template-columns: 1fr 1fr;
  }
  .lg\:gap-8 {
    gap: 16px;
  }
}
</style>
