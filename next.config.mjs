import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
  output: "export",
  basePath: "/landingpage",  // GitHub repo name
  assetPrefix: "/landingpage/",  // Ensures correct asset paths
  images: {
    unoptimized: true,  // GitHub Pages doesn't support Next.js Image Optimization
  },
});

export default nextConfig;
