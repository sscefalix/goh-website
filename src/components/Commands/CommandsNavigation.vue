<script setup lang="ts">

import CommandsSearch from "./CommandsSearch.vue";

interface Props {
    category: string
    search: string
}

defineProps<Props>()
defineEmits(["update:category", "update:search"])

</script>

<template>
    <nav class="commands">
        <CommandsSearch @input="$emit('update:search', ($event.target as HTMLInputElement).value)" :value="search" />
        <div class="categories">
            <div class="button">
                <input type="radio" id="all" value="all"
                       @input="$emit('update:category', ($event.target as HTMLInputElement).value)"
                       :checked="category == 'all'">
                <label for="all">Все категории</label>
            </div>
            <div class="button">
                <input type="radio" id="economy" value="economy"
                       @input="$emit('update:category', ($event.target as HTMLInputElement).value)"
                       :checked="category == 'economy'">
                <label for="economy">Экономика</label>
            </div>
            <div class="button">
                <input type="radio" id="filters" value="filters"
                       @input="$emit('update:category', ($event.target as HTMLInputElement).value)"
                       :checked="category == 'filters'">
                <label for="filters">Фильтры</label>
            </div>
            <div class="button">
                <input type="radio" id="fun" value="fun"
                       @input="$emit('update:category', ($event.target as HTMLInputElement).value)"
                       :checked="category == 'fun'">
                <label for="fun">Развлечения</label>
            </div>
            <div class="button">
                <input type="radio" id="moderation" value="moderation"
                       @input="$emit('update:category', ($event.target as HTMLInputElement).value)"
                       :checked="category == 'moderation'">
                <label for="moderation">Модерация</label>
            </div>
            <div class="button">
                <input type="radio" id="images" value="images"
                       @input="$emit('update:category', ($event.target as HTMLInputElement).value)"
                       :checked="category == 'images'">
                <label for="images">Картинки</label>
            </div>
            <div class="button">
                <input type="radio" id="roleplay" value="roleplay"
                       @input="$emit('update:category', ($event.target as HTMLInputElement).value)"
                       :checked="category == 'roleplay'">
                <label for="roleplay">Ролеплей</label>
            </div>
            <div class="button">
                <input type="radio" id="nsfw" value="nsfw"
                       @input="$emit('update:category', ($event.target as HTMLInputElement).value)"
                       :checked="category == 'nsfw'">
                <label for="nsfw">NSFW</label>
            </div>
            <div class="button">
                <input type="radio" id="utils" value="utils"
                       @input="$emit('update:category', ($event.target as HTMLInputElement).value)"
                       :checked="category == 'utils'">
                <label for="utils">Утилиты</label>
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

.button {
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