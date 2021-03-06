import { createApp } from 'vue';
import App from './App.vue';
import router from './navigation';
import store from './store';
import './styles/index.scss';

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
