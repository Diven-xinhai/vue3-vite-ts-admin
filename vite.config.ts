/*
 * @Date: 2022-04-08 16:39:36
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-05 17:33:41
 * @FilePath: \vue3-vite-ts-admin\vite.config.ts
 */
import { UserConfigExport, ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { join, resolve } from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      // 引入 svg
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), "src/assets/icons/svg")],
        symbolId: "icon-[dir]-[name]",
        inject: "body-last", //body-last|body-first默认body-last
        customDomId: "__svg__icons__dom__", //默认__svg__icons__dom__
      }),
      VueSetupExtend(),
      viteMockServe({
        supportTs: true,
        logger: false,
        localEnabled: command === "serve",
        mockPath: "./src/mock/",
      }),
    ],
    server: {
      host: "0.0.0.0",
    },
    resolve: {
      // 配置路径别名
      alias: {
        "@": join(__dirname, "src"),
      },
    },
    css: {
      // postcss: {
      //   plugins: [
      //     {
      //       postcssPlugin: "internal:charset-removal",
      //       AtRule: {
      //         // 去除elementPlus内部charset警告
      //         charset: (atRule) => {
      //           if (atRule.name === "charset") {
      //             atRule.remove();
      //           }
      //         },
      //       },
      //     },
      //   ],
      // },
      // preprocessorOptions: {
      //   scss: {
      //     charset: false,
      //     additionalData: '@import "@/assets/styles/index.scss";',
      //   },
      // },
    },
  };
};
