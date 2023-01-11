const app = Vue.createApp({
    template: `
    <h2>Frameworkler</h2>
    <ul>
        <li v-for="f in frameworks" class="list" :class="{selected:f.selected}" @click="selectTag(f)">
        {{f.name}}
        </li>
    </ul>
    <h3>Seçilen Frameworkler</h3>
    <ul>
        <li v-for="s in selectTags">
        {{s.name}}
        </li>
    </ul>
    `,
    data() {
        return {
            frameworks: [
                { name: "Vue.JS", selected: true },
                { name: "React.JS", selected: false },
                { name: "Svelte", selected: false },
                { name: "Angular", selected: false }
            ]
        }
    },
    methods: {
        selectTag(f) {
            f.selected = !f.selected;
        }
    },
    computed: {
        selectTags() {
            console.log("Seçildi");
            return selecteds = this.frameworks.filter(i => i.selected);
        }
        // ?  computed diğer verilerden türetilmiş yeni veriler oluşturmak istendiğinde öne çıkmaktadır. 
        // ?  Bu verileri dönüştürmek (transform), filtrelemek (filter) ya da değiştirmek (manipulate) istediğimizde rahatlıkla kullanabiliriz. 
        // ?  Computed properties her zaman bir değer döndürmek (return) ve eş zamanlı olmak durumundadır. 
    }
});

app.mount('#app')