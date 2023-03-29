import { viteMockServe } from "vite-plugin-mock";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import OptimizationPersist from "vite-plugin-optimize-persist";
import PkgConfig from "vite-plugin-package-config";
import viteCompression from "vite-plugin-compression";
import {
  DirResolverHelper,
  AutoGenerateImports,
} from "vite-auto-import-resolvers";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default [
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

    resolvers: [ElementPlusResolver()],
  }),
  // 将包信息文件作为 vite 的配置文件之一，为 vite-plugin-optimize-persist 所用
  PkgConfig(),
  // 依赖预构建分析，提高大型项目性能
  OptimizationPersist(),
  // 生产环境资源压缩
  viteCompression(),
  // antd-vue 按需加载
  Components({
    resolvers: [ElementPlusResolver()],
  }),
  // vitePluginImp({
  //   libList: [
  //     {
  //       libName: "antd",
  //       style: (name) => `antd/lib/${name}/style`,
  //     },
  //   ],
  // }),
];
