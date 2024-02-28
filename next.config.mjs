/** @type {import('next').NextConfig} */
const nextConfig = {
};

export default nextConfig;

module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.module.rules.push({
          test: /\.css$/,
          use: ['style-loader', 'postcss-loader'],
        });
      }
      return config;
    },
  };