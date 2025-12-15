export default {
  appDirectory: "app",
  ignoredRouteFiles: ["**/.*"],
  serverBuildTarget: "node-cjs", // build for Node
  server: "./build/index.js",     // Remix will output here
};
