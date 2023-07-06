<script setup lang="ts">

</script>

<template>
    <button class="button"><slot /></button>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

%default-button {
    border-radius: 12px;
    padding: 16px 32px;
    border: none;
    outline: none;
    text-decoration: none;
    color: $white;
}

.dark {
    @extend %default-button;
    background-color: $text-black;
    transition: background-color 200ms;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;

    &:hover {
        background-color: $black-hover;
    }
}

.default {
    @extend %default-button;
    background-color: $white-bg;
    color: $text-secondary;
    border: 1px solid $white-bg;
    cursor: pointer;
    transition: border-color 200ms;

    &:hover {
        border-color: $border-hover;
    }
    &:disabled {
        cursor: default;
        padding: 14px 20px;
        border-radius: 12px;
        background-color: $white-bg;
        color: $text-secondary;

        &:hover {
            border-color: $white-bg;
        }
    }
}
</style>