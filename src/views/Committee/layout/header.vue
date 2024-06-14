<template>
    <header class="header">
        <img src="@/assets/images/icon.png" class="title" width="70"/>
        <div class="organisation">Комитет по физической культуре и спорту Лен. области</div>
        <div class="user_menu">
            <!--<div class="header_divider"></div>-->
            <img src="@/assets/images/profile_icon.png" class="user_icon inl_block" />
            <div class="inl_block">Сычёв С.В.</div>
            <InputIcon class="pi pi-angle-down arrow inl_block" />
            <div class="menu">
                <a href="#" class="profile">
                    <span>Профиль </span>
                    <InputIcon class="pi pi-angle-right" />
                </a>
                <a href="/autorization" class="out">
                    <span class="inl_block">Выйти</span>
                    <InputIcon class="pi pi-sign-out inl_block" />
                </a>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.header {
    z-index: 10;
    width: 100%;
    background: var(--primary-default);
    font-weight: bold;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.4);
    height: 62px;
    padding: 0 20px;
    display: flex;
    position: sticky;
    top: 0;
}

.organisation{
    margin-left: 200px;
    margin-top: 16px;
    font-size: 25px;
}

.user_menu {
    margin-left: auto;
    margin-right: 10px;
    cursor: pointer;

    &:hover {
        background-color: var(--primary-hover);
    }

    &:hover a {
        display: grid;
    }

    &:active {
        background-color: var(--primary-hover);
    }
}

.inl_block {
    display: inline-block;
    vertical-align: middle;
}

.user_icon {
    padding: 10px;
    margin-top: 0;
    max-height: 60px;
    max-width: 60px;
    border-radius: 50px;
}

.arrow {
    margin: 0 5px;
}

.menu {
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);

    & a {
        display: none;
        grid-template-columns: 5fr 1fr;
        align-items: center;
        grid-gap: 20px;
        min-width: 160px;
        padding: 10px;
        background-color: white;

        &:first-child {
            margin-top: 2px;
        }

        &:hover {
            background-color: var(--primary-light-ligh-gray);
        }
    }
}


.out {
    color: var(--red);
}

.profile {
    color: var(--primary-dark);
}

.title {
    align-self: center;

    &:hover {
        color: rgb(255, 255, 255);
    }
}
</style>