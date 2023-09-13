<template>
  <div v-loading="isLoading">Sub</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
const isLoading = ref<boolean>(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>

<style lang="scss" scoped></style>
