export enum AppLayoutsEnum {
    default = "default",
    dashboard = "dashboard"
}

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
    default: "AppLayoutDefault.vue",
    dashboard: "AppLayoutDashboard.vue"
};
