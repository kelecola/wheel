import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { config } from '@/config'
// 引入全局样式
import '@/assets/css/index.scss'
// 移动端适配
import 'amfe-flexible'
// 全局引入按需引入UI库 vant
import { vantPlugins } from './plugins/vant'
// 完整加载
import VueLuckyCanvas from '@lucky-canvas/vue'
// import ConfettiExplosion from "vue-confetti-explosion";

/* eslint-disable */
// import VueConfetti from 'vue-confetti'



// 使用mock数据
if (config.mock) {
  const { mockXHR } = require('../mock')
  mockXHR()
}

const app = createApp(App)

// app.use(VueConfetti)
app.use(vantPlugins)
app.use(store)
app.use(router)
app.use(VueLuckyCanvas)
app.mount('#app')
