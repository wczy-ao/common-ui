/// <reference types="vitest" />
import vuejsx from "@vitejs/plugin-vue-jsx";
import vue from "@vitejs/plugin-vue";
import Unocss from "./config/unocss";
import { defineConfig } from "vite";

const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};
export default defineConfig({
  plugins: [vue(), vuejsx(), Unocss()],
  test: {
    environment: "happy-dom",
    globals: true,
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  build: {
    cssCodeSplit: true,
    rollupOptions,
    minify: false,
    lib: {
      entry: "./packages/index.ts",
      name: "CommonUi",
      fileName: "index",
      formats: ["es","iife"],
    },
  },
});
