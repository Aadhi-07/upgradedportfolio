import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";

export default defineConfig({
  base: "/upgradedportfolio/", // Match your repo name
  plugins: [remix()],
});