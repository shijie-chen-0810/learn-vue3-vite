<template>
  <Slider
    :value="selectValue"
    :options="optionsArr"
    @change="handleValueChange"
  ></Slider>
</template>

<script setup lang="ts">
import Slider from "./Slider.vue";
const optionsArr = [
  { label: "选项一", value: 1 },
  { label: "选项二12", value: 2 },
  { label: "选项", value: 3 },
  { label: "选项四嗯嗯", value: 4 },
  { label: "选项五", value: 5 },
  { label: "选项六", value: 6 },
  { label: "选项七", value: 7 },
  { label: "选", value: 8 },
];
const selectValue = ref<number>(4);
const handleValueChange = (value: number) => {
  selectValue.value = value;
};
</script>

<style lang="less" scoped></style>
