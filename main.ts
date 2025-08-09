import { createApp } from "vue/dist/vue.esm-bundler";
import commonUI from "./packages/index";
createApp({
  template: `<div>
    <tsxButton color="red">默认tsx</tsxButton>
    <tsxButton color="green">默认tsx</tsxButton>
    <tsxButton color="gray" round plain icon="check" ></tsxButton>
    <tsxButton color="yellow" round plain icon="message" ></tsxButton>
    <tsxButton color="red" round plain icon="delete" ></tsxButton>
  </div>`,
})
  .use(commonUI)
  .mount("#app");
