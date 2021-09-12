export const state = {
  encounter: [],
};

const getters = {
  encounter: (state) => {
    return state.encounter;
  },
};

const actions = {
  addMonsterToEncounter({ state, commit }, monster) {
    let newMonster = { ...monster };
    if (state.encounter.length > 0) {
      const selectedMonster = state.encounter.find(
        (item) => item.name === newMonster.name
      );
      if (!selectedMonster) {
        newMonster.quantity = 1;
        commit("addMonster", newMonster);
      } else {
        commit("incrementMonsterCount", selectedMonster);
      }
    } else {
      commit("addMonster", newMonster);
      newMonster.quantity = 1;
    }
  },
};

const mutations = {
  addMonster(state, monster) {
    state.encounter.push(monster);
  },
  incrementMonsterCount(state, { name }) {
    const selectedMonster = state.encounter.find((item) => (item.name = name));
    selectedMonster.quantity++;
  },
  decrementMonsterCount(state, { name }) {
    const selectedMonster = state.encounter.find((item) => (item.name = name));
    selectedMonster.quantity--;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
