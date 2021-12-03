<template>
  <div id="panel" v-for="(item, index) in encounter" v-bind:key="index">
    <Panel :header="item.name">
      <template #icons>
        <button
          class="p-panel-header-icon p-link p-mr-2"
          @click="removeMonster(item.name)"
        >
          <span class="pi pi-trash"></span>
        </button>
      </template>
      <div class="grid">
        <div class="col-12 sm:col-8 md:col-9 lg:col-10 xl:col-8">
          <p>Counts As: {{ item.countsAs }}</p>
          <p>Source: {{ item.page }}</p>
        </div>
        <div class="col-12 sm:col-1">
          <InputNumber
            id="qty-input"
            v-model="item.quantity"
            showButtons
            buttonLayout="horizontal"
            :step="1"
            @input="event => updateMonsterCount(event, item)"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
          />
        </div>
      </div>
    </Panel>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const updateMonsterCount = (event, item) => {
      let values = {
        name: item.name,
        count: event.value
      }
      store.dispatch(`encounter/updateMonsterCount`, values)
    }

    const removeMonster = name => {
      store.dispatch(`encounter/removeMonster`, name)
    }

    const encounter = computed(
      () => store.getters[`encounter/getEncounter`].encounter
    )

    return { encounter, updateMonsterCount, removeMonster }
  }
}
</script>

<style scope>
.p-panel p {
  line-height: 1.5;
  margin: 0;
}

#qty-input {
  width: 40px;
}
.button {
  margin: 1px;
}
</style>
