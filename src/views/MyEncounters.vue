<template>
  <div id="PrintSection">
    <div></div>
    <div id="panel" v-for="(item, index) in encounterList" v-bind:key="index">
      <DataTable :value="item.encounter" responsiveLayout="scroll">
        <Column field="name" header="Name"></Column>
        <!-- <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column> -->
      </DataTable>
    </div>
  </div>
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
