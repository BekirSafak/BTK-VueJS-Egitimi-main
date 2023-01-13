<template>
  <!-- Sumbit Eventi -->
  <form @submit.prevent="sendData">
    <!-- İki Yönli Data Binding -->
    <input type="text" v-model="text" />
    <p>{{ text }}</p>

    <br />
    <hr />
    <br />

    <!-- Select Binding -->
    <select v-model="framework">
      <option>Vue.JS</option>
      <option>React.JS</option>
      <option>Svelte</option>
    </select>
    <p>{{ framework }}</p>

    <br />
    <hr />
    <br />

    <!-- Checkbox Data Binding -->
    <input type="checkbox" id="checkbox1" v-model="checked" />
    <label for="checkbox1">Onaylıyorum</label>
    <p>Sonuç:{{ checked ? "Onay kabul edildi." : "Onay kabul edilmedi." }}</p>

    <div>
      <input type="checkbox" id="Vue" value="Vue.JS" v-model="frameworks" />
      <label for="Vue">Vue.JS</label>
    </div>
    <br />
    <div>
      <input type="checkbox" id="React" value="React.JS" v-model="frameworks" />
      <label for="React">React.JS</label>
    </div>
    <br />
    <div>
      <input type="checkbox" id="Svelte" value="Svelte" v-model="frameworks" />
      <label for="Svelte">Svelte</label>
    </div>

    <p>Seçilen Frameworkler: {{ frameworks }}</p>

    <br />
    <hr />
    <br />

    <!-- Klavye Eventleri -->
    <div>Öğrenciler</div>
    <input type="text" v-model="student" @keyup.alt="addStudents" />
    <div v-for="student in students" :key="student">
      <span @click="deleteStudents(student)">{{ student }}</span>
    </div>

    <br />
    <hr />
    <br />

    <button>Gönder</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: "Bir metin yazınız",
      framework: "Framework Seçin",
      checked: false,
      frameworks: [],
      student: "",
      students: [],
    };
  },
  methods: {
    addStudents(e) {
      // ? Bu methods ile inputtan gelen girdinin sorgusu gerçekleşiyor. Students datasının içersinde student datası yoksa Students içerisine Students push ediliyor.
      if (e.key == "," && this.student) {
        if (!this.students.includes(this.student)) {
          this.students.push(
            this.student.charAt(0).toUpperCase() + this.student.slice(1)
          );
        }
        this.student = "";
      }
    },

    deleteStudents(student) {
      // Filter Metodu
      this.students = this.students.filter((item) => student !== item);
    },

    sendData() {
      console.log("Gönderildi...");
    },
  },
};
</script>

<style>
</style>