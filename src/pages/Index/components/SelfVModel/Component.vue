<template>
  <el-space>
    <el-input
      class="input"
      type="text"
      :model-value="modelValue"
      @input="emitValue"
    />
    <el-input
      class="input"
      type="text"
      :model-value="modelValue1"
      @input="emitValue1"
    />
  </el-space>
</template>

<script setup lang="ts">
const props = defineProps([
  "modelValue",
  "modelValue1",
  "modelValueModifiers",
  "modelValue1Modifiers",
]);

const emit = defineEmits(["update:modelValue", "update:modelValue1"]);

const emitValue = (value: string) => {
  if (props.modelValueModifiers.firstLarge) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  if (props.modelValueModifiers.allLarge) {
    value = value.toUpperCase();
  }
  emit("update:modelValue", value);
};
const emitValue1 = (value: string) => {
  if (props.modelValue1Modifiers.firstLarge) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  if (props.modelValue1Modifiers.allLarge) {
    value = value.toUpperCase();
  }
  emit("update:modelValue1", value);
};
</script>

<style scoped>
.input {
  width: 40%;
}
</style>
