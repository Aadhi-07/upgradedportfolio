import { s, f, g, j, h, i, e, p, k } from "./assets/server-build-BUqUCazy.js";
import "react/jsx-runtime";
import "@remix-run/react";
import "isbot";
import "react-dom/server";
import "@remix-run/cloudflare";
import "react";
import "framer-motion";
import "@mdx-js/react";
import { createRequestHandler } from "@remix-run/node";

export default createRequestHandler({
  build,
  mode: process.env.NODE_ENV
});
export {
  s as assets,
  f as assetsBuildDirectory,
  g as basename,
  j as entry,
  h as future,
  i as isSpaMode,
  e as mode,
  p as publicPath,
  k as routes
};
