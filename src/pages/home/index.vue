<template>
  <button @click="getData">请求</button>
  <div>{{ data?.a }}</div>
  <div>msg:{{ msg }}</div>
  <Component
    :msg="msg"
    @handleClick="handleClick"
    @update="handleUpdateClick"
  />
</template>

<script setup lang="ts">
import Component from "@/components/Component.vue";
import globalStore from "@/stores/globalStore";
import { fetchData } from "@/service/table";
import { useRequest } from "vue-request";

const msg = ref<string | number>("oooo");

const { run: fetchTableData, data } = useRequest(fetchData, {
  manual: true,
  formatResult: (res) => {
    msg.value = "ppp";
    return res?.data;
  },
});
const getData = () => {
  fetchTableData({ a: 1 });
};
const handleClick = (id: number) => {
  msg.value = "执行了handleClick";
  console.log("执行了handleClick", id);
};

const handleUpdateClick = (value: string) => {
  msg.value = "执行了handleUpdateClick";
  console.log("执行了handleUpdateClick", value);
};

const main = globalStore();

console.log(main.counter, main.name);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
