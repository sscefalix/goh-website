<script setup lang="ts">

import {useAsyncState} from "@vueuse/core";
import axios from "axios";
import AppSpinner from "../components/AppSpinner.vue";

const {state, isReady, isLoading} = useAsyncState(
    axios.get("https://raw.githubusercontent.com/sscefalix/goh-public/main/changelog.json").then(
        response => response.data
    ),
    undefined
)

</script>

<template>
    <section>
        <h1 class="title">Список изменений</h1>
        <p class="subtitle">Обновления и нововведения в одном месте, чтобы быть в курсе последних изменений и улучшений.</p>
        <div v-for="version in Object.keys(state)" class="versions" v-if="isReady">
            <h1 class="version__title">Версия {{ version }}</h1>
            <div class="changelog">
                <div class="category" v-for="category in Object.keys(state[version])">
                    <h1 class="category__title">{{ category }}</h1>
                    <ul class="category__changes">
                        <li v-for="change in state[version][category]">{{ change }}</li>
                    </ul>
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
    font-family: 'Neue Machina', sans-serif;
    font-size: 64px;
    line-height: 64px;
    font-weight: 800;
}

.subtitle {
    max-width: 678px;
    width: 100%;
    margin-top: 14px;
    color: $text-secondary;
    font-size: 24px;
    font-weight: 500;
}

.versions {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    gap: 60px;

    .version__title {
        font-size: 24px;
        font-weight: 700;
        color: $text-black;
    }

    .changelog {
        display: flex;
        flex-direction: column;
        gap: 50px;
        max-width: 1012px;
        width: 100%;
    }

    .category {
        display: flex;
        flex-direction: column;
        gap: 20px;

        &__title {
            font-size: 24px;
            font-weight: 600;
            color: $text-black;
        }

        &__changes {
            li {
                color: $text-secondary;
                font-size: 20px;
                font-weight: 500;
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