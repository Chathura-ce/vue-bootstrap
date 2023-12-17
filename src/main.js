import './assets/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/bootstrap.js'
import ValidationError from '@/components/ValidationError.vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import * as bootstrap from 'bootstrap'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(Icons)
app.component('ValidationError', ValidationError)

app.mount('#app')
