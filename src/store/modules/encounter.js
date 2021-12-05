const getDefaultState = () => {
  return {
    encounter: [],
    challengeRating: 0
  }
}

const state = getDefaultState()

const getters = {
  getEncounter: state => {
    state.challengeRating = 0
    state.encounter.forEach(item => {
      state.challengeRating += item.quantity * item.countsAs
    })
    state.challengeRating = (
      Math.round(state.challengeRating * 100 + Number.EPSILON) / 100
    ).toFixed(2)
    return state
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
  },
  resetState({ commit }) {
    commit('reset_state')
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
  },
  reset_state() {
    Object.assign(state, getDefaultState())
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
