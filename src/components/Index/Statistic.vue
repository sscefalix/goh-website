<script setup lang="ts">
import Placeholder from "../AppPlaceholder.vue";
import {useAsyncState} from "@vueuse/core";
import axios from "axios";
import AppSpinner from "../AppSpinner.vue";
import {onMounted, ref, watch} from "vue";

type Data = {
    total_guilds: number
    total_members: number
}

const loading = ref<{
    state: Data | undefined,
    isReady: boolean,
    isLoading: boolean
}>({
    state: undefined,
    isReady: false,
    isLoading: true
})

onMounted(() => {
    const {state, isReady, isLoading} = useAsyncState<Data>(
        axios.get(`${import.meta.env.VITE_API_URL}/api/v1/stats`).then(
            response => response.data
        ),
        undefined
    )
    watch(state, (s) => {
        loading.value = {
            state: s,
            isReady: isReady.value,
            isLoading: isLoading.value
        }
    })
})

</script>

<template>
    <div class="statistic" v-if="loading.isLoading">
        <AppSpinner class="default" />
    </div>
    <div class="statistic" v-if="loading.isReady">
        <div class="element">
            <h2 class="element__title" v-if="loading.isReady">{{ loading.state.total_guilds.toLocaleString('de-DE') }}</h2>
            <Placeholder class="element__title" v-if="loading.isLoading" />
            <p class="element__value">Подключенных серверов</p>
        </div>
        <div class="element">
            <h2 class="element__title" v-if="loading.isReady">{{ loading.state.total_members.toLocaleString('de-DE') }}</h2>
            <Placeholder class="element__title" v-if="loading.isLoading" />
            <p class="element__value">Всего пользователей</p>
        </div>
        <div class="element">
            <h2 class="element__title" v-if="loading.isReady">750.000+</h2>
            <Placeholder class="element__title" v-if="loading.isLoading" />
            <p class="element__value">Команд использовано</p>
        </div>
        <div class="element">
            <h2 class="element__title" v-if="loading.isReady">105</h2>
            <Placeholder class="element__title" v-if="loading.isLoading" />
            <p class="element__value">Команд <br> всего</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.statistic {
    height: 188px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    background-color: $text-black;
    padding: 38px 0;
    border-radius: 20px;
    margin-top: 145px;

    .element {
        width: fit-content;
        display: flex;
        flex-direction: column;
        gap: 16px;
        min-width: 168px;

        &__title {
            min-width: 168px;
            width: 100%;
            height: 48px;
            color: $white;
            font-size: 40px;
            font-weight: 800;
        }

        &__value {
            color: $text-secondary-light;
            max-width: 168px;
            font-size: 20px;
            width: 100%;
            font-weight: 400;
        }
    }
}

</style>