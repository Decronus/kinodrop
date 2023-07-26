<script lang="ts" setup></script>

<template>
    <div class="nav-bar">
        <div class="nav-bar__logo-and-menu">
            <span class="nav-bar__logo">KINODROP</span>

            <div class="nav-bar__menu-wrap">
                <span class="nav-bar__menu-el">Фильмы</span>
                <span class="nav-bar__menu-el">Сериалы</span>
                <span class="nav-bar__menu-el">Коллекции</span>
                <span class="nav-bar__menu-el">Топ</span>
                <span class="nav-bar__menu-el">Новинки</span>
            </div>
        </div>

        <div class="nav-bar__search">
            <div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z"
                        fill="white"
                    />
                </svg>
            </div>
            <span>Поиск</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nav-bar {
    width: 100%;
    height: 60px;
    border-radius: 16px;
    border: 1px solid #484848;
    background: rgba(36, 36, 36, 0.7);
    box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(15px);
    padding: 0 32px;
    margin-bottom: 60px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-bar__logo-and-menu {
    display: flex;
    gap: 100px;
    align-items: center;
}

.nav-bar__logo {
    font-size: 20px;
    font-weight: 700;
}

.nav-bar__menu-wrap {
    display: flex;
    gap: 32px;
}

.nav-bar__search {
    display: flex;
    gap: 6px;

    & div {
        margin-top: 2px;
    }
}
</style>
