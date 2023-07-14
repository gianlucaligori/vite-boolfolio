import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap.js'
// import './styles/main.scss'


axios.defaults.baseURL = 'https://api.example.com' // Sostituisci con l'URL della tua API

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.mount('#app')
