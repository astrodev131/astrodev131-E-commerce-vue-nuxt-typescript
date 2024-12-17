import { useAuthStore } from "../stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  // Check if the user is authenticated
  if (!authStore.authenticated) {
    return navigateTo("/login"); // Redirect to login if not authenticated
  }
});
