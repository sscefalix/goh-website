import { createApp } from 'vue'
import './assets/scss/variables.scss'
import './assets/scss/global.scss'
import App from './App.vue'
import router from "./router/router.ts";

const app = createApp(App)

app.use(router)
app.mount('#app')
