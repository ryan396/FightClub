<template>
  <DataTable
    class="p-datatable-sm"
    :value="monsterList"
    responsiveLayout="stack"
    breakpoint="960px"
    :paginator="true"
    showGridlines
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
    <Column :exportable="false" headerStyle="width: 100px">
      <template #body="slotProps">
        <Button
          icon="pi pi-plus lg"
          class="p-button-sm"
          @click="addMonster(slotProps.data)"
        />
      </template>
    </Column>
    <Column field="name" header="Name" headerStyle="width: 400px"> </Column>
    <Column
      field="level"
      header="Level"
      :sortable="true"
      headerStyle="width: 100px"
    ></Column>
    <Column field="class" header="Class" :sortable="true"></Column>
    <Column field="type" header="Type" :sortable="true"></Column>
    <Column field="countsAs" header="Counts As"></Column>
    <Column field="page" header="Page"></Column>
  </DataTable>
</template>

<script>
import { ref, onMounted } from 'vue'
import monsters from '../service/test-data'
import { FilterMatchMode } from 'primevue/api'
import { useStore } from 'vuex'

export default {
  name: 'MonsterTable',
  setup() {
    const store = useStore()

    onMounted(() => {
      // Monsters.getAll();
      // .get()
      // .then((snapshot) => {
      //   let monsterArr = [];
      //   snapshot.forEach((doc) => {
      //     let monster = doc.data();
      //     monsterArr.push(monster);
      //   });
      //   monsters.value = monsterArr;
      // });
    })
    const addMonster = monster => {
      store.dispatch(`encounter/addMonsterToEncounter`, monster)
    }
    const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
    })
    const monsterList = monsters

    return { monsterList, filters, addMonster }
  }
}
</script>

<style scope>
#card {
  height: 100%;
  font-size: 12px;
}
</style>
