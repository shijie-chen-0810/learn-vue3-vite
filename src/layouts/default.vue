<template>
  <a-layout class="container">
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content
        ><div><router-view></router-view></div
      ></a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped>
.container {
  height: 100%;
}
</style>
