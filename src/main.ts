import { createApp } from "vue";
import App from "./App.vue";
import "./global.less";
import "ant-design-vue/dist/antd.css";
import AntdComponent from "./antd";

const app = createApp(App);

// 插件自动加载
const modules = import.meta.globEager("./modules/**/*.ts");
Object.values(modules).forEach((v) => {
  if (typeof v.default === "function") {
    v.default(app);
  }
});
AntdComponent.forEach((component) => {
  app.component(component.name, component);
});
app.mount("#app");
