<script setup lang="ts">

import CommandsNavigation from "../components/Commands/CommandsNavigation.vue";
import CommandsList from "../components/Commands/CommandsList.vue";
import {computed, ref} from "vue";
import {Command} from "../components/Commands/commands.types.js";
import {useAsyncState} from "@vueuse/core";
import axios from "axios";
import AppSpinner from "../components/AppSpinner.vue";

const category = ref<string>("all");
const search = ref<string>("");

const {state, isReady, isLoading} = useAsyncState<Command[]>(
    axios.get("https://raw.githubusercontent.com/sscefalix/goh-public/main/commands.json").then(
        response => response.data.commands
    ),
    []
)

const filteredCommands = computed(() =>
    search.value.length > 0 && category.value === "all" ?
        state.value.filter(command => {
            const query = search.value.toLowerCase()
            return command.name.toLowerCase().includes(query) || command.description.toLowerCase().includes(query)
        }) : state.value.filter(command =>
            category.value === 'all' ? true : command.category === category.value
        )
)

</script>

<template>
    <section>
        <h1 class="title">Документация по командам</h1>
        <p class="subtitle">На данный момент мы имеем {{ state.length }} команд в 9 категориях, ознакомиться с ними
            можно ниже.</p>
        <div class="commands__container">
            <CommandsNavigation v-model:search="search" v-model:category="category"/>
            <CommandsList :commands="filteredCommands" v-if="isReady"/>
            <div class="center" v-if="isLoading">
                <AppSpinner/>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.title {
    font-size: 64px;
    font-weight: 800;
    line-height: 64px;
    font-family: 'Neue Machina', sans-serif;
    color: $black;
    text-align: center;
}

.subtitle {
    font-weight: 500;
    font-size: 24px;
    color: $text-secondary;
    text-align: center;
    max-width: 698px;
    width: fit-content;
    margin: 14px auto 0;
}

.commands__container {
    display: flex;
    gap: 20px;
    width: 100%;
    margin-top: 50px;

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
}

</style>