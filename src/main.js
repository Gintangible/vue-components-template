import Vue from 'vue';
import { Dialog } from 'vant';
import 'amfe-flexible';
import 'normalize.css/normalize.css';
import '@/styles/scrollbar.css';
import App from './App.vue';
import router from './router/index';
import store from './store';
import fastclick from 'fastclick';
import config from '@/config';

fastclick.attach(document.body);         // 解决移动端事件300ms延时

if (process.env.NODE_ENV !== 'production') {
  Dialog.alert({
    title: '注意',
    message: `您正在使用${config.app_name} ${config.app_version}测试版`,
  });
  const eruda = require('eruda');
  eruda.init();
}
// 引入mockjs
if (config.mocking) {
  require('./mock');
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');