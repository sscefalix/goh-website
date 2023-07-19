<script setup lang="ts">

interface Props {
    href: string
    title: string
    description: string
    className?: string
    icon?: boolean
}

defineProps<Props>()
</script>

<template>
    <router-link class="content__column" :to="href" data-community v-if="!href.startsWith('http')">
        <p class="content__column__title" :class="className">{{title}} <img src="/icons/star.svg" alt="" data-community v-if="icon"></p>
        <p class="content__column__description" data-community>{{description}}</p>
    </router-link>
    <a :href="href" class="content__column" data-community v-else>
        <p class="content__column__title" :class="className">{{title}} <img src="/icons/star.svg" alt="" data-community v-if="icon"></p>
        <p class="content__column__description" data-community>{{description}}</p>
    </a>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.content__column {
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-decoration: none;

    &:hover &__title {
        color: $text-primary;
    }
    &:hover &__description {
        color: $light-gray-hover;
    }

    &__title {
        color: $text-black;
        font-weight: 500;
        font-size: 18px;
        transition: color 200ms;

        &.text-primary {
            color: $text-primary;
        }
    }

    &__description {
        font-size: 16px;
        font-weight: 400;
        color: $text-secondary;
        max-width: 220px;
        transition: color 200ms;
    }
}
</style>