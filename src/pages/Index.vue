<script setup lang="ts">

import AppButton from "../components/AppButton.vue";
import Statistic from "../components/Index/Statistic.vue";
import Advantages from "../components/Index/Advantages.vue";
import TopGuilds from "../components/Index/TopGuilds.vue";
</script>

<template>
    <section class="header">
        <h1 class="title">Универсальный инструмент для использования в Discord!</h1>
        <p class="subtitle">Встречайте — GoH! Многофункциональный бот, который улучшит ваш сервер как никогда раньше.</p>
        <div class="buttons">
            <AppButton class="dark">
                <img src="/icons/discord.svg" alt="">
                Пригласить на сервер
            </AppButton>
            <AppButton class="default">Документация</AppButton>
        </div>
    </section>
    <section>
        <Statistic />
    </section>
    <section>
        <Advantages />
    </section>
    <section>
        <TopGuilds />
    </section>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .title {
        line-height: 64px;
        max-width: 1030px;
        width: 100%;
        color: $text-black;
        font-size: 64px;
        font-weight: 800;
        font-family: 'Neue Machina', sans-serif;
        text-align: center;
    }

    .subtitle {
        margin-top: 14px;
        max-width: 698px;
        width: 100%;
        color: $text-secondary;
        font-size: 24px;
        text-align: center;
        font-weight: 500;
    }

    .buttons {
        display: flex;
        align-items: center;
        gap: 30px;
        margin-top: 40px;
    }
}


</style>