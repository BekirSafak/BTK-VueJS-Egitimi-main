<template lang="">
  <div>
    <h3>Ders İçerikleri</h3>
    <p v-for="day in days" :key="day" >Ders Günleri:{{day}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      days: ["Pazartesi", "Perşembe", "Cuma"],
    }
  },
}
</script>
<style lang="">
  
</style>