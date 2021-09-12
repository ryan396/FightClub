<template>
  <div id="nav">
    <Menubar :model="items">
      <template #start>
        <img
          alt="logo"
          src="http://site.pelgranepress.com/files/13th_Age/13thagecompatible.png"
          height="65"
        />
      </template>
    </Menubar>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Navbar",
  setup() {
    const items = ref([
      {
        label: "Encounter Builder",
        icon: "pi pi-fw pi-file",
      },
      {
        label: "My Encounters",
        icon: "pi pi-fw pi-pencil",
      },
    ]);

    return { items };
  },
};
</script>

<style scoped>
#nav {
  margin-bottom: 20px;
}
</style>
