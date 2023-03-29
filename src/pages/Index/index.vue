<template>
  <el-row class="row" :gutter="16">
    <el-col :span="12">
      <el-card style="height: 100%" header="请求示例">
        <request-demo />
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card :style="{ height: '100%' }" header="父子传值">
        <father-and-son-value />
      </el-card>
    </el-col>
  </el-row>
  <el-row class="row" :gutter="16">
    <el-col :span="12">
      <el-card :style="{ height: '100%' }" header="v-model">
        <self-v-model />
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card :style="{ height: '100%' }" header="IntersectionObserver">
        <scroll-into-view />
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import RequestDemo from "./components/requestDemo/index.vue";
import FatherAndSonValue from "./components/fatherAndSonValue/index.vue";
import SelfVModel from "./components/SelfVModel/index.vue";
import ScrollIntoView from "./components/ScrollIntoView/index.vue";
</script>

<style lang="less">
.row {
  margin-bottom: 14px;
}
</style>

<route>
  {
    name: "首页",
    meta:{order:1}
  }
</route>
