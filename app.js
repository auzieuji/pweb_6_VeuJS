const app = Vue.createApp({
    data() {
        return {
            text: 'Calculator Sederhana dengan VueJS',
            v1: '',
            v2: '',
            texthasil: 'Hasil= ',
            hasil: 0
        }
    }
})
app.mount ('#app')