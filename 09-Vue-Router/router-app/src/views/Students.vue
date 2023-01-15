<template>
  <div>
    <h1>Ögrenciler</h1>
    <div v-for="student in students" :key="student.id">
      <router-link :to="{ name: 'studentInfo', params: { id: student.id } }">{{ student.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        { id: 1, name: "Bekir", not: 95 },
        { id: 2, name: "Erdem", not: 100 },
        { id: 3, name: "Sefa", not: 99 },
      ],
    };
  },
};
</script>

<style>

</style>