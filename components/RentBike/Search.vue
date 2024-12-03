<template>
  <section
    class="bg-white w-8/12 md:w-7/12 mx-auto text-black py-1 md:py-8 border border-gray-300 shadow-lg rounded-lg px-4 -translate-y-1/4 md:px-8 flex items-center justify-center md:-translate-y-2/4"
  >
    <div
      class="flex py-8 flex-wrap md:flex-nowrap items-end justify-center space-y-6 md:space-y-0 md:space-x-8 w-full"
    >
      <div
        class="flex flex-wrap md:flex-nowrap items-end justify-center space-y-6 md:space-y-0 md:space-x-8 w-full"
      >
        <!-- Search Input with Search Icon on the Right -->
        <div class="relative w-full md:w-1/5">
          <input
            type="text"
            placeholder="Search..."
            class="w-full pl-4 pr-10 py-2 text-gray-700 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 16l4-4m0 0l-4-4m4 4h8"
            ></path>
          </svg>
        </div>

        <!-- Price Select Input -->
        <select
          class="w-full md:w-1/5 pl-4 pr-10 py-2 text-gray-700 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        >
          <option value="" disabled selected>Select Price</option>
          <option value="1">$0 - $50</option>
          <option value="2">$51 - $100</option>
          <option value="3">$101 - $200</option>
          <option value="4">$201 - $500</option>
          <option value="5">$500+</option>
        </select>

        <!-- Time Duration Select Input -->
        <select
          class="w-full md:w-1/5 pl-4 pr-10 py-2 text-gray-700 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        >
          <option value="" disabled selected>Select Duration</option>
          <option value="1">0-1 hour</option>
          <option value="2">1-2 hours</option>
          <option value="3">2-5 hours</option>
          <option value="4">5+ hours</option>
        </select>

        <!-- Brand Select Input -->
        <select
          class="w-full md:w-1/5 pl-4 pr-10 py-2 text-gray-700 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        >
          <option value="" disabled selected>Select Brand</option>
          <option value="1">Brand A</option>
          <option value="2">Brand B</option>
          <option value="3">Brand C</option>
          <option value="4">Brand D</option>
        </select>

        <!-- Filter Input with Filter Icon -->
        <div class="relative w-full md:w-1/5">
          <input
            type="text"
            placeholder="Filter..."
            class="w-full pl-4 pr-10 py-2 text-gray-700 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14h4M12 10v4M12 6v4m-6 2h12"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
