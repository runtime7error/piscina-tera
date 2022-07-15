<template>
  <nav class="border-[#9856f5] px-4 lg:px-6 py-2.5 bg-[#7d47c9]">
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
          class="self-center text-xl font-semibold whitespace-nowrap text-white"
          >Piscina's Tera</span
        >
      </a>
      <div class="flex items-center lg:order-2">
        <button
          class="text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-[#9856f5]"
          >Login</button
        >
        <button
          class="text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-[#9856f5]"
          >Registre-se</button
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

<!-- #7d47c9 -->
