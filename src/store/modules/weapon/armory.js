import arsenal from '@/data/weapons'
const state = {
  arsenal: arsenal,
  inArms: false,
  ammoLeft: 10
}

const getters = {
  inArms: state => {
    return state.inArms ? state.inArms : false;
  },
  arsenal: state => {
    return state.arsenal;
  },
}

const mutations = {
  TAKE_WEAPON: (state, value) => {
    state.inArms = value;
  },
  SET_AMMO_LEFT: (state) => {
    state.inArms ? state.ammoLeft = state.inArms.ammoLeft : false
  },
  SET_AMMO_CLIP_LEFT: (state) => {
    state.ammoLeft ? state.inArms.ammoInClip = state.inArms.ammoInClip -1 : false
  },
  CHARGE_CLIP: state => {
    if (state.inArms.ammoLeft && state.inArms.ammoLeft >= state.inArms.clipSize) {
      state.inArms.ammoLeft = state.inArms.ammoLeft - state.inArms.clipSize
      state.inArms.ammoInClip = state.inArms.clipSize
    } else{
      state.inArms.ammoInClip = state.inArms.ammoLeft
      state.inArms.ammoLeft = 0
    }
  },
  DROP_WEAPON: state => {
    state.inArms = null;
    state.ammoLeft = null;
  },
}

const actions = {
  SET_AMMO: ({ commit }, weapon) => {
    weapon ? commit('TAKE_WEAPON', weapon) : commit('DROP_WEAPON')
    weapon.ammoLeft ? commit('SET_AMMO_LEFT') : false
  },
  MAKE_SHOT: ({ commit, state }) => {
    if (state.inArms.ammoLeft || state.inArms.ammoInClip) {
      if (state.inArms.ammoInClip) {
        commit('SET_AMMO_CLIP_LEFT')
      }else{
        commit('CHARGE_CLIP')
      }
    }
  },
}

export default {
  state,
  mutations,
  getters,
  actions,
  namespaced: true
}