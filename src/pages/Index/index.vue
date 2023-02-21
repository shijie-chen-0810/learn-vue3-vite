<template>
  <a-row :gutter="[16, 16]">
    <a-col span="12">
      <a-card style="height: 100%">
        <request-demo />
      </a-card>
    </a-col>
    <a-col span="12">
      <a-card style="height: 100%">
        <father-and-son-value />
      </a-card>
    </a-col>
  </a-row>
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
