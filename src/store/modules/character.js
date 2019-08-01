const state = {
  cash: {
    amount: 13582,
    currency: '$'
  },
  timeInGame: Date.now()
}

const getters = {
  cash: state => {
    return state.cash;
  },
  timeInGame: state => {
    return state.timeInGame;
  },
}

const mutations = {
  SET_CASH: (state, value) => {
    state.cash.amount = value;
  },
  UPDATE_TIME_IN_GAME: (state) => {
    state.timeInGame = new Date;
  },
}

const actions = {
  START_TIME_IN_GAME: ({ commit }) => {
    setInterval(() => {
      commit('UPDATE_TIME_IN_GAME')
    }, 1000)
  },
}

export default {
  state,
  mutations,
  getters,
  actions,
  namespaced: true
}