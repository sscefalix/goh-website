<script setup lang="ts">
import AppCommunityColumn from "./AppCommunityColumn.vue";
import AppCommunityBanner from "./AppCommunityBanner.vue";
</script>

<template>
    <div class="community">
        <div class="community__content">
            <div class="content__title">Сообщество</div>
            <div class="content__columns">
                <AppCommunityColumn title="Список изменений" description="Обновления и улучшения в одном месте."
                                    href="/changelog"/>
                <AppCommunityColumn title="Команды" description="Сводка доступных функций и команд в одном месте."
                                    href="#"/>
                <AppCommunityColumn title="Разработчики" description="Коллектив создателей с новаторским подходом."
                                    href="/team"/>
                <AppCommunityColumn title="GoH Ultra" description="Дополнительные возможности за небольшую плату."
                                    href="#" className="text-primary" :icon="true"/>
                <AppCommunityColumn title="Сервер поддержки" description="Центр помощи и обратной связи для всех." href="https://discord.gg/UJ8938E9Ne" />
            </div>
        </div>
        <AppCommunityBanner/>
    </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables.scss";

.community {
    background-color: $white;
    position: absolute;
    top: 93px;
    width: fit-content;
    border-radius: 14px;
    box-shadow: 0 4px 48px 0 rgba(0, 0, 0, 0.10);
    opacity: 1;
    overflow: hidden;
    border: 1px solid #E7E7E7;
    transition: opacity 200ms ease-out;
    transform: translateX(0);

    &.hidden {
        transform: translateX(-999999px);
        z-index: -10000;
        opacity: 0;
        transition: opacity 200ms, transform 0ms 300ms;
    }

    &__content {
        padding: 32px 35px;
        width: fit-content;
        display: flex;
        flex-direction: column;

        .content__title {
            font-size: 18px;
            font-weight: 700;
        }
    }
}

.content__columns {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
}
</style>