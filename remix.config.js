export default {
  appDirectory: "app",
  serverBuildTarget: "node-cjs",   // build for Node, not Cloudflare
  server: "./build/index.js",
  ignoredRouteFiles: ["**/.*"],
  future: {
    v2_meta: true,
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true
  }
};
