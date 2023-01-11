const app = Vue.createApp({
    template:
        `
        <div v-if="showColor">{{renk1}}</div>
        <br>
        <div v-show="!showColor">{{renk2}}</div>
        <br>
        <button @click="toggleBTN">
            <span v-if="showAndHide">Kırmızı</span>
            <span v-else>Sarı</span>
        </button>
    `,
    // ? v-if ile v-show arasında bir fark vardır. Bu fark v-if ile DOM içerisinde SARI Yazan div oluşturulmazken. v-show ile kırmızı yazan div oluşturulur ve display:none özelliği alarak gizlenir. 
    data() {
        return {
            renk1: "SARI",
            renk2: "KIRMIZI",
            showColor: true,
            showAndHide: true
        }
    },
    methods: {
        toggleBTN() {
            this.showColor = !this.showColor;
            this.showAndHide = !this.showAndHide;
        }
    }
});

app.mount('#app');