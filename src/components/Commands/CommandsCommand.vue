<script setup lang="ts">

import {Command} from "./commands.types.ts";
import {Ref, ref} from "vue";

defineProps<Command>()

const command = ref<Ref<null | HTMLDivElement>>(null);

function toggle() {
    command.value.classList.toggle("open");
    command.value.style.maxHeight = command.value.classList.contains("open") ? `${command.value?.scrollHeight + 10}px` : "0";
}

</script>

<template>
    <div class="command" @click="toggle">
        <div class="command__name"><code>/{{name}}</code>{{description}}</div>
        <div class="command__container" ref="command">
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
        transition: max-height 600ms;

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