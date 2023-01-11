const app = Vue.createApp({
    // template:
    //     `
    //     <div v-bind:style="color">Vue.JS Muhteşem</div>
    //     `,

    template:
        `
        <div :style="style">Vue.JS Muhteşem</div>
        `,
    // ? v-bind:style="" için kısa gösterim şu şekildedir; :style="" genellikle kısa şeklide karşımıza çıkar.

    // data() {
    //     return {
    //         color: "color:red",
    //     }
    // },

    data() {
        return {
            style: {
                color: 'green',
                fontSize: '24px'
            }
        }
    },

    methods: {

    }
});

app.mount('#app');