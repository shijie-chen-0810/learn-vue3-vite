<template>
  <el-row class="row" :gutter="16">
    <el-col :span="8">
      <el-card style="height: 100%" header="请求示例">
        <request-demo />
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card :style="{ height: '100%' }" header="父子传值">
        <father-and-son-value />
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card :style="{ height: '100%' }" header="hover组件">
        <hover-demo />
      </el-card>
    </el-col>
  </el-row>
  <el-row class="row" :gutter="16">
    <el-col :span="12">
      <el-card :style="{ height: '100%' }" header="pinia-todoList">
        <todo-list />
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card :style="{ height: '100%' }" header="intersection-observer`">
        <scroll-into-view />
      </el-card>
    </el-col>
  </el-row>
  <el-row class="row" :gutter="16">
    <el-col :span="12">
      <el-card :style="{ height: '100%' }" header="顺序动画">
        <animation-sequence />
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card :style="{ height: '100%' }" header="v-model">
        <self-v-model />
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import RequestDemo from "./components/requestDemo/index.vue";
import FatherAndSonValue from "./components/fatherAndSonValue/index.vue";
import SelfVModel from "./components/SelfVModel/index.vue";
import ScrollIntoView from "./components/ScrollIntoView/index.vue";
import AnimationSequence from "./components/AnimationSequence/index.vue";
import TodoList from "./components/TodoList/index.vue";
import HoverDemo from "./components/HoverDemo/index.vue";
</script>

<style lang="less">
.row {
  margin-bottom: 14px;
}
</style>
