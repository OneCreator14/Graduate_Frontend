<template>
    <div class="rectangle">
        <div class="grid">
            <img src="@/assets/images/profile_icon.png" class="circle">
            <div class="input_block">
                <FloatLabel>
                    <InputText id="username" v-model="login" placeholder="Логин"/>
                </FloatLabel>
                <FloatLabel>
                    <Password  id="password" v-model="password" placeholder="Пароль" :feedback="false"/>
                </FloatLabel>
            </div>
            <div class="button">
                <BaseButton color="light" @click="Autorization()"> Вход</BaseButton>
            </div>


        </div>
    </div>
</template>

<script setup>
import BaseButton from "@/components/button/BaseButton.vue"

import { ref } from 'vue';

const login = ref(null);
const password = ref(null);

let CommitteeHeader = document.getElementById('CommitteeHeader'); 
let FederationHeader = document.getElementById('FederationHeader'); 
let FederationSidebar = document.getElementById('FederationSidebar'); 
let CommitteeSidebar = document.getElementById('CommitteeSidebar'); 
CommitteeHeader.style.display = "none";
FederationHeader.style.display = "none";
CommitteeSidebar.style.display = "none";
FederationSidebar.style.display = "none";
console.log(CommitteeHeader);


function Autorization() { 
    let passwordElem = document.getElementById('password'); 

    console.log(passwordElem)

        if(password.value == "123" && login.value == "Orient")
            window.location.replace("http://localhost:5173/Federation")
        else if(password.value == "123" && login.value == "Committee")
            window.location.replace("http://localhost:5173/Committee")
        

    }
</script>

<style lang="scss" scoped>
.rectangle {
    z-index: 20;
    position: relative;
    width: 480px;
    height: 300px;
    border-radius: 7px;
    background: white;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
    margin-left: 30%;
    margin-right: 30%;
    top: 24vh;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 3fr 1fr;
    grid-gap: 20px;
}

.circle {
    display: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 30px;
}

.input_block {
    margin-top: 40px;
}

input {
    padding: 10px;
    margin: 15px 0;
    border-radius: 5px;
    outline: 0;

}

.registration {
    border: 0;
    color: black;
    background: white;
    margin-left: 14px;
    margin-top: 10px;
    text-decoration: underline;

    cursor: pointer;
}

.label {
    margin-left: 20px;
}

.button {
    width: 100px;
    height: 40px;
    margin-left: 100px;
    grid-column: 2;
}
</style>