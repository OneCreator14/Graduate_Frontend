<template>

    <div class="wrapper">
        <h3 class="block">Создание документа</h3>
        <div class="back">
            <h2 style="text-align: center; margin-bottom: 60px">
                Создание представления о присвоении спортивного разряда
            </h2>
            <h3 style="margin-top: 0;">Поля для заполнения:</h3>

            <div v-for="(doc, index) in docs" :key="doc.name" class="list">
                <div class="info">
                    {{ doc.name }}
                </div>

                <InputText v-if="!doc.isDate && !doc.isTextArea" class="input" v-model="doc.value"></InputText>
                <div class="input" v-if="doc.isDate" style="margin-top: 0">
                    <Calendar :id="index" v-model="date" dateFormat="dd.mm.yy" placeholder="__.__.____"
                        style="border: 1px solid var(--primary-default); border-radius: 7px;">
                    </Calendar>
                </div>
                <Textarea v-if="doc.isTextArea" v-model="value" variant="filled" rows="5" cols="30" class="input" />

            </div>

            <BaseButton id="send" @click="send()"
                style="margin-top: 40px; margin-left: 672px;">
                Готово
            </BaseButton>


        </div>
    </div>
</template>

<script setup>
import BaseButton from "@/components/button/BaseButton.vue"
import BaseInput from "@/components/input/BaseInput.vue"
import { ref } from "vue";

const disabled = ref(false);

const date = ref();

const docs = [
    { name: "Наименование спортивной организации, направляющей представление", id: 1, value: 'Региональная спортивная федерация спортивного ориентирования Ленинградской области' },
    { name: "ИНН", id: 2, value: '4703110935' },
    { name: "ОГРН", id: 3, value: '1094700000097' },
    { name: "Номер телефона", id: 4, value: '+79217435286' },
    { name: "Электронная почта", id: 5, value: 'orienteering.lo@yandex.ru' },
    { name: "ФИО спортсмена", id: 6, value: "" },
    { name: "Дата рождения", id: 7, isDate: true, value: "" },
    { name: "Данные документа, удостоверяющего личность спортсмена", id: 8, value: "" },
    { name: "Сведения об организации, осуществляющей деятельность в области физической культуры и спорта", id: 9, value: "Региональная спортивная федерация спортивного ориентирования Ленинградской области" },
    { name: "Статус соревнований", id: 10, value: "" },
    { name: "Вид спорта", id: 11, value: "Спортивное ориентирование" },
    { name: "Наименование соревнований", id: 12, value: "" },
    { name: "Результат спортсмена", id: 13, value: "" },
]



function send() {

    // //console.log(docs[5])
    // fetch("http://5.35.95.153:5000/createrequest", {
    //     mode: 'no-cors',
    //     method: "POST",
    //     body: JSON.stringify({
    //         federation: "123",
    //         full_name: "456",
    //         birth_date: "456",
    //         person_document: "456",
    //         category: "456",
    //         competition_status: "456",
    //         sport: "456",
    //         competition_name: "456",
    //         result: "456"
    //     }),
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //     }
    // });

    // setTimeout(() => {  console.log("World!"); }, 3000);

    console.log(window.location.href);

    fetch('http://5.35.95.153:5000/downloadrequest', {
        mode: 'no-cors',
        method: 'GET',
    })
        .then((response) => {
            console.log(response.ok);
            console.log(response.status);
            console.log(response.statusText);
        })


    window.location.href = window.location.href + 'http://localhost:5173/Federation/Accreditation';
}
</script>

<style lang="scss" scoped>
.list {
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 1fr 1fr;
}

.wrapper {
    background: var(--background-secondary);
    padding: 30px;
    margin-left: 15%;
    margin-right: 25%;
    align-self: center;
}

.block {
    position: relative;
    z-index: 2;
    background: var(--background-primary);
    line-height: 30px;
    margin: 0;
    width: fit-content;
    border-radius: 7px 7px 0 0;
    box-shadow: 0px -5px 5px 1px rgba(0, 0, 0, 0.1);
    background: var(--background-primary);
    padding: 20px;
}

.back {
    z-index: 1;
    background: var(--background-primary);
    margin-top: -5px;
    width: 900px;
    border-radius: 7px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
    padding: 40px;
    padding-left: 60px;
}

.info {
    display: grid;
    align-items: center;
    grid-column: 1;
    max-width: 700px;
}

.input {
    display: grid;
    align-items: center;
    grid-column: 2;
    min-height: 40px;
    justify-self: end;
    width: 300px;
    max-width: 300px;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-right: 30px;
}
</style>