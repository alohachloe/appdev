import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'

const app = createApp(App);


app.config.errorHandler = (err, vm, info) => {
    // Handle the error here (e.g., log it, report it to a server, etc.)
    console.error('Global error handler:', err, vm, info);
  
    // Prevent the default behavior (logging the error to the console)
    return true;
};
axios.defaults.baseURL = 'http://backend.test/'
app.use(router)
app.mount('#app')
    