<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
</script>

<template>
  <div>
    <!-- <RouterView></RouterView> -->
    <Header></Header>
    <NuxtPage></NuxtPage>
    <Footer></Footer>
  </div>
</template>
