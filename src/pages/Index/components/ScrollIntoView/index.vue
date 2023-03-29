<template>
  <div id="container">
    <div class="item" v-for="(item, index) in listArrRef">
      {{ `${index + 1} ${item}` }}
    </div>
    <div class="item" id="target">target</div>
    <div class="item" v-for="(item, index) in listArrRef">
      {{ `${index + 1} ${item}` }}
    </div>
  </div>
</template>

<script setup lang="ts">
import useIntoView from "@/hooks/useIntoView";
const listArr = new Array(30).fill("-");
const listArrRef = ref<string[]>(listArr);
useIntoView(
  { containerId: "#container", targetId: "#target", emitOnce: false },
  () => {
    console.log("执行");
  }
);
</script>

<style scoped>
#container {
  height: 100px;
  overflow-y: scroll;
}
.item {
  border: 1px solid #aaa;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
