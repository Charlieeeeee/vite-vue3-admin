import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { ElButton } from 'element-plus';

(() => {
  const env = import.meta.env
  console.log('环境变量 VITE_NODE_ENV:', env.VITE_NODE_ENV)
  console.log('环境变量 VITE_API_ROOT:', env.VITE_API_ROOT)
})()

const app = createApp(App);

app.use(router).use(store);

app.use(ElButton);

app.mount('#app');
