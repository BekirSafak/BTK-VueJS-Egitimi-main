<template>
  <div>
    <Title :titleText="text" :text="text2"></Title>
    <h3>App.vue Başlık</h3>
    <BTN @clean="cleanInput"></BTN>
    <!-- @clean yazarak clean diye bir event gelirse cleanInput Methods'u çalıştır diyoruz. -->
    <input type="text" ref="inputText" />
  </div>
</template>

<script>
import Title from "./components/h3.vue";
import BTN from "./components/Button.vue";

export default {
  name: "App",
  components: {
    Title,
    BTN,
  },
  data() {
    return {
      text: "Vue.JS - Konuları",
      text2: "Vue'ye hoş geldiniz.",
    };
  },
  methods: {
    cleanInput() {
      this.$refs.inputText.value = "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
