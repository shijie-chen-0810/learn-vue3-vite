<template>
  <el-container>
    <el-aside class="slider">
      <div class="logo">logo</div>
      <el-menu
        background-color="#031527"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="router.currentRoute.value.path"
        router
      >
        <template v-for="route in routes" :key="route.path">
          <el-sub-menu v-if="route.children?.length" :index="route.path">
            <template #title>
              <span class="nav-text">{{ route.name }}</span>
            </template>
            <el-menu-item
              :index="`${route.path}/${subRoute.path}`"
              v-for="subRoute in route.children"
            >
              {{ subRoute.name }}
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item v-if="!route.children?.length" :index="route.path">
            {{ route.name }}
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="header">Header</el-header>
      <el-main :style="{ padding: '12px' }" class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import generatedRoutes from "virtual:generated-pages";
const router = useRouter();
const routes = generatedRoutes
  .filter((route) => !["/404", "/403"].includes(route.path))
  .sort(
    (pre, cur) => (pre.meta?.order as number) - (cur.meta?.order as number)
  );
</script>
<style lang="less" scoped>
.container {
  height: 100%;
}
.slider {
  width: 240px;
  overflow: auto;
  height: 100vh;
  background-color: #031527;
}
.logo {
  background-color: #a5b86b;
  height: 48px;
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  box-sizing: border-box;
  padding: 12px;
}
.header {
  background-color: #031527;
  color: #fff;
  height: 48px;
  line-height: 24px;
  padding: 12px;
}
.main {
  height: calc(100vh - 48px);
  overflow-y: scroll;
}
</style>
