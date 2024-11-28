<template>
  <section
    class="bg-white w-10/12 ml-auto mr-auto text-black py-16 border border-gray-300 shadow-lg rounded-lg px-8 flex items-center justify-center -translate-y-2/4"
  >
    <div class="flex items-center justify-center space-x-8 w-full max-w-4xl">
      <div class="flex-1">
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
      <div class="flex-1">
        <label for="pickup" class="block text-sm font-bold mb-2">Pick-UP</label>
        <select id="pickup" class="w-full p-3 border border-gray-300 rounded">
          <option>Select Location</option>
          <option>New York</option>
          <option>Los Angeles</option>
          <option>Chicago</option>
        </select>
      </div>
      <div class="flex-1">
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
      <div class="flex-1 flex items-center mt-6">
        <button
          class="bg-black text-white py-3 px-6 rounded shadow hover:bg-gray-800"
        >
          Search Now
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.group:hover .group-hover\:block {
  display: block;
}
</style>
