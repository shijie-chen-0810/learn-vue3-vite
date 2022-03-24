export default [
  {
    url: "/api/table",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "ok",
        data: {
          a: "123",
        },
      };
    },
  },
];
