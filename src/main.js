import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import TheNavbar from '@/components/TheNavbar.vue';
import FooterMain from '@/Footer/FooterMain.vue';


const app = createApp(App);
app.component('the-navbar', TheNavbar);
app.component('the-footer', FooterMain);
app.use(router);
app.mount('#app');
