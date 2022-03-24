import vue from "@vitejs/plugin-vue";
import plugins from "./plugins";
import { defineConfig } from "vite";
import path from "path";

export default () => {
  const { MOCK } = process.env;
  return defineConfig({
    base: "./",
    plugins: [vue(), ...plugins],
    define: {
      MOCK: JSON.stringify(MOCK),
    },
    server: {
      proxy: {
        "/internal/": {
          target: "http://47.96.177.235:8077", // dev服务器
          changeOrigin: true, // 如果接口跨域，需要进行这个参数配置,
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  });
};
