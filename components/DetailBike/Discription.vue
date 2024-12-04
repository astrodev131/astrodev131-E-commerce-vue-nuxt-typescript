<template>
  <section
    class="text-2xl text-gray-600 w-11/12 m-auto p-6 md:p-12 lg:p-16 bg-cover bg-center bg-no-repeat"
    style="
      background-image: url('images/motercyclebg.png');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    "
  >
    <!-- Car Details -->
    <div class="mb-12 lg:mb-24">
      <strong class="block text-black text-2xl lg:text-3xl">BMW M2 2020</strong>
      <p class="mt-4 text-base w-full sm:w-8/12 lg:w-5/12 xl:w-4/12 lg:text-lg">
        The BMW M2 Is The High-Performance Version Of The 2 Series 2-Door Coupé.
        The First Generation Of The M2 Is The F87 Coupé And Is Powered By
        Turbocharged.
      </p>
    </div>

    <!-- Specifications Section -->
    <strong class="block text-black text-2xl lg:text-3xl mt-12 lg:mt-24">
      Specifications
    </strong>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-6 lg:mt-12 text-sm lg:text-base"
    >
      <!-- Left Column -->
      <div class="space-y-2">
        <p class="font-medium">Ground Clearance</p>
        <p class="font-medium">Engine Display</p>
        <p class="font-medium">Fuel Type</p>
        <p class="font-medium">Wheels Type</p>
        <p class="font-medium">Emission Type</p>
        <p class="font-medium">Mileage</p>
        <p class="font-medium">Gear Box</p>
        <p class="font-medium">ABS</p>
        <p class="font-medium">Tyre Type</p>
      </div>

      <!-- Right Column -->
      <div class="space-y-2 text-right lg:text-left">
        <p>170Mm</p>
        <p>155 Cc</p>
        <p>Petrol</p>
        <p>Alloy</p>
        <p>856-2.0</p>
        <p>40 Kmpl</p>
        <p>6-Speed</p>
        <p>Dual Channel</p>
        <p>Tubeless</p>
      </div>
    </div>
  </section>
</template>

<style lang="css">
/* Ensure consistent padding on all sides */
section {
  padding-left: 10%; /* Ensure that both sections start at the same point */
}

/* Additional spacing and margins */
p {
  margin-top: 0.75rem;
  font-size: 20px; /* Adjusted for better spacing */
}

@media (max-width: 768px) {
  /* Adjustments for smaller screens */
  section {
    padding-left: 5%; /* Less padding on mobile for space efficiency */
    padding-right: 5%; /* Ensure consistent right padding */
  }
  .text-2xl {
    font-size: 1.5rem; /* Smaller font size on mobile */
  }
  .lg\:text-3xl {
    font-size: 2rem;
  }
  .lg\:w-5\/12 {
    width: 90%; /* Ensure text content fits well on mobile */
  }
  .lg\:grid-cols-4 {
    grid-template-columns: 1fr 1fr; /* Use 2 columns for medium screens */
  }
  .lg\:gap-8 {
    gap: 16px; /* Adjust gap between columns on mobile */
  }
  .space-y-2 {
    margin-bottom: 1rem; /* Add margin for vertical spacing */
  }
}
</style>
