import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import less from 'less'

Vue.use(less)
Vue.use(ElementUI)
Vue.prototype.$axios = axios

Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  render: h => h(App), 
}).$mount('#app')
