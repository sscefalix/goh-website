<script setup lang="ts">

import AppButton from "../../../components/AppButton.vue";
</script>

<template>
    <a class="content__banner" href="https://t.me/goh_official" data-community>
        <div class="banner__left" data-community>
            <h3 class="banner__title" data-community>Подписывайтесь на нас в Telegram!</h3>
            <img src="/icons/telegram.svg" alt="" data-community>
        </div>
        <AppButton class="default" data-community><span>t.me/goh_official</span></AppButton>
    </a>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.content__banner {
    text-decoration: none;
    cursor: pointer;
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