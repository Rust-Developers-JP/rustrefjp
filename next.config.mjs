import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import("next").NextConfig} */
const config = {
  serverExternalPackages: ["typescript", "twoslash"],
  output: "export",
  assetPrefix: "./",
  trailingSlash: true,
  reactStrictMode: true,
  basePath: process.env.BASE_PATH,
};

export default withMDX(config);
