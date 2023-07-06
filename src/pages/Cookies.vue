<script setup lang="ts">

import {useAsyncState} from "@vueuse/core";
import axios from "axios";
import AppSpinner from "../components/AppSpinner.vue";

const {state, isReady, isLoading} = useAsyncState(
    axios.get("https://raw.githubusercontent.com/sscefalix/goh-public/main/cookie.json").then(
        response => response.data
    ),
    undefined
)

</script>

<template>
    <section>
        <h1 class="title">Соглашение о файлах Cookie</h1>
        <p class="subtitle">Последнее обновление: 26/06/2023</p>
        <div class="cookies" v-if="isReady">
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
            <AppSpinner />
        </div>
    </section>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.title {
    color: $text-black;
    font-size: 64px;
    font-weight: 800;
    font-family: 'Neue Machina', sans-serif;
    line-height: 64px;
}

.subtitle {
    color: $text-secondary;
    font-size: 24px;
    font-weight: 500;
    margin-top: 14px;
}

.cookies {
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
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>