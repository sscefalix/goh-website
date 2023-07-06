<script setup lang="ts">
import {Ref, ref} from "vue";
import AppButton from "../../components/AppButton.vue";
import AppCommunityCard from "./communityCard/AppCommunityCard.vue";

const communityButton = ref<Ref<HTMLButtonElement> | null>(null)
const isShow = ref<boolean>(false)

function toggle() {
    communityButton?.value.classList.toggle("active")
    isShow.value = !isShow.value
}

</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__row">
                <div class="header__column header__nav">
                    <router-link to="/" class="header__nav-link">Главная</router-link>
                    <p class="header__nav-link" id="community" @mousedown.prevent @click="toggle" ref="communityButton">
                        Сообщество
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.50046 11.8552C9.3949 11.8552 9.29277 11.8354 9.19408 11.7958C9.09486 11.7563 9.01226 11.7035 8.94629 11.6375L5.30462 7.99584C5.15948 7.8507 5.08691 7.66598 5.08691 7.44167C5.08691 7.21737 5.15948 7.03265 5.30462 6.88751C5.44976 6.74237 5.63448 6.6698 5.85879 6.6698C6.08309 6.6698 6.26782 6.74237 6.41296 6.88751L9.50046 9.97501L12.588 6.88751C12.7331 6.74237 12.9178 6.6698 13.1421 6.6698C13.3664 6.6698 13.5511 6.74237 13.6963 6.88751C13.8414 7.03265 13.914 7.21737 13.914 7.44167C13.914 7.66598 13.8414 7.8507 13.6963 7.99584L10.0546 11.6375C9.97546 11.7167 9.88969 11.7726 9.79733 11.8053C9.70497 11.8386 9.60601 11.8552 9.50046 11.8552Z" fill="currentColor"/>
                        </svg>
                    </p>
                    <AppCommunityCard :class="{'hidden': !isShow}" />
                    <router-link to="#" class="header__nav-link text-primary">
                        GoH Ultra
                        <img src="/icons/star.svg" alt="">
                    </router-link>
                </div>
                <div class="header__column">
                    <img src="/icons/gohbot.svg" alt="">
                </div>
                <div class="header__column header__actions">
                    <a href="https://discord.gg/UJ8938E9Ne" class="header__actions-link">Связаться с нами</a>
                    <AppButton class="default" disabled>В разработке</AppButton>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.header {
    position: fixed;
    width: 100%;
    height: fit-content;
    padding: 19px 0;
    box-shadow: 0 4px 23px 0 $shadow;
    z-index: 1000;
    background-color: $white;

    &__row {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__nav, &__actions {
        display: flex;
        align-items: center;
        gap: 20px;

        &-link, &-link svg path {
            font-size: 16px;
            text-decoration: none;
            color: $text-secondary;
            transition: color 200ms;

            &:hover,
            &:hover svg path {
                color: $light-gray-hover;
            }

            &.text-primary {
                color: $text-primary;
            }
        }

        #community {
            user-select: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 7px;

            & svg {
                transition: transform 200ms;
            }

            &.active {
                color: $text-primary;

                & svg {
                    & path {
                        color: $text-primary;
                    }
                    transform: rotate(180deg);
                }
            }
        }
    }
}
</style>