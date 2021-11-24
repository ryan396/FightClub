export const state = {
  myEncounters: []
}

const getters = {
  getMyEncounters: state => {
    return state.myEncounters
  }
}

const actions = {
  addEncounterToList({ commit }, encounter) {
    commit('addEncounter', encounter)
  }
}

const mutations = {
  addEncounter(state, encounter) {
    state.myEncounters.push(encounter)
  },
  removeEncounter(state, encounter) {}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
