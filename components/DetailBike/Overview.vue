<template>
  <div class="flex justify-center items-center gap-10 mt-24 flex-wrap">
    <div class="w-full md:w-6/12">
      <div>
        <img class="w-full mr-auto" src="/images/bike6.png" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
          <img class="rounded-lg w-full h-auto" src="/images/chip1-1.png" />
        </div>
        <div>
          <img class="rounded-lg w-full h-auto" src="/images/chip1-2.png" />
        </div>
        <div>
          <img class="rounded-lg w-full h-auto" src="/images/chip1-3.png" />
        </div>
      </div>
    </div>

    <div class="w-full md:w-4/12">
      <div
        class="mx-auto p-6 border-solid border-gray-300 border-spacing-1 bg-zinc-100 rounded-lg shadow-lg"
      >
        <form>
          <!-- Location -->
          <div class="mt-20 mb-4">
            <label
              for="location"
              class="flex justify-content text-sm font-medium text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-8 h-8 text-gray-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 2c4.418 0 8 3.582 8 8s-8 12-8 12S4 14.418 4 10s3.582-8 8-8z"
                />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div class="font-bold mb-4 text-lg">Location</div>
            </label>
            <input
              type="text"
              id="location"
              v-model="location"
              placeholder="Location"
              class="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Enter your location"
            />
          </div>

          <!-- Pick-Up -->
          <div class="mb-4">
            <label
              for="pickUpDate"
              class="flex justify-start text-sm font-medium text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-8 h-8 text-gray-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 7V3m8 0v4m-8 6H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2h-3m-8 0v2m0 4h4m-4 0h-.01"
                />
              </svg>
              <div class="font-bold mb-4 text-lg">Pick-Up</div>
            </label>
            <div class="flex space-x-2">
              <input
                type="date"
                id="pickUpDate"
                v-model="pickUpDate"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Pick-up date"
              />
              <input
                type="time"
                id="pickUpTime"
                v-model="pickUpTime"
                class="w-full min-w-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Pick-up time"
              />
            </div>
          </div>

          <!-- Drop-Off -->
          <div class="mb-4">
            <label
              for="dropOffDate"
              class="flex justify-start text-sm font-medium text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-8 h-8 text-gray-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 7V3m8 0v4m-8 6H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2h-3m-8 0v2m0 4h4m-4 0h-.01"
                />
              </svg>
              <div class="font-bold mb-4 text-lg">Drop-Off</div>
            </label>
            <div class="flex space-x-2">
              <input
                type="date"
                id="dropOffDate"
                v-model="dropOffDate"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Drop-off date"
              />
              <input
                type="time"
                id="dropOffTime"
                v-model="dropOffTime"
                class="w-full min-w-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Drop-off time"
              />
            </div>
          </div>

          <!-- Duration and Price -->
          <div class="mb-4">
            <label
              for="duration"
              class="flex justify-start text-sm font-medium text-gray-700"
            >
              <div class="font-bold mb-4 text-lg">Duration</div>
            </label>
            <div class="flex justify-between">
              <p>Total Hours: {{ totalHours }}</p>
              <p class="bg-white p-2 rounded-md">price: ${{ price }}</p>
            </div>
          </div>

          <div class="flex justify-center mt-8">
            <button
              type="submit"
              class="px-6 py-4 w-full text-white bg-gray-600 rounded-lg shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: "",
      pickUpDate: "",
      pickUpTime: "",
      dropOffDate: "",
      dropOffTime: "",
    };
  },
  computed: {
    totalHours() {
      if (
        this.pickUpDate &&
        this.dropOffDate &&
        this.pickUpTime &&
        this.dropOffTime
      ) {
        const pickUpDateTime = new Date(
          `${this.pickUpDate}T${this.pickUpTime}`
        );
        const dropOffDateTime = new Date(
          `${this.dropOffDate}T${this.dropOffTime}`
        );

        const durationInMillis = dropOffDateTime - pickUpDateTime;
        const totalHours = durationInMillis / (1000 * 60 * 60); // Convert milliseconds to hours

        return totalHours.toFixed(2); // Format to 2 decimal places
      }
      return 0;
    },
    price() {
      const ratePerHour = 20; // Example rate per hour, adjust as needed
      return (this.totalHours * ratePerHour).toFixed(2); // Calculate total price
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
