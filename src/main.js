import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import App from './App.vue'
import Router from './routes'

console.log(Router)



// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

const app = new Vue({
    Router
}).$mount('#app');
