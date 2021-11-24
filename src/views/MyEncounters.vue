<template>
  <div>{{ encounterList }}</div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const encounterList = computed(
      () => store.getters[`myEncounters/getMyEncounterList`]
    )
    return { encounterList }
  },
  name: 'MyEncounters'
}
</script>
