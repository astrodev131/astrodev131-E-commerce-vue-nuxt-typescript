<template>
  <div class="min-h-screen bg-gray-100 flex flex-col md:flex-row">
    <!-- Sidebar -->
    <aside
      class="w-full md:w-1/4 bg-white shadow-md px-6 py-8 flex flex-col justify-center items-center text-center"
    >
      <div class="flex flex-col items-center">
        <div
          class="w-24 h-24 rounded-full bg-gray-200 flex justify-center items-center shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-12 h-12 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.314 0-10 1.687-10 5v3h20v-3c0-3.313-6.686-5-10-5z"
            />
          </svg>
        </div>
        <h2 class="mt-4 text-xl font-semibold">
          {{ useAuthStore().userData?.name }}
        </h2>
        <p class="text-gray-500 text-xl sm:text-sm lg:text-xl">
          {{ useAuthStore().userData?.email }}
        </p>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="w-full md:w-3/4 p-4 md:p-8">
      <!-- Stats -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <!-- Total Orders -->
        <div class="bg-white p-6 rounded-md shadow flex items-center space-x-4">
          <div>
            <p
              class="font-semibold text-[clamp(1.5rem, 4vw, 2.5rem)] leading-tight"
            >
              03
            </p>
            <p class="text-gray-500 text-[clamp(0.9rem, 2.5vw, 1.2rem)]">
              Total Orders
            </p>
          </div>
        </div>

        <!-- Coupons -->
        <div class="bg-white p-6 rounded-md shadow flex items-center space-x-4">
          <div>
            <p
              class="font-semibold text-[clamp(1.5rem, 4vw, 2.5rem)] leading-tight"
            >
              12
            </p>
            <p class="text-gray-500 text-[clamp(0.9rem, 2.5vw, 1.2rem)]">
              Coupons
            </p>
          </div>
        </div>

        <!-- Cancelled Orders -->
        <div class="bg-white p-6 rounded-md shadow flex items-center space-x-4">
          <div>
            <p
              class="font-semibold text-[clamp(1.5rem, 4vw, 2.5rem)] leading-tight"
            >
              24
            </p>
            <p class="text-gray-500 text-[clamp(0.9rem, 2.5vw, 1.2rem)]">
              Cancelled Orders
            </p>
          </div>
        </div>
      </div>

      <!-- Recent Orders -->
      <div class="mt-8">
        <h2 class="text-xl font-semibold mb-4">My Recent Orders</h2>
        <div class="overflow-x-auto">
          <div class="p-4">
            <!-- Search Bar -->
            <div class="mb-4">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search..."
                class="p-2 border border-gray-300 rounded w-full"
              />
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
              <table class="w-full bg-white rounded-md shadow">
                <thead class="bg-gray-200 text-left">
                  <tr>
                    <th class="p-4 cursor-pointer">Category</th>
                    <th class="p-4">name</th>
                    <th class="p-4">Pick Up Location</th>
                    <th class="p-4" @click="sortTable('date')">
                      Date
                      <span>{{ getSortIcon("date") }}</span>
                    </th>
                    <th class="p-4">Return Date</th>
                    <th
                      class="p-4 cursor-pointer"
                      @click="sortTable('bookingNo')"
                    >
                      Payment <span>{{ getSortIcon("bookingNo") }}</span>
                    </th>
                    <th class="p-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, index) in paginatedData"
                    :key="index"
                    class="border-t"
                  >
                    <td class="p-4">{{ row.sort }}</td>
                    <td class="p-4">{{ row.name }}</td>
                    <td class="p-4">{{ row.pickuplocation }}</td>
                    <td class="p-4">{{ row.date }}</td>
                    <td class="p-4">{{ row.returndate }}</td>
                    <td class="p-4">${{ row.payment }}</td>
                    <td
                      class="p-4"
                      :class="{
                        'text-green-600': row.status === 'completed',
                        'text-red-600': row.status === 'cancelled',
                        'text-yellow-600': row.status === 'booking',
                      }"
                    >
                      {{ row.status }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <div class="flex justify-center mt-4 space-x-2">
              <button
                v-for="page in totalPages"
                :key="page"
                @click="currentPage = page"
                :class="[
                  'px-4 py-2 border rounded',
                  currentPage === page ? 'bg-blue-500 text-white' : 'bg-white',
                ]"
              >
                {{ page }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
import axios from "axios";
import { ref, computed } from "vue";
import { onMounted, reactive } from "vue";
import { useAuthStore } from "../../stores/auth";

interface DataType {
  name: string;
  username: string;
  sort: string;
  useremail: string;
  pickuplocation: string;
  date: string;
  returndate: string;
  payment: number;
  status: string;
}

const data = reactive<DataType[]>([]);
// Function to fetch data from the server
const getData = () => {
  axios
    .get("http://localhost:5000/book/getdata")
    .then((res) => {
      // Clear the array and populate it with the response data
      data.splice(0, data.length, ...res.data);
      console.log(data, "Data after population"); // Log the data after population
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

// Fetch data when the component is mounted
onMounted(() => {
  getData();
});
const searchQuery = ref("");
const sortKey = ref("");
const sortDirection = ref("asc");
const currentPage = ref(1);
const itemsPerPage = 5;

// Computed filtered and sorted data
const filteredData = computed(() => {
  let filtered = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  );

  if (sortKey.value) {
    filtered.sort((a: any, b: any) => {
      const aValue = a[sortKey.value];
      const bValue = b[sortKey.value];
      if (aValue < bValue) return sortDirection.value === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection.value === "asc" ? 1 : -1;
      return 0;
    });
  }

  return filtered;
});

// Paginated data
const totalPages = computed(() =>
  Math.ceil(filteredData.value.length / itemsPerPage)
);
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredData.value.slice(start, start + itemsPerPage);
});

// Methods for sorting
const sortTable = (key: any) => {
  if (sortKey.value === key) {
    sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
  } else {
    sortKey.value = key;
    sortDirection.value = "asc";
  }
};

const getSortIcon = (key: any) => {
  if (sortKey.value !== key) return "";
  return sortDirection.value === "asc" ? "↑" : "↓";
};
</script>
