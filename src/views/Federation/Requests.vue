<template>
    <div class="wrapper">
        <h2>Список заявок</h2>

        <div class="container">
            <IconField iconPosition="left" id="search">
            <InputIcon id="icon" class="pi pi-search"></InputIcon>
            <InputText id="text" placeholder="Поиск" />
            </IconField>

        <BaseButton
        size="small"
        color="default"
        id="add"
        @click="temp">Создать заявление</BaseButton>
        </div>
        

        <DataTable class="DataTable" :value="array" tableStyle="min-width: 50rem">
            <Column field="product" header="Услуга"></Column>
            <Column field="dateStart" header="Дата начала"></Column>
            <Column field="dateEnd" header="Дата окончания"></Column>
            <Column field="status" header="Статус"></Column>
        </DataTable>

            <!-- Всплывающее окно -->

        <div class="card flex justify-content-center">
          <Dialog v-model:visible="isVisible" modal header="Выберите услугу" :style="{ width: '25rem' }">
            <Dropdown v-model="selectedProduct" :options="products" optionLabel="name" placeholder="Выберите..." id="Dropdown" />
            <BaseButton type="button" size="middle" @click="goRequest" id="BaseButton">Ок</BaseButton>
          </Dialog>
        </div>
    </div>
</template>

<script setup>
import BaseButton from "@/components/button/BaseButton.vue"

import { ref } from "vue";
import router from "@/router";

var array = [
    {
    product : "Аккредитация спортивной федерации",
    dateStart: "11.02.2023",
    dateEnd: "02.05.2023",
    status: "Проверка документов"
    },
    {
    product : "Присвоение спортивного разряда",
    dateStart: "11.02.2022",
    dateEnd: "11.03.2022",
    status: "Обработано"
    },
    {
    product : "Присвоение судейской категории",
    dateStart: "24.02.2023",
    dateEnd: "10.04.2023",
    status: "Принятие решения"
    }]; 

    // Всплывающее окно



  const isVisible = ref(false);
  const selectedProduct = ref(false);
  const products = [
    { name: "Аккредитация федерации",         id: 1},
    { name: "Присвоение категории тренеру",   id: 2},
    { name: "Присвоение спортивного разряда", id: 3},
    { name: "Присвоение судейской категории", id: 4},
  ]

  const temp = () => {
    isVisible.value = true; 
  }

  const goRequest = () =>{
    isVisible.value = false;
    switch (selectedProduct.value.id){
      case 1:
        router.push('/Federation/Accreditation');
        break;
      case 2:
        router.push('/Federation/Trainer');
        break;
      case 3:
        router.push('/Federation/Sportsman');
        break;
      case 4:
        router.push('/Federation/Judge');
        break; 
      default:
        break;
    }

  }
</script>

<style lang="scss" scoped>
 .wrapper{
    margin: 60px;
 }

 #add{
    margin-left: auto; 
    margin-right: 0;  
 }

 #search{
    align-items: start;
 }


 .container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    vertical-align: middle;
    margin: 20px 0 10px 0;
 }
 .DataTable{
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
 }


   // Всплывающее окно

   .container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    vertical-align: middle;
    margin: 20px 0 10px 0;
 }

 #Dropdown{
  width: 100%;
 }

 #BaseButton{
  display: block;
  margin-top: 40px;
  margin-bottom: 0px;
  margin-right: 0;
  margin-left: auto;
 }
</style>