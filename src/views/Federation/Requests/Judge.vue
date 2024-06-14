<template>
    
    <div class="wrapper">
        <h3 class="block">Создание заявления</h3>
        <div class="back">
            <h2 style="text-align: center; margin-bottom: 60px">
                Создание заявления о предоставлении государственной услуги "Государственная услуга по присвоению квалификационной категории спортивного судьи «Спортивный судья первой категории»"
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
                            <div class="pi pi-file"/>
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
        { name: "Представление к присвоению квалификационной категории спортивного судьи", isAdded: true, id: 0},
        { name: "копия карточки учета судейской деятельности спортивного судьи", id: 1},
        { name: "копии второй и третьей страниц паспорта", id: 2},
        { name: "копия удостоверения «мастер спорта России международного класса», «гроссмейстер России» или «мастер спорта России» (при необходимости)", id: 3},
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
    height: 40px;
    width: 40px;
}
.upldiadBtn{
    grid-column: 4;
    justify-self: end;
    padding-left: 10px;
    padding-right: 10px;
    height: 40px;
    width: 40px;
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