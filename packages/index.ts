import { App } from 'vue';
import CmButton from './Button/Button';

const exportButton = [CmButton];

export { CmButton };

export default {
  install(app: App): void {
    exportButton.forEach((comp) => {
      app.component(comp.name, comp);
    });
  }
};
