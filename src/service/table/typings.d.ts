declare namespace API {
  type BaseResult<T> = {
    code: number;
    msg: string;
    result: T;
  };
  type BasePageResult<T> = {
    code: number;
    msg: string;
    result: { list: T[]; pageNo: number; pageSize: string; totals: number };
  };
  type TableData = {
    key: string;
    id: string;
    name: string;
    age: number;
    address: string;
  };
}
