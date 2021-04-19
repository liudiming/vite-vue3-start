import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';

// 引入路由配置
import router from './router/index';

// 引入store
import store from './store/index';

// 引入element-ui

createApp(App).use(router).use(store).use(ElementPlus)
  .mount('#app');
