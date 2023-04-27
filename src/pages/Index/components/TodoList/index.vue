<template>
  <el-form @submit.native.prevent :inline="true" :model="formValue" ref="form">
    <el-form-item label="代办事项" prop="content">
      <el-input
        :style="{ width: '340px' }"
        v-model="formValue.content"
        placeholder="请输入内容"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit(form)">提交</el-button>
    </el-form-item>
  </el-form>
  <div class="list-container">
    <div v-for="todoItem in todoStore[showType]" class="list-item">
      <el-checkbox
        :style="{ width: '80%' }"
        border
        :class="todoItem.status ? 'item-done' : ''"
        :key="todoItem.id"
        :model-value="todoItem.status"
        :label="todoItem.content"
        @change="(val) => statusChange(todoItem.id, val)"
        @dblclick.capture="changeItemShowType"
      />
      <el-button
        :style="{ marginLeft: '10px' }"
        :icon="Close"
        @click="() => todoStore.deleteTodoItem(todoItem.id)"
      ></el-button>
    </div>
  </div>
  <div class="sort-container">
    <el-button
      :type="showType === 'list' ? 'primary' : ''"
      @click="() => (showType = 'list')"
      >全部({{ todoStore.list.length }})</el-button
    >
    <el-button
      :type="showType === 'doneList' ? 'primary' : ''"
      @click="() => (showType = 'doneList')"
      >已完成({{ todoStore.doneList.length }})</el-button
    >
    <el-button
      :type="showType === 'notDoneList' ? 'primary' : ''"
      @click="() => (showType = 'notDoneList')"
      >未完成({{ todoStore.notDoneList.length }})</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { Close } from "@element-plus/icons-vue";
import useTodoList from "@/stores/useTodoList";
import { CheckboxValueType, FormInstance } from "element-plus";
const todoStore = useTodoList();
const showType = ref<"list" | "doneList" | "notDoneList">("list");
const form = ref<FormInstance>();
const formValue = reactive<{
  content: string;
}>({ content: "" });

const time = 200;
let timeOut: number;

const changeItemShowType = () => {
  clearTimeout(timeOut); // 清除第二个单击事件
  console.log("双击");
};

const statusChange = (id: number, val: CheckboxValueType) => {
  clearTimeout(timeOut); // 清除第一个单击事件
  timeOut = setTimeout(function () {
    todoStore.changeStatus(id, val as boolean);
  }, time);
};

const onSubmit = (form: FormInstance | undefined) => {
  if (!formValue.content) return;
  todoStore.addTodoitem(formValue.content);
  form?.resetFields();
};
</script>

<style scoped>
.list-container {
  height: 180px;
  overflow-y: scroll;
}
.list-item {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.sort-container {
  display: flex;
  padding: 5px;
  margin: 0 auto;
}

::v-deep .el-checkbox__label {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
::v-deep .item-done .el-checkbox__label {
  text-decoration: line-through;
}
</style>
