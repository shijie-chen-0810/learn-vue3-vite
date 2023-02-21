<script setup lang="ts">
// js中赋予类型和默认值
// const {msg} = defineProps({msg:{type:String,default:'123'}})
// ts的类型验证
const { msg } = defineProps<{ msg?: string | number }>();
// 使用ts时,赋予默认值
// const {msg} = withDefaults(defineProps<{msg?:string}>(),{msg:'00000'})

// const emit = defineEmits(["handleClick",'handleClick2'])
const emit = defineEmits<{
  (e: "handleClick", id: number): void;
  (e: "update", value: string): void;
}>();

const trigger1 = () => {
  emit("handleClick", 123);
};
const trigger2 = () => {
  emit("update", "123");
};
</script>

<template>
  <div>
    <div>子组件消息{{ msg }}</div>
    <a-button @click="trigger1">子组件按钮handleClick</a-button>
    <a-button @click="trigger2">子组件按钮update</a-button>
  </div>
</template>

<style scoped></style>
