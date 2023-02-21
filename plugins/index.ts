import { viteMockServe } from "vite-plugin-mock";
import Layouts from "vite-plugin-vue-layouts";
import Pages from "vite-plugin-pages";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import OptimizationPersist from "vite-plugin-optimize-persist";
import PkgConfig from "vite-plugin-package-config";
import viteCompression from "vite-plugin-compression";
import {
  AutoGenerateImports,
  DirResolverHelper,
} from "vite-auto-import-resolvers";
import vitePluginImp from "vite-plugin-imp";

export default [
  // 布局系统
  Layouts({
    layoutsDirs: "src/layouts", // 布局文件存放目录
    defaultLayout: "default", // 默认布局，对应 src/layout/index.vue
  }),
  Pages({
    dirs: "src/pages", // 需要生成路由的文件目录
    // 设置<route />块里面的语言为json语言
    routeBlockLang: "json5",
    // 异步加载路由信息
    importMode: "async",
    // 路劲里包含async的则异步加载
    // importMode(path) {
    //   return path.includes('async') ? 'async' : 'sync'
    // },
    // 识别识别带有vue和tsx后缀的文件为路由
    extensions: ["vue", "tsx"],
    // 排除所有文件下components的文件生产路由
    exclude: ["**/components/**/**"],
    // 可通过该方法设置身份校验，设置layout
    extendRoute(route) {
      // console.log(route.path)
      // 这里为了测试这个方法的效果，就是判断一下路由中包含了fruit字符串的，更换layout
      if (route.path.includes("fruit")) {
        return {
          ...route,
          meta: { layout: "home" },
        };
      }
      return route;
    },
  }),
  viteMockServe({
    supportTs: true, //如果使用 js发开，则需要配置 supportTs 为 false
  }),
  vueJsx(),
  DirResolverHelper(),
  AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
    ],
    dts: "plugins/types/auto-imports.d.ts",
    imports: AutoGenerateImports(),
  }),
  // 将包信息文件作为 vite 的配置文件之一，为 vite-plugin-optimize-persist 所用
  PkgConfig(),
  // 依赖预构建分析，提高大型项目性能
  OptimizationPersist(),
  // 生产环境资源压缩
  viteCompression(),
  // antd-vue 按需加载
  vitePluginImp({
    libList: [
      {
        libName: "antd",
        style: (name) => `antd/es/${name}/style`,
      },
    ],
  }),
];
