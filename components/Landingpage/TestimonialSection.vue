<template>
  <section class="py-16 bg-gray-100">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-gray-800">
        What Our Customers Are Saying...
      </h2>
    </div>
    <div
      class="flex justify-center xl:space-x-8 gap-11 space-x-0 flex-wrap justify-items-center"
    >
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="testimonial-card md:h-[450px] h-full w-96 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative"
      >
        <img
          :src="testimonial.image"
          alt="Customer"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-gray-200 p-4"
        >
          <h3 class="text-lg font-semibold mb-1">
            {{ testimonial.title }}
          </h3>
          <p class="text-sm text-gray-200 mb-2">{{ testimonial.message }}</p>
          <p class="font-bold">{{ testimonial.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomerTestimonials",
  data() {
    return {
      testimonials: [
        {
          image: "./images/images (2).jpg",
          title: "Excellent Service! Car Rent Service",
          message:
            "We have been using Rentasy for our car rental needs for over 3 years now. Never had any problems with their service. Their customer support is incredibly helpful, and they are always available to assist with any queries we have. The prices are also very competitive.",
          name: "------ Robert Harvest",
        },
        {
          image: "./images/images (1).jpg",
          title: "Excellent Service! Car Rent Service",
          message:
            "I have been using Rentasy for my car rental needs for over 5 years now. I have never had any problems with their service. Their customer support is always responsive and helpful. I would recommend Rentasy to anyone looking for a reliable car rental provider.",
          name: "------ Jovan Reels",
        },
        {
          image: "./images/images.jpg",
          title: "Excellent Service! Car Rent Service",
          message:
            "Endorsed by industry experts, Rentasy is the car rental solution you can trust. With years of experience in the field, we provide fast, reliable, and secure car rental services.",
          name: "------ Kanesha Keyton",
        },
      ],
    };
  },
});
</script>

<style scoped>
.testimonial-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .testimonial-card {
    width: 100%;
    max-width: 350px;
    margin-bottom: 20px;
    align-items: center;
  }

  .testimonial-card img {
    object-fit: cover;
    height: 300px;
  }

  .testimonial-card .content {
    padding: 10px;
  }
}

@media (min-width: 768px) {
  .testimonial-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
