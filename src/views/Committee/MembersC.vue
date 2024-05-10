<template>
  <div class="wrapper">
    <h2>Список сотрудников Комитета</h2>

    <div class="container">
      <IconField iconPosition="left" id="search">
        <InputIcon id="icon" class="pi pi-search"/>
        <InputText id="text" placeholder="Поиск"/>
      </IconField>

      <!-- <Dropdown v-model="selectedProduct" :options="products" optionLabel="name" placeholder="Выберите..." id="Dropdown" /> -->
    </div>


    <DataTable class="DataTable" :value="array" tableStyle="min-width: 50rem">
      <Column field="product" header="ФИО"></Column>
      <Column field="dateStart" header="Должность"></Column>
      <Column field="email" header="Почта"></Column>

      <Column :exportable="false" style="width: 10rem">
        <template #body="">
          <Button icon="pi pi-pencil" outlined rounded class="mr-2" />
          <Button icon="pi pi-trash" outlined rounded severity="danger" />
        </template>
      </Column>
    </DataTable>
  </div>

</template>

<script setup>
import BaseButton from "@/components/button/BaseButton.vue"

import { ref } from "vue";
import router from "@/router";

var array = [
  {
    product: "Власова Ольга Владимировна",
    dateStart: "Начальник отдела",
    email: "an_gaidukov@lenreg.ru"
  },
  {
    product: "Гайдуков Андрей Николаевич",
    dateStart: "Главный специалист",
    email: "sv_bezrukov@lenreg.ru"
  },
  {
    product: "Безруков Сергей Валериевич",
    dateStart: "Главный специалист",
    email: "yaa_pospelova@lenreg.ru"
  },
  {
    product: "Поспелова Яна Андреевна",
    dateStart: "Главный специалист",
    email: "ne_konyshev@lenreg.ru"
  },
  {
    product: "Михайлова Екатерина Викторовна",
    dateStart: "Специалист",
    email: "ev_mikhailova@lenreg.ru"
  }];


const selectedProduct = ref(false);
const products = [
  { name: "Президиум", id: 1 },
  { name: "Тренеры", id: 2 },
  { name: "Спортсмены", id: 3 },
  { name: "Судьи", id: 4 },
  { name: "Сборная команда", id: 5 },
]

</script>

<style lang="scss" scoped>
.wrapper {
  margin: 60px;
}

#add {
  margin-left: auto;
  margin-right: 0;
}

#search {
  align-items: start;
}


.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  vertical-align: middle;
  margin: 20px 0 10px 0;
}

.DataTable {
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
}

Button {
  margin: 5px;
}




#Dropdown {
  width: 300px;
  justify-self: end;
}
</style>