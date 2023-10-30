const app = Vue.createApp({
    data() {
        return {
            text: 'Calculator Sederhana dengan VueJS',
            v1: '',
            v2: '',
            texthasil: 'Hasil =',
            hasil: 0
        }
    },
    methods: {
        calculate(operator) {
            if (operator === '+') {
                this.hasil = parseFloat(this.v1) + parseFloat(this.v2);
            } else if (operator === '-') {
                this.hasil = parseFloat(this.v1) - parseFloat(this.v2);
            } else if (operator === '*') {
                this.hasil = parseFloat(this.v1) * parseFloat(this.v2);
            } else if (operator === '/') {
                this.hasil = parseFloat(this.v1) / parseFloat(this.v2);
            }
        }
    }
})

app.mount('#app')
