<template>
  <section class="bg-white text-black py-16 px-8">
    <div
      class="flex flex-col md:flex-col items-center space-y-12 md:space-y-0 md:space-x-8 w-full max-w-full"
    >
      <div class="flex-1 flex flex-col md:flex-row items-center">
        <div class="flex-1 text-center md:text-left">
          <div class="p-32">
            <h2 class="text-5xl font-bold mb-4">Rent A Car</h2>
            <div class="flex space-x-2 mb-4">
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
            <p class="text-lg mb-4">
              Booking a self-driving car with us is simple and easy. You can
              browse our selection of vehicles online, choose the car that best
              fits your needs, and book it for the duration of your choice. Our
              user-friendly platform allows you to manage your bookings and view
              your trip history with ease.
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
            class="w-11/12 rounded shadow-md"
          />
        </div>
      </div>
      <div class="flex-1 flex flex-col md:flex-row items-center">
        <div class="flex-1">
          <img
            src="/images/2.png"
            alt="Bike Image"
            class="w-11/12 rounded shadow-md"
          />
        </div>
        <div class="flex-1 text-center md:text-left">
          <div class="p-32">
            <h2 class="text-5xl font-bold mb-4">Rent A Bike</h2>
            <div class="flex space-x-2 mb-4">
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
            <p class="text-lg mb-4">
              Booking a self-driving bike with us is simple and easy. You can
              browse our selection of vehicles online, choose the bike that best
              fits your needs, and book it for the duration of your choice. Our
              user-friendly platform allows you to manage your bookings and view
              your trip history with ease.
            </p>
            <button
              class="bg-black text-white py-2 px-4 rounded shadow hover:bg-gray-800"
            >
              Rent Bike
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-8 w-full max-w-11/12 mt-16"
    >
      <div class="flex-1 bg-white rounded-lg h-577 p-8 w-1/2 shadow-md">
        <div class="w-10/12 m-auto">
          <h2 class="text-5xl font-bold mb-4">
            Do You Want To Share Your Vehicle?
          </h2>
          <p class="text-xl mt-5 mb-4">
            We'll use your car's location to calculate your onboard bonus. Each
            ZIP code will belong to one of five zones. Zones are based on guest
            demand for cars—more guest demand means a higher zone, and bigger
            bonuses for cars. Zone 1 gets the highest bonus, while Zones 4 and 5
            aren't eligible for the onboard bonus.
          </p>
          <button
            class="bg-black text-white py-2 px-4 rounded shadow hover:bg-gray-800 flex items-center space-x-2"
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
      </div>
      <div class="flex-1">
        <img
          src="/images/images (8).jpg"
          alt="Vehicle Sharing"
          class="w-11/12 rounded h-4/6 shadow-md"
        />
      </div>
    </div>
  </section>
  <section
    class="w-10/12 ml-auto mr-auto item-center flex justify-around py-16"
  >
    <div class="text-left mb-8 w-1/2 mr-16">
      <h2 class="text-5xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
      <p class="text-lg text-gray-600">
        Booking a self-driving car with us is simple and easy. You can browse
        our selection of vehicles online, choose the car that best fits your
        needs, and book it for the duration of your choice.
      </p>
    </div>
    <div
      class="bg-white w-1/2 rounded-lg ml-16 shadow-md p-8 flex justify-around items-center"
    >
      <div class="text-center">
        <span class="text-4xl font-bold text-gray-800">45k+</span>
        <p class="text-gray-600">Success Tour</p>
      </div>
      <div class="text-center">
        <span class="text-4xl font-bold text-gray-800">1M+</span>
        <p class="text-gray-600">Happy Customer</p>
      </div>
      <div class="text-center">
        <span class="text-4xl font-bold text-gray-800">3+</span>
        <p class="text-gray-600">Year Experience</p>
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
