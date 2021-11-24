export const state = {
  encounter: [],
  challengeRating: 0
}

const getters = {
  getEncounter: state => {
    return state.encounter
  }
}

const actions = {
  addMonsterToEncounter({ state, commit }, monster) {
    const selectedMonster = state.encounter.find(
      item => item.name === monster.name
    )
    if (!selectedMonster) {
      commit('addMonster', monster)
    } else {
      commit('incrementMonsterCount', selectedMonster)
    }
  },
  updateMonsterCount({ commit }, values) {
    if (values.count > 0) {
      commit('updateCount', values)
    } else {
      commit('removeMonster', values.name)
    }
  },
  removeMonster({ commit }, name) {
    commit('removeMonster', name)
  }
}

const mutations = {
  addMonster(state, monster) {
    monster.quantity = 1
    state.encounter.push(monster)
  },
  removeMonster(state, name) {
    let index = state.encounter.findIndex(item => item.name == name)
    state.encounter.splice(index, 1)
  },
  updateCount(state, { name, count }) {
    const selectedMonster = state.encounter.find(item => item.name === name)
    selectedMonster.quantity = count
  },
  incrementMonsterCount(state, { name }) {
    const selectedMonster = state.encounter.find(item => item.name === name)
    selectedMonster.quantity++
  },
  decrementMonsterCount(state, { name }) {
    const selectedMonster = state.encounter.find(item => item.name === name)
    selectedMonster.quantity--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
