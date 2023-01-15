<template lang="">
  <div>
    <slot></slot>
    <br><hr><br>
    <input type="text" v-model="name">
    <br><br>
    <input type="text" v-model="surname">
    <p>{{nameSurname}}</p>
    <br><hr><br>
    <input type="number" v-model="number1"> <br><br>
    <input type="number" v-model="number2"> <br><br>
    <input type="number" v-model="total">
  </div>
</template>

<script>



export default {
  data() {
    return {
      name: '',
      surname: '',
      number1: 0,
      number2: 0,
      total: 0
    }
  },

  watch: {
    // Buraya çektiğimiz datayı izleceyecek ve o data üzerinde bir değişiklik olduğu zaman metot içersindeki işleri yapmaya başlayacak.
    number1(newValue, oldValue) {
      console.log("Yeni Sayı: ", newValue, "Eski Sayı: ", oldValue)
      this.total = parseInt(this.number1) + parseInt(this.number2)
    },
    // Buraya çektiğimiz datayı izleceyecek ve o data üzerinde bir değişiklik olduğu zaman metot içersindeki işleri yapmaya başlayacak.
    number2(newValue, oldValue) {
      console.log("Yeni Sayı: ", newValue, "Eski Sayı: ", oldValue)
      this.total = parseInt(this.number1) + parseInt(this.number2)
    },
  },

  computed: {
    nameSurname() {
      return this.name + ' ' + this.surname;
    }
  }
}
</script>
<style lang="">
  
</style>