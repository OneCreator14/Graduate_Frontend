<template>

    <div class="wrapper">
        <h3 class="block">Создание заявления</h3>
        <div class="back">
            <h2 style="text-align: center; margin-bottom: 60px">
                Создание заявления о предоставлении государственной услуги "Присвоение спортивных разрядов «кандидат в мастера спорта» и «первый спортивный разряд»"
            </h2>
            <h3 style="margin-top: 0; margin-left: 30px">Список необходимых документов:</h3>

            <div v-for="(doc, index) in docs" :key="doc.name" class="listElem">
                <div class="info">
                    {{ doc.name }}
                </div>

                <div class="upload" :id="'fileBack' + index">
                    <div class="pi pi-file" :id="'fileicon' + index"
                        style="font-size: 1.1rem; display: none; color: gray;" />
                    <div class="filename" :id="'filename' + index" style="display: none;">
                        <span>{{ doc.filename }}</span>
                    </div>
                    <button class="uploadBtn" :id="'fileBtn' + index" @click="FindFile(index)">
                        <div class="pi pi-cloud-download" style="font-size: 1.8rem; color: var(--primary-default);" />
                    </button>
                </div>
            </div>

            <button id="back" class="btn" @click="back()">
                <div class="pi pi-arrow-left"></div>
                <u>Назад </u>
            </button>

            <button id="complete" class="btn" @click="complete()">
                <u>
                    Отметить документы
                    как проверенные
                </u>
            </button>

            <button id="next" class="btn" @click="next()">
                <u>
                    Отметить и перейти к формированию
                    проекта решения
                </u>
                <div class="pi pi-arrow-right"></div>
            </button>

        </div>
    </div>
</template>

<script setup>
import BaseButton from "@/components/button/BaseButton.vue"
import { ref } from "vue";

const disabled = ref(false);

function back(){
    window.location.replace("http://localhost:5173/Committee/requests");
}

function complete(){
    // занести изменения стадии в базу данных
    window.location.replace("http://localhost:5173/Committee/requests");
}

function next(){
    // занести изменения в базу данных
    window.location.replace("http://localhost:5173/Committee/decision");
}

const docs = [
        { name: "Представление на присвоение спортивного разряда", isAdded: true, isLoaded: false, id: 0},
        { name: "Копия протокола, отражающего выполнение спортивных норм", isLoaded: false, id: 1},
        { name: "Копия справки о составе и квалификации судейской коллегии", isLoaded: false, id: 2},
        { name: "Фотография кандидата на присвоение спортивного разряда", isLoaded: false, id: 3},
        { name: "Копия документа, удостоверяющего принадлежность спортсмена к федерации спорта", isLoaded: false, id: 4},
        { name: "Копия положения о физкультурном мероприятии, на котором спортсмен выполнил нормы", isLoaded: false, id: 5},
        { name: "Копия документа, подписанного главным судьей, содержащего сведения о количестве стран или субъектов РФ, принявших участие в соответствующем соревновани", isLoaded: false, id: 6},
        ]

function FindFile(index) {
    
}

async function sendToTable($event) {
    let response = await fetch('http://localhost:5000/api/test', {
        method: 'post',
        body: JSON.stringify("123"),
    });

    let result = await response.json();

    alert(result.message);
};

</script>

<style lang="scss" scoped>
.listElem {
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 10fr 2fr 2fr;
    width: 900px;
    margin-bottom: 15px;
    margin-left: 50px;
}

.wrapper {
    background: var(--background-secondary);
    padding: 30px;
    display: block;
    margin-left: 100px;
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
    width: 1010px;
    border-radius: 7px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
    padding: 40px;
}

.info {
    display: grid;
    align-items: center;
    grid-column: 1;
    border: solid black 1px;
    border-radius: 8px;
    padding: 20px;

    font-size: 18px;
}

.filename {
    align-items: center;
    justify-self: end;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 80px;
}

.upload {
    transition: background-color 0.5s;
    padding: 20px;
}

.uploadBtn {
    grid-column: 2;
    height: 40px;
    width: 40px;
    cursor: pointer;

    background: none;
    border: none;

}

.createBtn {
    grid-column: 3;
    margin-top: 15px;
    height: 60px;
    width: 100px;
}

.createPanel {
    margin-left: 15px;
}

#send {
    margin-top: 15px;
    margin-left: 770px;
}

.hiddenInput {
    position: absolute;
    overflow: hidden;
    display: block;
    height: 0px;
    width: 0px;
}

.btn {
    color: black;
    max-width: 300px;
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
    line-height: 1.5;
    overflow-wrap: break-word;
    margin-top: 30px;
    background: none;
}

#back {
    font-size: 20px;
    padding: 13px 10px;
    color: var(--red-default);

    margin-left: 10px;
}

#complete {
    max-width: 200px;
    padding: 4px;
    color: var(--primary-default);

    margin-left: 150px;
}

#next {
    padding: 5px;
    color: var(--green-default);

    margin-left: 150px;
}
</style>