import request from "umi-request";

export const fetchData = (query: any) => {
  return request<API.BaseResult<{ a: string }>>("/table", {
    method: "GET",
    params: query,
  });
};
