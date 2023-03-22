<template>
  <el-button @click="getData">请求</el-button>
  <div>{{ data?.a }}</div>
  <div>msg:{{ msg }}<sub :style="{ transform: 'scale(0.5)' }">123</sub></div>
</template>

<script setup lang="ts">
import { fetchData } from "@/service/table";
import { useRequest } from "vue-request";

const msg = ref<string | number>("oooo");

const { run: fetchTableData, data } = useRequest(fetchData, {
  manual: true,
  formatResult: (res) => {
    msg.value = "ppp";
    return res?.result;
  },
});

const getData = () => {
  fetchTableData({ a: 1 });
};
</script>

<style scoped></style>
