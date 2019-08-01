const state = {
  doorsOpen: false,
  headLightOn: true,
  fuel: {
    capacity: 120,
    level: 10
  },
  damageScore: 100,
  speed: 120

}

const getters = {
  doorsOpen: state => {
    return state.doorsOpen;
  },
  headLightOn: state => {
    return state.headLightOn;
  },
  damageScore: state => {
    return state.damageScore;
  },
  fuelCapacity: state => {
    return state.fuel.capacity;
  },
  fuelLevel: state => {
    // return state.fuel.capacity * (state.fuel.level*0.1).toFixed(2);
    return state.fuel.level
  },
  speed: state => {
    // return state.fuel.capacity * (state.fuel.level*0.1).toFixed(2);
    return state.speed
  },
}

const mutations = {
  TOGGLE_DOORS: (state, value) => {
    state.doorsOpen = value;
  },
  TOGGLE_HEADLIGHT: (state, value) => {
    state.headLightOn = value;
  },
  CAUSE_DAMAGE: (state, value) => {
    state.damageScore = 100 - value;
  },
  SET_FUEL_LEVEL: (state, value) => {
    state.fuel.level = value;
  },
  SET_SPEED: (state, value) => {
    state.speed = value;
  },
}

const actions = {

}

export default {
  state,
  mutations,
  getters,
  actions,
  namespaced: true
}