import { createApp } from 'vue'
import { createStore } from "vuex"
import App from './App.vue'
import router from './router'

const stroe = createStore({
    state: {
        count: 0,
    }
})

console.log("stroe", stroe.state.count)

const app = createApp(App)

app.use(router)
app.mount('#app')
