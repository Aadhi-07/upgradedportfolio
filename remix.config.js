import pkg from '@remix-run/dev';
const { defineConfig } = pkg;

export default defineConfig({
  appDirectory: "app",
  serverBuildTarget: "node-cjs", // build for Node
  server: "./build/index.js",
  ignoredRouteFiles: ["**/.*"],
  future: {
    v2_meta: true,
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true
  }
});
