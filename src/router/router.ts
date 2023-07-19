import {createRouter, createWebHistory} from "vue-router";
import {RouteNamesEnum} from "./router.types.ts";
import {loadLayoutMiddleware} from "./middleware/loadLayout.middleware.ts";
import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import Changelog from "../pages/Changelog.vue";
import Cookies from "../pages/Cookies.vue";
import Offer from "../pages/Offer.vue";
import Commands from "../pages/Commands.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: RouteNamesEnum.index,
            component: Index
        },
        {
            path: '/team',
            name: RouteNamesEnum.team,
            component: Team
        },
        {
            path: '/changelog',
            name: RouteNamesEnum.changelog,
            component: Changelog
        },
        {
            path: '/offer',
            name: RouteNamesEnum.offer,
            component: Offer
        },
        {
            path: '/cookies',
            name: RouteNamesEnum.cookies,
            component: Cookies
        },
        {
            path: '/commands',
            name: RouteNamesEnum.commands,
            component: Commands
        }
    ]
})

router.beforeEach(loadLayoutMiddleware)
export default router