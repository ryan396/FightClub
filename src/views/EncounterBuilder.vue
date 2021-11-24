<template>
  <div class="grid">
    <div class="col-12 md:col-12 lg:col-4">
      <Card>
        <template #content>
          <Fieldset legend="Encounter">
            <label for="grouplevel">Group Level</label>
            <InputNumber id="grouplevel" v-model="grouplevel" showButtons />
            <Divider />
            Challenge Rating: 222
            <Divider />
            <Button>Save</Button>
            <Button>Export</Button>
            <Divider />
            <Encounter />
          </Fieldset>
        </template>
      </Card>
    </div>
    <div class="col-12 md:col-12 lg:col-8">
      <div>
        <Card>
          <template #content> <MonsterTable /> </template
        ></Card>
      </div>
    </div>
  </div>
</template>

<script>
import MonsterTable from '../components/MonsterTable.vue'
import Encounter from '../components/Encounter.vue'
import { ref } from 'vue'

export default {
  setup() {
    const grouplevel = ref(1)
    return { grouplevel }
  },
  name: 'App',
  components: {
    MonsterTable,
    Encounter
  }
}
</script>

<style scope>
#grouplevel {
  width: 50px;
  margin-left: 10px;
}
</style>
