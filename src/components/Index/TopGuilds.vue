<script setup lang="ts">

import {useAsyncState} from "@vueuse/core";
import axios from "axios";
import AppSpinner from "../AppSpinner.vue";

type Data = {
    name: string
    memberCount: number
    icon: string
}

const {state, isReady, isLoading} = useAsyncState<Data[]>(
    axios.get(`${import.meta.env.VITE_API_URL}/api/v1/top_guilds`).then(
        response => response.data.slice(1)
    ),
    undefined
)

</script>

<template>
    <div class="top_guilds">
        <h1 class="title">Мы совершенствуемся наряду с вашим сервером каждый день</h1>
        <p class="subtitle">Каждый день мы наращиваем свои навыки, совершенствуясь на пути к прогрессу, и ваш сервер
            является нашим верным спутником в этом стремлении</p>
        <div class="elements">
            <AppSpinner v-if="isLoading" />
            <div v-for="item in state" :key="state.indexOf(item)" class="element" v-if="isReady">
                <img :src="item.icon" class="element__image" alt="">
                <div class="element__info">
                    <div class="element__title">{{item.name}}</div>
                    <div class="element__subtitle">
                        #{{state.indexOf(item) + 1}}
                        <span>
                            <img src="/icons/members.svg" alt=""> {{item.memberCount.toLocaleString('de-DE')}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <p class="description">Серверы с самым большим количеством пользователей.<br> Обновляется автоматически</p>
    </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.top_guilds {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 145px;
}

.title {
    font-family: 'Neue Machina', sans-serif;
    line-height: 44px;
    font-size: 44px;
    max-width: 1014px;
    width: 100%;
    font-weight: 800;
    text-align: center;
}

.subtitle {
    max-width: 894px;
    margin-top: 20px;
    color: $text-secondary;
    font-size: 24px;
    text-align: center;
    font-weight: 500;
}

.elements {
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    .element {
        cursor: default;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 15px;
        max-width: 610px;
        margin: 0 auto;
        width: 100%;
        background-color: $white-bg;
        border-radius: 20px;
        transition: border-color 200ms;
        border: 1px solid $white-bg;

        &:hover {
            border-color: $border-hover;
        }

        &__image {
            height: 52px;
            width: 52px;
            border-radius: 50%;
        }

        &__info {
            display: flex;
            flex-direction: column;
        }

        &__title {
            font-size: 18px;
            font-weight: 800;
            color: $text-black;
        }

        &__subtitle {
            color: $text-secondary;
            display: flex;
            align-items: center;
            gap: 8px;

            span {
                color: $light-gray-color;
            }
        }
    }
}

.description {
    color: $text-light-gray;
    text-align: center;
    margin-top: 25px;
    font-weight: 600;
    font-size: 18px;
}
</style>