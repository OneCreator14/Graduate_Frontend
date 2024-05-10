<template>
  <div class="wrapper">
    <h2>Список заявок</h2>

    <div class="container">
      <IconField iconPosition="left" id="search">
        <InputIcon id="icon" class="pi pi-search"></InputIcon>
        <InputText id="text" placeholder="Поиск" />
      </IconField>
    </div>


    <TableElem :requests="requests">
      <template v-slot:button>
        <BaseButton size="small" :outlined="true">
          <span>Перейти</span>
          <InputIcon class="pi pi-angle-right arrow inl_block" />
        </BaseButton>
      </template>
    </TableElem>




    <!-- <DataTable class="DataTable" :value="array" tableStyle="min-width: 50rem">
            <Column field="author" header="Заявитель"></Column>
            <Column field="product" header="Услуга"></Column>
            <Column field="dateStart" header="Дата начала"></Column>
            <Column field="dateEnd" header="Дата окончания"></Column>
            <Column field="status" header="Статус"></Column>

            <Column :exportable="false"  style="width: 10rem">
                    <template #body="">
                        <Button icon="pi pi-angle-right" @click="goRequest" outlined rounded class="mr-2" />
                    </template>
            </Column>
        </DataTable> -->
  </div>

</template>

<script setup>
import { ref } from "vue";
import router from "@/router";
import TableElem from "@/components/table/TableElem.vue"
import BaseButton from "@/components/button/BaseButton.vue"

var requests = [
  { id: 1, stage: "Рассмотрение документов", deadline: "12 дней", service: "Государственная аккредитация спортивной федерации", startDate: "21.04.2024", applicant: "Федерация спортивного ориентирования", endDate: "21.07.2024" },
  { id: 2, stage: "Созыв комиссии", deadline: "61 день", service: "Присвоение судейской категории", startDate: "02.02.2024", applicant: "Федерация биатлона", endDate: "02.05.2024" },
  { id: 3, stage: "Созыв комиссии", deadline: "61 день", service: "Присвоение судейской категории", startDate: "02.02.2024", applicant: "Федерация биатлона", endDate: "02.05.2024" },
  { id: 3, stage: "Созыв комиссии", deadline: "61 день", service: "Присвоение судейской категории", startDate: "02.02.2024", applicant: "Федерация биатлона", endDate: "02.05.2024" },
]

const goRequest = () => {
  router.push('/reaqest');
}

var array = [
  {
    author: "Федерация спортивного ориентирования",
    product: "Государственная аккредитация региональных спортивных федераций Ленинградской области",
    dateStart: "11.02.2023",
    dateEnd: "02.05.2023",
    status: "Проверка документов"
  },
  {
    author: "Федерация бокса",
    product: "Присвоение спортивного разряда",
    dateStart: "11.02.2022",
    dateEnd: "11.03.2022",
    status: "Обработано"
  },
  {
    author: "Федерация биатлона",
    product: "Присвоение судейской категории",
    dateStart: "24.02.2023",
    dateEnd: "10.04.2023",
    status: "Принятие решения"
  }];




const isVisible = ref(false);
const selectedProduct = ref(false);
const products = [
  { name: "Аккредитация федерации", id: 1 },
  { name: "Присвоение категории тренеру", id: 2 },
  { name: "Присвоение спортивного разряда", id: 3 },
  { name: "Присвоение судейской категории", id: 4 },
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

.inl_block {
  display: inline-block;
  vertical-align: middle;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  vertical-align: middle;
  margin: 20px 0 10px 220px;
}

.DataTable {
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
}


.container {
  vertical-align: middle;
  margin: 20px 0 20px 0;
}

#Dropdown {
  width: 100%;
}
</style>