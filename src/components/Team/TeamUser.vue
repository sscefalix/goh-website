<script setup lang="ts">
import AppButton from "../AppButton.vue";

interface Props {
    username: string
    role: string
    avatar: string
    icon: string
    description: string
}

defineProps<Props>()
</script>

<template>
    <div class="user">
        <AppButton class="dark">Связаться</AppButton>
        <div class="title">
            <img :src="avatar" class="user__avatar" alt="">
            <div class="info">
                <h2 class="user__name">{{ username }}</h2>
                <p class="user__role"><img :src="`/icons/${icon}.svg`" alt=""> {{ role }}</p>
            </div>
        </div>
        <div class="description">{{ description }}</div>
    </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.user {
    background-color: $white-bg;
    border-radius: 20px;
    padding: 22px;
    position: relative;
    width: 100%;
    height: 100%;
    transition: border-color 200ms;
    border: 1px solid $white-bg;
    cursor: default;

    &:hover {
        border-color: $border-hover;
    }

    .button {
        position: absolute;
        top: 22px;
        right: 22px;
        font-size: 13px;
        padding: 7px 18px;
        border-radius: 15px;
        font-weight: 700;
    }

    .title {
        display: flex;
        align-items: center;
        gap: 11px;

        .info {
            display: flex;
            flex-direction: column;
            gap: 3px;

            .user__name {
                font-size: 22px;
                font-weight: 800;
                color: $text-black;
            }

            .user__role {
                display: flex;
                align-items: center;
                gap: 6px;
                font-size: 16px;
                font-weight: 500;
                color: $text-secondary;
            }
        }
    }

    .description {
        margin-top: 15px;
        color: $text-secondary;
        font-size: 17px;
        font-weight: 500;
    }

    &__avatar {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
}

</style>