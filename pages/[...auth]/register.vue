<template>
  <div class="flex flex-col md:flex-row h-screen">
    <div
      class="flex-1 flex flex-col justify-center items-center text-white px-6 py-10 md:px-12"
      style="
        background-image: url('/images/loginbg.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    >
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Welcome to Drivee®</h1>
      <p class="text-3xl md:text-4xl mb-8 text-center">
        the best global carsharing marketplace
      </p>
      <span class="text-center md:text-left mb-6">
        Have a car? Earn money as a Host. Rent your dream car as a Guest.
      </span>
      <button
        class="rounded-sm mt-4 flex items-center px-4 py-2 bg-white text-black font-medium hover:bg-gray-200"
      >
        <span>Play Video Intro</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 ml-2"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M5 3.5l15 8.5-15 8.5V3.5z" />
        </svg>
      </button>
    </div>

    <div
      class="flex-1 flex flex-col justify-center items-center bg-white px-6 py-10 md:px-10 md:py-12"
    >
      <h2
        class="text-4xl md:text-5xl font-semibold text-left w-full md:w-2/4 mb-4"
      >
        Drivee
      </h2>

      <h2
        class="text-2xl md:text-3xl font-semibold text-left w-full md:w-2/4 mb-4"
      >
        Create An Account.
      </h2>

      <p class="text-gray-500 font-semibold mb-6 w-full md:w-2/4 text-left">
        We’d love to have you on board. Join over 500+ customers around the
        globe and enhance productivity.
      </p>
      <button
        class="w-full md:w-2/4 flex items-center justify-center px-4 py-2 mb-4 border rounded-md hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          width="25"
          height="25"
          class="facebook-logo"
        >
          <path
            fill="#1877F2"
            d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 6.017 4.432 10.987 10.206 11.854v-8.385H7.078v-3.469h3.128V9.845c0-3.1 1.866-4.798 4.715-4.798 1.367 0 2.797.243 2.797.243v3.078h-1.577c-1.553 0-2.036.965-2.036 1.954v2.335h3.469l-.554 3.469h-2.915v8.385C19.568 22.987 24 18.017 24 12z"
          />
          <path
            fill="#FFF"
            d="M16.671 15.469l.554-3.469h-3.469V9.665c0-.989.483-1.954 2.036-1.954h1.577V4.633s-1.43-.243-2.797-.243c-2.849 0-4.715 1.698-4.715 4.798v2.148H7.078v3.469h3.128v8.385a12.075 12.075 0 0 0 3.664 0v-8.385h2.915z"
          />
        </svg>
        Continue with Facebook
      </button>

      <button
        class="w-full md:w-2/4 flex items-center justify-center px-4 py-2 mb-6 border rounded-md hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="20"
          height="20"
          class="google-logo"
        >
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.55 1.23 9.01 3.25l6.77-6.77C36.34 2.55 30.53 0 24 0 14.98 0 7.31 5.32 3.69 12.92l7.86 6.13C13.27 12.68 18.29 9.5 24 9.5z"
          />
          <path
            fill="#4285F4"
            d="M46.14 24.5c0-1.68-.15-3.31-.44-4.88H24v9.24h12.56c-.54 2.89-2.16 5.34-4.59 7.02l7.15 5.57c4.17-3.85 6.62-9.52 6.62-16.05z"
          />
          <path
            fill="#FBBC05"
            d="M12.54 28.06c-.82-2.46-.82-5.16 0-7.62L4.69 14.31C2.63 18.3 2.63 22.7 4.69 26.69l7.85-6.13z"
          />
          <path
            fill="#34A853"
            d="M24 48c6.53 0 12.34-2.12 16.48-5.78l-7.15-5.57c-2.09 1.44-4.78 2.27-7.62 2.27-5.71 0-10.73-3.18-13.4-7.91l-7.86 6.13C7.31 42.68 14.98 48 24 48z"
          />
        </svg>
        Continue with Google
      </button>

      <form class="w-full md:w-2/4">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Name*</label
          >
          <input
            type="text"
            id="name"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email*</label
          >
          <input
            type="email"
            id="email"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password*</label
          >
          <input
            type="password"
            id="password"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Create a password"
          />
        </div>
        <div class="flex items-center mb-4">
          <input
            type="checkbox"
            id="terms"
            class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="terms" class="ml-2 block text-sm text-gray-700">
            I agree to the Terms and Privacy Policy
          </label>
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800"
        >
          Sign up
        </button>
      </form>

      <p class="text-sm text-gray-500 mt-4">
        Already have an account?
        <a href="/login" class="text-blue-600 hover:underline"
          >Login here.</a
        >
      </p>
    </div>
  </div>
</template>
