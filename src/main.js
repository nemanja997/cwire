import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import router from './routing/router'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false;

//helper for global event listening
window.Event = new Vue();

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
