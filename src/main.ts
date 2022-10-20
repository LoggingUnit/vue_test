import { createApp } from "vue";
import { key, store } from "./store";
import App from "./App.vue";

import router from "./router";
import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(store, key);

app.mount("#app");
