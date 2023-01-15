<template>
  <div>
    <nav>
      <router-link :to="{ name: 'home' }">home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link> |
      <router-link :to="{ name: 'students' }">Students</router-link> |
      <router-link :to="{ name: 'studentlesson' }">Lesson</router-link> |
    </nav>
    <div>
      <span class="spanBTN" @click="homePage">Anasayfa</span>
      <span class="spanBTN" @click="backPage">Geri</span>
      <span class="spanBTN" @click="forthPage">İleri</span>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    homePage() {
      this.$router.push({ name: "home" })
      // Anasayfa yönlendirmesi yapan kod satırı.
    },
    backPage() {
      this.$router.go(-1)
      // Bulunulan sayfadan geriye yönlendirme yapan kod satırı.
    },
    forthPage() {
      this.$router.go(1)
      // Bulunulan sayfadan ileriye yönlendrime yapan kod satırı.
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.spanBTN {
  background-color: #42b983;
  padding: 8px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 30px;
  color: aliceblue;
  cursor: pointer;
  transition: .5s all ease-in-out;
}

.spanBTN:hover {
  background-color: #2c3e50;
  color: aliceblue;

}
</style>
