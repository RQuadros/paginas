const AppVue = httpVueLoader('./components/App.vue');

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: httpVueLoader('./components/paginas/Home.vue') },
        { path: '/cerimonial', component:  httpVueLoader('./components/paginas/Cerimonial.vue') },
        { path: '/sobre', component:  httpVueLoader('./components/paginas/Sobre.vue') }
    ]
})

const app = new Vue({
    router,
    vuetify: new Vuetify(),
    render: h => h(AppVue),
}).$mount('#app')