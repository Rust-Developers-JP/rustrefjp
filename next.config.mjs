import { createMDX } from "fumadocs-mdx/next";

const basePath = process.env.BASE_PATH;
const withMDX = createMDX();

/** @type {import("next").NextConfig} */
const config = {
  serverExternalPackages: ["typescript", "twoslash"],
  output: "export",
  assetPrefix: "./",
  trailingSlash: true,
  reactStrictMode: true,
  basePath,
};

export default withMDX(config);
