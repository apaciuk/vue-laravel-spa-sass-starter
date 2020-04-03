//Node Modules import
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
//Local imports
import './jquery.slim.min.js';
import './bootstrap.bundle.min.js';
import '../css/font-awesome.css';
import '../css/bootstrap.css';

new Vue({
el: '#app',
router,
render: h => h(App)
})
