<template >
  <div>
    <h3>{{ title }}</h3>
    <div v-for="lesson in lessons" :key="lesson">
      <router-link :to="{ name: 'lessonInfo' }">{{ lesson }}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Dersler",
      lessons: ["Web Tasarım", "Grafik Tasarım", "Makina Tasarım"],
    };
  },
};
</script>
<style lang="">
</style>