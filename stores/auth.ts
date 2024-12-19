import { defineStore } from "pinia";
import axios from "axios";
import { useCookie } from "nuxt/app";

// Define interfaces
interface LoginParam {
  email: string;
  password: string;
}

interface RegisterParam {
  name: string;
  email: string;
  password: string;
}

interface UserData {
  name: string;
  email: string;
}

interface Validation {
  name?: string; // Make it optional if it’s not always required
  email?: string;
  password?: string;
}
export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
    userData: null as UserData | null,
    validation: null as Validation | null,
  }),
  actions: {
    async loginUser({ email, password }: LoginParam) {
      this.loading = true; // Set loading to true while making the requestf

      try {
        const response = await axios.post(
          "http://localhost:5000/auth/login",
          { email, password } // Pass the destructured data here
        );

        if (response && response.data) {
          const token = useCookie("token");
          token.value = response.data.token;
          this.authenticated = true;
          alert(response?.data?.message); // Show success message
          this.userData = {
            name: response?.data?.user.name,
            email: response?.data?.user.email,
          };
        }
      } catch (error: any) {
        console.log(error.response?.data?.errors[0]?.path);
        this.validation = {
          email:
            error.response?.data?.errors[0]?.path === "email"
              ? "Please provide a valid email"
              : "",
          password:
            error.response?.data?.errors[0]?.path === "password" ||
            error.response?.data?.errors[1]?.path === "password"
              ? "Password is required"
              : "",
        };
      } finally {
        this.loading = false; // Set loading to false after the request is complete
      }
    },

    async registerUser({ name, email, password }: RegisterParam) {
      this.loading = true; // Set loading to true while making the requestf

      try {
        const response = await axios.post(
          "http://localhost:5000/auth/register",
          {
            name,
            email,
            password,
          }
        );
        if (response && response.data) {
          const token = useCookie("token");
          token.value = response.data.token;
          this.authenticated = true;
          alert(response?.data?.message); // Show success message
          this.userData = {
            name: response?.data?.user.name,
            email: response?.data?.user.email,
          };
        }
        // alert(message.value.message);
      } catch (error: any) {
        if (error.response.data.message) alert(error.response.data.message);
        console.log(error.response?.data?.errors[0]?.path);
        this.validation = {
          name:
            error.response?.data?.errors[0]?.path === "name"
              ? "Name is required"
              : "",
          email: error.response?.data?.errors.find(
            (err: any) => err.path === "email"
          )
            ? "Please provide a valid email"
            : "",
          password: error.response?.data?.errors.find(
            (err: any) => err.path === "password"
          )
            ? "Password must be at least 6 characters long"
            : "",
        };
      } finally {
        this.loading = false; // Set loading to false after the request is complete
      }
    },

    logUserOut() {
      const token = useCookie("token"); // useCookie hook in Nuxt 3
      this.authenticated = false; // Set authenticated state to false
      token.value = null; // Clear the token cookie
    },
  },
});
