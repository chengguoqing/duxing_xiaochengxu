import Vue from 'vue'
import App from './App'
import  "../static/css/base.css"
import  "../static/css/icon.css"



Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
