// eslint-disable-next-line @typescript-eslint/no-var-requires
const sharedConfig = require('../../shared/eslint-shared-config');

const config = sharedConfig(__dirname);

module.exports = {
  ...config,
  settings: {
    ...config.settings,
    'import/core-modules': ['app/App'],
  },
};
