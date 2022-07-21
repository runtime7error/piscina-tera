<template>
  <nav
    class="fixed border-b border-[#6F9CEB] lg:px-6 bg-[#6F9CEB] backdrop-filter backdrop-blur-lg z-50 w-full px-5 py-2 flex justify-between items-center top-0 bg-opacity-30"
  >
    <a
      class="flex items-center sm:ml-10 ml-1 flex-wrap justify-between mx-auto max-w-screen-xl"
    >
      <img
        src="https://icon-library.com/images/tera-icon/tera-icon-25.jpg"
        class="mr-3 h-8 sm:h-10"
        alt="Tera's logo"
      />
      <span
        class="self-center sm:text-xl font-semibold whitespace-nowrap text-white"
        >Piscina's Tera</span
      >
    </a>
    <div class="flex items-center lg:order-2">
      <button
        @click="loginClick"
        class="text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-[#98B9F2]"
      >
        Login
      </button>
      <button
        class="text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-[#98B9F2]"
      >
        Registre-se
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "headerComponent",
  emits: ["loginClick"],
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  methods: {
    loginClick() {
      $this.$emit("loginClick");
    },
  },
};
</script>

<!-- #7d47c9 -->
