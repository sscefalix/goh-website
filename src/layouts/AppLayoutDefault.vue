<script setup lang="ts">

import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
    <AppHeader />
    <main class="layout">
        <div class="container">
            <slot />
        </div>
    </main>
    <AppFooter />
</template>

<style scoped lang="scss">
.layout {
    padding-top: 200px;
    flex-grow: 1;
}

.footer {
    flex-shrink: 0;
}
</style>
