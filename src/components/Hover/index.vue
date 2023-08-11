<template>
  <div @mouseover="mouseover" @mouseleave="mouseleave">
    <slot :isHover="isHover"></slot>
  </div>
</template>

<script setup lang="ts">
const isHover = ref<boolean>(false);
const mouseover = () => {
  isHover.value = true;
};
const mouseleave = () => {
  isHover.value = false;
};
</script>

<style scoped></style>
