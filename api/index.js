import { createRequestHandler } from "@remix-run/vercel";
import * as build from "../build/index.js"; // path to Remix build

export const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});
