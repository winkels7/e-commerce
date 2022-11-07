import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./libs/uikit/css/uikit.css";
import "./libs/uikit/js/uikit.js";
import "./libs/uikit/js/uikit-icons.js";

import AOS from 'aos'
import 'aos/dist/aos.css'

import "./assets/main.css";

import "./IndexedDB.js";

const app = createApp(App);

app.use(router);
AOS.init();


app.mount("#app");
