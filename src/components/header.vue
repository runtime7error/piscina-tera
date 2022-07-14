<template>
  <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
    >
      <a class="flex items-center">
        <img
          src="https://icon-library.com/images/tera-icon/tera-icon-25.jpg"
          class="mr-3 h-6 sm:h-9"
          alt="Tera's logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >Sample Logo</span
        >
      </a>
      <div class="flex items-center lg:order-2">
        <a
          href="#"
          class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >Login</a
        >
        <a
          href="#"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >Registre-se</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "headerComponent",
  data() {
    return {
      message: "Hello Vue!",
    };
  },
};
</script>
