<template>
  <div>
    <div class="card">
      <DataTable
        class="p-datatable-sm"
        :value="monsters"
        responsiveLayout="stack"
        breakpoint="960px"
        :paginator="true"
        :rows="10"
        stripedRows=""
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 20, 50]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        v-model:filters="filters"
        filterDisplay="row"
        dataKey="id"
        :globalFilterFields="['name']"
      >
        <template #header>
          <div
            class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between"
          >
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                placeholder="Search..."
                v-model="filters['global'].value"
              />
            </span>
          </div>
        </template>
        <Column :exportable="false">
          <template #body="slotProps">
            <Button
              icon="pi pi-plus"
              class="p-button-rounded p-button-success p-mr-2"
              @click="addMonster(slotProps.data)"
            />
          </template>
        </Column>
        <Column field="name" header="Name" style="min-width:12rem">
          <template #body="{data}">
            {{ data.name }}
          </template>
          <template #filter="{filterModel}">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Search by name"
            />
          </template>
        </Column>
        <Column field="level" header="Level" :sortable="true"></Column>
        <Column field="class" header="Class" :sortable="true"></Column>
        <Column field="type" header="Type" :sortable="true"></Column>
        <Column field="page" header="Page"></Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Monsters from "../service/service";
import { FilterMatchMode } from "primevue/api";
import { useStore } from "vuex";

export default {
  name: "MonsterTable",
  setup() {
    const store = useStore();
    onMounted(() => {
      Monsters.getAll()
        .get()
        .then((snapshot) => {
          let monsterArr = [];
          snapshot.forEach((doc) => {
            let monster = doc.data();
            monsterArr.push(monster);
          });
          monsters.value = monsterArr;
        });
    });
    const addMonster = (monster) => {
      store.dispatch(`encounter/addMonsterToEncounter`, monster);
    };
    const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    });
    const monsters = ref();
    return { monsters, filters, addMonster };
  },
};
</script>
