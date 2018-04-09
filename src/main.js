import Vue from 'vue'
import App from './App.vue'
import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'
import 'spectre.css/dist/spectre-exp.css'
import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
