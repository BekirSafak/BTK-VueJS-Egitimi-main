const app = Vue.createApp({
    // template:
    //     `
    // <ul>
    //     <li v-for="days in day">{{days}}</li>
    // </ul>
    // `,

    template:
        `
        <ul>
            <li v-for="person in persons">İsim / Yaş - {{person.isim}} {{person.yas}}</li>
        </ul>
        `,

    data() {
        // return {
        //     day: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
        // }

        return {
            persons: [
                { isim: "Bekir", yas: 26 },
                { isim: "Hasan", yas: 18 },
                { isim: "Pelin", yas: 28 }
            ]
        }
    },

    methods: {

    }
});

app.mount('#app');