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
                    <Textarea v-if="doc.isTextArea" v-model="value" variant="filled" rows="5" cols="30" class="input" />
                </div>
                <Textarea v-if="doc.isTextArea" v-model="doc.value" variant="filled" rows="5" cols="30" class="input" />

            </div>

            <BaseButton id="send" @click="send()" style="margin-top: 40px; margin-left: 672px;">
                Сохранить
            </BaseButton>
            <!-- <Dropdown @change="Sportsman()" v-model="selectedCity" editable :options="cities" optionLabel="name" placeholder="Выберите спортсмена..." class="w-full md:w-14rem" /> -->

            <button @click="test()"></button>

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
    { name: "Номер документа", id: 1, value: '' },
    { name: "Спортивный разряд", id: 2, value: "" },
    { name: "Председатель Комитета", id: 3, value: "Е.Н. Пономарев" },
    { name: "ФИО спортсмена", id: 4, value: "" },
    { name: "Вид спорта", id: 5, value: "" },
    { name: "Муниципальный район", id: 6, value: "" }
]

const selectedCity = ref();
const cities = ref([
    { name: 'Шубина Макара Алексеевна'},
    { name: 'Русских Владимир Павлович'},
    { name: 'Гердт Вадим Андреевич'},
    { name: 'Иванов Константин Андреевич' },
    { name: 'Королева Екатерина Михайловна' }
]);


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
        let user = {
            name: "John",
            age: 30,
        }
        const json = JSON.parse(e.currentTarget.response);

        console.log("ПЫТАЕМСЯ: " + json.full_name1);
    }
};

xhr.onerror = function () {
    alert("Запрос не удался");
};




function send() {
    SendReq("createdecision");
    GetFile("Decision.docx", "downloaddecision");
}


function SendReq(adress) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://5.35.95.153:5000/' + adress, true);  //5.35.95.153
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => {
        const data = xhr.responseText
        console.log(data)
    }

    // когда придёт ответ на наше обращение к серверу, мы его обработаем здесь
    xhr.onreadystatechange = function () {
        // если запрос принят и сервер ответил, что всё в порядке
        if (xhr.readyState === 4 && xhr.status === 200) {
            // выводим то, что ответил нам сервер — так мы убедимся, что данные он получил правильно
            result.innerHTML = this.responseText;
        }
    };
    xhr.onerror = function () {
        alert("Запрос не удался");
    };
    const finalDate = String(date.value); 
    finalDate.substring(0, 10);
    var data = JSON.stringify(
        {
            date: "25.06.2024",
            number: docs[0].value,
            category: docs[1].value,

            name: docs[3].value,
            sport: docs[4].value,
            district: docs[5].value,
        }
    );
    console.log(date);
    xhr.send(data);
}

function GetFile(filename, adress) {
    let xhr = new XMLHttpRequest(); // у конструктора нет аргументов
    xhr.open('GET', 'http://5.35.95.153:5000/' + adress);
    xhr.responseType = 'blob';
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send();

    // 4. Этот код сработает после того, как мы получим ответ сервера
    xhr.onload = function (e) {
        if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
        }
        else {
            var blob = e.currentTarget.response;
            saveBlob(blob, filename);
        }
    };

    function saveBlob(blob, fileName) {
        var a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = fileName;
        a.dispatchEvent(new MouseEvent('click'));

        window.location.replace("http://.35.95.153:5173/Committee/members");
    }

    xhr.onerror = function () {
        alert("Запрос не удался");
    };
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