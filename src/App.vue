<template>
  <div id="app">
    <Navbar />
    <div class="grid">
      <div class="col-12 md:col-12 lg:col-4">
        <Fieldset legend="Encounter">
          Group Info
          <Divider />
          <Button>Save</Button>
          <Button>Export</Button>
          <Divider />
        </Fieldset>
      </div>
      <div class="col-12 md:col-12 lg:col-8"><MonsterTable /></div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import MonsterTable from "./components/MonsterTable.vue";

export default {
  name: "App",
  components: {
    Navbar,
    MonsterTable,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
