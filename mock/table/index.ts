import Mock from "mockjs";

const waitTime = (time: number = 200) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default [
  {
    url: "/api/table",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "ok",
        result: {
          a: "123",
        },
      };
    },
  },
  {
    url: "/api/table/list",
    method: "get",
    response: (req) => {
      const { list } = Mock.mock({
        "list|1000": [
          {
            id: "@id",
            "key|1-1000": 1,
            name: "@cname",
            "flag|1": [0, 1],
            "age|1-1000": 1,
            address: "@csentence(16,50) ",
          },
        ],
      });
      return {
        code: 200,
        message: "获取待办数据成功",
        result: {
          pageSize: req.query.pageSize,
          pageNo: Number(req.query.pageNo),
          totals: 1030,
          list: list.splice(
            (Number(req.query.pageNo) - 1) * Number(req.query.pageSize),
            Number(req.query.pageSize)
          ),
        },
      };
    },
  },
  {
    url: "/api/index/todoList",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "ok",
        result: {
          id: 1,
          status: false,
          content: 1,
          next: {
            id: 2,
            status: false,
            content: 2,
            next: {
              id: 3,
              status: true,
              content: 3,
              next: {
                id: 4,
                status: false,
                content: 4,
                next: null,
                prev: null,
              },
              prev: null,
            },
            prev: null,
          },
          prev: null,
        },
      };
    },
  },
];
