<template>
  <div id="container">
    <div class="item" v-for="(item, index) in listArrRef">
      {{ `${index + 1} ${item}` }}
    </div>
    <div class="item" id="target">
      <SubComponent v-if="hasInsertView"></SubComponent>
    </div>
    <div class="item" v-for="(item, index) in listArrRef">
      {{ `${index + 1} ${item}` }}
    </div>
  </div>
</template>

<script setup lang="ts">
import SubComponent from "./SubComponent.vue";
import useIntoView from "@/hooks/useIntoView";
const listArr = new Array(30).fill("-");
const listArrRef = ref<string[]>(listArr);
const hasInsertView = ref<boolean>(false);
useIntoView(
  { containerId: "#container", targetId: "#target", emitOnce: true },
  () => {
    console.log("执行");
    hasInsertView.value = true;
  }
);
</script>

<style scoped>
#container {
  height: 200px;
  overflow-y: scroll;
}
.item {
  border: 1px solid #aaa;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
