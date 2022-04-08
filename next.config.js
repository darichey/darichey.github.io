const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: "custom",
  },
});
