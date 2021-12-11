import { createApp } from 'vue';
import VueClipboard from 'vue-clipboard2';
import ElementPlus from 'element-plus'
import { ArrowRightBold } from '@element-plus/icons'

import 'element-plus/dist/index.css'
import { router } from './router';
import App from './App.vue';
import './assets/styles';
import i18n from './i18n';
import { formatNumber } from './filters';

const app = createApp(App);
app.use(router);
app.use(ElementPlus)
app.use(i18n)
app.use(VueClipboard)
app.component('ArrowRightBold', ArrowRightBold)
app.mixin({
  methods: {
    $formatNumber: formatNumber,
  }
})

app.mount('#app');

