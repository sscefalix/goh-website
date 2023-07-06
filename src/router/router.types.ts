import type {Component} from "vue";
import type {AppLayoutsEnum} from "../layouts/layouts.types.ts";

declare module "vue-router" {
    interface RouteMeta {
        layout?: AppLayoutsEnum;
        layoutComponent?: Component;
    }
}

export enum RouteNamesEnum {
    index = "index",
    team = "team",
    changelog = "changelog",
    offer = "offer",
    cookies = "cookies"
}
