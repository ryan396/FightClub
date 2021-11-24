import { createStore } from 'vuex'
import encounter from './modules/encounter'
import myEncounters from './modules/my-encounters'

export default createStore({
  modules: {
    encounter,
    myEncounters
  }
})
