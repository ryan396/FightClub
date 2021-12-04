export const state = {
  myEncounterList: []
}

const getters = {
  getMyEncounterList: state => {
    return state.myEncounterList
  }
}

const actions = {
  addEncounterToList({ commit }, encounter) {
    commit('saveEncounter', encounter)
  }
}

const mutations = {
  saveEncounter(state, encounter) {
    let newCounter = { ...encounter }
    state.myEncounterList.push(newCounter)
  }
  // removeEncounter(state, encounter) {}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
