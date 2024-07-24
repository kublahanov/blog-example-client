import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import axiosPlugin from "./plugins/axiosPlugin.js";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(router).use(ElementPlus).use(axiosPlugin).mount("#app");
