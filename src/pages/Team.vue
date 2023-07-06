<script setup lang="ts">

import TeamUser from "../components/Team/TeamUser.vue";
</script>

<template>
    <section>
        <h1 class="title">Встречайте — разработчики!(или не совсем)</h1>
        <p class="subtitle">
            Они все внесли значительный вклад в разработку GoH, и вам стоит познакомиться с каждым из них!
        </p>
        <div class="team">
            <TeamUser
                username="shawnnn"
                role="Разработчик"
                icon="pen"
                avatar="https://cdn.discordapp.com/avatars/937103257308921856/1dba82d3f968fcbd72fea2084cfca6a8.png"
                description="Основатель и владелец проекта, ведущий разработчик проекта."
            />
            <TeamUser
                username="sscefalix"
                role="Разработчик"
                icon="pen"
                avatar="https://cdn.discordapp.com/avatars/811210156884754472/41aa66ff4e6e3b74a199c3740b2548cb.png"
                description="Один из основных разработчиков проекта, занимается разработкой бота и сайта."
            />
            <TeamUser
                username="racen"
                role="Дизайнер"
                icon="paintbrush"
                avatar="https://cdn.discordapp.com/avatars/329257425918099456/28a6fd2e58203ecfcd84b07957db32f1.png"
                description="Ведущий дизайнер проекта, создает уникальный дизайн для нашего бота и сайта."
            />
            <div class="former_employees">
                <div class="employees__title">Другие люди, которые участвовали в разработке</div>
                <p class="employees__description">Tryton (Разработчик), overall (Разработчик), GrenkaUkraine (Разработчик), dixxxy (Разработчик)</p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.title {
    max-width: 1030px;
    width: 100%;
    text-align: center;
    color: $text-black;
    font-size: 64px;
    font-weight: 800;
    line-height: 64px;
    font-family: 'Neue Machina', sans-serif;
    margin: 0 auto;
}

.subtitle {
    color: $text-secondary;
    max-width: 698px;
    width: 100%;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin: 14px auto 0;
}

.team {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
}

.former_employees {
    background-color: $white-bg;
    padding: 27px 22px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 11px;
    height: 156px;
    width: 100%;
    grid-column: 1 / 4;
    transition: border-color 200ms;
    border: 1px solid $white-bg;

    &:hover {
        border-color: $border-hover;
    }

    .employees__title {
        color: $text-black;
        font-size: 22px;
        font-weight: 800;
    }
    .employees__description {
        color: $text-secondary;
        font-size: 17px;
        font-weight: 500;
    }
}

</style>