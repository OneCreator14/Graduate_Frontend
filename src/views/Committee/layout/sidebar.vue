<script setup>
import { ref } from 'vue';

const links = ref([
    {name: 'Участники федерации', href: '/Committee/membersf'},
    {name: 'Сотрудники комитета', href: '/Committee/membersc'},
    {name: 'Заявки',              href: '/Committee/requests'},
    //{name: 'Календарный план',    href: '/Committee/calplan'},
    {name: 'Об организации',      href: '/Committee/about'},
])

</script>

<template>
    <div class="sidebar">
        <router-link 
        class="sidebar_link"
            v-for="link in links.slice(0, 3)"
            :key="link.name"
            :to="link.href"
        >
            {{ link.name }}
        </router-link>
        <Divider class="Divider"></Divider>
        <router-link 
        class="sidebar_link"
            v-for="link in links.slice(3, 10)"
            :key="link.name"
            :to="link.href"
        >
            {{ link.name }}
        </router-link>

        <img src="@/assets/images/Sport.png" width="350" style="display: block; margin-top: 470px; margin-left: -75px;"/>
            
    </div>
</template>

<style lang="scss" scoped>
.sidebar{
    left: 0;
    top: 62px;
    height: 100%;
    background: var(--primary-dark-gray);
    position: fixed;
    width: 250px;
    padding: 30px;
    transition: 0.2s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
    &_link{
        margin-bottom: 20px;
        color: white;
        display: block;
        border-radius: 12px;
        transition: 0.2s;
        font-weight: normal;
        &:hover{
            color: var(--primary-default);      
        }
    }
}

.Divider{
    width: 40%;
}
</style>