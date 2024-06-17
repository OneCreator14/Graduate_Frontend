<template>

    <div class="wrapper">
        <h3 class="block">Создание заявления</h3>
        <div class="back">
            <h2 style="text-align: center; margin-bottom: 60px">
                Создание заявления о предоставлении государственной услуги "Государственная услуга по присвоению
                квалификационной категории спортивного судьи «Спортивный судья первой категории»"
            </h2>
            <h3 style="margin-top: 0;">Список необходимых документов:</h3>

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
                        <div class="pi pi-cloud-upload" style="font-size: 1.5rem" />
                    </button>
                </div>



                <form action="http://localhost:5173/Federation/JudgeDoc" class="createPanel">
                    <BaseButton v-if="doc.isAdded" class="createBtn" size="small" color="green">
                        Создать
                        <div class="pi pi-wrench" style="font-size: 1.3rem" />
                    </BaseButton>
                </form>

                <form action="view/upload.php" target="rFrame" method="POST" enctype="multipart/form-data">
                    <div class="hiddenInput">
                        <input type="file" :id="'my_hidden_file' + index" name="loadfile" @change="LoadFile(index)">
                        <input type="submit" :id="'my_hidden_load' + index" style="display: none" value='Загрузить'>
                    </div>
                </form>

            </div>

            <!-- При необходимости -->

            <h3 style="margin-top: 30px;">При наличии:</h3>
            <div v-for="(doc, index) in unnecessaryDocs" :key="doc.name" class="listElem">
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
                        <div class="pi pi-cloud-upload" style="font-size: 1.5rem" />
                    </button>
                </div>

                <form action="view/upload.php" target="rFrame" method="POST" enctype="multipart/form-data">
                    <div class="hiddenInput">
                        <input type="file" :id="'my_hidden_file' + index" name="loadfile" @change="LoadFile(index)">
                        <input type="submit" :id="'my_hidden_load' + index" style="display: none" value='Загрузить'>
                    </div>
                </form>

            </div>



            <BaseButton id="send">
                Отправить
            </BaseButton>

        </div>
    </div>
</template>

<script setup>
import BaseButton from "@/components/button/BaseButton.vue"
import { ref } from "vue";

const disabled = ref(false);

const docs = [
    { name: "Представление к присвоению квалификационной категории спортивного судьи", isAdded: true, id: 0 },
    { name: "Копия карточки учета судейской деятельности спортивного судьи", id: 1 },
    { name: "Копии второй и третьей страниц паспорта", id: 2 },
]

const unnecessaryDocs = [
    { name: "Копия удостоверения «мастер спорта России международного класса», «гроссмейстер России» или «мастер спорта России»", id: 0 },
]

function FindFile(index) {
    document.getElementById('my_hidden_file' + index).click();
}

function LoadFile(index) {
    var fileInput = document.getElementById('my_hidden_file' + index);
    var filename = document.getElementById('filename' + index);
    var fileicon = document.getElementById('fileicon' + index);
    var fileBtn = document.getElementById('fileBtn' + index);
    var fileBack = document.getElementById('fileBack' + index);

    var newFilename = fileInput.files[0].name;

    filename.innerText = newFilename;
    fileicon.style.display = "inline-block";
    filename.style.display = "inline-block";
    fileBtn.style.display = "none";
    fileBack.style.backgroundColor = "#dff2ef";

    document.getElementById('my_hidden_load' + index).click();
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

    text-align: center;
    border: 2px dashed #d1b2d9;
    border-radius: 10px;
    background-color: #f2dfdf;

    transition: background-color 0.5s;
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
</style>