<template>
  <el-form @submit.native.prevent :inline="true" :model="formValue" ref="form">
    <el-form-item
      label="代办事项"
      prop="content"
      :rules="[{ required: true, message: '请填写' }]"
    >
      <el-input
        :style="{ width: '300px' }"
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
      <template :key="todoItem.id" v-if="todoItem.id !== editItemId">
        <el-checkbox
          :style="{ width: '80%' }"
          :border="true"
          :class="todoItem.status ? 'item-done' : ''"
          :model-value="todoItem.status"
          :label="todoItem.content"
          @change="(val) => statusChange(todoItem.id, val)"
          @dblclick.capture="changeItemShowType(todoItem)"
        />
        <el-button
          :style="{ marginLeft: '10px' }"
          :icon="Close"
          @click="() => todoStore.deleteTodoItem(todoItem.id)"
        ></el-button>
      </template>
      <template v-if="todoItem.id === editItemId">
        <el-form
          @submit.native.prevent
          :inline="true"
          :model="editFormValue"
          ref="editForm"
        >
          <el-form-item prop="content">
            <el-input
              :style="{ width: '305px' }"
              v-model="editFormValue.content"
              placeholder="请输入内容"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="() => onEditSubmit(todoItem.id, editForm)"
            >
              修改
            </el-button>
            <el-button @click="editItemId = null"> 取消 </el-button>
          </el-form-item>
        </el-form>
      </template>
    </div>
  </div>
  <div class="sort-container">
    <el-button
      :type="showType === 'allList' ? 'primary' : ''"
      @click="() => (showType = 'allList')"
      >全部({{ todoStore.allList.length }})</el-button
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
import type { TodoItem } from "@/stores/useTodoList";
import type { CheckboxValueType, FormInstance } from "element-plus";
const todoStore = useTodoList();
const showType = ref<"allList" | "doneList" | "notDoneList">("allList");
const editItemId = ref<number | null>();
const form = ref<FormInstance>();
const editForm = ref<FormInstance>();
const formValue = reactive<{
  content: string;
}>({ content: "" });
const editFormValue = reactive<{
  content: string;
}>({ content: "" });

const time = 200;
let timeOut: number;

const changeItemShowType = (item: TodoItem) => {
  clearTimeout(timeOut); // 清除第二个单击事件
  editItemId.value = item.id;
  editFormValue.content = item.content;
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
const onEditSubmit = (id: number, form: FormInstance | undefined) => {
  if (!editFormValue.content) return;
  todoStore.editTodoItem(id, editFormValue.content);
  editItemId.value = null;
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

:deep(.el-checkbox__label) {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
:deep(.item-done .el-checkbox__label) {
  text-decoration: line-through;
}
</style>
