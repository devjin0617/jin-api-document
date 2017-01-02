import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import App from './App.vue'

const Projects = {
    template: '<div>Projects</div>'
};

const Documents = {
    template: '<div>Documents</div>'
};

const routes = [
    { path: '/', component:{template:'<div>hello<router-view></router-view></div>'} },
    { path: '/projects', component: Projects},
    { path: '/documents', component: Documents}
];

const router = new VueRouter({
    routes,
    mode : 'history'
});

export default router