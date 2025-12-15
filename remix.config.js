export default {
  appDirectory: "app",
  ignoredRouteFiles: ["**/.*"],
  serverBuildTarget: "node-cjs", // build for Node
  server: "./build/server/index.js",     // Remix will output here
};
