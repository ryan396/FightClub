<template>
  <div id="panel" v-for="(item, index) in encounter" v-bind:key="index">
    <Panel :header="item.name">
      <template #icons>
        <button class="p-panel-header-icon p-link p-mr-2" @click="toggle">
          <span class="pi pi-trash"></span>
        </button>
      </template>
      <div class="grid">
        <div class="col-11">
          <p>Counts As: {{ item.countsAs }}</p>
          <p>Source: {{ item.page }}</p>
        </div>
        <div class="col-1">
          {{ item.quantity }}
        </div>
      </div>
    </Panel>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const encounter = computed(() => store.getters[`encounter/getEncounter`]);
    return { encounter };
  },
};
</script>

<style scope>
.p-panel p {
  line-height: 1.5;
  margin: 0;
}

#qty-input {
  width: 20px;
}
.button {
  margin: 1px;
}
</style>
