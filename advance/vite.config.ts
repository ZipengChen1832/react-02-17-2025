/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ["./src/vitest.setup.ts"],
    environment: "jsdom",
  },
});

// build tools:
// vite, webpack, rollup, parcel
