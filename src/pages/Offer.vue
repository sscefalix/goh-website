<script setup lang="ts">

import {useAsyncState} from "@vueuse/core";
import axios from "axios";
import AppSpinner from "../components/AppSpinner.vue";

const {state, isReady, isLoading} = useAsyncState(
    axios.get("https://raw.githubusercontent.com/sscefalix/goh-public/main/offer.json").then(
        response => response.data
    ),
    undefined
)

</script>

<template>
    <section>
        <h1 class="title">Публичная оферта</h1>
        <p class="subtitle">Настоящая публичная оферта (далее - "Оферта") представляет собой официальное предложение
            (предложение заключить договор) от веб-сайта gohbot.space (далее - "Сайт"), размещенного на территории
            Российской Федерации (далее - "Территория"), для любого физического или юридического лица (далее -
            "Пользователь" или "Вы") вступить в правовые отношения с Сайтом на условиях, изложенных ниже.</p>
        <div class="offer" v-if="isReady">
            <div class="point" v-for="point in Object.keys(state)">
                <h1 class="point__title">{{ point }}</h1>
                <div class="point__description">
                    <div v-for="text in state[point]">
                        <ul v-if="typeof text === 'object'">
                            <li v-for="point in text">
                                {{ point }}
                            </li>
                        </ul>
                        <span v-else>{{ text }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="center" v-if="isLoading">
            <AppSpinner/>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.title {
    font-family: 'Neue Machina', sans-serif;
    font-size: 64px;
    font-weight: 800;
    line-height: 64px;
    color: $text-black;
}

.subtitle {
    margin-top: 14px;
    max-width: 698px;
    width: 100%;
    font-size: 24px;
    font-weight: 500;
    color: $text-secondary;
}

.offer {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 50px;

    .point {
        font-size: 24px;
        color: $text-black;
        font-weight: 600;

        &__title {
            font-size: 24px;
            color: $text-black;
            font-weight: 600;
        }

        &__description {
            margin-top: 20px;

            & div span {
                font-size: 20px;
                font-weight: 500;
                color: $text-secondary;
            }

            & div ul li {
                font-size: 20px;
                color: $text-secondary;
                font-weight: 500;
                position: relative;
                list-style: none;

                &::before {
                    content: "\2022";
                    color: $text-secondary;
                    font-weight: bold;
                    display: inline-block;
                    width: 1em;
                }
            }
        }
    }
}

.center {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
}

</style>