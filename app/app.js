import Vue from "nativescript-vue";
import App from "./components/App";
Vue.registerElement('PullToRefresh', () => require('@nstudio/nativescript-pulltorefresh').PullToRefresh);


new Vue({
    render: h => h(App)
}).$start();