<template>
  <div class="option-container">
    <div
      class="high-block"
      :style="{ width: `${higtBlockWidth}px`, left: `${higtBlockLeft}px` }"
    ></div>
    <div
      v-for="(option, index) in props.options"
      :class="{
        'option-item': true,
        'active-item': showValue === option.value,
      }"
      :key="option.value"
      ref="optionItemEles"
      :data-value="option.value"
      @mouseenter="(e) => enterOption(e, option.value)"
      @mouseleave="gotoSelectedEle"
      @click="emit('change', option.value)"
    >
      {{ option.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: number;
  options: { label: string; value: number }[];
}>();
const emit = defineEmits<{
  (e: "change", value: number): void;
}>();

const higtBlockLeft = ref<number>(0);
const higtBlockWidth = ref<number>(0);
const optionItemEles = ref<HTMLDivElement[]>();
const showValue = ref<number>(props.value);
const gotoSelectedEle = () => {
  const ele = optionItemEles.value?.find(
    (ele) => ele.dataset.value === String(props.value)
  );
  showValue.value = Number(ele?.dataset.value || 0);
  higtBlockLeft.value = ele?.offsetLeft || 0;
  higtBlockWidth.value = ele?.clientWidth || 0;
};
onMounted(gotoSelectedEle);
const enterOption = (e: MouseEvent, value: number) => {
  const ele = e.target as HTMLDivElement;
  higtBlockLeft.value = ele.offsetLeft;
  higtBlockWidth.value = ele.clientWidth;
  showValue.value = value;
};
</script>

<style scoped lang="less">
@import "./index.less";
</style>
