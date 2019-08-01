import Vue from 'vue'
import Vuex from 'vuex'

import * as modules from "./modules";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    controlsEnabled: true,
    window: {
      width: null,
      height: null
    }
  },
  modules: modules,
  getters: {
    controlsEnabled: state => {
      return state.controlsEnabled;
    },
  },
  mutations: {
    TOGGLE_CONTROLS: (state, value) => {
      state.controlsEnabled = value;
    },
    SET_WINDOW_PARAMS(state, { width, height }) {
      state.window.width = width;
      state.window.height = height;
    },
  },
  actions: {

  }
})
