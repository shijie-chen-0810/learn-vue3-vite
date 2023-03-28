<template>
  <my-component
    v-model:modelValue.firstLarge="myText"
    v-model:modelValue1.allLarge="myText1"
  />
  <div>
    <el-space> myText:{{ myText }} myText1:{{ myText1 }} </el-space>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MyComponent from "./Component.vue";

const myText = ref("");
const myText1 = ref("");
</script>

<style lang="less" scoped></style>
