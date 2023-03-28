<template>
  <el-table
    :row-key="(record: API.TableData) => record.id"
    :data="data?.list"
    :loading="loading"
  >
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="age" label="年龄" width="180" />
    <el-table-column prop="address" label="地址" />
    <el-table-column prop="action" label="操作" width="180">
      <template #default="scope">
        <el-space>
          <el-button
            link
            type="primary"
            size="small"
            @click="showRowData(scope.row)"
          >
            查看详情
          </el-button>
          <el-button
            link
            type="primary"
            size="small"
            @click="updateRowData(scope.row)"
          >
            修改
          </el-button>
        </el-space>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    class="pagination"
    v-model:current-page="current"
    v-model:page-size="pageSize"
    :page-sizes="pageSizeOptions"
    background
    layout="total, sizes, prev, pager, next, jumper"
    :total="400"
  />
  <el-dialog v-model="visible" :title="curRowData.name">
    <el-descriptions :column="2" border>
      <el-descriptions-item label="年龄">
        {{ curRowData.age }}
      </el-descriptions-item>
      <el-descriptions-item label="姓名">
        {{ curRowData.name }}
      </el-descriptions-item>
      <el-descriptions-item label="地址" :span="2">
        {{ curRowData.address }}
      </el-descriptions-item>
    </el-descriptions>
  </el-dialog>
</template>

<script setup lang="ts">
import { fetchTableData } from "@/service/table";
import { usePagination } from "vue-request";
const visible = ref<boolean>(false);
let curRowData = reactive<Partial<API.TableData>>({
  key: "",
  id: "",
  name: "",
  age: 0,
  address: "",
});
const pageSizeOptions = ref<number[]>([10, 20, 30, 40, 50]);
const { data, loading, current, pageSize } = usePagination(fetchTableData, {
  pagination: {
    currentKey: "pageNo",
    pageSizeKey: "pageSize",
    totalKey: "totals",
  },
  formatResult: (data) => data.result,
});

const showRowData = (data: API.TableData) => {
  Object.assign(curRowData, data);
  visible.value = true;
};

const updateRowData = (data: API.TableData) => {
  console.log(data);
};
</script>

<style>
.pagination {
  padding: 12px;
  justify-content: flex-end;
}
</style>

<route>
  {
    name:'表格页面',
    meta:{order:2}
  }
</route>
