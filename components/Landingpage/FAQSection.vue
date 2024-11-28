<template>
  <section class="py-16">
    <div class="text-center mb-8">
      <h2 class="text-4xl font-bold text-gray-800">Have Any Question</h2>
    </div>

    <!-- Tabs -->
    <div class="flex justify-center space-x-8 mb-12">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectedTab = tab"
        :class="[
          'text-lg font-medium px-4 py-2',
          selectedTab === tab
            ? 'text-black border-b-2 border-gray-800'
            : 'text-gray-500',
        ]"
      >
        {{ tab }}
      </button>
    </div>

    <!-- FAQ List -->
    <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      <div
        v-for="(faq, index) in filteredFaqs"
        :key="index"
        class="border rounded-lg p-4"
      >
        <div
          @click="toggleFaq(index)"
          class="flex justify-between items-center cursor-pointer"
        >
          <h3 class="text-lg font-semibold">{{ faq.question }}</h3>
          <svg
            v-if="activeFaq === index"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
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
        </div>
        <div v-if="activeFaq === index" class="mt-4 text-gray-600">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FaqSection",
  data() {
    return {
      tabs: ["General", "Security", "Booking", "Payment", "Others"],
      selectedTab: "Booking",
      activeFaq: null,
      faqs: [
        {
          category: "Booking",
          question: "How Do I Find A Car Or Bike For Trip?",
          answer:
            "You can search for available cars or bikes by using our booking platform and entering the location and dates for your trip.",
        },
        {
          category: "Booking",
          question: "How Can I Extend My Trip Date After Booking?",
          answer:
            "You can extend your trip by going to the 'My Bookings' section and selecting the option to extend your booking. Additional fees may apply.",
        },
        {
          category: "Booking",
          question: "How Do I Extend My Trip?",
          answer:
            "Visit the 'My Trips' section in your account and click on 'Extend Trip' to add more days.",
        },
        {
          category: "Booking",
          question: "Am I Responsible For Fuel?",
          answer:
            "Yes, you are responsible for refueling the vehicle before returning it.",
        },
        {
          category: "Booking",
          question: "Can I Book Car Or Bike Under 20 Of Age?",
          answer:
            "The minimum age requirement for booking a car or bike is 21 years old.",
        },
        {
          category: "Booking",
          question: "How Can I Apply For Promo Code?",
          answer:
            "You can apply a promo code during the payment step of your booking process.",
        },
      ],
    };
  },
  computed: {
    filteredFaqs() {
      return this.faqs.filter((faq) => faq.category === this.selectedTab);
    },
  },
  methods: {
    toggleFaq(index: any) {
      this.activeFaq = this.activeFaq === index ? null : index;
    },
  },
});
</script>

<style scoped>
/* Add custom styles if needed */
</style>
