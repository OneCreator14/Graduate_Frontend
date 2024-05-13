<template>
    <div class="rectangle">
        <div class="grid">
            <img src="@/assets/images/profile_icon.png" class="circle">
            <div class="input_block">
                <FloatLabel>
                    <InputText id="username" v-model="value" placeholder="Логин"/>
                </FloatLabel>
                <FloatLabel>
                    <InputText id="password" v-model="value2" placeholder="Пароль"/>
                </FloatLabel>
            </div>
            <div class="button">
                <a href="/">
                    <BaseButton color="light-light"> Вход</BaseButton>
                </a>
            </div>

        </div>
    </div>
</template>

<script setup>
import BaseButton from "@/components/button/BaseButton.vue"

import { ref } from 'vue';

const value = ref(null);
const value2 = ref(null);
</script>

<style lang="scss" scoped>
.rectangle {
    position: relative;
    width: 480px;
    height: 340px;
    border-radius: 7px;
    background: white;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
    margin-left: auto;
    margin-right: auto;
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
    margin-top: 20px;
    grid-column: 2;
}
</style>