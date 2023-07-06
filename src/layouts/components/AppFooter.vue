<script setup lang="ts">

</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <img src="/icons/gohbot.svg" alt="">
                    <p class="inc">Не связаны с Discord Inc.</p>
                    <div class="copyright">
                        <p>дизайн — racen</p>
                        <p>gohbot.space © 2021-2023</p>
                    </div>
                </div>
                <div class="column">
                    <p class="title">Сообщество</p>
                    <div class="column__links">
                        <a href="https://discord.gg/UJ8938E9Ne" target="_blank">Сервер поддержки</a>
                        <router-link to="/changelog" target="_blank">Список изменений</router-link>
                        <router-link to="/team">Разработчики</router-link>
                        <router-link to="#">Команды</router-link>
                        <router-link to="#">GoH Ultra</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="cookies">
            <div class="container">
                <p class="description">🍪 Используя данный сайт, вы соглашаетесь на сбор файлов cookie.</p>
                <div class="links">
                    <router-link to="/cookies">Файлы Cookie</router-link>
                    <router-link to="/offer">Публичная оферта</router-link>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.footer {
    margin-top: 60px;
    position: relative;
    width: 100%;
    height: fit-content;
    padding: 24px 0 0 0;
    box-shadow: 0 4px 23px 0 $shadow;
    z-index: 1000;
    background-color: $white;

    .container {
        display: flex;
        flex-direction: column;
        width: 100%;

        .columns {
            display: flex;
            gap: 50px;

            .inc {
                margin-top: 10px;
                font-size: 16px;
                font-weight: 500;
                color: $text-secondary;
            }

            .copyright {
                display: flex;
                flex-direction: column;
                gap: 4px;
                margin-top: 29px;

                p {
                    color: $text-light-gray;
                }
            }

            .column {
                .title {
                    color: $text-black;
                    font-weight: 600;
                    margin-bottom: 9px;
                }

                &__links {
                    display: flex;
                    flex-direction: column;
                    max-height: 100px;
                    height: 100%;
                    flex-wrap: wrap;
                    column-gap: 37px;
                    row-gap: 7px;

                    & a {
                        color: $text-secondary;
                        text-decoration: none;
                        transition: color 200ms;

                        &:hover {
                            color: $light-gray-hover;
                        }
                    }
                }
            }
        }
    }

    .cookies {
        margin-top: 25px;
        background-color: $black;
        padding: 10px 0;

        .container {
            display: flex;
            width: 100%;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;

            .description {
                color: $white;
                font-size: 14px;
                font-weight: 400;
            }

            .links {
                display: flex;
                gap: 20px;

                & a {
                    font-size: 14px;
                    font-weight: 400;
                    color: $cookie-links;
                    text-decoration: none;
                    transition: color 200ms;

                    &:hover {
                        color: $gray-hover;
                    }
                }
            }
        }
    }
}

</style>