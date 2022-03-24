// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/reset.css'




import VueI18n from 'vue-i18n'

import en from './language/en' // 英文语言包
import tw from './language/tw' // 繁体中文语言包

Vue.use(ElementUI)
Vue.use(VueI18n);

Vue.config.productionTip = false

const i18n = new VueI18n({
    locale: window.localStorage.getItem('language') === null ? 'en' : window.localStorage.getItem('language'), // 语言标识，设置默认语言
    messages: {
        'en': en, // 英文
        'tw': tw, // 繁体中文
    }
});


/* eslint-disable no-new */
new Vue({
    el: '#app',
    i18n,
    router,
    components: { App },
    template: '<App/>'
})
