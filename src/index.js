import components from "./components/config/index.js";

const LightUIKit = {
  install(app) {
    for (const componentKey in components) {
      app.use(components[componentKey]);
    }
  },
};

export default LightUIKit;
