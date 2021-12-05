<template>
  <Toast position="top-center" />
  <div id="content">
    <div class="grid">
      <div class="col-12 md:col-12 xl:col-4">
        <Card>
          <template #content>
            <label for="grouplevel">Lvl</label>
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
            Challenge Rating: {{ challengeRating }}
            <Divider />
            <Button style="marginRight: 10px" @click="saveEncounter"
              >Save</Button
            >
            <Divider />
            <Encounter />
          </template>
        </Card>
      </div>
      <div class="col-12 sm:col-12 md:col-12 lg:col-12 xl:col-8">
        <div>
          <Card>
            <template #content> <MonsterTable /> </template
          ></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MonsterTable from '../components/MonsterTable.vue'
import Encounter from '../components/Encounter.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
import { useToast } from 'primevue/usetoast'

export default {
  setup() {
    const grouplevel = ref(1)
    const playerCount = ref(1)
    const store = useStore()
    const toast = useToast()

    const saveEncounter = () => {
      const encounter = store.getters[`encounter/getEncounter`]
      if (encounter.encounter.length > 0) {
        store.dispatch(`myEncounters/addEncounterToList`, encounter)
        toast.add({
          severity: 'success',
          summary: 'Success!',
          detail: 'Encounter saved',
          life: 3000
        })
        store.dispatch(`encounter/resetState`)
      } else {
        toast.add({
          severity: 'error',
          summary: 'Error!',
          detail: 'Please add something to the encounter',
          life: 3000
        })
      }
    }

    const challengeRating = computed(
      () => store.getters[`encounter/getChallengeRating`]
    )

    return { grouplevel, playerCount, saveEncounter, challengeRating }
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
#content {
  margin: 10px;
}
#playerCountLabel {
  margin-left: 10px;
}
#playerCount {
  width: 50px;
  margin-left: 10px;
}
</style>
