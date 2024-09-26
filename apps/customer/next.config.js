//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'customer',
        remotes: {
          message:
            'message@http://localhost:3003/_next/static/chunks/remoteEntry.js',
        },
        exposes: { './CustomerList': './components/CustomerList.tsx' },
        shared: {},
        filename: 'static/chunks/remoteEntry.js',
        extraOptions: {},
      })
    );

    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
