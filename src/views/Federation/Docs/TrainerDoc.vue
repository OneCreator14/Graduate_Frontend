<template>

    <div class="wrapper">
        <h3 class="block">Создание документа</h3>
        <div class="back">
            <h2 style="text-align: center; margin-bottom: 60px">
                Создание заявления о присвоении квалификационной категории тренеру
            </h2>
            <h3 style="margin-top: 0;">Поля для заполнения:</h3>

            <div v-for="(doc, index) in docs" :key="doc.name" class="list">
                <div class="info">
                    {{ doc.name }}
                </div>

                <BaseInput v-if="!doc.isDate && !doc.isTextArea" class="input" :value="doc.value"></BaseInput>
                <div class="input" v-if="doc.isDate" style="margin-top: 0">
                    <Calendar :id="index" v-model="date" dateFormat="dd.mm.yy" placeholder="__.__.____"
                        style="border: 1px solid var(--primary-default); border-radius: 7px;">
                    </Calendar>
                </div>
                <Textarea v-if="doc.isTextArea" v-model="value" variant="filled" rows="5" cols="30" class="input" />

            </div>

            <form action="http://5.35.95.153:5173/Federation/Accreditation" style="margin-top: 40px; margin-left: 672px;">
                <BaseButton id="send">
                    Готово
                </BaseButton>
            </form>


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
    { name: "Запрашиваемая квалификационная категория", id: 0 },
    { name: "По должности", id: 1 },
    { name: "Имеющаяся квалификационная категория", id: 2 },
    { name: "Срок действия квалификационной категории", id: 3 },
    { name: "Образование", id: 4 },
    { name: "Стаж работы по специальности (лет)", id: 5 },
    { name: "Стаж работы в данном учреждении (лет)", id: 6 },
    { name: "Адрес, по которому необходимо направить решение о присвоении (неприсвоении) квалификационной категории", id: 7 },
    { name: "Телефон", id: 8 },
    { name: "Адрес электронной почты", id: 9 },
]


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
    margin-top: 30px;
    margin-right: 30px;
}

.input .p-inputtext {
    flex: 1 1 auto;
    width: 300px;
}
</style>