import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "@vueuse/core",
        "@vueuse/math",
        "@vueuse/head",
        "pinia",
        "vee-validate",
        "vitest",
      ],
      dirs: ["./src/stores/**"],
      dts: "./src/auto-imports.d.ts",
      eslintrc: {
        enabled: true,
        globalsPropValue: true,
      },
    }),
    Components({
      dts: "./src/components.d.ts",
      directoryAsNamespace: true,
      deep: true,
      extensions: ["vue"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
