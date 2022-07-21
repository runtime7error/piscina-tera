<template>
  <headerComponent @loginClick="loginInterface"></headerComponent>
  <tab-panel></tab-panel>
</template>

<script>
import headerComponent from "../components/header.vue";
import tabPanel from "../components/tabPanel.vue";

export default {
  name: "Main",
  components: {
    headerComponent,
    tabPanel,
  },
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  methods: {
    start() {
      this.$router.push("/main")
    },
    mounted() {
    if (this.$route.path !== "/") {
      this.$router.push("/");
    }
  },
  }
};
</script>
