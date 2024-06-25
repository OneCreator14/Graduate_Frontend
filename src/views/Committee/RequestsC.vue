<template>
  <div class="wrapper">
    <h2>Список заявок</h2>

    <div class="container">
      <IconField iconPosition="left" id="search">
        <InputIcon id="icon" class="pi pi-search"></InputIcon>
        <InputText id="text" placeholder="Поиск" />
      </IconField>
    </div>

    <div class="table">
      <div class="tittle">
        <div>№</div>
        <div>Текущая стадия услуги</div>
        <div>Оставшееся время</div>
      </div>



      <div class="tableElem" v-for="request in requests" v-bind:key="request.id">
        <div class="header">

          <div class="grid_item">{{ request.id }}</div>
          <div class="grid_item">{{ request.stage }}</div>
          <div class="grid_item">{{ request.deadline }}</div>

        </div>

        <div class="body">
          <div>Услуга: </div>
          <div>{{ request.service }}</div>
          <div>Дата составления заявления: </div>
          <div>{{ request.startDate }}</div>
          <div>Заявитель: </div>
          <div>{{ request.applicant }}</div>
          <div>Необходимо рассмотреть до: </div>
          <div>{{ request.endDate }}</div>
        </div>

        <div class="footer">
          <BaseButton size="small" :outlined="true" @click="DoRequest(request)">
            <span>Перейти</span>
            <InputIcon class="pi pi-angle-right arrow inl_block" />
          </BaseButton>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from "vue";
import router from "@/router";
import BaseButton from "@/components/button/BaseButton.vue"

var requests = [
  { id: 1, stage: "Ожидает подписания председателем", deadline: "12 дней", service: "Государственная аккредитация спортивной федерации", startDate: "21.04.2024", applicant: "Федерация спортивного ориентирования", endDate: "21.07.2024" },
  { id: 2, stage: "Проверка документов", deadline: "91 день", service: "Присвоение спортивного разряда", startDate: "25.06.2024", applicant: "Федерация спортивного ориентирования", endDate: "25.09.2024" },
]

const goRequest = () => {
  router.push('/reaqest');
}



const isVisible = ref(false);
const selectedProduct = ref(false);
const products = [
  { name: "Аккредитация федерации", id: 1 },
  { name: "Присвоение категории тренеру", id: 2 },
  { name: "Присвоение спортивного разряда", id: 3 },
  { name: "Присвоение судейской категории", id: 4 },
]

function DoRequest(request){
  window.location.replace("http://5.35.95.153:5173/Committee/Sportsman");
}
</script>

<style lang="scss" scoped>
$grid-border: 1px solid var(--primary-light-gray);

.table {
    background-color: var(--header-gray);
    width: 1000px;

}

.tittle{
    display: grid;
    grid-template-columns: 1fr 15fr 400px;
    text-align: center;
    background-color: var(--header-gray);
    border: #{$grid-border};
    margin-bottom: 10px;
}

.tittle > div{
    padding: 20px 0px;
    border-right: #{$grid-border};
    font-weight: 500;
    font-size: 20px;

    &:first-child{
        font-size: 18px;
        padding-left: 2px;
        padding-top: 21px;
    }
}

.tableElem {
    width: 1000px;
    height: 200px;
    background-color: white;
    border: #{$grid-border};
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
    margin-bottom: 20px;
}

.header {
    display: grid;
    grid-template-columns: 1fr 15fr 400px;
}

.grid_item {
    text-align: center;
    padding: 10px;
    background-color: white;
    height: 100%;
    width: 100%;
    border-right: #{$grid-border};
    border-bottom: #{$grid-border};

    &:last-child {
        border-right: none;
    }
}

.body {
    display: grid;
    grid-template-columns: 90px auto 230px 150px;
    background-color: white;
    padding: 15px;

    div {
        padding: 10px;
    }
}

.footer {
    float: right;
    padding-right: 20px;
}

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