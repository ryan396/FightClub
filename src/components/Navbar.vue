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
      <template #item="{item}">
        <router-link
          :to="item.path"
          custom
          v-slot="{ href, navigate, isActive, isExactActive }"
          ><a
            :href="href"
            @click="navigate"
            :class="{
              'active-link': isActive,
              'active-link-exact': isExactActive,
            }"
            ><i :class="item.icon"></i>{{ item.label }}</a
          ></router-link
        >
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
        path: "/",
      },
      {
        label: "My Encounters",
        icon: "pi pi-fw pi-pencil",
        path: "/MyEncounters",
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

a {
  text-decoration: none;
  color: #2c3e50;
  padding: 10px;
}
</style>
