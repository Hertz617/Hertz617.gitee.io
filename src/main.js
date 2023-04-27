import { createApp } from 'vue'
import App from './App.vue'//首页面
import router from './router'
//import './assets/main.css'//全局样式
import 'element-plus/dist/index.css' //引入element-plus 样式
// import {createPinia} from 'pinia'
import axios from './http/axios'
import pinia from './utils/pinia'
import * as ElementplusIconsVue from "@element-plus/icons-vue "

// const pinia=createPinia()
const app=createApp(App)
//引入组件
// import MyComponent from './components/MyComponent.vue'

//全局注册组件
// app.component('MyComponent',MyComponent)

for (const [key,component] of Object.entries(ElementplusIconsVue)){
    app.component(key, component)
}
app.use(pinia)//挂在pinia
app.use(router)//挂载router

app.mount('#app')//挂在index.html
app.config.globalProperties.$axios=axios