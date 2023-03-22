import request from "umi-request";

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
