<template>
  <a-layout class="container">
    <a-layout-sider class="slider">
      <div class="logo">logo</div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        :openKeys="selectedOpenKeys"
        @click="menuItemClick"
      >
        <template v-for="route in routes" :key="route.path">
          <a-sub-menu v-if="route.children?.length" :key="route.path">
            <template #icon>
              <user-outlined />
            </template>
            <template #title>
              <span class="nav-text">{{ route.name }}</span>
            </template>
            <a-menu-item
              :key="`${route.path}/${subRoute.path}`"
              v-for="subRoute in route.children"
            >
              {{ subRoute.name }}
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item v-if="!route.children?.length" :key="route.path">
            {{ route.name }}
          </a-menu-item>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header class="header">Header</a-layout-header>
      <a-layout-content :style="{ padding: '12px' }">
        <div><router-view></router-view></div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import generatedRoutes from "virtual:generated-pages";
import { UserOutlined } from "@ant-design/icons-vue";
import { watch } from "vue";
const router = useRouter();
const routes = generatedRoutes
  .filter((route) => !["/404", "/403"].includes(route.path))
  .sort(
    (pre, cur) => (pre.meta?.order as number) - (cur.meta?.order as number)
  );
console.log(router.currentRoute.value.matched);
const selectedKeys = ref<string[]>([router.currentRoute.value.path]);
const selectedOpenKeys = ref<string[]>(
  Array.from(
    new Set(router.currentRoute.value.matched.map((match) => match.path))
  )
);

const menuItemClick = (env: any) => {
  selectedOpenKeys.value = env.keyPath;
};

watch(selectedKeys, (cur) => {
  const currentPath = cur[0];
  router.push(currentPath);
});
</script>
<style lang="less" scoped>
.container {
  height: 100%;
}
.slider {
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}
.logo {
  background-color: #a5b86b;
  height: 48px;
  padding: 12px;
  text-align: center;
  font-size: 18px;
  line-height: 24px;
}
.header {
  color: #fff;
  height: 48px;
  line-height: 24px;
  padding: 12px;
}
</style>
