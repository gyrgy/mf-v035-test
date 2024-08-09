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
      publicPath: `${process.env.REACT_APP_APP_REMOTE_URL}/`,
    },
    plugins: [
      ...commonConfig.plugins,
      new ModuleFederationPlugin({
        name: 'app',
        exposes: {
          './App': './src/App',
        },
        filename: 'remoteEntryApp.js',
        remotes: {
          shell: `shell@${process.env.REACT_APP_SHELL_REMOTE_URL}/remoteEntryShell.js`,
        },
        dts: {
          generateTypes: false,
        },
        shared: {
          './src/App': {},
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
          'react-router-dom': {
            singleton: true,
            requiredVersion: deps['react-router-dom'],
          },
        },
      }),
    ],
  });

  return config;
};
