<template>
  <div>
    <h3>{{ titleText }}</h3>
    <h4>{{ text }}</h4>
  </div>
</template>

<script>
export default {
  props: ["titleText", "text"],
  data() {
    return {};
  },
};
</script>

<style scoped>
/* scoped özellikli style etiketi sadece sayfa içerisinde geçerlidir. */
h3 {
  color: palevioletred;
  font-size: 30px;
  font-weight: 700;
}
</style>