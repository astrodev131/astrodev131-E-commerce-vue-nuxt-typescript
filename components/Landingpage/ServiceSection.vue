<template>
  <section class="bg-white text-black py-16 px-6 md:px-12">
    <!-- Rent A Car Section -->
    <div
      class="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-8 w-full max-w-full"
    >
      <div class="flex-1 flex flex-col md:flex-row items-center">
        <div class="flex-1 text-center md:text-left">
          <div class="p-6 md:p-12 lg:p-24">
            <h2 class="text-3xl md:text-5xl font-bold mb-4">Rent A Car</h2>
            <div class="flex justify-center md:justify-start space-x-2 mb-4">
              <span class="px-3 py-1 bg-gray-200 rounded-full text-xs"
                >Luxury</span
              >
              <span class="px-3 py-1 bg-gray-200 rounded-full text-xs"
                >Compact</span
              >
              <span class="px-3 py-1 bg-gray-200 rounded-full text-xs"
                >Prestige</span
              >
            </div>
            <p class="text-base md:text-lg mb-4">
              Booking a self-driving car with us is simple and easy. You can
              browse our selection of vehicles online, choose the car that best
              fits your needs, and book it for the duration of your choice.
            </p>
            <button
              class="bg-black text-white py-2 px-4 rounded shadow hover:bg-gray-800"
            >
              Rent Car
            </button>
          </div>
        </div>
        <div class="flex-1">
          <img
            src="/images/1.png"
            alt="Car Image"
            class="w-full md:w-11/12 rounded shadow-md object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Rent A Bike Section -->
    <div
      class="flex flex-col-reverse md:flex-row items-center space-y-12 md:space-y-0 md:space-x-8 w-full mt-12"
    >
      <div class="flex-1">
        <img
          src="/images/2.png"
          alt="Bike Image"
          class="w-full md:w-11/12 rounded shadow-md object-cover"
        />
      </div>
      <div class="flex-1 text-center md:text-left">
        <div class="p-6 md:p-12 lg:p-24">
          <h2 class="text-3xl md:text-5xl font-bold mb-4">Rent A Bike</h2>
          <div class="flex justify-center md:justify-start space-x-2 mb-4">
            <span class="px-3 py-1 bg-gray-200 rounded-full text-xs"
              >Luxury</span
            >
            <span class="px-3 py-1 bg-gray-200 rounded-full text-xs"
              >Compact</span
            >
            <span class="px-3 py-1 bg-gray-200 rounded-full text-xs"
              >Prestige</span
            >
          </div>
          <p class="text-base md:text-lg mb-4">
            Booking a self-driving bike with us is simple and easy. Choose the
            bike that best fits your needs and book it for the duration of your
            choice.
          </p>
          <button
            class="bg-black text-white py-2 px-4 rounded shadow hover:bg-gray-800"
          >
            Rent Bike
          </button>
        </div>
      </div>
    </div>

    <!-- Share Your Vehicle Section -->
    <div
      class="flex flex-col md:flex-row items-stretch space-y-12 md:space-y-0 md:space-x-8 w-full mt-16"
    >
      <!-- Left Text Section -->
      <div
        class="flex-1 bg-white rounded-lg p-6 md:p-12 shadow-md flex flex-col justify-between"
      >
        <h2 class="text-3xl mt-20 md:text-5xl font-bold mb-4">
          Do You Want To Share Your Vehicle?
        </h2>
        <p
          class="text-xl whitespace-break-spaces text-gray-500 mt-1 leading-loose mb-6"
        >
          We'll Use Your Car's Location To Calculate Your Onboard Bonus. Each
          ZIP Code Will Belong To One Of Five Zones. Zones Are Based On Guest
          Demand For Cars— More Guest Demand Means A Higher Zone, And Bigger
          Bonuses For Cars. Zone 1 Gets The Highest Bonus, While Zones 4 And 5
          Aren't Eligible For The Onboard Bonus.
        </p>
        <button
          class="bg-black text-white py-2 w-44 px-4 rounded shadow hover:bg-gray-800 flex items-center space-x-2"
        >
          <span>Learn More</span>
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <!-- Right Image Section -->
      <div class="flex-1 rounded-lg shadow-md overflow-hidden">
        <img
          src="/images/images (8).jpg"
          alt="Vehicle Sharing"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Why Choose Us Section -->
    <section
      class="flex flex-col md:flex-row items-center justify-around py-16 px-6 md:px-12"
    >
      <div class="text-left mb-8 md:mb-0 w-full md:w-1/3">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Why Choose Us
        </h2>
        <p class="text-lg text-gray-600">
          Booking a self-driving car with us is simple and easy. Choose the car
          that best fits your needs, and book it for your preferred duration.
        </p>
      </div>
      <div
        class="bg-white w-full md:w-1/3 rounded-lg shadow-md p-6 md:p-12 flex justify-around items-center"
      >
        <div class="text-center">
          <span class="text-4xl font-bold text-gray-800">45k+</span>
          <p class="text-gray-600">Success Tour</p>
        </div>
        <div class="text-center">
          <span class="text-4xl font-bold text-gray-800">1M+</span>
          <p class="text-gray-600">Happy Customers</p>
        </div>
        <div class="text-center">
          <span class="text-4xl font-bold text-gray-800">3+</span>
          <p class="text-gray-600">Years Experience</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.group:hover .group-hover\:block {
  display: block;
}
</style>
