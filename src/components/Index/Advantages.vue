<script setup lang="ts">

</script>

<template>
    <div class="advantages">
        <div class="element">
            <h2 class="element__title">
                <img src="/icons/lock.svg" alt="">
                Система верификации
            </h2>
            <p class="element__description">Обезопасьте свой сервер от назойливых рейдов ботов с помощью нашей гибко
                настраиваемой системы верификации, доступной прямо в панели управления!</p>
        </div>
        <div class="element">
            <h2 class="element__title">
                <img src="/icons/bell.svg" alt="">
                Система аудита
            </h2>
            <p class="element__description">Следите за действиями пользователей с помощью аудит-системы. Индивидуальная
                настройка типов действий для разных каналов или объединение их в одном месте!</p>
        </div>
        <div class="element">
            <h2 class="element__title">
                <img src="/icons/toolbox.svg" alt="">
                Полезные утилиты
            </h2>
            <p class="element__description">В боте есть полезные инструменты для использования в Discord! Теперь не
                нужно открывать переводчик – можно перевести сообщение на язык, всего за два клика!</p>
        </div>
        <div class="element">
            <h2 class="element__title">
                <img src="/icons/money.svg" alt="">
                Экономика
            </h2>
            <p class="element__description">Зарабатывайте игровую валюту, выполняя задания, настраивайте работу,
                зарплаты и многое другое. Продавайте роли как временно, так и постоянно, и это лишь малая часть
                возможностей!</p>
        </div>
        <div class="element">
            <h2 class="element__title">
                <img src="/icons/compass.svg" alt="">
                И это только начало
            </h2>
            <p class="element__description">Мы постоянно обновляем и улучшаем нашего бота, добавляя новые команды и
                функции, чтобы предоставить вам еще больше возможностей.</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.advantages {
    margin-top: 70px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 20px;

    .element {
        cursor: default;
        border-radius: 20px;
        padding: 34px 28px;
        background-color: $white-bg;
        border: 1px solid $white-bg;
        transition: border-color 200ms;

        &__title {
            font-family: 'Neue Machina', sans-serif;
            font-size: 34px;
            font-weight: 800;
            color: $text-black;
        }

        &__description {
            font-size: 20px;
            font-weight: 500;
            margin-top: 14px;
            color: $text-secondary;
        }

        &:last-child {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            grid-column: 1 / 3;

            & p {
                text-align: center;
                max-width: 760px;
            }
        }

        &:hover {
            border-color: $border-hover;
        }
    }
}

</style>