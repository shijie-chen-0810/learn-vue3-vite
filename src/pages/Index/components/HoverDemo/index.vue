<template>
  <div>
    <Hover v-slot="{ isHover }">
      <span v-if="isHover">浮上了</span>
      <span v-else>没浮上</span>
    </Hover>
  </div>
</template>

<script setup lang="ts">
import Hover from "@/components/Hover/index.vue";
</script>

<style scoped></style>
