export const routes = [
  {
    path: "/editorial",
    name: "editorial",
    component: () => import("./views/editorial/EditorialView.vue"),
    meta: { variant: "editorial" },
  },
  {
    path: "/",
    name: "sticker",
    component: () => import("./views/sticker/StickerView.vue"),
    meta: { variant: "sticker" },
  },
  {
    path: "/terminal",
    name: "terminal",
    component: () => import("./views/terminal/TerminalView.vue"),
    meta: { variant: "terminal" },
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];
