<template>
  <div class="grid">
    <div class="col-12 md:col-12 lg:col-4">
      <Card>
        <template #content>
          <label for="grouplevel">Level</label>
          <InputNumber
            id="grouplevel"
            v-model="grouplevel"
            showButtons
            min="1"
            max="9"
          />
          <label id="playerCountLabel" for="playerCount">Players</label>
          <InputNumber
            id="playerCount"
            v-model="playerCount"
            showButtons
            min="1"
          />
          <Divider />
          Challenge Rating: 222
          <Divider />
          <Button style="marginRight: 10px">Save</Button>
          <Button style="marginLeft: 10px">Export</Button>
          <Divider />
          <Encounter />
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
    const playerCount = ref(1)
    return { grouplevel, playerCount }
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
#playerCountLabel {
  margin-left: 10px;
}
#playerCount {
  width: 50px;
  margin-left: 10px;
}
</style>
