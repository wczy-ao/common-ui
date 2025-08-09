import { App } from "vue";
import tsxButton from "./Button/tsxButton";

const exportButton = [tsxButton];

export { tsxButton };

export default {
  install(app: App) {
    exportButton.forEach(comp => {
        app.component(comp.name, comp)
    })
  },
};
