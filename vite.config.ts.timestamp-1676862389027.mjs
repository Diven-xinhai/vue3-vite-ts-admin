// vite.config.ts
import vue from "file:///E:/lipenghui/test/vue3-vite-ts-admin/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///E:/lipenghui/test/vue3-vite-ts-admin/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { join, resolve } from "path";
import { createSvgIconsPlugin } from "file:///E:/lipenghui/test/vue3-vite-ts-admin/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import VueSetupExtend from "file:///E:/lipenghui/test/vue3-vite-ts-admin/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import AutoImport from "file:///E:/lipenghui/test/vue3-vite-ts-admin/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///E:/lipenghui/test/vue3-vite-ts-admin/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///E:/lipenghui/test/vue3-vite-ts-admin/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var __vite_injected_original_dirname = "E:\\lipenghui\\test\\vue3-vite-ts-admin";
var vite_config_default = ({ command }) => {
  return {
    base: "/",
    plugins: [
      vue(),
      vueJsx(),
      // 引入 svg
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), "src/assets/icons/svg")],
        symbolId: "icon-[dir]-[name]",
        inject: "body-last",
        //body-last|body-first默认body-last
        customDomId: "__svg__icons__dom__"
        //默认__svg__icons__dom__
      }),
      VueSetupExtend(),
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            // 自动引入修改主题色添加这一行，使用预处理样式，不添加将会导致使用ElMessage，ElNotification等组件时默认的主题色会覆盖自定义的主题色
            importStyle: "sass"
          })
        ]
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            // 自动引入修改主题色添加这一行，使用预处理样式
            importStyle: "sass"
          })
        ]
      })
    ],
    server: {
      host: "0.0.0.0"
    },
    resolve: {
      // 配置路径别名
      alias: {
        "@": join(__vite_injected_original_dirname, "src")
      }
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
      preprocessorOptions: {
        scss: {
          charset: false,
          additionalData: `@use "@/assets/styles/element.scss" as *;`
          // additionalData: '@import "@/assets/styles/index.scss";',
        }
      }
    }
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxsaXBlbmdodWlcXFxcdGVzdFxcXFx2dWUzLXZpdGUtdHMtYWRtaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGxpcGVuZ2h1aVxcXFx0ZXN0XFxcXHZ1ZTMtdml0ZS10cy1hZG1pblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovbGlwZW5naHVpL3Rlc3QvdnVlMy12aXRlLXRzLWFkbWluL3ZpdGUuY29uZmlnLnRzXCI7LypcbiAqIEBEYXRlOiAyMDIyLTA0LTA4IDE2OjM5OjM2XG4gKiBATGFzdEVkaXRvcnM6IFllS2VcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjMtMDEtMzAgMTY6NDI6MTVcbiAqIEBGaWxlUGF0aDogXFx2dWUzLXZpdGUtdHMtYWRtaW5cXHZpdGUuY29uZmlnLnRzXG4gKi9cbmltcG9ydCB7IFVzZXJDb25maWdFeHBvcnQsIENvbmZpZ0VudiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCB2dWVKc3ggZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIjtcbmltcG9ydCB7IGpvaW4sIHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCI7XG5pbXBvcnQgVnVlU2V0dXBFeHRlbmQgZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1zZXR1cC1leHRlbmRcIjtcbi8vIGVsZW1lbnQgXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCAoeyBjb21tYW5kIH06IENvbmZpZ0Vudik6IFVzZXJDb25maWdFeHBvcnQgPT4ge1xuICByZXR1cm4ge1xuICAgIGJhc2U6IFwiL1wiLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHZ1ZSgpLFxuICAgICAgdnVlSnN4KCksXG4gICAgICAvLyBcdTVGMTVcdTUxNjUgc3ZnXG4gICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICAgIGljb25EaXJzOiBbcmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBcInNyYy9hc3NldHMvaWNvbnMvc3ZnXCIpXSxcbiAgICAgICAgc3ltYm9sSWQ6IFwiaWNvbi1bZGlyXS1bbmFtZV1cIixcbiAgICAgICAgaW5qZWN0OiBcImJvZHktbGFzdFwiLCAvL2JvZHktbGFzdHxib2R5LWZpcnN0XHU5RUQ4XHU4QkE0Ym9keS1sYXN0XG4gICAgICAgIGN1c3RvbURvbUlkOiBcIl9fc3ZnX19pY29uc19fZG9tX19cIiwgLy9cdTlFRDhcdThCQTRfX3N2Z19faWNvbnNfX2RvbV9fXG4gICAgICB9KSxcbiAgICAgIFZ1ZVNldHVwRXh0ZW5kKCksXG4gICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcih7XG4gICAgICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTVGMTVcdTUxNjVcdTRGRUVcdTY1MzlcdTRFM0JcdTk4OThcdTgyNzJcdTZERkJcdTUyQTBcdThGRDlcdTRFMDBcdTg4NENcdUZGMENcdTRGN0ZcdTc1MjhcdTk4ODRcdTU5MDRcdTc0MDZcdTY4MzdcdTVGMEZcdUZGMENcdTRFMERcdTZERkJcdTUyQTBcdTVDMDZcdTRGMUFcdTVCRkNcdTgxRjRcdTRGN0ZcdTc1MjhFbE1lc3NhZ2VcdUZGMENFbE5vdGlmaWNhdGlvblx1N0I0OVx1N0VDNFx1NEVGNlx1NjVGNlx1OUVEOFx1OEJBNFx1NzY4NFx1NEUzQlx1OTg5OFx1ODI3Mlx1NEYxQVx1ODk4Nlx1NzZENlx1ODFFQVx1NUI5QVx1NEU0OVx1NzY4NFx1NEUzQlx1OTg5OFx1ODI3MlxuICAgICAgICAgICAgaW1wb3J0U3R5bGU6IFwic2Fzc1wiLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICBDb21wb25lbnRzKHtcbiAgICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcih7XG4gICAgICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTVGMTVcdTUxNjVcdTRGRUVcdTY1MzlcdTRFM0JcdTk4OThcdTgyNzJcdTZERkJcdTUyQTBcdThGRDlcdTRFMDBcdTg4NENcdUZGMENcdTRGN0ZcdTc1MjhcdTk4ODRcdTU5MDRcdTc0MDZcdTY4MzdcdTVGMEZcbiAgICAgICAgICAgIGltcG9ydFN0eWxlOiBcInNhc3NcIixcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgc2VydmVyOiB7XG4gICAgICBob3N0OiBcIjAuMC4wLjBcIixcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgIC8vIFx1OTE0RFx1N0Y2RVx1OERFRlx1NUY4NFx1NTIyQlx1NTQwRFxuICAgICAgYWxpYXM6IHtcbiAgICAgICAgXCJAXCI6IGpvaW4oX19kaXJuYW1lLCBcInNyY1wiKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgIC8vIHBvc3Rjc3M6IHtcbiAgICAgIC8vICAgcGx1Z2luczogW1xuICAgICAgLy8gICAgIHtcbiAgICAgIC8vICAgICAgIHBvc3Rjc3NQbHVnaW46IFwiaW50ZXJuYWw6Y2hhcnNldC1yZW1vdmFsXCIsXG4gICAgICAvLyAgICAgICBBdFJ1bGU6IHtcbiAgICAgIC8vICAgICAgICAgLy8gXHU1M0JCXHU5NjY0ZWxlbWVudFBsdXNcdTUxODVcdTkwRThjaGFyc2V0XHU4QjY2XHU1NDRBXG4gICAgICAvLyAgICAgICAgIGNoYXJzZXQ6IChhdFJ1bGUpID0+IHtcbiAgICAgIC8vICAgICAgICAgICBpZiAoYXRSdWxlLm5hbWUgPT09IFwiY2hhcnNldFwiKSB7XG4gICAgICAvLyAgICAgICAgICAgICBhdFJ1bGUucmVtb3ZlKCk7XG4gICAgICAvLyAgICAgICAgICAgfVxuICAgICAgLy8gICAgICAgICB9LFxuICAgICAgLy8gICAgICAgfSxcbiAgICAgIC8vICAgICB9LFxuICAgICAgLy8gICBdLFxuICAgICAgLy8gfSxcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgc2Nzczoge1xuICAgICAgICAgIGNoYXJzZXQ6IGZhbHNlLFxuICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQHVzZSBcIkAvYXNzZXRzL3N0eWxlcy9lbGVtZW50LnNjc3NcIiBhcyAqO2AsXG4gICAgICAgICAgLy8gYWRkaXRpb25hbERhdGE6ICdAaW1wb3J0IFwiQC9hc3NldHMvc3R5bGVzL2luZGV4LnNjc3NcIjsnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFPQSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLFNBQVMsTUFBTSxlQUFlO0FBQzlCLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sb0JBQW9CO0FBRTNCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBZnBDLElBQU0sbUNBQW1DO0FBa0J6QyxJQUFPLHNCQUFRLENBQUMsRUFBRSxRQUFRLE1BQW1DO0FBQzNELFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQTtBQUFBLE1BRVAscUJBQXFCO0FBQUEsUUFDbkIsVUFBVSxDQUFDLFFBQVEsUUFBUSxJQUFJLEdBQUcsc0JBQXNCLENBQUM7QUFBQSxRQUN6RCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUE7QUFBQSxRQUNSLGFBQWE7QUFBQTtBQUFBLE1BQ2YsQ0FBQztBQUFBLE1BQ0QsZUFBZTtBQUFBLE1BQ2YsV0FBVztBQUFBLFFBQ1QsV0FBVztBQUFBLFVBQ1Qsb0JBQW9CO0FBQUE7QUFBQSxZQUVsQixhQUFhO0FBQUEsVUFDZixDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0YsQ0FBQztBQUFBLE1BQ0QsV0FBVztBQUFBLFFBQ1QsV0FBVztBQUFBLFVBQ1Qsb0JBQW9CO0FBQUE7QUFBQSxZQUVsQixhQUFhO0FBQUEsVUFDZixDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxTQUFTO0FBQUE7QUFBQSxNQUVQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxrQ0FBVyxLQUFLO0FBQUEsTUFDNUI7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFnQkgscUJBQXFCO0FBQUEsUUFDbkIsTUFBTTtBQUFBLFVBQ0osU0FBUztBQUFBLFVBQ1QsZ0JBQWdCO0FBQUE7QUFBQSxRQUVsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
