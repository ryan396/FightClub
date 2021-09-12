<template>
  <div class="grid">
    <div class="col-12 md:col-12 lg:col-4">
      <Fieldset legend="Encounter">
        Group Info
        <Divider />
        <Button>Save</Button>
        <Button>Export</Button>
        <Divider />
        <Encounter />
      </Fieldset>
    </div>
    <div class="col-12 md:col-12 lg:col-8"><MonsterTable /></div>
  </div>
</template>

<script>
import MonsterTable from "../components/MonsterTable.vue";
import Encounter from "../components/Encounter.vue";

export default {
  name: "App",
  components: {
    MonsterTable,
    Encounter,
  },
};
</script>
