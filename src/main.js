import './style.css'
// import './styles/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import * as bootstap from "bootstrap";


axios.defaults.baseURL = 'https://api.example.com' // Sostituisci con l'URL della tua API

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.mount('#app')
