<template>
  <el-row :gutter="16">
    <el-col :span="12">
      <el-card style="height: 100%">
        <request-demo />
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card style="height: 100%">
        <father-and-son-value />
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import RequestDemo from "./components/requestDemo/index.vue";
import FatherAndSonValue from "./components/fatherAndSonValue/index.vue";
</script>

<style lang="less"></style>

<route>
  {
    name: "首页",
    meta:{order:1}
  }
</route>
