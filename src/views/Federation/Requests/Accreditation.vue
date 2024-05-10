<template>
    
    <div class="wrapper">
        <h3 class="block">Создание заявления</h3>
        <div class="back">
            <h2 style="text-align: center; margin-bottom: 60px">
                Создание заявления о предоставлении государственной услуги "Государственная аккредитация региональных спортивных федераций Ленинградской области"
            </h2>
            <h3 style="margin-top: 0;">Список необходимых документов:</h3>
            
            <!--
            <form id="formElem" @submit.prevent="sendToTable">
                <input type="text" name="name" value="John">
                <input type="text" name="surname" value="Smith">
                <input type="submit">
            </form>
            -->

            <div v-for="(doc, index) in docs" :key="doc.name" class="list">
                <div class="info">
                        {{doc.name}}
                </div>

                <div class="filename" :id="'filename'+index">
                    <span>{{ doc.filename }}</span>
                </div>

                <form action="http://localhost:5173/Federation/CreateDoc">
                    <BaseButton 
                        v-if="doc.isAdded" 
                        class="addBtn" 
                        size="small" 
                        color="green"
                        > 
                            <div class="pi pi-plus"/>
                    </BaseButton>
                </form>

                <BaseButton  
                    size="small" 
                    class="upldiadBtn"
                    @click="FindFile(index)"> 
                        <div class="pi pi-upload"/> 
                </BaseButton>

                <form action="view/upload.php" target="rFrame" method="POST" enctype="multipart/form-data">                 
                    <div class="hiddenInput">
                        <input type="file"   :id="'my_hidden_file'+index" name="loadfile" @change="LoadFile(index)">  
                        <input type="submit" :id="'my_hidden_load'+index" style="display: none" value='Загрузить'>  
                    </div>
                </form>

                <Divider class="Divider"></Divider>
            </div>

            <BaseButton 
            id="send"
            disabled>
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
        { name: "Заявление о предоставлении государственной услуги", id: 0},
        { name: "Заявление о государственной аккредитации",  isAdded: true, id: 1},
        { name: "Перечень лиц, являющихся членами спортивной федерации", id: 2},
        { name: "Сведения о персональном составе руководящих органов спортивной федерации", id: 3},
        { name: "Копия учредительного документа спортивной федерации", id: 4},
        { name: "Выписка из Единого государственного реестра юридических лиц", id: 5},
        { name: "Протокол учредительного съезда о создании общественной организации", id: 6},
        { name: "Свидетельство о государственной регистрации некоммерческой организации", id: 7},
        { name: "Письменное согласование общероссийской спортивной федерации на государственную аккредитацию общественной организации", id: 8},
        { name: "Копия документа, подтверждающего членство общественной организации в общероссийской спортивной федерации", id: 9},
        { name: "Проект документа, регламентирующего порядок отбора спортсменов для включения их в состав спортивной сборной команды", id: 10},
        { name: "Проект программы развития соответствующего вида спорта" , id: 11},
        { name: "Справка об источниках финансирования деятельности общественной организации" , id: 12},
        { name: "Копии протоколов не менее 3 спортивных соревнований, проведенных общественной организацией" , id: 13}
        ]

    function FindFile(index) { 
        document.getElementById('my_hidden_file'+index).click(); 
    }

    function LoadFile(index) { 
        var fileInput = document.getElementById('my_hidden_file'+index);   
        var filename = document.getElementById('filename'+index);   
        var newFilename = fileInput.files[0].name;
        filename.innerText = newFilename;
        document.getElementById('my_hidden_load'+index).click(); 
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
    width: 1200px;
    border-radius: 7px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
    padding: 40px;
 }

.info{
    display:grid;
    align-items: center;
    grid-column: 1;
    max-width: 700px;
}
.filename{
    display: grid;
    align-items: center;
    grid-column: 2;
    min-height: 40px;
    justify-self: end;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow:hidden;
    max-width: 200px;
    margin-right: 20px;
}
.addBtn{
    grid-column: 3;
    justify-self: end;
    padding-left: 10px;
    padding-right: 10px;
}
.upldiadBtn{
    grid-column: 4;
    justify-self: end;
    padding-left: 10px;
    padding-right: 10px;
}

.Divider{
    grid-column: span 4;
    margin: 0.7rem;
}

#send{
    margin-left: 990px;
}

.hiddenInput{  
      position:absolute;
      overflow: hidden;
      display:block;  
      height:0px;  
      width:0px;  
  }

</style>