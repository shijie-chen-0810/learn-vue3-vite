import { App } from "vue";
import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";
import { createRouter, createWebHistory } from "vue-router";

import type { RouteRecordRaw } from "vue-router";

const routes = setupLayouts(generatedRoutes);

export const router = createRouter({
  routes,
  history: createWebHistory(),
});

const getPath = (routes: RouteRecordRaw[], result: string[] = []) => {
  routes.forEach((route) => {
    result.push(route.path);
    if (!route.children) {
      return;
    } else {
      getPath(route.children, result);
    }
  });
  return result;
};

router.beforeEach((to, from, next) => {
  const totalPaths: string[] = [];
  getPath(routes, totalPaths);
  const isIncludesPath = totalPaths.some((path) => path === to.path);
  if (!isIncludesPath) {
    router.push("/404");
  }
  next();
});

export default (app: App) => app.use(router);
