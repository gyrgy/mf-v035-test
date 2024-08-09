/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
require('dotenv').config();
const { defineConfig } = require('@rspack/cli');
const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/rspack');
const deps = require('./package.json').dependencies;

// eslint-disable-next-line import/no-dynamic-require
const sharedConfig = require(
  path.resolve(__dirname, '../../shared/rspack.shared.config'),
);

module.exports = () => {
  const commonConfig = sharedConfig(__dirname, process.env.REACT_APP_DEV_PORT);

  const config = defineConfig({
    ...commonConfig,
    output: {
      ...commonConfig.output,
      publicPath: `${process.env.REACT_APP_SHELL_REMOTE_URL}/`,
    },
    plugins: [
      ...commonConfig.plugins,
      new ModuleFederationPlugin({
        name: 'shell',
        filename: 'remoteEntryShell.js',
        exposes: {
          './ShellProvider': './src/providers/ShellProvider',
        },
        remotes: {
          app: `app@${process.env.REACT_APP_APP_REMOTE_URL}/remoteEntryApp.js`,
        },
        dts: {
          generateTypes: false,
        },
        shared: {
          './src/providers/ShellProvider': {},
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
        },
      }),
    ],
  });

  return config;
};
