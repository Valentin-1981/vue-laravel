
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// require('./jquery.min.js');
// require('./owlcarousel/dist/owl.carousel.js');
// require('./owlcarousel/dist/assets/owl.carousel.css');
require('./bootstrap');
// require('jquery');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// var i = 1;
Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('prop-component', require('./components/PropComponent.vue'));
Vue.component('ajax-component', require('./components/AjaxComponent.vue'));
Vue.component('chartline-component', require('./components/ChartlineComponent.vue'));
Vue.component('chartpie-component', require('./components/ChartpieComponent.vue'));
Vue.component('chartrandom-component', require('./components/ChartrandomComponent.vue'));
Vue.component('socket-component', require('./components/SocketComponent.vue'));

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        URLhashListener: true,
        mouseDrag: false,
    });
});

const app = new Vue({
    el: '#app'
});
