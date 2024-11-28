<template>
  <header
    class="bg-black text-white py-4 px-8 flex items-center justify-between"
  >
    <div class="text-xl font-semibold">Drivee</div>
    <nav class="flex items-center space-x-8">
      <div class="relative group">
        <button class="focus:outline-none flex items-center space-x-1">
          <span>Hosting</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          class="absolute left-0 hidden mt-2 w-48 bg-white text-black py-2 rounded-md shadow-lg group-hover:block"
        >
          <a href="#" class="block px-4 py-2 hover:bg-gray-200"
            >Shared Hosting</a
          >
          <a href="#" class="block px-4 py-2 hover:bg-gray-200">VPS Hosting</a>
          <a href="#" class="block px-4 py-2 hover:bg-gray-200"
            >Dedicated Servers</a
          >
        </div>
      </div>
      <div>
        <a href="#" class="hover:underline">Contact Us</a>
      </div>
      <div class="relative group">
        <button class="focus:outline-none flex items-center space-x-1">
          <span>Account</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          class="absolute left-0 hidden mt-2 w-48 bg-white text-black py-2 rounded-md shadow-lg group-hover:block"
        >
          <a href="#" class="block px-4 py-2 hover:bg-gray-200">Sign In</a>
          <a href="#" class="block px-4 py-2 hover:bg-gray-200">Register</a>
        </div>
      </div>
    </nav>
    <div class="flex space-x-4">
      <button
        class="border border-white py-2 px-4 rounded hover:bg-white hover:text-black"
      >
        Sign In
      </button>
      <button class="bg-white text-black py-2 px-4 rounded hover:bg-gray-300">
        Sign Up
      </button>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style scoped>
.group:hover .group-hover\:block {
  display: block;
}
</style>
