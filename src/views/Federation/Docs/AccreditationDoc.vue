<template>
    
    <div class="wrapper">
        <h3 class="block">Создание документа</h3>
        <div class="back">
            <h2 style="text-align: center; margin-bottom: 60px">
                Создание заявления о государственной аккредитации
            </h2>
            <h3 style="margin-top: 0;">Поля для заполнения:</h3>

            <div v-for="(doc, index) in docs" :key="doc.name" class="list">
                <div class="info">
                        {{doc.name}}
                </div>

                <BaseInput v-if="!doc.isDate && !doc.isTextArea" class="input" :value="doc.value"></BaseInput>
                    <div class="input" v-if="doc.isDate" style="margin-top: 0">  
                        <Calendar 
                            :id="index"
                            v-model="date"
                            dateFormat="dd.mm.yy" 
                            placeholder="__.__.____"
                            style="border: 1px solid var(--primary-default); border-radius: 7px;">
                        </Calendar> 
                    </div>
                <Textarea v-if="doc.isTextArea" v-model="value" variant="filled" rows="5" cols="30" class="input"/>

            </div>

            <form action="http://localhost:5173/Federation/Accreditation" style="margin-top: 40px; margin-left: 672px;">
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
        { name: "Полное наименование общественной организации, включая организационно-правовую форму, с указанием ОГРН и ИНН)", id: 1, value: 'Региональная спортивная федерация спортивного ориентирования Ленинградской области, ОГРН: 1094700000097, ИНН: 4703110935'},
        { name: "Дата документа органа по аккредитации об объявлении государственной аккредитации", id: 2, isDate: true},
        { name: "Номер документа органа по аккредитации об объявлении государственной аккредитации", id: 3, value: "1-5-84/2023"},
        { name: "Вид спорта", id: 4, value: "Спортивное ориентирование"},
        { name: "Наименование вида спорта в соответствии с ВРВС", id: 5, value: "Спортивное ориентирование"},
        { name: "Номер-код вида спорта в соответствии с ВРВС", id: 6, value: "0830011811Я"},
        { name: "Полное наименование региональной спортивной федерации, включая организационно-правовую форму", id: 7, value: "Региональная спортивная федерация спортивного ориентирования Ленинградской области"},
        { name: "Юридический адрес региональной спортивной федерации", id: 8, value: "188664, Ленинградская обл, р-н Всеволожский, ГП Токсово, ул Спортивная, 6"},
        { name: "Президент региональной спортивной федерации", id: 9, value: "Курдюмов Александр Александрович"},
        ]


</script>

<style lang="scss" scoped>
.list{
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 1fr 1fr;
}

.wrapper{
    background: var(--background-secondary);
    padding: 30px;
    margin-left: 15%;
    margin-right: 25%;
    align-self: center;
 } 
 
 .block{
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
 
 .back{
    z-index: 1;
    background: var(--background-primary);
    margin-top: -5px;
    width: 900px;
    border-radius: 7px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
    padding: 40px;
    padding-left: 60px;
 }

.info{
    display:grid;
    align-items: center;
    grid-column: 1;
    max-width: 700px;
}
.input{
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