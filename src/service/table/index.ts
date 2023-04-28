import request from "umi-request";

import type { TodoItem } from "@/stores/useTodoList";
export const fetchData = (query: any) => {
  return request<API.BaseResult<{ a: string }>>("/table", {
    method: "GET",
    params: query,
  });
};

export const fetchTableData = (query: any) => {
  return request<API.BasePageResult<API.TableData>>("/table/list", {
    method: "GET",
    params: query,
  });
};

export const getTodoList = (query: any) => {
  return request<API.BaseResult<TodoItem>>("/index/todoList", {
    method: "GET",
    params: query,
  });
};
