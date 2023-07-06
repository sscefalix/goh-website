<script setup lang="ts">

</script>

<template>
    <div class="loading"></div>
</template>

<style scoped lang="scss">
@keyframes animatedBackground {
    from {
        background-position: 0 0;
    }
    to {
        background-position: 1000px 0;
    }
}

.loading {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
            90deg,
            #F5F5F5FF 0%,
            #F9F9F9FF 100%
    );
    border-radius: 2px;
    background-position: 0 0;
    background-repeat: repeat;
    animation: animatedBackground 5s linear infinite;
}
</style>