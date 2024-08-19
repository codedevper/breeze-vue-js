import './assets/css/app.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import checkAuth from './middleware/checkAuth'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(checkAuth)

app.mount('#app')
