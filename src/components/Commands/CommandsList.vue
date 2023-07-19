<script setup lang="ts">

import {toRefs} from "vue";
import {Command} from "./commands.types.ts";
import CommandsCommand from "./CommandsCommand.vue";

interface Props {
    commands: Command[]
}

const props = defineProps<Props>()
const {commands} = toRefs(props)
</script>

<template>
    <div class="commands__list">
        <CommandsCommand :examples="command.examples" :usage="command.usage" :name="command.name"
                         :description="command.description" :category="command.category"
                         v-for="command in commands"/>
    </div>
</template>

<style scoped lang="scss">

.commands__list {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
}

</style>