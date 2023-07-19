<script setup lang="ts">

import AppLayout from "./layouts/AppLayout.vue";

function beforeEnter(element: HTMLDivElement) {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
}
function enter(element: HTMLDivElement) {
    element.style.opacity = "1";
    element.style.transition = "all 600ms";
    element.style.transform = "translateY(0)";
}
function leave(element: HTMLDivElement) {
    element.style.opacity = "0";
}

</script>

<template>
    <AppLayout>
        <div class="fade-enter-active fade-enter-active fade-enter-from fade-leave-to" v-if="false"></div>
        <RouterView v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component" />
            </transition>
        </RouterView>
    </AppLayout>
</template>

<style scoped>

.fade-enter-active {
    transition: all 600ms;
    transform: translateY(0);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-from {
    transform: translateY(30px);
}

</style>
