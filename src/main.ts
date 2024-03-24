import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

// globEager is a function that returns an object with all the modules that match the pattern
// The eager version of the function will load all the modules and run synchronously
const autoImportedModules = import.meta.globEager("./autoImports/*.js");

console.log(autoImportedModules);

createApp(App).mount("#app");
