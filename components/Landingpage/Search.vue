<template>
  <section
    class="bg-white w-11/12 md:w-10/12 mx-auto text-black py-8 md:py-16 border border-gray-300 shadow-lg rounded-lg px-4 -translate-y-1/3 md:px-8 flex items-center justify-center md:-translate-y-2/4"
  >
    <div
      class="flex flex-wrap md:flex-nowrap items-end justify-center space-y-6 md:space-y-0 md:space-x-8 w-full"
    >
      <!-- Location Selector -->
      <div class="w-full md:flex-1">
        <label for="location" class="block text-sm font-bold mb-2"
          >Location</label
        >
        <select id="location" class="w-full p-3 border border-gray-300 rounded">
          <option>Select Location</option>
          <option>New York</option>
          <option>Los Angeles</option>
          <option>Chicago</option>
        </select>
      </div>

      <!-- Pickup Selector -->
      <div class="w-full md:flex-1">
        <label for="pickup" class="block text-sm font-bold mb-2">Pick-UP</label>
        <select id="pickup" class="w-full p-3 border border-gray-300 rounded">
          <option>Select Location</option>
          <option>New York</option>
          <option>Los Angeles</option>
          <option>Chicago</option>
        </select>
      </div>

      <!-- Date Selector -->
      <div class="w-full md:flex-1">
        <label for="date" class="block text-sm font-bold mb-2">Date</label>
        <div class="relative">
          <input
            type="text"
            id="date"
            class="w-full p-3 border border-gray-300 rounded"
            placeholder="10/9/2020 - 14/9/2023"
          />
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 19h14M9 15h6"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Search Button -->
      <div
        class="w-full md:flex-1 flex justify-center md:justify-end items-center"
      >
        <button
          class="bg-black text-white py-3 w-full md:w-full rounded shadow hover:bg-gray-800"
        >
          Search Now
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
/* No additional styles required */
</style>
