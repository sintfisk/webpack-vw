// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'

Vue.config.productionTip = false

import state from "./vuex/state.js";
import mutations from "./vuex/mutations.js";
import createPersistedState from 'vuex-persistedstate' //sessionStorage tongbu  vuex 解决vuex刷新问题
// import createMutationsSharer from 'vuex-shared-mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    }),
    // createMutationsSharer({
    //   predicate: ['increment']
    // })
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
