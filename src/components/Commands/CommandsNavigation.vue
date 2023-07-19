<script setup lang="ts">

import CommandsSearch from "./CommandsSearch.vue";

interface Props {
    currentCategory: string
    search: string
    categories: string[]
}

defineProps<Props>()
defineEmits(["update:currentCategory", "update:search"])

</script>

<template>
    <nav class="commands">
        <CommandsSearch @input="$emit('update:search', ($event.target as HTMLInputElement).value)" :value="search" />
        <div class="categories">
            <div class="category">
                <input type="radio" id="all" value="all"
                       @input="$emit('update:currentCategory', ($event.target as HTMLInputElement).value)"
                       :checked="currentCategory == 'all'">
                <label for="all">Все категории</label>
            </div>
            <div class="category" v-for="category in categories">
                <input type="radio" :id="category" :value="category"
                       @input="$emit('update:currentCategory', ($event.target as HTMLInputElement).value)"
                       :checked="currentCategory === category">
                <label :for="category">{{category}}</label>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.commands {
    max-width: 393px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.categories {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;
}

.category {
    display: block;
    width: 100%;
}

.categories input[type=radio] {
    width: 0;
    display: none;
}

.categories label {
    width: 100%;
    display: inline-block;
    cursor: pointer;
    padding: 15px 23px;
    height: fit-content;
    border: 1px solid $white;
    user-select: none;
    border-radius: 14px;
    font-size: 16px;
    color: $text-secondary;
    transition: all 200ms;
}

.categories input[type=radio]:checked + label {
    background-color: $text-primary;
    color: $white;
    border-color: $text-primary;
}

</style>