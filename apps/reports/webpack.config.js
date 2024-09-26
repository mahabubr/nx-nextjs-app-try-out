const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'reports',
        remotes: {
          customer:
            'customer@http://localhost:3002/_next/static/chunks/remoteEntry.js',
          message:
            'message@http://localhost:3003/_next/static/chunks/remoteEntry.js',
        },
        exposes: {},
        filename: 'static/chunks/remoteEntry.js',
      })
    );

    return config;
  },
};
