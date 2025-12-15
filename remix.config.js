import { defineConfig } from '@remix-run/dev';

export default defineConfig({
  appDirectory: "app",
  // use Node target for server build
  serverBuildTarget: "node-cjs",
  server: "./build/index.js",
  ignoredRouteFiles: ["**/.*"],
  future: {
    v2_meta: true,
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true
  }
});
