import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {createPinia} from "pinia";
const pinia = createPinia();

import router from './router';

createApp(App).use(router).use(pinia).mount('#app');
