export const routes = [
  {
    path: "/",
    name: "editorial",
    component: () => import("./views/editorial/EditorialView.vue"),
    meta: { variant: "editorial" },
  },
  {
    path: "/sticker",
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
