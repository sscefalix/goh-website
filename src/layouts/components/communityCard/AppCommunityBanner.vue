<script setup lang="ts">

import AppButton from "../../../components/AppButton.vue";
</script>

<template>
    <div class="content__banner">
        <div class="banner__left">
            <h3 class="banner__title">Подписывайтесь на нас в Telegram!</h3>
            <img src="/icons/telegram.svg" alt="">
        </div>
        <AppButton class="default"><span>t.me/goh_official</span></AppButton>
    </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.content__banner {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 26px;
    background-color: $text-primary;
    width: 100%;
    position: relative;
    overflow: hidden;
    z-index: 1000;

    .banner__left img {
        position: absolute;
        right: 13px;
        top: -20px;
        color: $text-secondary!important;
        opacity: 0.8;
        z-index: -1000;
    }

    .banner__title {
        color: $white;
        max-width: 262px;
        font-size: 20px;
        font-weight: 700;
    }

    .button {
        z-index: 1000;
        border-radius: 16px;
        padding: 7px 18px;
        color: $text-primary;
        height: fit-content;
        width: fit-content;

        span {
            font-size: 15px;
            font-weight: 600;
        }
    }
}
</style>