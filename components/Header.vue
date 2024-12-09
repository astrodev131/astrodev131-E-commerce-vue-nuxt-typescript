<template>
  <header
    class="bg-black text-white py-4 px-4 md:px-8 flex items-center justify-between flex-wrap relative"
  >
    <div class="text-xl font-semibold">Drivee</div>

    <!-- Hamburger Button -->
    <button
      class="md:hidden z-50 focus:outline-none text-white"
      @click="isMenuOpen = !isMenuOpen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <!-- Mobile Dropdown Menu (hidden by default) -->
    <nav
      class="absolute top-0 left-0 w-full bg-black text-white md:hidden transition-transform transform"
      :class="{ 'translate-y-0': isMenuOpen, '-translate-y-full': !isMenuOpen }"
    >
      <div class="flex flex-col space-y-4 p-8">
        <a href="#" class="text-white hover:underline">Hosting</a>
        <a href="#" class="text-white hover:underline">Contact Us</a>
        <a href="#" class="text-white hover:underline">Account</a>
        <div class="flex justify-center space-x-4 mt-4">
          <a href="/login">
            <button
              class="border border-white py-2 px-4 rounded hover:bg-white hover:text-black"
            >
              Sign In
            </button>
          </a>
          <a href="/register">
            <button
              class="bg-white text-black py-2 px-4 rounded hover:bg-gray-300"
            >
              Sign Up
            </button>
          </a>
        </div>
      </div>
    </nav>

    <!-- Desktop Menu (always visible on md and up) -->
    <nav class="hidden md:flex items-center space-x-8">
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
      </div>
    </nav>

    <!-- Desktop Sign In / Sign Up buttons -->
    <div
      class="w-full md:w-auto flex justify-center md:flex space-x-4 mt-4 md:mt-0"
    >
      <a href="/login"
        ><button
          class="border hidden md:block border-white py-2 px-4 rounded hover:bg-white hover:text-black"
        >
          Sign In
        </button></a
      >
      <a href="/register">
        <button
          class="bg-white hidden md:block text-black py-2 px-4 rounded hover:bg-gray-300"
        >
          Sign Up
        </button></a
      >
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const isMenuOpen = ref(false);
</script>

<style scoped>
/* Transition styles for smooth sliding of mobile menu */
nav {
  transition: transform 0.3s ease-in-out;
}
</style>
