<template>
    <div class="wrapper">
        <div class="field">Название организации</div>
        <div class="info" id="name">Комитет по физической культуре и спорту Ленинградской области
        </div>

        <Divider class="Divider"></Divider>

        <div class="field">Телефон</div>
        <div class="info" id="sport">+7(812)539-40-31</div>

        <Divider class="Divider"></Divider>

        <div class="field">E-mail</div>
        <div class="info" id="sportCode">lenoblsport@lenreg.ru</div>
        <Divider class="Divider"></Divider>

        <div class="field">Юридический адрес</div>
        <div class="info" id="address">191124, Санкт-Петербург, улица Лафонская, 6В</div>

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