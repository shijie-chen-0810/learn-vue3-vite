<template>
  <component
    :msg="msg"
    @handleClick="handleClick"
    @update="handleUpdateClick"
  />
</template>

<script setup lang="ts">
import component from "./Component.vue";

const msg = ref<string | number>("oooo");

const handleClick = (id: number) => {
  msg.value = "执行了handleClick";
  console.log("执行了handleClick", id);
};

const handleUpdateClick = (value: string) => {
  msg.value = "执行了handleUpdateClick";
  console.log("执行了handleUpdateClick", value);
};
</script>

<style scoped></style>
