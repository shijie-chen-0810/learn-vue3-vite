import { createApp } from "vue";
import router from "@/modules/router";
import store from "@/modules/pinia";
import NProgress from "nprogress";
import App from "./App.vue";
import "@/modules/request";
import "./global.less";

const app = createApp(App);

router.beforeEach(() => {
  NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});

app.use(router).use(store).mount("#app");
