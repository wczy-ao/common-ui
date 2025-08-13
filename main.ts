import { createApp } from "vue/dist/vue.esm-bundler";
import commonUI from "./packages/index";
createApp({
  template: `<div>
    <cm-button color="red">默认tsx</cm-button>
    <cm-button color="green">默认tsx</cm-button>
    <cm-button color="gray" round plain icon="check" ></cm-button>
    <cm-button color="yellow" round plain icon="message" ></cm-button>
    <cm-button color="red" round plain icon="delete" ></cm-button>
  </div>`,
})
  .use(commonUI)
  .mount("#app");
