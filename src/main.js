import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { routes } from "./router.js";
import "./assets/main.css";

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition;
      if (to.hash) return { el: to.hash, top: 60, behavior: "smooth" };
      return { top: 0 };
    },
  },
  ({ router }) => {
    router.afterEach((to) => {
      if (typeof document === "undefined") return;
      const v = (to.meta && to.meta.variant) || "editorial";
      document.documentElement.dataset.variant = v;
    });
  }
);
