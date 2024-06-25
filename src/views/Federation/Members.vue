<template>
    <div class="wrapper">
        <h2>Список участников спортивой федерации</h2>

        <div class="container">
            <IconField iconPosition="left" id="search">
                <InputIcon id="icon" class="pi pi-search"></InputIcon>
                <InputText id="text" placeholder="Поиск" />
            </IconField>

            <Dropdown v-model="selectedProduct" :options="products" optionLabel="name" placeholder="Выберите..."
                id="Dropdown" />
        </div>


        <DataTable class="DataTable" :value="array" tableStyle="min-width: 50rem">
            <Column field="product" header="ФИО"></Column>
            <Column field="dateStart" header="Должность"></Column>

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
        product: "Куприенко Денис Васильевич",
        dateStart: "президент"
    },
    {
        product: "Волков Алексей Михайлович",
        dateStart: "вице-президент"
    },
    {
        product: "Бевза Татьяна Вячеславовна",
        dateStart: "ответственный секретарь"
    },
    {
        product: "Чегаровский Михаил Витальевич",
        dateStart: "член президиума"
    },
    {
        product: "Кузнецов Роман Александрович",
        dateStart: "член президиума"
    },
    {
        product: "Белозёров Владимир Николаевич",
        dateStart: "член президиума"
    }];


const selectedProduct = ref(false);
const products = [
    { name: "Президиум", id: 1 },
    { name: "Тренеры", id: 2 },
    { name: "Спортсмены", id: 3 },
    { name: "Судьи", id: 4 },
]


let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://5.35.95.153:5000/sportsmandoc', true);  //5.35.95.153
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.send();

// 4. Этот код сработает после того, как мы получим ответ сервера
xhr.onload = function (e) {
    if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
    }
    else {
        console.log("ПЫТАЕМСЯ: " + e.currentTarget.response);
    }
};

xhr.onerror = function () {
    alert("Запрос не удался");
};

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