<script setup lang="ts">

interface Props {
    value: string
}

defineProps<Props>()
defineEmits(['update:value'])

</script>

<template>
    <div class="search_bar">
        <input type="text" :value="value" @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
               class="search" placeholder="Используй поиск, чтобы не потеряться">
        <img src="/icons/search.svg" alt="">
    </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.search_bar {
    display: flex;
    align-items: center;
    gap: 54px;
    background-color: $white-bg;
    padding: 17px 20px;
    width: 100%;
    border-radius: 12px;

    .search {
        background-color: transparent;
        width: 100%;
        border: none;
        outline: none;
    }

    img {
        height: 16px;
        width: 16px;
    }
}

</style>