import { App } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/403",
    component: () => import("@/pages/403.vue"),
  },
  {
    path: "/404",
    component: () => import("@/pages/404.vue"),
  },
  {
    path: "/feedback",
    component: () => import("@/pages/Feedback/index.vue"),
    children: [
      {
        name: "添加反馈",
        path: "add",
        props: true,
        meta: {},
        component: () => import("@/pages/Feedback/Add/index.vue"),
      },
      {
        name: "添加列表",
        path: "list",
        props: true,
        meta: {},
        component: () => import("@/pages/Feedback/List/index.vue"),
      },
    ],
    props: true,
    name: "反馈管理",
    meta: { order: 3 },
  },
  {
    path: "/systemManage",
    component: () => import("@/pages/SystemManage/index.vue"),
    children: [
      {
        name: "角色管理",
        path: "role",
        props: true,
        meta: {},
        component: () => import("@/pages/SystemManage/role/index.vue"),
      },
      {
        name: "用户管理",
        path: "user",
        props: true,
        meta: {},
        component: () => import("@/pages/SystemManage/user/index.vue"),
      },
    ],
    props: true,
    name: "系统管理",
    meta: { order: 4, icon: "123" },
  },
  {
    path: "/table",
    component: () => import("@/pages/Table/index.vue"),
    name: "表格页面",
    props: true,
    meta: { order: 2 },
  },
  {
    path: "/",
    component: () => import("@/pages/Index/index.vue"),
    name: "首页",
    props: true,
    meta: { order: 1 },
  },
  {
    path: "/*",
    redirect: "/404",
  },
];
const layoutRoutes = [
  {
    path: "/",
    component: () => import("@/layouts/default.vue"),
    children: routes,
  },
];
export const router = createRouter({
  routes: layoutRoutes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  next();
});

export default (app: App) => app.use(router);
