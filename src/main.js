import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./libs/uikit/css/uikit.css";
import "./libs/uikit/js/uikit.js";
import "./libs/uikit/js/uikit-icons.js";

import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
