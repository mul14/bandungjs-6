import Vue from 'vue'
import Vuex from 'vuex'
// import moduleA from './moduleA'
// import moduleB from './moduleB'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    isShow: false,
  },
  mutations: {
    updateCounter(state, value) {
      state.counter = value
    },
    updateShowState(state) {
      state.isShow = !state.isShow
    }
  },
  actions: {
    toggle({ state, commit }) {
      commit('updateShowState')
    }
  }

  // moduleA, moduleB
})
