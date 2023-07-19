<script setup lang="ts">

import {Command} from "./commands.types.ts";
import {Ref, ref} from "vue";

defineProps<Command>()

const command = ref<Ref<null | HTMLDivElement>>(null);
const container = ref<Ref<null | HTMLDivElement>>(null);

function toggle() {
    command.value.classList.toggle("open");
    container.value.style.maxHeight = command.value.classList.contains("open") ? `${container.value.scrollHeight + 10}px` : "0";
}

</script>

<template>
    <div class="command" @click="toggle" ref="command">
        <div class="command__header">
            <div class="command__name"><code>/{{name}}</code>{{description}}</div>
            <img src="/icons/arrow.svg" alt="">
        </div>
        <div class="command__container" ref="container">
            <div class="command__container__wrapper">
                <div class="container__element"><p>Использование:</p><code>/{{usage}}</code></div>
                <div class="container__element"><p>Пример:</p><code>/{{examples[0].name}}</code><p>— {{examples[0].description}}</p></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.command {
    user-select: none;
    cursor: pointer;
    width: 100%;
    padding: 16px;
    box-shadow: 0 4px 23px 0 $shadow;
    border-radius: 12px;
    background-color: $white;

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
            transform: rotate(0);
            transition: transform 400ms;
        }
    }

    &.open &__header img {
        transform: rotate(180deg);
    }

    code {
        background-color: $text-primary;
        color: $white;
        padding: 7px 18px;
        border-radius: 16px;
    }

    &__name {
        display: flex;
        align-items: center;
        gap: 12px;
        color: $text-secondary;
        font-weight: 500;
        font-size: 17px;
    }

    &__container {
        max-height: 0;
        overflow: hidden;
        transition: max-height 400ms;

        &__wrapper {
            margin: 7px;
            display: flex;
            flex-direction: column;
            gap: 7px;
        }

        .container__element {
            display: flex;
            align-items: center;
            gap: 6px;

            & p {
                color: $text-secondary;
                font-size: 16px;
                font-weight: 500;
            }
        }
    }
}
</style>