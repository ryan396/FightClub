export const state = {
  encounter: [],
};

const getters = {
  getEncounter: (state) => {
    return state.encounter;
  },
};

const actions = {
  addMonsterToEncounter({ state, commit }, monster) {
    const selectedMonster = state.encounter.find(
      (item) => item.name === monster.name
    );
    console.log(selectedMonster);
    if (!selectedMonster) {
      commit("addMonster", monster);
    } else {
      commit("incrementMonsterCount", selectedMonster);
    }
  },
};

const mutations = {
  addMonster(state, monster) {
    monster.quantity = 1;
    state.encounter.push(monster);
  },
  incrementMonsterCount(state, { name }) {
    const selectedMonster = state.encounter.find((item) => item.name === name);
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
