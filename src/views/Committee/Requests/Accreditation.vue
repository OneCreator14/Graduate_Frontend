<template>
    
    <div class="wrapper">
        <h3 class="block">Создание заявки</h3>
        <div class="back">
            <h3 style="margin-top: 0;">Список необходимых документов:</h3>
            
            <div class="list">
                <!--  -->
                <div class="info">
                    Заявление о предоставлении государственной услуги
                </div>

                <div class="file">
                    applications_fo...
                </div>

                <BaseButton 
                    disabled
                    class="addBtn" 
                    size="small" 
                    color="green"> 
                        <div class="pi pi-plus"/> 
                </BaseButton>

                <BaseButton  
                    disabled
                    size="small" 
                    class="upldiadBtn"> 
                        <div class="pi pi-download"/> 
                </BaseButton>

                <Divider class="Divider"></Divider>
            </div>
            <!--  -->

            <div v-for="doc in docs.slice(1, 30)" :key="doc.name" class="list">
                <div class="info">
                    {{doc.name}}
                </div>

                <div class="file">
                    <!-- <p class="pi pi-file" style="display: grid;"/> -->
                    {{ doc.file }}
                </div>

                <BaseButton 
                    v-if="doc.isAdded" 
                    class="addBtn" 
                    size="small" 
                    color="green"> 
                        <div class="pi pi-plus"/> 
                </BaseButton>

                <BaseButton  
                    size="small" 
                    class="upldiadBtn"> 
                        <div class="pi pi-download"/> 
                </BaseButton>

                <Divider class="Divider"></Divider>
            </div>


        </div>
    </div>
</template>

<script setup>
    import BaseButton from "@/components/button/BaseButton.vue"
    import { ref } from "vue";

    const disabled = ref(false);

    const docs = [
        { name: "Заявление о предоставлении государственной услуги", file: "applications_fo...", isAdded: true},
        { name: "Заявление о государственной аккредитации",  isAdded: true},
        { name: "Перечень лиц, являющихся членами спортивной федерации" },
        { name: "Сведения о персональном составе руководящих органов спортивной федерации" },
        { name: "Копия учредительного документа спортивной федерации" },
        { name: "Протокол учредительного съезда о создании общественной организации" },
        { name: "Свидетельство о государственной регистрации некоммерческой организации" },
        { name: "Письменное согласование общероссийской спортивной федерации на государственную аккредитацию общественной организации" },
        { name: "Копия документа, подтверждающего членство общественной организации в общероссийской спортивной федерации" },
        { name: "Проект документа, регламентирующего порядок отбора спортсменов для включения их в состав спортивной сборной команды" },
        { name: "Проект программы развития вида спорта" },
        { name: "Справка об источниках финансирования деятельности общественной организации" },
        { name: "Копии протоколов не менее 3 спортивных соревнований, проведенных общественной организацией" }
        ]
</script>

<style lang="scss" scoped>
.list{
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 1fr 150px 50px 50px;
}
.Divider{
    width: 100%;
}

.wrapper{
    background: var(--background-secondary);
    padding: 30px;
 } 
 
 .block{
    position: relative;
    z-index: 2;
    background: var(--background-primary);
    line-height: 30px;  
    margin: 0;
    padding: 15px;
    width: fit-content;
    border-radius: 7px 7px 0 0;
    box-shadow: 0px -5px 5px 1px rgba(0, 0, 0, 0.1);
    background: var(--background-primary);
 }
 
 .back{
    z-index: 1;
    background: var(--background-primary);
    margin-top: -5px;
    width: 1200px;
    border-radius: 7px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
    padding: 40px;
 }

.info{
    display:grid;
    align-items: center;
    grid-column: 1;
    min-height: 40px;
}
.file{
    display: grid;
    align-items: center;
    grid-column: 2;
    min-height: 40px;
    justify-self: end;
}
.addBtn{
    grid-column: 3;
    min-height: 40px;
    justify-self: end;
}
.addBtn:first{
    grid-column: 3;
    min-height: 40px;
    justify-self: end;
}
.upldiadBtn{
    grid-column: 4;
    justify-self: end;
}

.Divider{
    grid-column: span 4;
}

</style>