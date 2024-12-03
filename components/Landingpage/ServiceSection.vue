<template>
  <section class="bg-white text-black py-16 px-6 md:px-12">
    <div
      class="flex flex-col shadow-lg md:shadow-sm -mt-10 md:mt-0 md:flex-row items-center space-y-12 md:space-y-0 md:space-x-8 w-full max-w-full"
    >
      <div class="flex-1 flex flex-col md:flex-row items-center">
        <div class="flex-1 text-center md:text-left order-2 md:order-1">
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
        <div class="flex-1 order-1 md:order-1">
          <img
            src="/images/1.png"
            alt="Car Image"
            class="w-full md:w-11/12 rounded shadow-md object-cover"
          />
        </div>
      </div>
    </div>
    <div
      class="flex mt-10 flex-col md:flex-row shadow-lg md:shadow-sm items-center space-y-12 md:space-y-0 md:space-x-8 w-full max-w-full"
    >
      <div class="flex-1 flex flex-col md:flex-row items-center">
        <div class="flex-1 text-center md:text-left order-2 md:order-2">
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
              Booking a self-driving car with us is simple and easy. You can
              browse our selection of vehicles online, choose the car that best
              fits your needs, and book it for the duration of your choice.
            </p>
            <button
              class="bg-black text-white py-2 px-4 rounded shadow hover:bg-gray-800"
            >
              Rent Bike
            </button>
          </div>
        </div>
        <div class="flex-1 order-1 md:order-1">
          <img
            src="/images/2.png"
            alt="Car Image"
            class="w-full md:w-11/12 rounded shadow-md object-cover"
          />
        </div>
      </div>
    </div>

    <div
      class="flex flex-col shadow-lg xl:shadow-sm mt-10 md:flex-row items-center space-y-12 xl:space-y-0 xl:space-x-8 w-full max-w-full"
    >
      <div class="flex-1 flex flex-col xl:flex-row items-center">
        <div class="flex-1 text-center xl:text-left order-2 xl:order-1">
          <div class="p-6 md:p-12 lg:p-24">
            <h2 class="text-3xl md:text-5xl font-bold mb-4">
              Do You Want To Share Your Vehicle?
            </h2>

            <p class="text-base md:text-lg mb-4">
              We'll Use Your Car's Location To Calculate Your Onboard Bonus.
              Each ZIP Code Will Belong To One Of Five Zones. Zones Are Based On
              Guest Demand For Cars— More Guest Demand Means A Higher Zone, And
              Bigger Bonuses For Cars. Zone 1 Gets The Highest Bonus, While
              Zones 4 And 5 Aren't Eligible For The Onboard Bonus.
            </p>
            <button
              class="bg-black text-white py-2 px-4 rounded shadow hover:bg-gray-800"
            >
              Learn more
            </button>
          </div>
        </div>
        <div class="flex-1 order-1 xl:order-2">
          <img
            src="/images/8.jpg"
            alt="Bike Image"
            class="w-full rounded shadow-md object-cover"
          />
        </div>
      </div>
    </div>

    <section
      class="flex flex-col md:flex-row items-center justify-around py-16 px-6 md:px-12"
    >
      <!-- Text Section -->
      <div class="text-left mb-8 md:mb-0 w-full md:w-1/3">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Why Choose Us
        </h2>
        <p class="text-lg text-gray-600">
          Booking a self-driving car with us is simple and easy. Choose the car
          that best fits your needs, and book it for your preferred duration.
        </p>
      </div>

      <!-- Stats Section -->
      <div
        class="bg-white w-full md:w-1/3 rounded-lg shadow-md p-6 md:p-12 flex flex-col md:flex-row justify-around items-center"
      >
        <div class="text-center mb-6 md:mb-0">
          <span class="text-3xl font-bold text-gray-800">45k+</span>
          <p class="text-gray-600 text-md">Success Tour</p>
        </div>
        <div class="text-center mb-6 md:mb-0">
          <span class="text-3xl font-bold text-gray-800">1M+</span>
          <p class="text-gray-600 text-md">Happy Customers</p>
        </div>
        <div class="text-center">
          <span class="text-3xl font-bold text-gray-800">3+</span>
          <p class="text-gray-600 text-md">Years Experience</p>
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
