// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue';
import App from './App';
import router from './router';
import {
  Vuetify,
  VApp,
  VBtn,
  VCheckbox,
  VFooter,
  VForm,
  VGrid,
  VIcon,
  VList,
  VNavigationDrawer,
  VToolbar,
  transitions,
} from 'vuetify';
import '../node_modules/vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCheckbox,
    VFooter,
    VForm,
    VGrid,
    VIcon,
    VList,
    VNavigationDrawer,
    VToolbar,
    transitions,
  },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>',
});
