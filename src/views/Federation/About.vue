<template>
    <div class="wrapper">
        <div class="field">Название организации</div>
        <div class="info" id="name">Общественная организация "Региональная спортивная федерация спортивного ориентирования Ленинградской области"</div>

        <Divider class="Divider"></Divider>

        <div class="field">ОГРН</div>
        <div class="info" id="OGRN">1094700000097</div>

        <Divider class="Divider"></Divider>

        <div class="field">ИНН</div>
        <div class="info" id="INN">4703110935</div>

        <Divider class="Divider"></Divider>

        <div class="field">Название спорта</div>
        <div class="info" id="sport">Спортивное ориентирование</div>

        <Divider class="Divider"></Divider>

        <div class="field">Код спорта</div>
        <div class="info" id="sportCode">0830011811Я</div>

        <Divider class="Divider"></Divider>

        <div class="field">Юридический адрес</div>
        <div class="info" id="address">197046, г.Санкт-Петербург, ул.Куйбышева, д.32, литера У, кабинет 3</div>

        <Divider class="Divider"></Divider>
    </div>
</template>

<script setup>
    
</script>

<style lang="scss" scoped>

.wrapper{
    margin: 60px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(40px, auto);
    align-items: center;
    justify-content: center;
}

.field{
    grid-column: 1;
    
}
.info{
    grid-column: 2;
}

.hr-dashed {
	margin: 20px 0;
	padding: 0;
	height: 0;
	border: none;
	border-top: 2px dashed #ddd;
}

.Divider{
    grid-column: span 2;
}

</style>