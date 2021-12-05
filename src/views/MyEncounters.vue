<template>
  <div id="content">
    <Button @click="print" style="marginBottom: 10px">Print</Button>
    <div id="PrintSection" class="grid container">
      <div
        id="panel"
        v-for="(item, index) in encounterList"
        v-bind:key="index"
        class="col-12 md:col-12 xl:col-6"
      >
        <DataTable
          :value="item.encounter"
          responsiveLayout="scroll"
          class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between"
          showGridlines
          stripedRows
        >
          <template #header>
            Encounter: {{ index + 1 }} CR: {{ item.challengeRating }}
          </template>
          <Column field="name" header="Name"> </Column>
          <Column field="quantity" header="Quantity"></Column>
          <Column field="level" header="Level"></Column>
          <Column field="class" header="Class"></Column>
          <Column field="type" header="Type"></Column>
          <Column field="countsAs" header="Counts As"></Column>
          <Column field="page" header="Page"></Column>
        </DataTable>
      </div>
    </div>
  </div>
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

<style scope>
#content {
  margin: 10px;
}
</style>
