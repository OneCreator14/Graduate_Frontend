<template>
    <div class="rectangle">
            <div class = "grid">
                <img src = "../../../public/user_icon.png" class = "circle">
                <div class = "input_block">
                    <input type="text" placeholder="Логин" />
                    <input type="password" placeholder="Пароль" />
                </div>
                <div class = "registration_block">
                    <div class = "label">Нет учетной записи?</div>
                    <a href="/registration">
                        <button class="registration"> Регистрация</button>
                    </a>
                </div>
                <div>
                    <a href="/">
                        <BaseButton color="light-light" class="button"> Вход</BaseButton>
                    </a>
                </div>

            </div>
        </div>
</template>

<script setup>
    import BaseButton from "@/components/button/BaseButton.vue"
</script>

<style lang="scss" scoped>
    
.rectangle{
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

.grid{
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

.input_block{
    margin-top: 40px;
}

input {
    padding:10px;
    margin:15px 0;
    border-radius:5px;
    outline: 0;

    border: 1px solid var(--primary-light);
    &:active{
        border: 1px solid var(--primary);
    }
}

.registration{
    border: 0;
    color: black;
    background: white;
    margin-left: 14px;
    margin-top: 10px;
    text-decoration:underline;

    cursor: pointer;
}

.label{
    margin-left: 20px;
}

.button{
    width: 100px;
    height: 40px;
    margin-left: 100px;
    margin-top: 20px;
}
</style>