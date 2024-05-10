import posstcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import node from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import vue from "rollup-plugin-vue";

const BASE_PATH = "./src/components",
  BUILD_PATH = "plugins";

const vuePluginConfig = {
  template: {
    isProduction: true,
    compilerOptions: {
      whitespace: "condense",
    },
  },
};

const babelOptions = {
  babelHelpers: "bundled",
};

export default [
  {
    input: BASE_PATH + "/button/BaseButton.js",
    output: [
      {
        file: BUILD_PATH + "/button/BaseButton.cjs",
        format: "cjs",
      },
      {
        file: BUILD_PATH + "/button/index.js",
        format: "esm",
      },
    ],
    external: ["vue"],
    plugins: [
      node({
        extensions: [".vue"],
      }),
      vue(vuePluginConfig),
      babel(babelOptions),
      commonjs(),
      posstcss(),
    ],
  },
];
