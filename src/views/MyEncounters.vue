<template>
  <div id="PrintSection"><h1>hi</h1></div>
  <Button @click="print">Print</Button>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
  methods: {
    print() {
      this.$htmlToPaper('PrintSection')
    }
  },
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
