declare namespace API {
  type BaseResult<T> = {
    code: number;
    msg: string;
    data: T;
  };
}
