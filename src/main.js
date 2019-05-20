import Vue from 'vue'
import App from './App'
import  "../static/css/base.css"
import  "../static/css/icon.css"
import public_c from './public_c.js'


Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(public_c);
const app = new Vue(App)
app.$mount()
