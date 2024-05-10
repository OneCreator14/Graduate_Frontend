<template>



        <div class="rectangle">
            <div class = "grid">
                <div>
                    <img src = "../../../public/user_icon.png" class = "circle">
                </div>
                <div class = "input_block">
                    <input type="text"     placeholder="Логин"/>
                    <input type="password" placeholder="Пароль"/>
                    <input type="password" placeholder="Повторите пароль"/>
                    <div>
                        <a href="/autorization">
                            <BaseButton  color="light-light" class="button"> Регистрация</BaseButton>
                        </a>
                    </div>
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
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
    background: white;
    margin-left: auto;
    margin-right: auto;
    top: 25vh;
    margin-top: -8px;

    z-index: 1;
}

.grid{
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
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


.button{

    width: 150px;
    height: 40px;
    margin-left: 50px;
    margin-top: 20px;
}




</style>