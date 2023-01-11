const app = Vue.createApp({
    template:
        `
        <h2>Başlık: {{baslik}}</h2>
        <h3>İçerik: {{icerik}}</h3>
        <p>Beğeni Sayısı: {{begeni}}</p>
        <button v-on:click="begen()">BEĞEN</button>
    `,
    data() {
        return {
            baslik: 'Vue.JS',
            icerik: 'Vue.JS Konuları',
            begeni: 0
        }
    },
    methods: {
        begen() {
            console.log("Beğenildi.");
            this.begeni++;
        }
    }
});

app.mount('#app');