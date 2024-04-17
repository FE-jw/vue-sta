import { createApp } from 'vue';
import App from './App.vue';
import sta from 'vue-sta';
console.log(sta);

createApp(App)
	.use(sta)
	.mount('#app');