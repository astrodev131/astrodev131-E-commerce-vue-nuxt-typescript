<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useAuthStore } from "./stores/auth";

function decodeJWT(token: string): any {
  const base64Url = token.split(".")[1]; // Extract payload part
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // Replace Base64 URL encoding
  const jsonPayload = atob(base64); // Decode Base64 to JSON string
  return JSON.parse(jsonPayload); // Parse JSON to object
}

// Usage:
const token = useCookie("token").value; // Get token from cookie
if (token) {
  const decoded = decodeJWT(token);
  console.log("Decoded JWT:", decoded);
  useAuthStore().userData = {
    name: decoded.name,
    email: decoded.email,
  };
  useAuthStore().authenticated = true;
}
</script>

<template>
  <div>
    <!-- <RouterView></RouterView> -->
    <Header></Header>
    <NuxtPage></NuxtPage>
    <Footer></Footer>
  </div>
</template>
